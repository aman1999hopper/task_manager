import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBell, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  // Simulate user data (replace with actual API data)
  const [user, setUser] = useState({
    name: "",
    avatar: "https://www.w3schools.com/w3images/avatar2.png", // Default avatar
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    // Get user data from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:5000/api/auth/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          setUser({
            name: data.user.name,
            avatar: data.user.avatar || "https://www.w3schools.com/w3images/avatar2.png"
          });
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, []);

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

  const handleLogout = () => {
    // Clear user data and token
    localStorage.removeItem('token');
    setUser({
      name: "",
      avatar: "https://www.w3schools.com/w3images/avatar2.png"
    });
    navigate("/");
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center ml-auto w-[70%]">
      <div className="flex items-center">
        <button
          className="text-gray-800 dark:text-gray-200 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
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
        <div className="flex items-center mt-4 md:mt-0">
          <button
            className="text-gray-800 dark:text-gray-200 mr-4"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <FaBell className="text-gray-800 dark:text-gray-200 mr-4" />
          <div
            className="flex items-center"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-600"
            />
            <span className="ml-2 text-gray-800 dark:text-gray-200">
               {user.name || 'Guest'}
            </span>
            {isOpen && (
              <div className="absolute top-12 right-0 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md">
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
