import { createSelector } from 'reselect';


export const getCounter = (state) => {
  return state.counter;
}

export const getCounterSuperSelector = createSelector(getCounter, (counter) => {
  return counter;
});
