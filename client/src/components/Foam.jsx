import React, { useState, useEffect } from 'react';
import './Foam.css';

const Form = ({ closeForm, onsubmit, defaultValue }) => {
  const [formState, setFormState] = useState({
    taskNo: '',
    task: '',
    duedate: '',
    status: ''
  });

  useEffect(() => {
    if (defaultValue) {
      setFormState(defaultValue);
    }
  }, [defaultValue]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(formState);
  };

  return (
    <div className="form-container" onClick={(e) => {
      if (e.target.className === "form-container") closeForm();
    }}>
      <div className="form">
        <form>
          <div className="form-group">
            <label htmlFor="taskNo">Task No</label>
            <textarea name="taskNo" value={formState.taskNo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <textarea name="task" value={formState.task} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="duedate">Due Date</label>
            <input type="text" name="duedate" value={formState.duedate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status" value={formState.status} onChange={handleChange}>
              <option value="completed">Completed</option>
              <option value="not-completed">Not Completed</option>
            </select>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
