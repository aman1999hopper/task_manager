import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, toggleDropdown } from "../../redux/sidebarSlice";
import { sidebarData } from "../../data/SidebarData";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, openDropdown } = useSelector((state) => state.sidebar);
  const { name, email, role, avatar } = useSelector((state) => state.user.user);

  return (
    <aside
    className={`fixed top-0 left-0 z-40 h-full pt-20 bg-white border-r border-gray-200 
      dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 
      w-${isSidebarOpen ? "56" : "16"}`}
      onMouseEnter={() => dispatch(toggleSidebar(true))}
      onMouseLeave={() => dispatch(toggleSidebar(false))}
    >
      {/* Navigation */}
      <div className="h-full px-3 pb-4 overflow-y-auto scrollbar-hide flex flex-col justify-between">
        <ul className="space-y-2 font-medium">
          {sidebarData.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg 
                dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => item.children && dispatch(toggleDropdown(item.id))}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span
                    className={`transition-opacity duration-300 ease-in-out
                    ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}
                  >
                    {item.title}
                  </span>
                </div>

                {item.children && isSidebarOpen && (
                  <span
                    className={`transition-transform duration-300 ease-in-out 
                    ${openDropdown === item.id ? "rotate-180" : "rotate-0"}`}
                  >
                    <IoIosArrowUp />
                  </span>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.id && isSidebarOpen && (
                <ul className="ml-8 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        to={child.link}
                        className="flex items-center w-full p-2 text-sm text-gray-700 rounded-lg 
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

      {/* Bottom user section */}
      <div className="absolute bottom-0 left-0 w-full px-4 py-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border dark:border-gray-600"
          />
          {isSidebarOpen && (
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate w-36">
                {name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate w-36">
                {role}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 truncate w-36">
                {email}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
