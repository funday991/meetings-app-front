import initialStore from '../store/store';
import SAVE_PROFILE from '../actions/signup';


const newUserReducer = (state=initialStore, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
}

export default newUserReducer;
