import { INCREMENT } from '../actions/test';
const defaultState = {
    counter: 0
};

const testReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
      case INCREMENT:
        return {
            ...state,
            counter: state.counter + 1
        }
      default:
        return state
    }
}

export default testReducer;