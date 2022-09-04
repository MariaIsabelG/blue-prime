let initialState = []
const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATES':
            return action.payload;
            
        default:
            return state;
    }
};

export default stateReducer;