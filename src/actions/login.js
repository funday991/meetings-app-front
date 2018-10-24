import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from "react-native";
import axios from 'axios';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';


export const SENDING_DATA = 'SENDING_DATA';
export const ERROR = 'ERROR';
export const LOGGED_IN = 'LOGGED_IN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

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

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
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
    axios
      .post('/api/users/login', payload)
      .then(response => {
        const { token } = response.data;
        AsyncStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(loggedIn({
          email: payload.email,
          password: payload.password,
        }));
        dispatch(setCurrentUser(decoded));
        Actions.main();
      })
      .catch(error => {
        alert(error);
        dispatch(invalidLogIn());
      });
  }
}
