import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from "react-native";
import axios from 'axios';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

import { SENDING_DATA, SET_CURRENT_USER, SUCCESS, ERROR } from './constants';


export const sendingData = () => {
  return {
    type: SENDING_DATA,
  }
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const loggedIn = () => {
  return {
    type: SUCCESS,
  }
};

export const invalidLogIn = errors => {
  return {
    type: ERROR,
    payload: errors,
  }
}

export default function login(payload) {
  return dispatch => {
    dispatch(sendingData());
    axios
      .post('/api/users/login', payload)
      .then(response => {
        dispatch(loggedIn());
        const token = response.headers['x-auth'];
        AsyncStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        Actions.main();
      })
      .catch(error => {
        dispatch(invalidLogIn(error.response.data));
      });
  }
}
