import { assoc } from 'lodash/fp';

import * as constants from '../utils/constants/counterConstants';


const initialState = {
  counter: 0
}
  
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {    
    case constants.ADD:      
      return assoc(['counter'], state.counter + payload, state);
    default:
      return state
  }
}


export default counterReducer;