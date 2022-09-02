import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import clients from './client.reducer';
import article from './article.reducer';
import agentList from './agents.reducer';
import allClients from './allClients.reducer';
import stateReducer from './states.reducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({

  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  clients,
  article,//hold selected article information
	agentList,
	allClients,
  stateReducer,

});

export default rootReducer;
