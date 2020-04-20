import React from 'react';
import { connect } from 'react-redux';

import { add, sub, addRandomPositiveNumber, addRandomNegativeNumber } from '../../actions/counterActions';

import Counter from '../../components/Counter/Counter';

import { getCounter } from '../../selectors/counterSelectors';


const App = (props) => (
  <Counter 
    counter={props.counter}    
    onAdd={props.onAdd} 
    onSub={props.onSub}      
    onAddRandomPositiveNumber={props.onAddRandomPositiveNumber}
    onAddNegativeRandomNumber={props.onAddRandomNegativeNumber}
  />
);


function mapStateToProps(state) {
  return {
    counter: getCounter(state)    
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    onAdd: () => dispatch(add(1)),
    onSub: () => dispatch(sub(1)),
    onAddRandomPositiveNumber: () => dispatch(addRandomPositiveNumber()),
    onAddRandomNegativeNumber: () => dispatch(addRandomNegativeNumber())    
  }  
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
