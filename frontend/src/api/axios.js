import axios from "axios";

// Here is where you configure your axios instance to use throughout your app
const api = axios.create({
  baseURL: "http://localhost:5000/api", // your backend base
  withCredentials: true, // only if you're using cookies/auth sessions
});

// Automatically include token in every request

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});


export default api;