import React, { Component } from 'react';
import { connect } from "react-redux";

import TodoList from './todo-list';
import Loader from "../loader/loader";

import * as actions from '../../redux/actions';
import { STATUSES_APP } from "../../redux/constants";
import { filterSelector, searchSelector } from '../../redux/selectors';

class TodoListContainer extends Component {

	componentDidMount() {
		const {setTasksCreator} = this.props;
		setTasksCreator();
	}

	render() {
		const {statusApp} = this.props;

		if (statusApp === STATUSES_APP.IN_PROGRESS_INIT) {
			return <Loader/>
		}
		return <TodoList {...this.props}/>
	}
}

const mapStateToProps = ({todo: {todoData, searchData, statusFilter, statusApp}}) => {
	return {
		todoData: filterSelector(searchSelector(todoData, searchData), statusFilter),
		statusApp
	}
};

export default connect(mapStateToProps, actions)(TodoListContainer);
