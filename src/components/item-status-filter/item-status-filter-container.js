import {connect} from "react-redux";

import * as actions from '../../redux/actions';

import ItemStatusFilter from "./item-status-filter";

const mapStateToProps = ({todo: {statusFilter}}) => ({statusFilter});

const ItemStatusFilterContainer = connect(mapStateToProps, actions)(ItemStatusFilter);

export default ItemStatusFilterContainer;
