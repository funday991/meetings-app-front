import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { AsyncStorage } from "react-native";
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

import { SENDING_DATA, SET_CURRENT_USER, SUCCESS } from './constants';


export const loggingOut = () => {
  return {
    type: SENDING_DATA,
  }
};

export const loggedOut = () => {
  return {
    type: SUCCESS,
  }
};

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
