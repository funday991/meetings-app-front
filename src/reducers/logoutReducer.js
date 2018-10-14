import initialStore from '../store/store';
import LOGGING_OUT from '../actions/login';
import LOGGED_OUT from '../actions/login';
import ERROR from '../actions/login';


const logInReducer = (state=initialStore, action) => {
  switch (action.type) {
    case LOGGING_OUT:
      return {
        ...state,
        fetching: true,
      };
    case LOGGED_OUT:
      return {
        user: initialStore.user,
        loggedOut: true,
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

export default logOutReducer;
