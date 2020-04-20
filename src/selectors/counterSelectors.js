import { createSelector } from 'reselect';


export const getCounter = (state) => {
  return state.counter;
}

export const getCounterSuperSelector = createSelector(getCounter, (counter) => {
  return counter;
});

export const getRandomNumber = (state) => {
  return state.randomNumber;
}

export const getRandomNumberSuperSelector = createSelector(getRandomNumber, (randomNumber) => {
  return randomNumber;
})