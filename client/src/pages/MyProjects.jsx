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
  Text,
  useDisclosure,
  Spinner,
  Badge,
  Container,
  useToast,
} from "@chakra-ui/react"
import { FiPlusCircle } from "react-icons/fi"

export const MyProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()

  const { user } = useSelector((state) => state.auth)
  const { userProjects, isLoading, isError, message } = useSelector(
    (state) => state.userProjects
  )

  const onDelete = (id) => {
    dispatch(deleteProject(id))
    toast({
      title: "Project deleted",
      description: "We're sorry to see it go 😞",
      status: "success",
      duration: 9000,
      isClosable: true,
      variant: "left-accent",
      position: "top",
    })
  }

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
          <Container centerContent>
            {" "}
            <Text fontSize={["sm", "md", "xl"]} textAlign="center">
              Thanks for sharing your project ideas with BuildIt{" "}
              {user && user.name.split(" ")[0]}. At the moment you can add or
              delete more here. Edit functionality is coming soon.
            </Text>
          </Container>
        </Flex>
      </Center>

      {userProjects.length > 0 &&
        userProjects.map((project) => (
          <Flex justifyContent="center">
            <Container
              key={project._id}
              p={4}
              my={4}
              border="1px"
              rounded="lg"
              w="full"
            >
              <Badge colorScheme="green">Title:</Badge>
              <Text fontSize="2xl" fontWeight="extrabold" my={2}>
                {" "}
                {project.title}
              </Text>
              <Badge colorScheme="green">Description:</Badge>
              <Text my={2}> {project.description}</Text>
              <Flex justifyContent="space-between">
                <Button
                  isDisabled={true}
                  px={2}
                  size="sm"
                  colorScheme="green"
                  w="48%"
                  onClick={() => console.log("edit")}
                >
                  Edit
                </Button>
                <Button
                  px={2}
                  size="sm"
                  colorScheme="green"
                  w="48%"
                  onClick={() => onDelete(project._id)}
                >
                  Delete
                </Button>
              </Flex>
            </Container>
          </Flex>
        ))}

      <Flex justifyContent="center" direction="column" alignItems="center">
        {" "}
        <Button
          leftIcon={<FiPlusCircle />}
          colorScheme="green"
          onClick={onOpen}
          mt={4}
        >
          Add a project
        </Button>
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
          <Button
            leftIcon={<FiPlusCircle />}
            colorScheme="green"
            onClick={onOpen}
            mt={4}
          >
            Add a project
          </Button>
        </Flex>
      )}

      <ProjectForm onClose={onClose} isOpen={isOpen} />
    </Layout>
  )
}
