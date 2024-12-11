import  { useState } from "react";
import { sidebarData } from "../../data/SidebarData.jsx";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-56 h-full pt-4 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <span className="bg-gradient-to-r from-blue-500 to-rose-600 text-transparent bg-clip-text text-xl font-bold ml-3">
        StockHaven
      </span>
      <div className="px-2 py-2">
      <input type="Search" className="rounded text-center" placeholder="Serach eg: tcs bse etc">
      
      </input>
      </div>
      <div className="h-full px-3 pb-4 overflow-y-auto pt-4">
        <ul className="space-y-2 font-medium">
          {sidebarData.map((item) => (
            <li key={item.id}>
              <div
                className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => item.children && handleDropdown(item.id)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </div>
                {item.children && (
                  <span>
                    {openDropdown === item.id ? "▲" : "▼"}
                  </span>
                )}
              </div>
              {/* Dropdown */}
              {item.children && openDropdown === item.id && (
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
