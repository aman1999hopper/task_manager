const taskData = [
    {
      id: 1,
      title: "Design UI",
      description: "Design the user interface for the dashboard page.",
      status: "In Progress",
      priority: "High",
      completedTasks: 2,
      totalTasks: 5,
      startDate: "2025-05-01",
      dueDate: "2025-05-05",
      assignees: [
        { name: "Alice", avatar: "/images/user1.jpg" },
        { name: "Bob", avatar: "/images/user2.jpg" },
        { name: "Danim", avatar: "/images/user1.jpg" },
        { name: "Sam", avatar: "/images/user2.jpg" },
      ],
    },
    {
      id: 2,
      title: "Build backend",
      description: "Set up Node.js API and connect to MongoDB.",
      status: "Pending",
      priority: "Medium",
      completedTasks: 0,
      totalTasks: 4,
      startDate: "2025-05-02",
      dueDate: "2025-05-07",
      assignees: [
        { name: "Charlie", avatar: "/images/user3.jpg" },
      ],
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Deploy the app to Netlify and test it.",
      status: "Completed",
      priority: "Low",
      completedTasks: 3,
      totalTasks: 3,
      startDate: "2025-04-28",
      dueDate: "2025-04-30",
      assignees: [
        { name: "Dana", avatar: "/images/user4.jpg" },
        { name: "Eve", avatar: "/images/user5.jpg" },
      ],
    },
  ];
  
  export default taskData;
  