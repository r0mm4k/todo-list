import {
	ADD_TASK, DONE_TASK, DEL_TASK, IMPORTANT_TASK, CHANGED_ADD_INPUT, CHANGED_SEARCH_INPUT, CHANGED_FILTER,
	SET_TASKS, SET_STATUS, STATUSES_APP, EDIT_TASK, EDIT_MODE
} from './constants';

import TodoService from "../services/todo";

//initial object api
const todoApi = new TodoService();

//action-creators
export const addTask = (task) => ({type: ADD_TASK, task});
export const doneTask = (id) => ({type: DONE_TASK, id});
export const deleteTask = (id) => ({type: DEL_TASK, id});
export const editMode = (id) => ({type: EDIT_MODE, id});
export const editTask = (id, task) => ({type: EDIT_TASK, id, task});
export const importantTask = (id) => ({type: IMPORTANT_TASK, id});
export const changeSearchInput = (search) => ({type: CHANGED_SEARCH_INPUT, search});
export const changeAddInput = (value) => ({type: CHANGED_ADD_INPUT, value});
export const changeFilter = (filter) => ({type: CHANGED_FILTER, filter});
export const setTasks = (tasks) => ({type: SET_TASKS, tasks});
export const setStatus = (status) => ({type: SET_STATUS, status});

//thunk-creators
export const setTasksCreator = () => (dispatch) => {
	dispatch(setStatus(STATUSES_APP.IN_PROGRESS_INIT));

	todoApi.getAllTask()
		.then((tasks) => {
			dispatch(setTasks(tasks));
			dispatch(setStatus(STATUSES_APP.SUCCESS));
		});
};

export const deleteTaskCreator = (id) => (dispatch) => {
	dispatch(setStatus(STATUSES_APP.IN_PROGRESS_APP));

	todoApi.deleteTask(id)
		.then((id) => {
			dispatch(deleteTask(id));
			dispatch(setStatus(STATUSES_APP.SUCCESS));
		});
};

export const addTaskCreator = (title) => (dispatch) => {

	const clearTitle = title.trim();

	if (!!clearTitle) {
		dispatch(setStatus(STATUSES_APP.IN_PROGRESS_APP));

		todoApi.addTask(clearTitle)
			.then((task) => {
				dispatch(addTask(task));
				dispatch(setStatus(STATUSES_APP.SUCCESS));
			});
	}
};

export const doneTaskCreator = (id, done) => (dispatch) => {
	dispatch(setStatus(STATUSES_APP.IN_PROGRESS_APP));

	todoApi.doneTask(id, done)
		.then((id) => {
			dispatch(doneTask(id));
			dispatch(setStatus(STATUSES_APP.SUCCESS));
		});
};

export const importantTaskCreator = (id, important) => (dispatch) => {
	dispatch(setStatus(STATUSES_APP.IN_PROGRESS_APP));

	todoApi.importantTask(id, important)
		.then((id) => {
			dispatch(importantTask(id));
			dispatch(setStatus(STATUSES_APP.SUCCESS));
		});
};

export const editModeCreator = (id, task) => (dispatch) => {
	dispatch(editMode(id));
	dispatch(changeAddInput(task));
};

export const editTaskCreator = (id, task) => (dispatch, getState) => {

	const clearTitle = task.trim();
	const {todo: {todoData}} = getState();

	if (!!clearTitle && !todoData.find(({title}) => title === clearTitle)) {
		dispatch(setStatus(STATUSES_APP.IN_PROGRESS_APP));
		todoApi.editTask(id, task)
			.then((id) => {
				dispatch(editTask(id, task));
				dispatch(setStatus(STATUSES_APP.SUCCESS));
			});
	} else {
		dispatch(changeAddInput(''));
		dispatch(setStatus(STATUSES_APP.SUCCESS));
	}
};
