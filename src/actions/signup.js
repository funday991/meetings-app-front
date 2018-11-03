import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { SENDING_DATA, SUCCESS, ERROR } from './constants';


export const sendingNewData = () => {
  return {
    type: SENDING_DATA,
  }
};

export const createdUser = () => {
  return {
    type: SUCCESS,
  }
};

export const invalidCreation = errors => {
  return {
    type: ERROR,
    payload: errors,
  }
}

export default function createNewUser(payload) {
  return dispatch => {
    dispatch(sendingNewData());
    axios
      .post('/api/users/register', payload)
      .then(response => {
        dispatch(createdUser());
        Actions.auth();
      })
      .catch(error => {
        dispatch(invalidCreation(error.response.data));
      });
  }
}
