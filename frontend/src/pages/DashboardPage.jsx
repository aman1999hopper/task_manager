
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";


const DashboardPage = () => {
  return (
    <>
    <Sidebar/>
    <div className="header-right flex-1 ml-56 p-2 bg-gray-100 ">
      <Header />
      </div>
    </>
  );
};

export default DashboardPage;