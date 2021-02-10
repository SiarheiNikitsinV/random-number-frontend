import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import './index.css';

import Counter from './containers/Counter';

import * as serviceWorker from './serviceWorker';

import counterReducer from './reducers/counterReducer';

import counterSaga from './sagas/counterSaga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(counterReducer, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(counterSaga);


const app = (
  <Provider store={store}>
    <Counter />
  </Provider>
);


ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
