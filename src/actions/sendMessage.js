import axios from 'axios';
import { SENDING_DATA, SUCCESS, SAVE_MSG } from './constants';


export const sending = () => ({
   type: SENDING_DATA
});

export const sent = () => ({
  type: SUCCESS
});

export const save = msg => ({
  type: SAVE_MSG,
  payload: msg
})

export default function saveMessage(payload) {
  return dispatch => {
    dispatch(sending());
    axios
      .post('/api/chat', payload)
      .then(res => {
        dispatch(sent());
        dispatch(save(res.data));
      })
      .catch(e => alert(e));
  }
}
