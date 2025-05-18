import mongoose from "mongoose";

// Define the Task schema
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    priority: { type: String, enum: ["Low", "Medium", "High"] },
    dueDate: Date,
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    checklist: [String],
    attachments: [String],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
