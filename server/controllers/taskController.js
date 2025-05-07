import Task from "../models/Task.js";

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Seed tasks (for testing)
export const seedTasks = async (req, res) => {
  try {
    await Task.deleteMany();

    const sampleTasks = [/* paste your taskData array here */];

    await Task.insertMany(sampleTasks);
    res.status(201).json({ message: "Sample tasks seeded." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
