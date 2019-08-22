import { applyMiddleware, combineReducers, createStore } from 'redux';
import todoReducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	todo: todoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(
	() => console.log(store.getState())
);

export default store;
