import { FaArrowDown, FaArrowUp, FaBoxOpen, FaShoppingCart, FaTruck } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LineChartCard from "../../components/LinerChart/LineChartCard";

const OverviewPage = () => {
    const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  // Sample data - replace with actual API data
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
    }
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    values: [65, 59, 80, 81, 56, 55, 40],
  };


  return (
    <div className={`p-4 transition-all duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-24'}`}>
      <h1 className="text-2xl font-bold mb-6 lg:mb-8">Overview</h1>
      
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
              <span className={`font-medium ${
                stat.percentageChange > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {Math.abs(stat.percentageChange)}%
              </span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
        ))}
        <LineChartCard
        data={chartData}
        title="Revenue Over Time"
        percentage={19.6}
        />
      </div>
    </div>
  );
};

OverviewPage.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired
};

export default OverviewPage;