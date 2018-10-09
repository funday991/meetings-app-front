export const SAVE_PROFILE = 'SAVE_PROFILE';

const createNewUser = (username, password, email) => {
  return {
    type: SAVE_PROFILE,
    user: {
      username: username,
      password: password,
      email: email,
    },
  }
}

export default createNewUser;
