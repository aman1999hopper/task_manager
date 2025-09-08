import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FaArrowDown,
  FaArrowUp,
  FaCheckCircle,
  FaClipboardList,
  FaHourglassHalf,
  FaSpinner,
} from "react-icons/fa";
import LineChartCard from "../../components/Cards/LineChartCard";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"
import TopProductsCard from "../../components/Cards/TopProductsCard";
import { getTaskStatsAPI } from "../../api/task";

const OverviewPage = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const user = useSelector((state) => state.auth.user);

  const [selected, setSelected] = useState(new Date());

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
  });

  // Fetch stats from backend
  useEffect(() => {
    getTaskStatsAPI()
      .then((res) => setStats(res.data))
      .catch(console.error);
  }, []);

  // Card data
  const statsData = [
    {
      id: 1,
      title: "Total Tasks",
      amount: stats.total,
      percentageChange: 12.5,
      icon: <FaClipboardList className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Pending Tasks",
      amount: stats.pending,
      percentageChange: -2.4,
      icon: <FaHourglassHalf className="w-6 h-6 text-green-500" />,
    },
    {
      id: 3,
      title: "In Progress",
      amount: stats.inProgress,
      percentageChange: 8.2,
      icon: <FaSpinner className="w-6 h-6 text-purple-500" />,
    },
    {
      id: 4,
      title: "Completed Tasks",
      amount: stats.completed,
      percentageChange: 19.6,
      icon: <FaCheckCircle className="w-6 h-6 text-red-500" />,
    },
  ];

  // Chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  // Pie chart updates dynamically
  // const pieChartData = {
  //   labels: ["Pending", "In Progress", "Completed"],
  //   values: [stats.pending, stats.inProgress, stats.completed],
  // };

  // Example top products (can be removed if not needed)
  const recentTaskData = [
    {
      id: 1,
      name: "UI/UX Design",
      status: "Pending",
      priority: "High",
      createon: "40%",
    },
    {
      id: 2,
      name: "TATA MOTORS",
      status: "completed",
      priority: "Low",
      createon: "35%",
    },
    {
      id: 3,
      name: "RELIANCE",
      status: "In Progress",
      priority: "Medium",
      createon: "25%",
    },
    {
      id: 4,
      name: "NavBar Items",
      status: "completed",
      priority: "Low",
      createon: "30%",
    },
  ];

  return (
    <div
      className={`p-4 transition-all duration-300 ${
        isSidebarOpen ? "pl-64" : "pl-24"
      }`}
    >
      <h1 className="text-2xl font-bold ">Hii, {user?.name || "Guest"}</h1>
      <p className="text-gray-500 mt-4 mb-8">Take a monthly overview</p>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 dark:text-gray-100 mb-1">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold">{stat.amount}</h3>
              </div>
              {stat.icon}
            </div>

            <div className="mt-4 flex items-center">
              {stat.percentageChange > 0 ? (
                <FaArrowUp className="text-green-500 mr-1" />
              ) : (
                <FaArrowDown className="text-red-500 mr-1" />
              )}
              <span
                className={`font-medium ${
                  stat.percentageChange > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {Math.abs(stat.percentageChange)}%
              </span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="flex flex-wrap gap-4 lg:gap-6 mt-6">
        <div className="flex-1 min-w-[300px] md:w-3/5">
          <LineChartCard
            data={chartData}
            title="Task Priority Levels"
            percentage={19.6}
          />
        </div>
        <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            className="custom-calendar"
          />
        </div>
      </div>

      {/* Example table/card */}
      <div className="w-full mt-6">
        <TopProductsCard data={recentTaskData} />
      </div>
    </div>
  );
};

export default OverviewPage;
