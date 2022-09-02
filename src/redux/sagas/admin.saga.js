import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAgents() {
	try {
		const response = yield axios.get(`/api/admin/agents`);
		yield put({ type: 'SET_AGENTS', payload: response.data });
	} catch (error) {
		console.log('error in getAgents', error);
	}
}

function* getAllClients() {
	try {
		const response = yield axios.get(`/api/admin/clients`);
		yield put({ type: 'SET_ALL_CLIENTS', payload: response.data });
	} catch (error) {
		console.log('error in getAllClients', error);
	}
}

function* updateAgent(action) {
	const { id, firstName, lastName, company, phoneNumber, email } = action.payload;
	try {
		yield axios.put(`/api/admin/agents/${id}`, {
			firstName,
			lastName,
			company,
			phoneNumber,
			email,
		});
		yield put({ type: 'GET_AGENTS' });
	} catch (error) {
		console.log('error in updateAgents', error);
	}
}

function* deleteAgent(action) {
	try {
		yield axios.delete(`/api/admin/agents/${action.payload}`);
		yield put({ type: 'GET_AGENTS' });
	} catch (error) {
		console.log('error in deletingAgent', error);
	}
}

function* updateClient(action) {
	const { id, firstName, lastName, state, phoneNumber, email, zip } = action.payload;
	try {
		yield axios.put(`/api/admin/clients/${id}`, {
			firstName,
			lastName,
			state,
			phoneNumber,
			email,
			zip,
		});
		yield put({ type: 'GET_ALL_CLIENTS' });
	} catch (error) {
		console.log('error in updateClients', error);
	}
}

function* adminSaga() {
	yield takeLatest('GET_AGENTS', getAgents);
	yield takeLatest('GET_ALL_CLIENTS', getAllClients);
	yield takeLatest('UPDATE_AGENT', updateAgent);
	yield takeLatest('DELETE_AGENT', deleteAgent);
	yield takeLatest('UPDATE_CLIENT', updateClient);
}

export default adminSaga;
