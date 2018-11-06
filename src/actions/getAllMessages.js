import axios from 'axios';
import { SENDING_DATA, SUCCESS, STORE_MSGS } from './constants';


export const queryingMsgs = () => ({
   type: SENDING_DATA
});

export const gotMsgs = () => ({
  type: SUCCESS
});

export const storeMsgs = msgs => ({
  type: STORE_MSGS,
  payload: msgs
})

export default function getMessages() {
  return dispatch => {
    dispatch(queryingMsgs());
    axios
      .get('/api/chat')
      .then(res => {
        dispatch(gotMsgs());
        dispatch(storeMsgs(res.data));
      })
      .catch(e => alert(e));
  }
}
