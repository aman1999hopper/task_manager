import { useState } from "react";
import PropTypes from "prop-types";

const LoginSignupModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);  // Track whether we are showing login or signup form

  const switchForm = () => {
    setIsLogin(!isLogin);  // Switch between login and signup forms
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-30">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg w-96 p-6">
        {/* Close button positioned at the top-right corner */}
        <button
          onClick={onClose}  // Close modal
          className="absolute top-2 right-5 text-white hover:text-red-700 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-center text-2xl font-semibold mb-4 text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <div className="text-center mb-4">
          <button
            className="text-blue-500"
            onClick={switchForm}
          >
            {isLogin ? "Need an account? Sign Up" : "Already have an account? Log In"}
          </button>
        </div>

        {/* Login or Signup Form */}
        <div>
          {isLogin ? (
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input type="password" id="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter your password" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Log In</button>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter your full name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input type="password" id="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter your password" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

LoginSignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginSignupModal;
