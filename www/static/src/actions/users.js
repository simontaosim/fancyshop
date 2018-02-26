import { MClient } from '../config/asteroid.config.js'


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

    let methodId = MClient.method("user.findUserById",userId);

    MClient.on("result", result => {
      if (result.id === methodId && !result.error) {
        dispatch(setCurrentUser(result.result))

      }else{
        dispatch(setCurrentUserError(result.error))

      }
    });
  }
}
//============== 用户的注册登录请求 ======================

export function login(loginType, loginParams){

}

export function mobileLogin(loginParams){

}

export function passwordLogin(loingParams){

}

export function registerLogin(regParams){

}

//=================================================
//============ 用户权限管理 ==========================
export function checkUserAccess(userId){
  
}

export function refuseUserAccess(userId){

}

export function acceptUserAccess(userId){
  
}

//===================================================


export function handleNickname(user,nickname){
  return dispatch => {
    let methodId = MClient.method("user.changeNickname",user,nickname);
     
    MClient.on('result', message => {
      if(message.id === methodId && !message.error){
        console.log("Success");
        console.log(message.result);
        dispatch(setCurrentUser(message.result))
      }else{
        console.log("Error");
        console.error(message.error);
        // dispatch(setCurrentUserError(error))
      }
    })
  }
}
