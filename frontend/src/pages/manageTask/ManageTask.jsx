import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { getTasksAPI } from "../../api/task";

const ManageTask = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);

  const statuses = ["All", "Pending", "In Progress", "Completed"];

  useEffect(() => {
    // Simulate delay with setTimeout
    setTimeout(() => {
      getTasksAPI()
        .then((res) => {
          setTasks(res.data);
          setLoading(false); // 👈 Stop loader after data is loaded
        })
        .catch((err) => {
          console.error(err);
          setLoading(false); // 👈 Still stop loader on error
        });
    }, 3000); // 5-second delay
  }, []);

  const filteredTasks = tasks.filter((task) =>
    activeTab === "All" ? true : task.status === activeTab
  );

  const statusCounts = tasks.reduce(
    (acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      acc.All += 1;
      return acc;
    },
    { All: 0 }
  );

  if (loading) {
    // Spinner UI (can customize or use a library spinner)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="loader mb-4 border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
          <p className="text-gray-600">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-4 transition-all duration-300 ${
        isSidebarOpen ? "pl-64" : "pl-24"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveTab(status)}
            className={`relative pb-2 px-3 font-medium flex items-center space-x-3 ${
              activeTab === status
                ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            <span>{status}</span>
            <span className="text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded-full">
              {statusCounts[status] || 0}
            </span>
          </button>
        ))}
      </div>

      {/* Task Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="p-4 border rounded-xl bg-white shadow space-y-3 dark:bg-gray-800 dark:text-white"
            >
              {/* Status & Priority Chips */}
              <div className="flex items-end space-x-2">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                  {task.status}
                </span>
                <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                  {task.priority}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-white">
                    {task.description}
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="text-sm text-gray-600 dark:text-white">
                Task done: {task.completedTasks}/{task.totalTasks}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{
                    width: `${(task.completedTasks / task.totalTasks) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Dates */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>Start: {task.startDate}</span>
                <span>Due: {task.dueDate}</span>
              </div>

              {/* Assignees */}
              <div className="flex mt-2 items-center">
                {task.assignes &&
                  task.assignes.slice(0, 3).map((user, index) => (
                    <Avatar
                      key={index}
                      alt={user.name}
                      src={user.avatar}
                      title={user.name}
                      sx={{
                        width: 32,
                        height: 32,
                        border: "2px solid white",
                        marginLeft: index !== 0 ? "-8px" : "0",
                        zIndex: task.assignes.length - index,
                        fontSize: "0.75rem",
                      }}
                    />
                  ))}

                {task.assignes && task.assignes.length > 3 && (
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      marginLeft: "-8px",
                      zIndex: 0,
                      backgroundColor: "#bdbdbd",
                      fontSize: "0.75rem",
                    }}
                  >
                    +{task.assignes.length - 3}
                  </Avatar>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No tasks found.
          </p>
        )}
      </ul>
    </div>
  );
};

export default ManageTask;
