import React from 'react';
import Button from '@mui/material/Button';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return <li className = "taskListItem">
    <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
    <span>{task.text}</span>
    <Button onClick={ () => onDeleteClick(task) }>&times;</Button>
    </li>
};