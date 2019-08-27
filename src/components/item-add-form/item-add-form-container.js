import { connect } from "react-redux";
import * as actions from '../../redux/actions';

import ItemAddForm from "./item-add-form";

const mapStateToProps = ({todo: {statusApp, addData, editItemId}}) => ({statusApp, addData, editItemId});

const ItemAddFormContainer = connect(mapStateToProps, actions)(ItemAddForm);
export default ItemAddFormContainer;
