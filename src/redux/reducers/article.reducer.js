const articleReducer = (state = {}, action) => {
    switch (action.type) {
        case 'HOLD_ARTICLE':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default articleReducer;