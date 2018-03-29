import {ADD_FRUIT, CLEAR} from './actions.js';

const _defaultState = {
  fruits: []
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case ADD_FRUIT:
      return {
        fruits: [...oldState.fruits, action.fruit]
      }
    case CLEAR:
      return _defaultState;
    default:
      return _defaultState;
  }
}

export default reducer;
