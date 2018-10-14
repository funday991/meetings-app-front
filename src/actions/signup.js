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

export const invalidCreation = () => {
  return {
    type: ERROR,
    payload: 'Invalid data',
  }
}

export default function createNewUser(payload) {
  return dispatch => {
    dispatch(sendingNewData());
    axios
      .post(`/rest-auth/registration/`, payload)
      .then(response => {
        const { token, user } = response.data;
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        dispatch(saveNewUser({
          username: payload.username,
          password: payload.password1,
          email: payload.email,
        }));
        dispatch(createdUser());
        Actions.main();
      })
      .catch(error => {
        alert(error);
        dispatch(invalidCreation());
      });
  }
}
