import { connect } from 'react-redux';

import { add, addRandomAsyncNumber } from '../../actions/counterActions';

import CounterComponent from '../../components/Counter/Counter';

import { getCounter, getIsLoading } from '../../selectors/counterSelectors';


function mapStateToProps(state) {
  return {
    counter: getCounter(state),
    isLoading: getIsLoading(state)
  }
}

const mapDispatchToProps = {
  add,
  addRandomAsyncNumber
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);