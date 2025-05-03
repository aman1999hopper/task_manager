import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

const ManageTask = ({ tasks }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const [activeTab, setActiveTab] = useState("All");

  const statuses = ["All", "Pending", "In Progress", "Completed"];

  const filteredTasks = tasks.filter((task) =>
    activeTab === "All" ? true : task.status === activeTab
  );

  return (
    <div
      className={`p-4 transition-all duration-300 ${
        isSidebarOpen ? "pl-64" : "pl-24"
      }`}
    >
      <h1 className="text-2xl font-bold">My Tasks</h1>

      {/* Tab Filter */}
      <div className="flex space-x-4 border-b mb-4">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveTab(status)}
            className={`relative pb-2 px-3 font-medium ${
              activeTab === status
                ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="p-4 border rounded bg-white shadow-sm flex justify-between"
            >
              <span>{task.title}</span>
              <span className="text-sm text-gray-400">{task.status}</span>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-400">No tasks found.</p>
        )}
      </ul>
    </div>
  );
};

ManageTask.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ManageTask;
