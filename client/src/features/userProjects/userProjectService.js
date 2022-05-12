import axios from "axios"

const API_URL = "/api/projects/"

// Create new project
const createProject = async (projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, projectData, config)

  return response.data
}

// Get all projects from user
const getProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + "my-projects", config)

  return response.data
}

// Delete user project
const deleteProject = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + projectId, config)

  return response.data
}

const userProjectService = { createProject, getProjects, deleteProject }

export default userProjectService
