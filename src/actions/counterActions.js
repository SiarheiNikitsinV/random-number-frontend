import { createAction } from 'redux-actions';

import * as constants from '../utils/constants/counterConstants';

export const add = createAction(constants.ADD, payload => payload);
export const addRandomAsyncNumber = createAction(constants.ADD_RANDOM_ASYNC_NUMBER, payload => payload);






