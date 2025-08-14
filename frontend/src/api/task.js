import axios from 'axios';
import store from '../redux/store';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend ka base URL
});

// Automatically include token in every request
API.interceptors.request.use((req) => {
  const token = store.getState().auth.token; // Get token from Redux store
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});

export const createTaskAPI = (taskData) => API.post('/tasks', taskData);
export const getTasksAPI = () => API.get('/tasks');
export const getTaskStatsAPI = () => API.get('/tasks/stats');
