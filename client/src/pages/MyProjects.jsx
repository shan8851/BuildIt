import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { ProjectForm } from "../components/ProjectForm"
import {
  getUserProjects,
  reset,
  deleteProject,
} from "../features/userProjects/userProjectSlice"

export const MyProjects = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { userProjects, isLoading, isError, message } = useSelector(
    (state) => state.userProjects
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate("/login")
    }
    dispatch(getUserProjects())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <h1>Welcome {user && user.name}</h1>
      <p>Manage your projects</p>
      <ProjectForm />
      <div>
        {userProjects.length > 0 ? (
          <div>
            {userProjects.map((project) => (
              <div key={project._id}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <button onClick={() => dispatch(deleteProject(project._id))}>
                  delete - add toast
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h3>You have not created any projects yet</h3>
        )}
      </div>
    </>
  )
}
