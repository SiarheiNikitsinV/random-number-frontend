import { createSelector } from 'reselect';


const counterSelector = state => state.counter;
const isLoadingSelector = state => state.isLoading;
const minNumberSelector = state => state.minNumber;
const maxNumberSelector = state => state.maxNumber;
const lastNumberSelector = state => state.lastNumber;

export const getCounter = createSelector(
  counterSelector, 
  counter => counter
);

export const getIsLoading = createSelector(
  isLoadingSelector,
  isLoading => isLoading
);

export const getMinNumber = createSelector(
  minNumberSelector,
  minNumber => minNumber
);

export const getMaxNumber = createSelector(
  maxNumberSelector,
  maxNumber => maxNumber
);

export const getLastNumber = createSelector(
  lastNumberSelector,
  lastNumber => lastNumber
);