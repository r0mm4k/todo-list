import React from 'react';

import './search-panel.css';

const SearchPanel = ({searchData, changeSearchInput}) => {

	return (
		<input type="text"
					 className="form-control search-input"
					 placeholder="type to search"
					 value={searchData}
					 onChange={(event => changeSearchInput(event.target.value))}/>
	);
};

export default SearchPanel;
