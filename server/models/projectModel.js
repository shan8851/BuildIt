const mongoose = require("mongoose")

const projectSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    difficulty: {
      type: String,
      required: [
        true,
        'Must be one of "beginner", "intermediate" or "advanced"',
      ],
      enum: ["beginner", "intermediate", "advanced"],
    },
    stories: [String],
    examples: [String],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Projects", projectSchema)
