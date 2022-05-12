import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { ProjectForm } from "../components/ProjectForm"
import {
  getUserProjects,
  reset,
  deleteProject,
} from "../features/userProjects/userProjectSlice"
import { Layout } from "../components/Layout"
import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
  Badge,
  Container,
} from "@chakra-ui/react"

export const MyProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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

  if (isLoading) return <Spinner />

  return (
    <Layout>
      <Center my={"40px"}>
        <Flex direction="column" alignItems="center">
          <Text fontWeight="black" fontSize={["2xl", "6xl"]} textAlign="center">
            👋 {user && user.name}
          </Text>
          <Text fontSize={["sm", "md", "xl"]} textAlign="center">
            Got a cool project idea you would like to share? Sign up and submit
            your own.
          </Text>
        </Flex>
      </Center>

      <Flex justifyContent="center">
        {userProjects.length > 0 &&
          userProjects.map((project) => (
            <Flex justifyContent="center">
              <Container
                key={project._id}
                p={4}
                my={4}
                border="1px"
                rounded="lg"
              >
                <Badge colorScheme="pink">Title:</Badge>
                <Text my={2}> {project.title}</Text>
                <Badge colorScheme="pink">Description:</Badge>
                <Text my={2}> {project.description}</Text>
                <Button
                  px={2}
                  isFullWidth
                  size="sm"
                  colorScheme="pink"
                  onClick={() => dispatch(deleteProject(project._id))}
                >
                  Delete
                </Button>
              </Container>
            </Flex>
          ))}
      </Flex>
      {userProjects.length < 1 && (
        <Flex alignItems="center" direction="column">
          <Text
            fontSize={["sm", "md", "xl"]}
            textAlign="center"
            fontWeight="bold"
          >
            You have not created any projects yet
          </Text>
          <Button colorScheme="pink" onClick={onOpen} mt={4} fontSize="2xl">
            Add a project
          </Button>
        </Flex>
      )}

      <ProjectForm onClose={onClose} isOpen={isOpen} />
    </Layout>
  )
}
