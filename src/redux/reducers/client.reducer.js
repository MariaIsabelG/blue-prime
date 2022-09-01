import { combineReducers } from 'redux';

const clientList = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLIENTS':
            return action.payload;
        default:
            return state;
    }
}

const thisClient = (state = {}, action) => {
    switch (action.type) {
        case 'SET_THIS_CLIENT':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    clientList,
    thisClient
});