import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaBell, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Simulate user data (replace with actual API data)
  const user = {
    name: "John Doe",
    avatar: "https://www.w3schools.com/w3images/avatar2.png", // Replace with a real image URL
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Watchlist", path: "/watchlist" },
    { name: "Settings", path: "/settings" },
    { name: "Position", path: "/position" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button
          className="text-gray-800 dark:text-gray-200 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
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
        <div className="flex items-center mt-4 md:mt-0">
          <button
            className="text-gray-800 dark:text-gray-200 mr-4"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <FaBell className="text-gray-800 dark:text-gray-200 mr-4" />
          <div className="flex items-center">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-600"
            />
            <span className="ml-2 text-gray-800 dark:text-gray-200">{user.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
