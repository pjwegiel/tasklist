import { useState } from 'react';

export default (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);

  const storeTaskInLocalStorage = (taskText) => {
    let taskList = [];
    if (localStorage.getItem('tasks') === null) {
      taskList = [];
    } else {
      taskList = JSON.parse(localStorage.getItem('tasks'));
    }
    taskList.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(taskList));
  };

  return {
    tasks,
    setTasks,
    addTask: (taskText) => {
      setTasks([...tasks, taskText]);
      storeTaskInLocalStorage(taskText);
    },
    deleteTask: (taskIndex) => {
      const newTasks = tasks.filter((_, index) => index !== taskIndex);
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    },
  };
};
