import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, toggleDropdown } from "../../redux/sidebarSlice";
import { sidebarData } from "../../data/SidebarData.jsx";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, openDropdown } = useSelector((state) => state.sidebar);

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 ${
        isSidebarOpen ? "w-56" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {isSidebarOpen && (
          <span className="bg-gradient-to-r from-blue-500 to-rose-600 text-transparent bg-clip-text text-xl font-bold">
            StockHaven
          </span>
        )}
        <button
          className="p-1 text-gray-500 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => dispatch(toggleSidebar())}
        >
          {isSidebarOpen ? <FiArrowLeft /> : <FiArrowRight />}
        </button>
      </div>

      <div className="px-2 py-2">
        {isSidebarOpen && (
          <input
            type="search"
            className="w-full p-2 text-center rounded"
            placeholder="Search eg: tcs bse etc"
          />
        )}
      </div>

      <div className="h-full px-3 pb-4 overflow-y-auto pt-4">
        <ul className="space-y-2 font-medium">
          {sidebarData.map((item) => (
            <li key={item.id}>
              <div
                className={`flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                  isSidebarOpen ? "justify-between" : "justify-center"
                }`}
                onClick={() => item.children && dispatch(toggleDropdown(item.id))}
              >
                <div className="flex items-center">
                  {item.icon}
                  {isSidebarOpen && <span className="ml-3">{item.title}</span>}
                </div>
                {item.children && isSidebarOpen && (
                  <span>{openDropdown === item.id ? "▲" : "▼"}</span>
                )}
              </div>
              {item.children && openDropdown === item.id && isSidebarOpen && (
                <ul className="ml-6 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={child.link}
                        className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
