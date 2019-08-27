import React from 'react';

import './todo-list-item.css';
import { STATUSES_APP } from "../../redux/constants";

const TodoListItem = ({
												title, done = false, important = false, statusApp,
												onEditMode, onDeleteTask, onCompletedTask, onImportantTask
											}) => {

	const IS_VISIBLE = statusApp === STATUSES_APP.IN_PROGRESS_APP || statusApp === STATUSES_APP.IN_PROGRESS_EDIT;

	return (
		<span
			className={`todo-list-item ${done ? 'completed' : ''} ${important ? 'important' : ''}`}>
      <span
				className={`todo-list-item-label ${IS_VISIBLE ? 'disabled' : ''}`}
				onClick={IS_VISIBLE ? null : onCompletedTask}>
        {title}
      </span>
			<button type='button'
							className='btn btn-outline-danger btn-sm float-right'
							disabled={IS_VISIBLE}
							onClick={onDeleteTask}>
        <i className='fa fa-trash-o'/>
      </button>

			<button type='button'
							className='btn btn-outline-warning btn-sm float-right'
							disabled={IS_VISIBLE}
							onClick={onEditMode}>
        <i className='fa fa-pencil'/>
      </button>

      <button type='button'
							className='btn btn-outline-success btn-sm float-right'
							disabled={IS_VISIBLE}
							onClick={onImportantTask}>
        <i className='fa fa-exclamation'/>
      </button>
    </span>
	);
};

export default TodoListItem;
