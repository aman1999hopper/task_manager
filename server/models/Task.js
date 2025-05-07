import mongoose from "mongoose";

const assigneeSchema = new mongoose.Schema({
  name: String,
  avatar: String,
});

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  completedTasks: Number,
  totalTasks: Number,
  startDate: Date,
  dueDate: Date,
  assignees: [assigneeSchema],
});

export default mongoose.model("Task", taskSchema);
