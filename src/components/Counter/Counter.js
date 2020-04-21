import React from 'react';

import './Counter.sass';


const Counter = ({ counter, onAdd, onSub, onAddRandomPositiveNumber, onAddRandomNegativeNumber }) => {  

  return (
    <div className="container counterWrapper text-center">
      <div className="counter">Counter: {counter}</div>
      
      <div className="counterButtons">
        <button onClick={onAdd}>Add 1</button>
        <button onClick={onSub}>Sub 1</button>     
            
        <button onClick={onAddRandomPositiveNumber}>Add random positive number</button>    
        <button onClick={onAddRandomNegativeNumber}>Add random negative number</button>   
      </div>      
    </div>
  );
}


export default Counter;