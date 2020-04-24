import { assoc } from 'lodash/fp';

import { addRandomAsyncNumber } from '../actions/counterActions';

import * as constants from '../utils/constants/counterConstants';


const initialState = {
  counter: 0,
  isLoading: false,
  error: null
}
  
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {    
    case constants.ADD:      
      return assoc(['counter'], state.counter + payload, state);

    case addRandomAsyncNumber.TRIGGER:      
      return assoc(['isLoading'], true, state);

    case addRandomAsyncNumber.SUCCESS:      
      return assoc(['counter'], state.counter + payload, state);

    case addRandomAsyncNumber.FAILURE:      
      return assoc(['error'], payload, state);

    case addRandomAsyncNumber.FULFILL:      
      return assoc(['isLoading'], false, state);
    
    default:
      return state
  }
}


export default counterReducer;