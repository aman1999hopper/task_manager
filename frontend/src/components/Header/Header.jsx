import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBell,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaSearch,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
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
    setIsUserDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setIsMenuOpen(false);
      }
      if (isUserDropdownOpen && !event.target.closest('.user-dropdown')) {
        setIsUserDropdownOpen(false);
      }
      if (isSearchOpen && !event.target.closest('.search-container') && !event.target.closest('.search-toggle')) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, isUserDropdownOpen, isSearchOpen]);

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-md fixed z-50 w-full">
        {/* Main Header Row */}
        <div className="flex items-center justify-between px-4 py-3 lg:px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="bg-gradient-to-r from-blue-500 to-rose-600 text-transparent bg-clip-text text-xl sm:text-2xl font-bold">
              Task Flow
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                activeClassName="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Search - Toggleable */}
          <div className="hidden md:flex items-center">
            {!isSearchOpen ? (
              <button
                onClick={toggleSearch}
                className="search-toggle text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaSearch size={18} />
              </button>
            ) : (
              <div className="search-container flex items-center bg-white dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-lg">
                <FaSearch className="text-gray-400 dark:text-gray-500 text-sm mr-3" />
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  className="w-64 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none text-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      closeSearch();
                    }
                  }}
                />
                <button
                  onClick={closeSearch}
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 ml-2"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Mobile Search Icon */}
            <button 
              onClick={toggleSearch}
              className="md:hidden search-toggle text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <FaSearch size={18} />
            </button>

            {/* Dark Mode Toggle */}
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Notifications */}
            <button className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <FaBell size={18} />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Avatar Dropdown */}
            <div className="relative user-dropdown">
              <button
                onClick={toggleUserDropdown}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-blue-500 to-rose-500 flex items-center justify-center text-white text-sm font-medium">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}
                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user?.name?.split(' ')[0] || 'User'}
                </span>
              </button>

              {/* User Dropdown Menu */}
              {isUserDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {user?.name || 'User Name'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.email || 'user@example.com'}
                    </p>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    My Tasks
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    Help & Support
                  </button>
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden hamburger-btn text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Only show when search is toggled */}
        {isSearchOpen && (
          <div className="md:hidden px-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="search-container relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="w-full pl-10 pr-10 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white dark:focus:bg-gray-600 transition-all duration-200"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    closeSearch();
                  }
                }}
              />
              <button
                onClick={closeSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes size={14} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden mobile-menu fixed top-0 right-0 h-full w-80 max-w-sm bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Navigation
            </h2>
            <button
              onClick={closeMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200"
                  activeClassName="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-rose-500 flex items-center justify-center text-white font-medium">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {user?.name || 'User Name'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {user?.email || 'user@example.com'}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;