import Task from "../models/Task.js";

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

export const getTaskStats = async (req, res) => {
  try {
    const userId = req.user._id; // From authMiddleware

    const total = await Task.countDocuments({ user: userId });
    const pending = await Task.countDocuments({
      user: userId,
      status: "Pending",
    });
    const inProgress = await Task.countDocuments({
      user: userId,
      status: "In Progress",
    });
    const completed = await Task.countDocuments({
      user: userId,
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