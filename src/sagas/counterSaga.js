import axios from 'axios';

import { addRandomAsyncNumber } from '../actions/counterActions';

import { put, takeEvery, all, call } from 'redux-saga/effects';


const fetchNumber = () => axios({
  method: 'GET',
  url: '/api/number',
  responseType: ''
});

function* fetchRandomAsyncNumber({ payload: isNegative }) {  
  try {
    yield put(addRandomAsyncNumber.request());
    const response = yield call(fetchNumber);
    if (isNegative === true) {
      console.log('Add random negative number', -(response.data.number));
      yield put(addRandomAsyncNumber.success(-(response.data.number)));
    } else {
      console.log('Add random positive number', response.data.number);
      yield put(addRandomAsyncNumber.success(response.data.number));
    }    
  } catch (error) {
    yield put(addRandomAsyncNumber.failure(error.message));
  } finally {
    yield put(addRandomAsyncNumber.fulfill());
  }
}

export default function* rootSaga() {
  yield all([      
    yield takeEvery(addRandomAsyncNumber.TRIGGER, fetchRandomAsyncNumber)
  ])
}