import Task from "../models/Task.js";
import mongoose from "mongoose";

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Seed tasks (for testing)
export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      status,
      dueDate,
      assignedTo,
      checklist,
      attachments,
    } = req.body;

    const task = new Task({
      title,
      description,
      priority,
      status,
      dueDate,
      assignedTo,
      checklist,
      attachments,
      createdBy: req.user,
    });

    await task.save();
    res.status(201).json({ message: "Task created", task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a task

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid task id" });
    }

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Optional: ownership check
    if (
      req.user?.userId &&
      task.userId.toString() !== req.user.userId &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Hard delete:
    await Task.findByIdAndDelete(id);
    // OR soft-delete:
    // await Task.findByIdAndUpdate(id, { deleted: true, deletedAt: new Date() });

    return res.status(200).json({ message: "Task deleted", id });
  } catch (err) {
    console.error("Delete task error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getTaskStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const total = await Task.countDocuments({ createdBy: userId });
    const pending = await Task.countDocuments({
      createdBy: userId,
      status: "Pending",
    });
    const inProgress = await Task.countDocuments({
      createdBy: userId,
      status: "In Progress",
    });
    const completed = await Task.countDocuments({
      createdBy: userId,
      status: "Completed",
    });

    res.json({
      total,
      pending,
      inProgress,
      completed,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching task stats", error });
  }
};
