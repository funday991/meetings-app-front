import { ERROR } from '../actions/constants';

const initialStore = {};

export default function(state=initialStore, action) {
  switch(action.type) {
    case ERROR:
      return action.payload;
    default:
      return state;
  }
}
