const newLeads = (state = [], action) => {
	switch (action.type) {
		case 'SET_NEW_LEADS':
			return action.payload;
		default:
			return state;
	}
};

export default newLeads;
