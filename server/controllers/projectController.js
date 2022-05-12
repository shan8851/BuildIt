const asyncHandler = require("express-async-handler");
// @desc Get all projects
// @route GET /api/projects
// @access Private
const getProjects = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get projects" });
});

// @desc Create a project
// @route POST /api/projects
// @access Private
const createProject = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400);
    throw new Error("Please add a title and description");
  }
  res.status(200).json({
    message: `Successfully created project with title: ${req.body.title}`,
  });
});

// @desc Update a project
// @route PUT /api/projects/:id
// @access Private
const updateProject = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update project with ${req.params.id}` });
});

// @desc Delete a project
// @route PUT /api/projects/:id
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete project with ${req.params.id}` });
});

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
