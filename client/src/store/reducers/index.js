import {combineReducers} from 'redux';
import customerReducer from './customer';
import testReducer from './test';

export default combineReducers({
  customers: customerReducer,
  test: testReducer
})
