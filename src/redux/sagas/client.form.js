import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postClient(action) {
	try {
		console.log('SAGA POST CLIENT:', action.payload);
		yield axios.post('/api/client', action.payload);
	} catch (error) {
		console.log('ERROR SAGA POST CLIENT:', error);
	}
}

// POSSIBLE WORK AROUND FOR MATCHING AGENTS WITHOUT SQL TRANSACTIONS
// function* postClient(action) {
// 	try {
// 		//? Post the client info and return their ID
// 		const clientId = yield axios.post('/api/client', action.payload);
// 		// yield console.log('HERE IS THE NEW CLIENT ID', clientId.data[0].id);
// 		//? SELECT agents that have matching state and order by last-lead limit 3
// 		const agents = yield axios.get(`/api/client/matches/${action.payload.state}`);
// 		// yield console.log('HERE ARE MATCHED AGENTS', agents.data);
// 		//? Insert agent and their lead into the leads table
// 		yield axios.post('/api/client/lead', { clientId, agentArray: agents.data });
// 		//? Update each agents last lead so next people for a lead is correct
// 		yield axios.put('/api/client/lead', { agentArray: agents.data });
// 	} catch (error) {
// 		console.log('ERROR SAGA POST CLIENT:', error);
// 	}
// }

function* clientForm() {
	yield takeLatest('POST_CLIENT', postClient);
}

export default clientForm;
