import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postClient(action) {
    try{
        console.log('SAGA POST CLIENT:', action.payload);
        yield axios.post('/api/client', action.payload)
    }
    catch (error){
        console.log('ERROR SAGA POST CLIENT:', error);
    }
}

function* clientForm() {
    yield takeLatest('POST_CLIENT', postClient);
  }
  
  export default clientForm;