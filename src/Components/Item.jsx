/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { faPen, faTrash, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Item = ({
  task,
  handleDeleteTask,
  idTask,
  handleEditTask,
  handleCompleteTask,
}) => {
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setText(task);
  }, [task]);

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }
    handleEditTask(idTask, text);
    setIsEdit(false);
  };

  const handleCheckTask = () => {
    if (!isSelected) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
    handleCompleteTask(idTask, !isSelected);
  };

  return (
    <li className="row border rounded shadow-md p-1 my-2">
      <div className="col-1 p-0 text-center align-middle">
        <input className="form-check-input align-middle" type="checkbox" onChange={() => handleCheckTask()} />
      </div>
      <div className="col-9 p-0">
        <input className={`form-control border-0 text-dark ${isSelected ? 'text-decoration-line-through' : 'text-decoration-none'}`} value={text} type="text" onChange={(e) => setText(e.target.value)} disabled={!isEdit} />
      </div>
      <div className="col-1 p-0">
        <button type="button" className="btn" onClick={() => handleEdit()}>
          <FontAwesomeIcon className="text-danger" icon={!isEdit ? faPen : faFloppyDisk} />
        </button>

      </div>
      <div className="col-1 p-0">
        <button type="button" className="btn">
          <FontAwesomeIcon className="text-danger" icon={faTrash} onClick={() => handleDeleteTask(idTask)} />
        </button>

      </div>
    </li>
  );
};

Item.propTypes = {
  task: PropTypes.oneOfType([PropTypes.string]).isRequired,
  handleDeleteTask: PropTypes.oneOfType([PropTypes.func]).isRequired,
  idTask: PropTypes.oneOfType([PropTypes.number]).isRequired,
  handleEditTask: PropTypes.oneOfType([PropTypes.func]).isRequired,
  handleCompleteTask: PropTypes.oneOfType([PropTypes.func]).isRequired,
};

export default Item;
