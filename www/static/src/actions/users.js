import { asteroid } from '../config/asteroid.config.js'


export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_USER_ERROR = "SET_CURRENT_USER_ERROR";


export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  }
}
export function setCurrentUserError(error){
  return {
    type: SET_CURRENT_USER_ERROR,
    error
  }
}
export function getCurrentUser(userId){
  return dispatch => {
    asteroid.call("user.findUserById",userId)
      .then(result => {
          console.log("Success");
          console.log(result);
          dispatch(setCurrentUser(result))
      })
      .catch(error => {
          console.log("Error");
          console.error(error);
          dispatch(setCurrentUserError(error))
      });
  }
}

