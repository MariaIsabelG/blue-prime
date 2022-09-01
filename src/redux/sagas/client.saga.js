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

// function* getThisClient(action) {
//     try {
//         const response = yield axios.get(`/api/client/details/${action.payload}`);
//         yield put({type: 'SET_THIS_CLIENT', payload: response.data});
//     }
//     catch(error) {
//         console.log('error in getThisClient', error);
//     }
// }

function* updateClientStatus(action) {
    try{
        const response = yield axios.put(`/api/client/${action.payload.id}`)
        yield put({type: 'GET_CLIENTS'})

        yield console.log('response', response)
    }
    catch(error) {
        console.log('error updating client status', error);
    }
}

function* clientSaga() {
    yield takeLatest('GET_CLIENTS', getClients);
    // yield takeLatest('GET_THIS_CLIENT', getThisClient);
    yield takeLatest('UPDATE_CLIENT_STATUS', updateClientStatus);
}

export default clientSaga;