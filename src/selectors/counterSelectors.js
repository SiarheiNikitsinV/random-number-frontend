import { createSelector } from 'reselect';


const counterSelector = state => state.counter;
const isLoadingSelector = state => state.isLoading;

export const getCounter = createSelector(
  counterSelector, 
  counter => counter
);

export const getIsLoading = createSelector(
  isLoadingSelector,
  isLoading => isLoading
);