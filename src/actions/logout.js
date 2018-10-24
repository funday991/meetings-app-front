import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { AsyncStorage } from "react-native";
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';


export const LOGGING_OUT = 'SENDING_DATA';
export const ERROR = 'ERROR';
export const LOGGED_OUT = 'LOGGED_IN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

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

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export default function logout() {
  return dispatch => {
    dispatch(loggingOut());
    AsyncStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    dispatch(loggedOut());
    Actions.auth();
  }
}
