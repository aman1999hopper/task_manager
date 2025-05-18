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
      dueDate,
      assignedTo,
      checklist,
      attachments,
    } = req.body;

    const task = new Task({
      title,
      description,
      priority,
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