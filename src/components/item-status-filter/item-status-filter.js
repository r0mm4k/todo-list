import React from 'react';

import './item-status-filter.css';


const ItemStatusFilter = ({statusFilter = 'all', changeFilter}) => {

	return (
		<div className="btn-group">
			<button
				type="button"
				className={`btn ${statusFilter === 'all' ? 'btn-info' : 'btn-outline-secondary'}`}
				onClick={() => changeFilter('all')}>
				All
			</button>
			<button
				type="button"
				className={`btn ${statusFilter === 'active' ? 'btn-info' : 'btn-outline-secondary'}`}
				onClick={() => changeFilter('active')}>
				Active
			</button>
			<button
				type="button"
				className={`btn ${statusFilter === 'done' ? 'btn-info' : 'btn-outline-secondary'}`}
				onClick={() => changeFilter('done')}>
				Done
			</button>
		</div>
	);
};

export default ItemStatusFilter;
