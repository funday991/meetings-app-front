import newUserReducer from '../reducers/newUserReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


export const initialStore = {
  user: {
    username: '',
    password: '',
    email: '',
  },
}

const store = createStore(newUserReducer, applyMiddleware(thunk));
export default store;
