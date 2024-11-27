import { FaChartLine, FaDollarSign, FaTools } from 'react-icons/fa';

const AnalyticsSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Unlock Advanced Stock Analytics
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Use powerful data and insights to identify profitable opportunities in the stock market.
        </p>

        {/* Icons and Data */}
        <div className="flex justify-around gap-12">
          {/* Analytics Card 1 */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <FaChartLine className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Market Analysis
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Detailed insights into stock market trends and patterns.
            </p>
          </div>

          {/* Analytics Card 2 */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <FaDollarSign className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Profit Potential
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Discover the most profitable stocks and mutual funds.
            </p>
          </div>

          {/* Analytics Card 3 */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <FaTools className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Advanced Tools
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Utilize advanced tools for stock analysis and tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
