import { createSelector } from 'reselect';


const counterSelector = state => state.counter;

export const getCounter = createSelector(
  counterSelector, 
  counter => counter
);
