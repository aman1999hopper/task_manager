import {
  FaChartPie,
  FaUserTie,
  FaClipboardList,
  FaChartBar,
  FaHistory,
} from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-56 h-full pt-4 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <span className="bg-gradient-to-r from-blue-500 to-rose-600 text-transparent bg-clip-text text-xl font-bold ml-3">
          StockHaven
        </span>
        <div className="h-full px-3 pb-4 overflow-y-auto pt-4">
          {/* Sidebar Links */}
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <RiDashboardLine className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaChartPie className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Portfolio</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaClipboardList className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">WatchList</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaChartBar className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Market Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUserTie className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Transactions</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaHistory className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Reports & Analytics</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 pl-56">
        {/* Navbar */}
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-10/12">
          <div className="relative w-1/2">
            {/* Search Icon */}
            <span className="absolute inset-y-0 left-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M9 15a6 6 0 1112 0 6 6 0 01-12 0z"
                />
              </svg>
            </span>

            {/* Search Input */}
            <input
              type="search"
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Search for stocks & more..."
              aria-label="Search"
            />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">John Doe</span>
            <span className="text-xs text-gray-500">Admin</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User photo"
            />
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-16 overflow-y-auto mt-4">
          <h1 className="text-3xl">Main Content</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore nihil delectus rerum qui, eaque a provident natus quibusdam eius nam ut recusandae unde. Itaque voluptatem illum, quas mollitia facilis quod distinctio eius? Reiciendis eveniet laudantium omnis distinctio alias numquam libero quisquam. Eos placeat dolores, molestias dolorem modi perspiciatis animi nostrum commodi a tempore maxime aperiam nisi iste harum, corporis at? Et temporibus dolores aliquam at praesentium rerum quo atque autem natus corporis accusantium saepe vel aut nam iste esse non sunt id neque, ex nostrum reiciendis eaque ratione delectus? Fugiat adipisci voluptatibus, vitae voluptates exercitationem ea. Velit, ab et!
          </p>
          <h1 className="text-2xl font-bold text-red-600 mt-8  ">This is the overview of my site, and this is the heading for that </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
