import { Actions } from 'react-native-router-flux';
import axios from 'axios';


export const SENDING_DATA = 'SENDING_DATA';
export const ERROR = 'ERROR';
export const LOGGED_IN = 'LOGGED_IN';

export const sendingData = () => {
  return {
    type: SENDING_DATA,
  }
};

export const loggedIn = (user) => {
  return {
    type: LOGGED_IN,
    payload: user,
  }
}

export const invalidLogIn = () => {
  return {
    type: ERROR,
    payload: 'Invalid data',
  }
}

export default function login(payload) {
  return dispatch => {
    dispatch(sendingData());
    axios
      .post(`/rest-auth/login/`, payload)
      .then(response => {
        const { token, user } = response.data;
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        dispatch(loggedIn({
          username: payload.username,
          password: payload.password,
          email: user.email,
        }));
        Actions.main();
      })
      .catch(error => {
        alert(error);
        dispatch(invalidLogIn());
      });
  }
}
