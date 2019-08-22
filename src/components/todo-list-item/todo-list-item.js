import React from 'react';

import './todo-list-item.css';
import { STATUSES_APP } from "../../redux/constants";

const TodoListItem = ({title, done = false, important = false, statusApp, onDeleteTask, onCompletedTask, onImportantTask}) => {

	return (
		<span
			className={`todo-list-item ${done ? 'completed' : ''} ${important ? 'important' : ''}`}>
      <span
				className={`todo-list-item-label ${statusApp === STATUSES_APP.IN_PROGRESS_APP ? 'disabled' : ''}`}
				onClick={statusApp === STATUSES_APP.IN_PROGRESS_APP ? null : onCompletedTask}>
        {title}
      </span>
			<button type='button'
							className='btn btn-outline-danger btn-sm float-right'
							disabled={statusApp === STATUSES_APP.IN_PROGRESS_APP}
							onClick={onDeleteTask}>
        <i className='fa fa-trash-o'/>
      </button>

			<button type='button'
							className='btn btn-outline-warning btn-sm float-right'
							disabled={statusApp === STATUSES_APP.IN_PROGRESS_APP}
							onClick={() => alert('in-progress')}>
        <i className='fa fa-pencil'/>
      </button>

      <button type='button'
							className='btn btn-outline-success btn-sm float-right'
							disabled={statusApp === STATUSES_APP.IN_PROGRESS_APP}
							onClick={onImportantTask}>
        <i className='fa fa-exclamation'/>
      </button>
    </span>
	);
};

export default TodoListItem;
