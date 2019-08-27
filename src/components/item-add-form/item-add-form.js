import React from 'react';

import { STATUSES_APP } from "../../redux/constants";

import './item-add-form.css';

const ItemAddForm = ({statusApp, addData, addTaskCreator, changeAddInput, editItemId, editTaskCreator}) => {

	const btnName = statusApp === STATUSES_APP.IN_PROGRESS_EDIT ? 'Edit Item' : 'Add Item';

	return (
		<form
			className='bottom-panel d-flex'
			onSubmit={(e) => {
				e.preventDefault();
				STATUSES_APP.IN_PROGRESS_EDIT  ? editTaskCreator (editItemId, addData): addTaskCreator(addData);
			}}>
			<input type='text'
						 className='form-control new-todo-label'
						 placeholder='What needs to be done?'
						 onChange={(event) => changeAddInput(event.target.value)}
						 value={addData}
						 disabled={statusApp === STATUSES_APP.IN_PROGRESS_APP}
						 required/>
			<button
				type='submit'
				className='btn btn-outline-secondary'
				disabled={statusApp === STATUSES_APP.IN_PROGRESS_APP}>
				{btnName}
			</button>
		</form>
	);
};

export default ItemAddForm;
