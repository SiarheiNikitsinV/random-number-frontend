import React from 'react';
import { connect } from 'react-redux';

import { add, addRandomAsyncNumber } from '../../actions/counterActions';

import CounterComponent from '../../components/Counter/Counter';

import { getCounter } from '../../selectors/counterSelectors';


function mapStateToProps(state) {
  return {
    counter: getCounter(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    onAdd: () => dispatch(add(1)),    
    onSub: () => dispatch(add(-1)),    
    onAddRandomPositiveNumber: () => dispatch(addRandomAsyncNumber()),
    onAddRandomNegativeNumber: () => dispatch(addRandomAsyncNumber(true))     
  }  
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);