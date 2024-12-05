
import DashboardData from "../components/DashboardContent/DashboardContent";
import Sidebar from "../components/Sidebar/Sidebar";


const DashboardPage = () => {
  return (
    <>
    <Sidebar/>
    <div className="flex-1 ml-56 p-6 bg-gray-100 ">
        {/* You can add a navbar or header here if necessary */}
        <header>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome to your dashboard.</p>
          <DashboardData />
        </header>
      </div>
    </>
  );
};

export default DashboardPage;