import { createAction } from 'redux-actions';
import { createRoutine } from 'redux-saga-routines';

import * as constants from '../utils/constants/counterConstants';


export const add = createAction(constants.ADD);

export const addRandomAsyncNumber = createRoutine(constants.ADD_RANDOM_ASYNC_NUMBER);






