import express from "express";
const router = express.Router();

router.get("/fetch-members", (req, res) => {
  const members = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "Sam", email: "sam@example.com" },
    { id: 5, name: "Rohit", email: "rohit@example.com" },
  ];

  res.status(200).json({ members });
});

export default router;
