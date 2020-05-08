import React from 'react';

import CounterLoader from './CounterLoader';

import './Counter.sass';


const Counter = ({ counter, isLoading, add, addRandomAsyncNumber, minNumber, maxNumber, lastNumber}) => {  

  return (
    <div className="container counterWrapper text-center">
      <div className="counter">Counter: {isLoading ? <CounterLoader /> : counter}</div>          
      
      <div className="counterButtons">
        <button onClick={() => add(1)}>Add 1</button>
        <button onClick={() => add(-1)}>Sub 1</button>                
        <button onClick={() => addRandomAsyncNumber()}>Add random positive number</button>    
        <button onClick={() => addRandomAsyncNumber(true)}>Add random negative number</button>   
      </div>      

      <div className="counter">Min number: {isLoading ? <CounterLoader /> : minNumber}</div>
      <div className="counter">Max number: {isLoading ? <CounterLoader /> : maxNumber}</div>
      <div className="counter">Last created number: {isLoading ? <CounterLoader /> : lastNumber}</div>
    </div>
  );
}


export default Counter;