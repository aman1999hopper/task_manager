import { FaChartLine, FaDollarSign, FaTools } from "react-icons/fa";

const AnalyticsSection = () => {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Streamline Your Workflow with Powerful Tools
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Organize tasks, prioritize goals, and boost productivity with smart
          features designed for efficiency.
        </p>

        {/* Features Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-6 lg:gap-12 items-center">
          {/* Feature Card 1 */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs">
            <FaChartLine className="text-4xl text-green-500 mb-4 sm:text-5xl lg:text-6xl" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:text-xl lg:text-2xl">
              Smart Task Planning
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              Plan and organize your tasks efficiently with intuitive scheduling
              and reminders.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs">
            <FaDollarSign className="text-4xl text-yellow-500 mb-4 sm:text-5xl lg:text-6xl" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:text-xl lg:text-2xl">
              Boost Productivity
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              Focus on what matters most with streamlined workflows and clear
              priorities.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs">
            <FaTools className="text-4xl text-blue-500 mb-4 sm:text-5xl lg:text-6xl" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:text-xl lg:text-2xl">
              Collaborative Tools
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              Work seamlessly with your team using shared tasks, notes, and
              deadlines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
