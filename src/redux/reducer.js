import {
	ADD_TASK, DONE_TASK, DEL_TASK, IMPORTANT_TASK, CHANGED_ADD_INPUT, CHANGED_SEARCH_INPUT, CHANGED_FILTER,
	SET_TASKS, SET_STATUS, STATUSES_APP
} from './constants';

const initialState = {
	todoData: [],
	statusApp: STATUSES_APP.NOT_INIT,
	addData: '',
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
		case DONE_TASK: {
			return {
				...state,
				todoData: state.todoData.map((e) => e.id === action.id ? {...e, done: !e.done} : e)
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
