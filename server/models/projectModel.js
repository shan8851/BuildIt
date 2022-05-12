const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    stories: [String],
    examples: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Projects", projectSchema);
