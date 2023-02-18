import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Components/Enav';

const TextForm = styled.div`
align-items: center;
margin:20vh 0 40% 40%;
`;
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  return (
    <>
    <Navbar/>
    <TextForm>
      <h1 >To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </TextForm>
    </>
  );
}

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task, completed: false });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

function TaskList({ tasks, deleteTask, completeTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span className={task.completed ? 'completed' : ''}>{task.task}</span>
          <button onClick={() => completeTask(index)}>Complete</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default App;
