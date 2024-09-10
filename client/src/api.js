import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

// Fetch all tasks from the backend
export const getAllTasks = () => axios.get(`${BASE_URL}/tasks`).then(res => res.data);

// Fetch a task by ID
export const getTaskById = (id) => axios.get(`${BASE_URL}/tasks/${id}`).then(res => res.data);

// Add a new task
export const addTask = (task) => axios.post(`${BASE_URL}/tasks`, task).then(res => res.data);

// Update an existing task
export const updateTask = (id, updatedTask) => axios.put(`${BASE_URL}/tasks/${id}`, updatedTask).then(res => res.data);

// Delete a task
export const deleteTask = (id) => axios.delete(`${BASE_URL}/tasks/${id}`).then(res => res.data);
