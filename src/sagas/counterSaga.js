import axios from 'axios';

import { put, takeEvery, all, call } from 'redux-saga/effects';

const API = 'http://localhost:5000/api/number';

const fetchNumber = () => axios({
  method: 'GET',
  url: API,
  responseType: ''
});

function* addRandomPositiveNumber() {  
  console.log('Add random positive number');
  try {
    const data = yield call(fetchNumber);
    console.log(data.data.number);
    yield put({ type: 'ADD', payload: data.data.number });
  } catch(e) {
    console.log(e);
  }
}

function* addRandomNegativeNumber() {  
  console.log('Add random negative number');
  try {
    const data = yield call(fetchNumber);
    console.log(-(data.data.number));
    yield put({ type: 'ADD', payload: -(data.data.number) });
  } catch(e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield all([    
    yield takeEvery('ADD_RANDOM_POSITIVE_NUMBER/TRIGGER', addRandomPositiveNumber),
    yield takeEvery('ADD_RANDOM_NEGATIVE_NUMBER/TRIGGER', addRandomNegativeNumber)
  ])
}