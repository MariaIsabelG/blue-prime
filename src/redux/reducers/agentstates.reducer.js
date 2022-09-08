
const agentstates = (state = [], action) => {
    switch (action.type) {
        case 'ADD_STATES':
            return [...state, action.payload]
            
        case 'REMOVE_STATES':
            return state.filter(state => state !== action.payload);
        
        case 'CLEAR_STATES':
            return []
            
        default:
            return state;
    }
};

export default agentstates;