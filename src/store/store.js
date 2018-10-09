import newUserReducer from '../reducers/newUserReducer';
import { createStore } from 'redux';
import SAVE_PROFILE from '../actions/signup';

export const initialStore = {
  user: {
    username: 'anonim',
    password: '',
    email: '',
  },
}

const store = createStore(newUserReducer);
export default store;
