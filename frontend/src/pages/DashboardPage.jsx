import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1  bg-gray-100 overflow-y-auto pt-12">
          <Outlet /> {/* This will render the matched child route */}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;