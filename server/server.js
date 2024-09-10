const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

let tasks = [
    {
        id: 1,
        taskNo: '1',
        task: 'Complete Assignment',
        duedate: '25-09-23',
        status: 'completed'
      },
      {
        id: 2,
        taskNo: '2',
        task: 'DO Homework',
        duedate: '24-09-23',
        status: 'completed'
      },
      {
        id: 3,
        taskNo: '3',
        task: 'Football-session',
        duedate: '30-09-23',
        status: 'completed'
      }
];



// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET task by ID
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  });



// POST (Add) a new task
app.post('/tasks', (req, res) => {
    const newTask = {
      id: tasks.length + 1,
      ...req.body
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  });



// PUT (Update) task by ID
app.put('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ error: "Task not found" });
    
    tasks[taskIndex] = { id: parseInt(req.params.id), ...req.body };
    res.json(tasks[taskIndex]);
  });
  


// DELETE task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ error: "Task not found" });
    
    tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    res.json({ message: "Task deleted" });
  });
  


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});