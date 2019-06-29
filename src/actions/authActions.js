

import { GET_ERRORS, SET_CURRENT_USER } from './types';






// Set logged in user
export const loginUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
