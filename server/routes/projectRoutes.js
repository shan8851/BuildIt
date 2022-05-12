const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

router.route("/").get(getProjects).post(createProject);
router.route("/:id").delete(deleteProject).put(updateProject);

module.exports = router;
