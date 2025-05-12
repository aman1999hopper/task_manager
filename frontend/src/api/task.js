import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend ka base URL
});

export const createTaskAPI = (taskData) => API.post('/tasks', taskData);
export const getTasksAPI = () => API.get('/tasks');
