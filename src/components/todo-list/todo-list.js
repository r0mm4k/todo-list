import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({todoData, deleteTaskCreator, statusApp, doneTaskCreator, editModeCreator,
										editTaskCreator, importantTaskCreator}) => {

	const elements = todoData
		.map(({id, done, important, title, ...itemProps}) => {
			return (
				<li key={id} className='list-group-item'>
					<TodoListItem
						{...itemProps}
						title={title}
						done={done}
						important={important}
						statusApp={statusApp}
						onEditMode={() => editModeCreator(id, title)}
						editTaskCreator={editTaskCreator}
						onDeleteTask={() => deleteTaskCreator(id)}
						onCompletedTask={() => doneTaskCreator(id, !done)}
						onImportantTask={() => importantTaskCreator(id, !important)}/>
				</li>
			);
		});

	return (
		<ul className='todo-list list-group'>
			{elements}
		</ul>
	);
};

export default TodoList;
