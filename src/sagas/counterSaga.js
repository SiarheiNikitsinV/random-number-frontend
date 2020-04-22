import axios from 'axios';

import { put, takeEvery, all, call } from 'redux-saga/effects';


const fetchNumber = () => axios({
  method: 'GET',
  url: '/api/number',
  responseType: ''
});

function* addRandomAsyncNumber({ payload: isNegative }) {
  try {
    const data = yield call(fetchNumber);
    if (isNegative === true) {
      console.log('Add random negative number', -(data.data.number));
      yield put({ type: 'ADD', payload: -(data.data.number) });
    } else {
      console.log('Add random positive number', data.data.number);
      yield put({ type: 'ADD', payload: data.data.number });
    }      
  } catch(e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield all([        
    yield takeEvery('ADD_RANDOM_ASYNC_NUMBER/TRIGGER', addRandomAsyncNumber)
  ])
}