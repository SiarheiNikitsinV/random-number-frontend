import { connect } from 'react-redux';

import { add, addRandomAsyncNumber } from '../../actions/counterActions';

import CounterComponent from '../../components/Counter/Counter';

import { getCounter, getIsLoading, getMinNumber, getMaxNumber, getLastNumber } from '../../selectors/counterSelectors';


function mapStateToProps(state) {
  return {
    counter: getCounter(state),
    isLoading: getIsLoading(state),
    minNumber: getMinNumber(state),
    maxNumber: getMaxNumber(state),
    lastNumber: getLastNumber(state)
  }
}

const mapDispatchToProps = {
  add,
  addRandomAsyncNumber  
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);