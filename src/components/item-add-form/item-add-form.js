import React from 'react';

import { STATUSES_APP } from "../../redux/constants";

import './item-add-form.css';

const ItemAddForm = ({statusApp, addData, addTaskCreator, changeAddInput}) => {

	return (
		<form
			className='bottom-panel d-flex'
			onSubmit={(e) => {
				e.preventDefault();
				addTaskCreator(addData);
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
				Add Item
			</button>
		</form>
	);
};

export default ItemAddForm;
