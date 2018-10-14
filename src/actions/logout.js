import { Actions } from 'react-native-router-flux';
import axios from 'axios';


export const LOGGING_OUT = 'SENDING_DATA';
export const ERROR = 'ERROR';
export const LOGGED_OUT = 'LOGGED_IN';

export const loggingOut = () => {
  return {
    type: LOGGING_OUT,
  }
};

export const loggedOut = (user) => {
  return {
    type: LOGGED_OUT,
  }
}

export const invalidLogOut = () => {
  return {
    type: ERROR,
    payload: 'Invalid request',
  }
}

export default function logout() {
  return dispatch => {
    dispatch(loggingOut());
    axios
      .post(`/rest-auth/logout/`)
      .then(response => {
        dispatch(loggedOut());
        Actions.auth();
      })
      .catch(error => {
        alert(error);
        dispatch(invalidLogOut());
      });
  }
}
