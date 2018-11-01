import { Actions } from 'react-native-router-flux';
import axios from 'axios';


export const SAVE_PROFILE = 'SAVE_PROFILE';
export const SENDING_DATA = 'SENDING_DATA';
export const CREATED = 'CREATED';
export const ERROR = 'ERROR';

export const saveNewUser = (user) => {
  return {
    type: SAVE_PROFILE,
    payload: user,
  }
};

export const sendingNewData = () => {
  return {
    type: SENDING_DATA,
  }
};

export const createdUser = () => {
  return {
    type: CREATED,
  }
};

export const invalidCreation = (errors) => {
  return {
    type: ERROR,
    payload: errors,
  }
}

export default function createNewUser(payload) {
  return dispatch => {
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
