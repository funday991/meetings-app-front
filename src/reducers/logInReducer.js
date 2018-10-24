import initialStore from '../store/store';
import SENDING_DATA from '../actions/login';
import LOGGED_IN from '../actions/login';
import ERROR from '../actions/login';
import SET_CURRENT_USER from '../actions/login';
import isEmpty from '../validation/is-empty';


const logInReducer = (state=initialStore, action) => {
  switch (action.type) {
    case SENDING_DATA:
      return {
        ...state,
        fetching: true,
      };
    case LOGGED_IN:
      return {
        user: action.payload,
        loggedIn: true,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default logInReducer;
