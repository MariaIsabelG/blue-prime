import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getClients(action) {
    try {

    }
    catch(error) {
        console.log('error in getClients', error);
    }
}

function* clientSaga() {
    yield takeLatest('GET_CLIENTS', getClients)
}

export default clientSaga