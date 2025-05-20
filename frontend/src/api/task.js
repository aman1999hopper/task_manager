import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend ka base URL
});

// Automatically include token in every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});

export const createTaskAPI = (taskData) => API.post('/tasks', taskData);
export const getTasksAPI = () => API.get('/tasks');
