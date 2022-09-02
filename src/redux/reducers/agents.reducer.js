const agentList = (state = [], action) => {
	switch (action.type) {
		case 'SET_AGENTS':
			return action.payload;
		default:
			return state;
	}
};

export default agentList;
