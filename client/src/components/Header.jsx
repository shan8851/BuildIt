import { Link as RouterLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { FaSignOutAlt } from "react-icons/fa"
import { Button, Flex, Heading, Link } from "@chakra-ui/react"

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <header>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={[5, 10]}
        py={[2, 5]}
      >
        <Link as={RouterLink} to="/">
          <Heading fontSize={["sm", "lg", "2xl"]}>👷 BuildIt 🛠️</Heading>
        </Link>
        <Flex alignItems="center">
          {user ? (
            <>
              {" "}
              <Link as={RouterLink} to="/my-projects">
                My Projects
              </Link>
              <Button
                leftIcon={<FaSignOutAlt />}
                colorScheme="pink"
                variant="solid"
                onClick={onLogout}
                ml={4}
                size="sm"
              >
                logout
              </Button>
            </>
          ) : (
            <>
              <Link as={RouterLink} to="/login">
                Login
              </Link>

              <Link ml={2} alignItems="center" as={RouterLink} to="/register">
                Register
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </header>
  )
}
