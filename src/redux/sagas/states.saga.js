import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchStates(action) {
    try{
        const response = yield axios.get('/api/user/states');
        yield put({ type: 'SET_STATES', payload: response.data });
    }
    catch (error){
        console.log('ERROR SAGA GET STATES:', error);
    }
}

function* allStates() {
    yield takeLatest('FETCH_STATES', fetchStates);
  }
  
  export default allStates;