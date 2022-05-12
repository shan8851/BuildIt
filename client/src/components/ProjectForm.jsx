import { useState } from "react"
import { useDispatch } from "react-redux"
import { createProject } from "../features/userProjects/userProjectSlice"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Flex,
  IconButton,
  useToast,
} from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa"

export const ProjectForm = ({ isOpen, onClose }) => {
  const [storyValue, setStoryValue] = useState("")
  const [exampleValue, setExampleValue] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stories: [],
    examples: [],
  })

  const { title, description, stories, examples } = formData

  const dispatch = useDispatch()
  const toast = useToast()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createProject(formData))
    setFormData({
      title: "",
      description: "",
      stories: [],
      examples: [],
    })
    onClose()
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleAddStory = () => {
    stories.push(storyValue)
    toast({
      title: "User story added.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
      variant: "left-accent",
    })
    setStoryValue("")
  }

  const handleAddExample = () => {
    examples.push(exampleValue)
    toast({
      title: "Example added.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
      variant: "left-accent",
    })
    setExampleValue("")
  }

  return (
    <Modal size="full" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.800" color="gray.100">
        <ModalHeader>Add a project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={onSubmit}>
            <FormControl isRequired my={4}>
              <FormLabel htmlFor="title">Project Title</FormLabel>
              <Input
                id="title"
                type="text"
                name="title"
                value={title}
                placeholder="Please enter a title"
                onChange={onChange}
              />
              <FormHelperText>
                Try and give a nice and descriptive title.
              </FormHelperText>
            </FormControl>
            <FormControl isRequired my={4}>
              <FormLabel htmlFor="title">Project Description</FormLabel>
              <Textarea
                id="description"
                type="text"
                value={description}
                name="description"
                placeholder="Please enter a description"
                onChange={onChange}
                size="lg"
                resize="vertical"
              />
              <FormHelperText>
                Again the more details the better. Describe the goal of the
                project here.
              </FormHelperText>
            </FormControl>
            <Flex alignItems="center">
              <FormControl w="80%" flex={1} my={4}>
                <FormLabel htmlFor="story">Add a user story</FormLabel>
                <Input
                  id="story"
                  type="text"
                  name="story"
                  value={storyValue}
                  placeholder="Please enter a description"
                  onChange={(e) => setStoryValue(e.target.value)}
                  size="sm"
                  resize="vertical"
                />
                <FormHelperText>Add user stories one at a time</FormHelperText>
              </FormControl>
              <IconButton
                colorScheme="pink"
                aria-label="Add Story"
                onClick={() => handleAddStory()}
                icon={<FaPlus />}
                ml={4}
              />
            </Flex>

            <Flex justifyContent="space-between" alignItems="center">
              <FormControl flex={1} my={4}>
                <FormLabel htmlFor="example">Add an example</FormLabel>
                <Input
                  id="example"
                  type="text"
                  value={exampleValue}
                  placeholder="Please enter a description"
                  onChange={(e) => setExampleValue(e.target.value)}
                  size="sm"
                  resize="vertical"
                />
                <FormHelperText>
                  Add example links to similar projects one at a time
                </FormHelperText>
              </FormControl>

              <IconButton
                colorScheme="pink"
                onClick={() => handleAddExample()}
                aria-label="Add Example"
                icon={<FaPlus />}
                ml={4}
              />
            </Flex>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} variant="outline" colorScheme="pink">
            Cancel
          </Button>
          <Button colorScheme="pink" ml={3} onClick={onSubmit}>
            Create Project
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
