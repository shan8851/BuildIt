import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register, reset } from "../features/auth/authSlice.js"

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
      // add toast
    }

    if (isSuccess || user) {
      navigate("/")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      console.log("passwords do not match")
      // Add toast
    }
    const userData = { name, email, password }
    dispatch(register(userData))
  }

  if (isLoading) return <div>Loading</div>
  return (
    <>
      <h1>Register</h1>
      <p>
        Please create an account, this allows you to submit projects and manage
        any projects you have created.
      </p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter your name..."
          onChange={onChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email..."
          onChange={onChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Enter your password..."
          onChange={onChange}
        />
        <input
          type="password"
          id="password2"
          name="password2"
          value={password2}
          placeholder="Enter your repeat your password..."
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
