import { assoc } from 'lodash/fp';

import { addRandomAsyncNumber, addMinNumber, addMaxNumber, addLastNumber } from '../actions/counterActions';

import * as constants from '../utils/constants/counterConstants';


const initialState = {
  counter: 0,
  isLoading: false,
  error: null,
  minNumber: 0,
  maxNumber: 0,
  lastNumber: 0
}
  
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {    
    case constants.ADD:      
      return assoc(['counter'], state.counter + payload, state);

    case addRandomAsyncNumber.TRIGGER:      
      return assoc(['isLoading'], true, state);

    case addRandomAsyncNumber.SUCCESS:      
      return assoc(['counter'], state.counter + payload, state);

    
    case addMinNumber.SUCCESS:
      return assoc(['minNumber'], payload, state);
    case addMaxNumber.SUCCESS:
      return assoc(['maxNumber'], payload, state);
    case addLastNumber.SUCCESS:
      return assoc(['lastNumber'], payload, state);


    case addRandomAsyncNumber.FAILURE:      
      return assoc(['error'], payload, state);

    case addRandomAsyncNumber.FULFILL:      
      return assoc(['isLoading'], false, state);
    
    default:
      return state
  }
}


export default counterReducer;