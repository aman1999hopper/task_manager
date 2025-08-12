import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBell, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user); //  Custom hook handles fetching user data
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard/overview" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Watchlist", path: "/watchlist" },
    { name: "Settings", path: "/settings" },
    { name: "Position", path: "/position" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center fixed z-50 w-full">
      {/* Left section: Menu button */}
      <div className="flex items-center">
        <button
          className="text-gray-800 dark:text-gray-200 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Center: Navigation menu */}
      <div className={`md:flex ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <nav className="flex flex-col md:flex-row md:space-x-4 text-sm font-semibold items-center mr-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400"
              activeClassName="text-blue-500 font-semibold"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right section: Controls */}
        <div className="flex items-center mt-4 md:mt-0">
          <button
            className="text-gray-800 dark:text-gray-200 mr-4"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <FaBell className="text-gray-800 dark:text-gray-200 mr-4" />

          {/* User avatar and dropdown */}
          <div
            className="relative flex items-center cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs">
                {user?.name?.charAt(0) || "U"}
              </div>
            )}

            {isOpen && (
              <div className="absolute top-8 right-0 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md">
                <ul className="text-gray-800 dark:text-gray-200">
                  <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    My Stocks
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    Help
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
