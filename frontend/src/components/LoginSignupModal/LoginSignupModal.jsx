import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const LoginSignupModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For signup form

  const switchForm = () => {
    setIsLogin(!isLogin);
    // Clear input fields when switching forms
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful");
        setTimeout(() => {
          window.location.href = "/dashboard"; // Redirect after a delay
        }, 1500);
      } else {
        alert(data.message);
      }
    } catch {
      toast.error("Error during login");
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Signup successful! Please login.");
        // Clear the form fields
        setName("");
        setEmail("");
        setPassword("");
        // Switch to login form
        setIsLogin(true);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Error during signup");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-30">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg w-96 p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-center text-2xl font-semibold mb-4 text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <div className="text-center mb-4">
          <button className="text-blue-500" onClick={switchForm}>
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Log In"}
          </button>
        </div>

        <div>
          {isLogin ? (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Log In
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Sign Up
              </button>
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
