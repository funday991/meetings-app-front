import { SENDING_DATA, SUCCESS, SAVE_MSG, STORE_MSGS } from '../actions/constants';


const initialStore = {
  fetching: false,
  messages: []
};

const msgReducer = (state=initialStore, action) => {
  switch(action.type) {
    case SENDING_DATA:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        fetching: false,
      }
    case SAVE_MSG:
      return {
        ...state,
        messages: state.messages.concat([action.payload])
      }
    case STORE_MSGS:
      return {
        ...state,
        messages: action.payload
      }
    default:
      return state;
  }
}

export default msgReducer;
