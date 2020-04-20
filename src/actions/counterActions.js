import { createRoutine } from 'redux-saga-routines';
import { createAction } from 'redux-actions';

import * as constants from '../utils/constants/counterConstants';


export const add = createAction(constants.ADD, payload => payload);
export const sub = createAction(constants.SUB, payload => payload);

export const addRandomPositiveNumber = createRoutine(constants.ADD_RANDOM_POSITIVE_NUMBER);
export const addRandomNegativeNumber = createRoutine(constants.ADD_RANDOM_NEGATIVE_NUMBER);





