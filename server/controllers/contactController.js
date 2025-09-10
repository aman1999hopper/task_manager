import Contact from "../models/contactModel.js";

// @desc    Save contact message
// @route   POST /api/contact
// @access  Public
export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again later" });
  }
};

// @desc    Get all messages (Admin use)
// @route   GET /api/contact
// @access  Private (later add auth)
export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch messages" });
  }
};
