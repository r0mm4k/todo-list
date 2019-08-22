import React from 'react';

import './app.css';

import SearchPanelContainer from "../search-panel/search-panel-container";
import ItemStatusFilterContainer from "../item-status-filter/item-status-filter-container";
import TodoListContainer from "../todo-list/todo-list-container";
import ItemAddFormContainer from "../item-add-form/item-add-form-container";
import AppHeaderContainer from "../app-header/app-header-container";

const App = () => {
	return (
		<div className="todo-app">
			<AppHeaderContainer/>
			<div className="search-panel d-flex">
				<SearchPanelContainer/>
				<ItemStatusFilterContainer/>
			</div>
			<TodoListContainer/>
			<ItemAddFormContainer/>
		</div>
	);
};

export default App;