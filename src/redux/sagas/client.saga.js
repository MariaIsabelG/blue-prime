import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getClients(action) {
    try {
        const response = yield axios.get(`/api/client/${action.payload}`);
        yield put({type: 'SET_CLIENTS', payload: response.data});
    }
    catch(error) {
        console.log('error in getClients', error);
    }
}

function* getThisClient(action) {
    try {
        const response = yield axios.get(`/api/client/details/${action.payload}`);
        yield put({type: 'SET_THIS_CLIENT', payload: response.data});
    }
    catch(error) {
        console.log('error in getThisClient', error);
    }
}

function* clientSaga() {
    yield takeLatest('GET_CLIENTS', getClients);
    yield takeLatest('GET_THIS_CLIENT', getThisClient);
}

export default clientSaga;