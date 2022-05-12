const express = require("express");
const router = express.Router();
const {
  getProjects,
  getUserProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getProjects).post(protect, createProject);
router.route("/:id").delete(protect, deleteProject).put(protect, updateProject);
router.get("/my-projects", protect, getUserProjects);

module.exports = router;
