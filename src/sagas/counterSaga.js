import axios from 'axios';
import _ from 'lodash';

import { addRandomAsyncNumber, addMinNumber, addMaxNumber, addLastNumber } from '../actions/counterActions';

import { put, takeEvery, all, call } from 'redux-saga/effects';


const postNumber = (number, time) => axios.post('/add', `value=${number}&time=${time}`);

const fetchNumber = () => {

  const number = Math.round(Math.random() * 100);
  const time = new Date();
  postNumber(number, time);

  return axios({
    method: 'GET',
    url: '/api/numbers',
    responseType: ''
  });
};


function* fetchRandomAsyncNumber({ payload: isNegative }) {  
  try {
    yield put(addRandomAsyncNumber.request());     
    
    const response = yield call(fetchNumber);    
    const minNumber = _.minBy(response.data, n => n.value);
    const maxNumber = _.maxBy(response.data, n => n.value);
    const lastNumber = _.maxBy(response.data, n => n.createdAt);

    if (isNegative === true) {  
      yield put(addRandomAsyncNumber.success(-(lastNumber.value)));

      yield put(addMinNumber.success(minNumber.value));
      yield put(addMaxNumber.success(maxNumber.value));
      yield put(addLastNumber.success(lastNumber.value));

    } else {
      yield put(addRandomAsyncNumber.success(lastNumber.value));

      yield put(addMinNumber.success(minNumber.value));
      yield put(addMaxNumber.success(maxNumber.value));
      yield put(addLastNumber.success(lastNumber.value));
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