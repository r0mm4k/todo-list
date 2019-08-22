//selectors
export const searchSelector = (items, search) => {
	return items.filter(({title}) => title.toLowerCase().indexOf(search.toLowerCase().trim()) > -1)
};

export const filterSelector = (items, filter) => {
	switch (filter) {
		case 'all':
			return items;
		case 'active':
			return items.filter((e) => !e.done);
		case 'done':
			return items.filter((e) => e.done);
		default:
			return items;
	}
};

export const todoSelector = (todoData) => {
	return todoData.filter((e) => !e.done).length;
};

export const doneSelector = (todoData) => {
	return todoData.filter((e) => e.done).length
};