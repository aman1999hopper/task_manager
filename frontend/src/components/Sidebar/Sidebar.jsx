import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, toggleDropdown } from "../../redux/sidebarSlice";
import { sidebarData } from "../../data/SidebarData";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, openDropdown } = useSelector((state) => state.sidebar);
  const { role, email, avatar } = useSelector((state) => state.user.user);

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-200 
        dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 
        w-${isSidebarOpen ? "56" : "16"}`} // Removed hover:w-56
        onMouseEnter={() => dispatch(toggleSidebar(true))}
        onMouseLeave={() => dispatch(toggleSidebar(false))}
      >
        <div className="flex items-center justify-between p-4">
          <span
            className={`bg-gradient-to-r from-blue-500 to-rose-600 
          text-transparent bg-clip-text text-xl font-bold 
          transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          >
            Taskify
          </span>
        </div>

        <div className="h-full px-3 pb-4 overflow-y-auto pt-4 scrollbar-hide">
          <ul className="space-y-2 font-medium">
            {sidebarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="flex items-center w-full p-2 text-gray-900 rounded-lg 
                  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() =>
                    item.children && dispatch(toggleDropdown(item.id))
                  }
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span
                      className={`ml-3 transition-opacity duration-300
                    ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
                    >
                      {item.title}
                    </span>
                  </div>
                  {item.children && isSidebarOpen && (
                    <span
                      className={`ml-auto transition-transform duration-300 
                    ${openDropdown === item.id ? "rotate-180" : "rotate-0"}`}
                    >
                      <IoIosArrowUp />
                    </span>
                  )}
                </Link>
                {item.children && openDropdown === item.id && isSidebarOpen && (
                  <ul className="ml-6 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={child.link}
                          className="flex items-center w-full p-2 text-gray-700 rounded-lg 
                          dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="items-center">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full shrink-0"
            />
            {isSidebarOpen && (
              <div className="min-w-0">
                {" "}
                {/* Prevent overflow */}
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {role}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate w-36">
                  {email}
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
