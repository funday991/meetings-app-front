import SENDING_DATA from '../actions/constants';
import ERROR from '../actions/constants';
import SUCCESS from '../actions/constants';
import SET_CURRENT_USER from '../actions/constants';


const initialStore = {
    isAuthenticated: false,
    user: {},
    fetching: false,
}


const logInReducer = (state=initialStore, action) => {
  switch (action.type) {
    case SENDING_DATA:
      return {
        ...state,
        fetching: true,
      };
    case SUCCESS:
      return {
        ...state,
        fetching: false,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload,
      }
    default:
      return state;
  }
}

export default logInReducer;
