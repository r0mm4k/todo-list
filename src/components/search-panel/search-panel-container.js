import {connect} from "react-redux";

import * as actions from '../../redux/actions';
import SearchPanel from "./search-panel";

const mapStateToProps = ({todo: {searchData}}) => ({searchData});

const SearchPanelContainer = connect(mapStateToProps, actions)(SearchPanel);


export default SearchPanelContainer;
