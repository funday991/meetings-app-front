import initialStore from '../store/store';
import SAVE_PROFILE from '../actions/signup';
import SENDING_DATA from '../actions/signup';
import CREATED from '../actions/signup';
import ERROR from '../actions/signup';


const newUserReducer = (state=initialStore, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        user: action.payload,
      };
    case SENDING_DATA:
      return {
        ...state,
        fetching: true,
      };
    case CREATED:
      return {
        ...state,
        created: true,
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

export default newUserReducer;
