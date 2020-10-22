import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import TaskForm from './components/TaskForm';
import TaskList from './components/Tasklist';
import useTaskState from './hooks/useTasksState';

const App = () => {
  const { tasks, addTask, deleteTask, setTasks } = useTaskState([]);

  const saveTaskHandler = (taskText) => {
    const trimmedText = taskText.trim();
    if (trimmedText.length > 0) {
      addTask(trimmedText);
    }
  };

  useEffect(() => {
    const tasksList = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasksList);
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2">
          TaskList
        </Typography>
        <TaskForm saveTask={saveTaskHandler} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </Container>
    </>
  );
};

export default App;
