import { connect } from 'react-redux';

import AppHeader from '../app-header/app-header';
import { doneSelector, todoSelector } from '../../redux/selectors';

const mapStateToProps = ({todo: {todoData}}) => {
	return {
		todo: todoSelector(todoData),
		done: doneSelector(todoData)
	}
};

const AppHeaderContainer = connect(mapStateToProps)(AppHeader);

export default AppHeaderContainer;
