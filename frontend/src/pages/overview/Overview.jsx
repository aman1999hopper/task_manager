import {
  FaArrowDown,
  FaArrowUp,
  FaBoxOpen,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import LineChartCard from "../../components/Cards/LineChartCard";
import PieChart from "../../components/Cards/PiChart";
import TopProductsCard from "../../components/Cards/TopProductsCard";

const OverviewPage = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  // Sample data - replace with actual API data
  const user = {
    name: "John Doe",
  };

  const stats = [
    {
      id: 1,
      title: "Orders",
      amount: 13420,
      percentageChange: 12.5,
      icon: <FaShoppingCart className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 2,
      title: "Items Sold",
      amount: 8432,
      percentageChange: -2.4,
      icon: <FaBoxOpen className="w-8 h-8 text-green-500" />,
    },
    {
      id: 3,
      title: "Shipping",
      amount: 6234,
      percentageChange: 8.2,
      icon: <FaTruck className="w-8 h-8 text-purple-500" />,
    },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  const pieChartData = {
    labels: ['Electronics', 'Clothing', 'Home Appliances'],
    values: [50, 25, 25],
  };
  
  const topProductsData = [
    { id: 1, name: 'BAJA HOUSING', price: 112.4, lastTradePrice: 113.5, revenue: '40%' },
    { id: 2, name: 'TATA MOTORS', price: 210.3, lastTradePrice: 215.0, revenue: '35%' },
    { id: 3, name: 'RELIANCE', price: 1950.5, lastTradePrice: 1980.0, revenue: '25%' },
    { id: 4, name: 'INFOSYS', price: 950.2, lastTradePrice: 960.0, revenue: '30%' },
    { id: 5, name: 'HDFC BANK', price: 1450.0, lastTradePrice: 1465.0, revenue: '20%' },
    { id: 6, name: 'ICICI BANK', price: 650.0, lastTradePrice: 655.0, revenue: '15%' },
    { id: 7, name: 'WIPRO', price: 400.0, lastTradePrice: 405.0, revenue: '10%' },
    { id: 8, name: 'TCS', price: 3200.0, lastTradePrice: 3220.0, revenue: '50%' },
  ];


  return (
    <div
      className={`p-4 transition-all duration-300 ${
        isSidebarOpen ? "pl-64" : "pl-24"
      }`}
    >
      <h1 className="text-2xl font-bold ">Hii, {user.name}</h1>
      <p className="text-gray-500 mt-4 mb-8">Take a monthly overview</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold">
                  ${stat.amount.toLocaleString()}
                </h3>
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
      <div className="flex flex-wrap gap-4 lg:gap-6 mt-6">
        <div className="flex-1 min-w-[300px] md:w-3/5">
          <LineChartCard
            data={chartData}
            title="Revenue Over Time"
            percentage={19.6}
          />
        </div>
        <div className="flex-1 min-w-[300px] md:w-2/5">
          <PieChart
            data={pieChartData}
            title="Product Share"
          />
        </div>
      </div>
      <div className="w-full mt-6">
        <TopProductsCard data={topProductsData} />
      </div>
    </div>
  );
};

OverviewPage.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default OverviewPage;
