import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Update with your actual backend URL
});

export const fetchTasks = () => API.get('/tasks');
