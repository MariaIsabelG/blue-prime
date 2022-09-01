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

function* adminSaga() {
	yield takeLatest('GET_AGENTS', getAgents);
	yield takeLatest('GET_ALL_CLIENTS', getAllClients);
}

export default adminSaga;
