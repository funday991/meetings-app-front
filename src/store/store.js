import newUserReducer from '../reducers/newUserReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


export const initialStore = {
  user: {
    username: '',
    email: '',
    password: '',
  },
  errors: {},
}

const store = createStore(newUserReducer, applyMiddleware(thunk));
export default store;
