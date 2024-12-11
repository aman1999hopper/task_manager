import { NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Header = () => {
  // Simulate user data (replace with actual API data)
  const user = {
    name: "John Doe",
    avatar: "https://www.w3schools.com/w3images/avatar2.png", // Replace with a real image URL
  };

  return (
    <>
      <div className="header-right flex justify-end">
        {/* Navigation Links */}
        <nav className="flex space-x-4 text-sm font-semibold">
          <NavLink
            to="/dashboard"
            className="text-gray-800 hover:text-sky-600"
            activeClassName="text-blue-500 font-semibold"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/orders"
            className="text-gray-800 hover:text-sky-600 "
            activeClassName="text-blue-500 font-semibold"
          >
            Orders
          </NavLink>
          <NavLink
            to="/holding"
            className="text-gray-800 hover:text-sky-600"
            activeClassName="text-blue-500 font-semibold"
          >
            Holding
          </NavLink>
          <NavLink
            to="/position"
            className="text-gray-800 hover:text-sky-600"
            activeClassName="text-blue-500 font-semibold"
          >
            Positions
          </NavLink>
          <NavLink
            to="/ipo"
            className="text-gray-800 hover:text-sky-600"
            activeClassName="text-blue-500 font-semibold"
          >
            IPO
          </NavLink>
          <NavLink
            to="/funds"
            className="text-gray-800 hover:text-sky-600"
            activeClassName="text-blue-500 font-semibold"
          >
            Funds
          </NavLink>
        </nav>

        <div className="relative ml-4 cursor-pointer">
          <FaBell className="w-4 h-4 text-gray-800 hover:text-orange-600 mt-1" />
          {/* Optional Notification Badge */}
          <span className="absolute top-0.5 left-2 text-xs w-3 h-3 bg-red-500 text-white rounded-full flex items-center justify-center">
            3
          </span>
        </div>
        {/* User Deatils shows dynamically */}
        <div className="flex items-center ml-6 cursor-pointer">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-5 h-5 rounded-full border-2 border-gray-200"
        />
        <span className="ml-2 text-gray-800">{user.name}</span>
      </div>
      </div>
    </>
  );
};

export default Header;
