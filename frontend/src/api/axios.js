import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // your backend base
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // only if you're using cookies/auth sessions
});

export default api;