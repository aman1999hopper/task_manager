import PropTypes from "prop-types";

// ProgressBar.jsx
const ProgressBar = ({ completedTasks, totalTasks }) => {
  const percentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="w-full">
      {/* Text */}
      <div className="flex justify-between mb-1 text-sm text-gray-600 dark:text-white">
        <span>Task done:</span>
        <span>
          {completedTasks}/{totalTasks}
        </span>
      </div>

      {/* Progress bar container */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  completedTasks: PropTypes.number.isRequired,
  totalTasks: PropTypes.number.isRequired,
};

export default ProgressBar;
