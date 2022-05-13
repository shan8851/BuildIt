import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login, reset } from "../features/auth/authSlice.js"
import { Layout } from "../components/Layout"

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
      navigate("/my-projects")
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
    <Layout>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
        maxW="800px"
        mx="auto"
      >
        <Heading size="2xl">Login</Heading>
        <Text textAlign="center" fontSize="lg" mt={5}>
          Please enter your email and password to login
        </Text>
        <form onSubmit={onSubmit}>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email..."
            onChange={onChange}
            my={2}
          />
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password..."
            onChange={onChange}
            my={2}
          />
          <Button isFullWidth colorScheme="green" type="submit">
            Go!
          </Button>
        </form>
      </Flex>
    </Layout>
  )
}
