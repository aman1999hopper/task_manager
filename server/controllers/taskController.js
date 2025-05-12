import Task from "../models/Task.js";

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Seed tasks (for testing)
export const createTask = async (req, res) => {
   try {
    const { title, description,status, priority, completedTasks, totalTasks, startDate, dueDate, assignees } = req.body;
    const task = await Task.create({ title, description, status, priority, completedTasks, totalTasks, startDate, dueDate, assignees });
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};
