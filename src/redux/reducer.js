import {
	ADD_TASK, DONE_TASK, DEL_TASK, IMPORTANT_TASK, CHANGED_ADD_INPUT, CHANGED_SEARCH_INPUT, CHANGED_FILTER,
	SET_TASKS, SET_STATUS, STATUSES_APP, EDIT_TASK, EDIT_MODE
} from './constants';

const initialState = {
	todoData: [],
	statusApp: STATUSES_APP.NOT_INIT,
	addData: '',
	editItemId: null,
	searchData: '',
	statusFilter: 'all'
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TASKS:
			return {
				...state,
				todoData: action.tasks
			};
		case SET_STATUS:
			return {
				...state,
				statusApp: action.status
			};
		case ADD_TASK: {
			return {
				...state,
				todoData: [...state.todoData, action.task],
				addData: ''
			};
		}
		case EDIT_MODE: {
			return {
				...state,
				statusApp: STATUSES_APP.IN_PROGRESS_EDIT,
				editItemId: action.id
			};
		}
		case DONE_TASK: {
			return {
				...state,
				todoData: state.todoData.map((e) => e.id === action.id ? {...e, done: !e.done} : e)
			};
		}
		case EDIT_TASK: {
			return {
				...state,
				todoData: state.todoData.map((e) => e.id === action.id ? {...e, title: action.task} : e),
				editItemId: null,
				addData: ''
			};
		}
		case IMPORTANT_TASK: {
			return {
				...state,
				todoData: state.todoData.map((e) => e.id === action.id ? {...e, important: !e.important} : e)
			};
		}
		case DEL_TASK: {
			return {
				...state,
				todoData: state.todoData.filter((e) => e.id !== action.id)
			};
		}
		case CHANGED_SEARCH_INPUT:
			return {
				...state,
				searchData: action.search
			};
		case CHANGED_ADD_INPUT:
			return {
				...state,
				addData: action.value
			};
		case CHANGED_FILTER:
			return {
				...state,
				statusFilter: action.filter
			};
		default:
			return state;
	}
};

export default todoReducer;
