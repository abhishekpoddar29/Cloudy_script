import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Foam';
import Table from './components/Table';
import { getAllTasks, addTask, updateTask, deleteTask, getTaskById } from './api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);

  useEffect(() => {
    // Fetch tasks from backend
    getAllTasks()
      .then(data => setTasks(data))
      .catch(err => console.error("Error fetching tasks: ", err));
  }, []);

  // Handle adding or updating a task
  const handleSubmit = (newTask) => {
    if (rowToEdit === null) {
      // Adding a new task
      addTask(newTask)
        .then((task) => setTasks([...tasks, task]))
        .catch(err => console.error("Error adding task: ", err));
    } else {
      // Updating an existing task
      updateTask(rowToEdit, newTask)
        .then((updatedTask) => {
          setTasks(tasks.map(task => task.id === rowToEdit ? updatedTask : task));
        })
        .catch(err => console.error("Error updating task: ", err));
    }
    closeForm();
  };

  // Handle opening the form to edit a task
  const handleEditRow = (id) => {
    getTaskById(id)
      .then(data => {
        setRowToEdit(id);
        setFormOpen(true);
      })
      .catch(err => console.error(`Error fetching task with id ${id}: `, err));
  };

  // Handle deleting a task
  const handleDeleteRow = (id) => {
    deleteTask(id)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(err => console.error("Error deleting task: ", err));
  };

  // Close the form
  const closeForm = () => {
    setFormOpen(false);
    setRowToEdit(null);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Table rows={tasks} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button className="btn" onClick={() => setFormOpen(true)}>Add Task</button>
      {formOpen && <Form closeForm={closeForm} onsubmit={handleSubmit} defaultValue={rowToEdit !== null && tasks.find(task => task.id === rowToEdit)} />}
    </div>
  );
}

export default App;
