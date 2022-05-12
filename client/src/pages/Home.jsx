import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Spinner,
  Link,
  Text,
} from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProjects, reset } from "../features/projects/projectSlice"

export const Home = () => {
  const dispatch = useDispatch()
  const { projects, isLoading, isError, message } = useSelector(
    (state) => state.projects
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    dispatch(getProjects())
    return () => {
      dispatch(reset())
    }
  }, [dispatch, isError, message])

  if (isLoading) return <Spinner />
  return (
    <Layout>
      <Center mb="20px">
        <Text fontWeight="black" fontSize={["2xl", "6xl"]}>
          Welcome to
        </Text>{" "}
        <Text
          fontWeight="black"
          fontSize={["2xl", "6xl"]}
          color="pink.400"
          as="u"
          ml={2}
        >
          BuildIt
        </Text>
      </Center>
      <Flex justifyContent="center">
        <Container mb="20px">
          <Text fontSize={["sm", "md", "xl"]} textAlign="center">
            We're all about making it easier for developers to level up their
            skills and build out a portfolio. That's why we created Build it - a
            website full of project ideas for developers to get started on.
          </Text>
        </Container>
      </Flex>
      <Flex justifyContent="center">
        <Container mb="20px">
          <Text fontSize={["sm", "md", "xl"]} textAlign="center">
            Got a cool project idea you would like to share? Sign up and submit
            your own.
          </Text>
        </Container>
      </Flex>
      <Flex justifyContent="center" mb="20px">
        <Button colorScheme="pink">Register</Button>
      </Flex>
      <Text fontWeight="black" fontSize={["2xl", "6xl"]} textAlign="center">
        👷 Projects
      </Text>

      {projects.map((project) => (
        <Flex justifyContent="center">
          <Container key={project._id} p={4} my={4} border="1px" rounded="lg">
            <Badge colorScheme="pink">Title:</Badge>
            <Text my={2}> {project.title}</Text>
            <Badge colorScheme="pink">Description:</Badge>
            <Text my={2}> {project.description}</Text>
            {project.stories.length > 0 && (
              <>
                <Badge colorScheme="pink">User Stories:</Badge>
                {project.stories.map((story) => (
                  <Text my={2} key={story}>
                    🔨 {story}
                  </Text>
                ))}
              </>
            )}
            {project.examples.length > 0 && (
              <Flex direction="column">
                <Badge colorScheme="pink" w="fit-content">
                  Examples:
                </Badge>
                {project.examples.map((example) => (
                  <Link
                    colorScheme="pink"
                    my={2}
                    key={example}
                    href={example}
                    isExternal
                  >
                    🔨 {example}
                  </Link>
                ))}
              </Flex>
            )}
          </Container>
        </Flex>
      ))}
    </Layout>
  )
}
