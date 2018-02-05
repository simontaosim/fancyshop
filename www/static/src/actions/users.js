import { asteroid } from '../config/asteroid.config.js'


export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_USER_ERROR = "SET_CURRENT_USER_ERROR";
export const CHANGE_USER_NICKNAME = "CHANGE_USER_NICKNAME";

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
// export function changeNickname(nickname){
//   return {
//     type: CHANGE_USER_NICKNAME,
//     nickname
//   }
// }

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


export function handleNickname(user,nickname){
  return dispatch => {
    asteroid.call("user.changeNickname",user,nickname)
      .then(result => {
          console.log("Success");
          console.log(result);
          dispatch(setCurrentUser(result))
      })
      .catch(error => {
          console.log("Error");
          console.error(error);
          // dispatch(setCurrentUserError(error))
      });
  }
}
