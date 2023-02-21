/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import SimpleToast from './Alerts/SimpleToast';

import Items from './Items';

const ToDo = () => {
  const [tasks, setTasks] = useState(undefined);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') {
      SimpleToast.fire({
        icon: 'error',
        title: 'Enter a task first',
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, task) => {
    const index = tasks.findIndex((tak) => tak.id === taskId);
    tasks[index].text = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const handleCompleteTask = (taskId, statusTask) => {
    const index = tasks.findIndex((tak) => tak.id === taskId);
    tasks[index].completed = statusTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return (
    <>
      <form onSubmit={handleAddTask}>
        <div className="form-floating position-relative">
          <input
            id="new-task"
            type="text"
            className="form-control shadow-lg"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <label htmlFor="new-task">
            Enter a new task
            {' '}
            <FontAwesomeIcon icon={faListCheck} />
          </label>
          <button
            type="submit"
            className="btn position-absolute top-50 end-0 translate-middle"
          >
            <FontAwesomeIcon
              type="submit"
              className="position-absolute translate-middle fs-3"
              icon={faCirclePlus}
            />
          </button>
        </div>
      </form>
      <Items
        tasks={tasks || []}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        handleCompleteTask={handleCompleteTask}
      />
    </>
  );
};

export default ToDo;
