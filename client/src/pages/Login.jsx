import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login, reset } from "../features/auth/authSlice.js"

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

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
    console.log(formData)
    const userData = { email, password }
    dispatch(login(userData))
  }

  if (isLoading) return <div>Loading</div>
  return (
    <>
      <h1>Login</h1>
      <p>Please enter your email and password to login</p>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </>
  )
}
