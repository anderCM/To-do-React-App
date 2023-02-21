import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Items = ({
  tasks,
  handleDeleteTask,
  handleEditTask,
  handleCompleteTask,
}) => (
  <ul className="list-group-flush bg-white rounded shadow-lg my-3 p-3">
    {tasks.length === 0 ? <li className="text-center list-group-item"> No tasks</li> : tasks.map((task) => (
      <Item
        key={task.id}
        task={task.text}
        handleDeleteTask={handleDeleteTask}
        idTask={task.id}
        handleEditTask={handleEditTask}
        handleCompleteTask={handleCompleteTask}
      />
    ))}
  </ul>
);

Items.propTypes = {
  tasks: PropTypes.oneOfType([PropTypes.array]).isRequired,
  handleDeleteTask: PropTypes.oneOfType([PropTypes.func]).isRequired,
  handleEditTask: PropTypes.oneOfType([PropTypes.func]).isRequired,
  handleCompleteTask: PropTypes.oneOfType([PropTypes.func]).isRequired,
};

export default Items;
