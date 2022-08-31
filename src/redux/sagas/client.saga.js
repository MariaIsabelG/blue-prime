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

function* clientSaga() {
    yield takeLatest('GET_CLIENTS', getClients)
}

export default clientSaga;