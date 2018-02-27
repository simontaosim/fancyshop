import { MClient } from '../config/asteroid.config.js'

export const EXPECT_LOGIN = "EXPECT_LOGIN";

export const EXPECT_LOGOUT = "EXPECT_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const EXPECT_LOGIN_SMS_CODE = "EXPECT_LOGIN_SMS_CODE";
export const GET_LOGIN_SMS_CODE_SUCCESS = "GET_LOGIN_SMS_CODE_SUCCESS";
export const GET_LOGIN_SMS_CODE_FAIL="GET_LOGIN_SMS_CODE_FAIL";
export const LOGIN_SMS_CODE_FEED_BACK="LOGIN_SMS_CODE_FEED_BACK";

const crypto = require('crypto');

//============== 用户的注册登录 ======================

export function expectLoginSMSCode(){
    return {
        type: EXPECT_LOGIN_SMS_CODE,
    }
}
export function getLoginSMSCodeSuccess(code){
    return {
        type: GET_LOGIN_SMS_CODE_SUCCESS,
        code
    }
}
export function getLoginSMSCodeFail(){
    return {
        type: GET_LOGIN_SMS_CODE_FAIL,
    }
}

export function loginSMSCodeFeedBack(feedBackTimes){
  return {
    type: LOGIN_SMS_CODE_FEED_BACK,
    feedBackTimes
  }
}

export function getLoginSMSCode(mobile){
    return dispatch => {
        dispatch(expectLoginSMSCode());
        dispatch(loginSMSCodeFeedBack(1));
        let methodId = MClient.method('get.phonesms', [mobile]);
        MClient.on("result", message => {
            if (message.id === methodId && !message.error) {
                //加密验证码
                let hash = crypto.createHash('sha256');
                let cryptoCode = hash.update(message.result).digest('hex');
                dispatch(getLoginSMSCodeSuccess(cryptoCode));
                dispatch(loginSMSCodeFeedBack(2));
                
            }else{
                dispatch(getLoginSMSCodeFail());
                dispatch(loginSMSCodeFeedBack(2));                
            }
        });
    }
}

export function expectLogin(){
    return {
        type: EXPECT_LOGIN,
    }
}

export function login(loginType, loginParams){
    console.log(loginParams);
    return dispatch => {
        dispatch(expectLogin());
        switch (loginType) {
            case "mobileSMS":
                dispatch(mobileLogin(loginParams));
                break;
            case "password":
                dispatch(passwordLogin(loginParams));
            default:
                break;
        }
    }
}

export function mobileLogin(loginParams){
    console.log(loginParams);
    return {
        loginParams,
    }
}

export function passwordLogin(loginParams){

    return dispatch=>{
      let methodId = MClient.method('login', [loginParams]);
      MClient.on("result", message => {
        if(message.id === methodId && !message.error){

        }else{

        }
      })
  }
}

export function registerLogin(regParams){

}
export function expectLogout(){
    return {
        type: EXPECT_LOGOUT,
    }
}
export function logout(){
    return dispatch => {
        dispatch(expectLogout());
        let methodId = MClient.method('logout');
        MClient.on('result', message=>{
            if(message.id === methodId && !message.error){
                dispatch(logoutSuccess());
            }else{
                console.error(message.error);
            }
        })
    }
}

export function logoutSuccess(){
    return {
        type: LOGOUT_SUCCESS,
    }
}

//=================================================
//============ 用户权限管理 ==========================
export function checkUserAccess(userId){
  
}

export function checkUserLogined(userId){

}

export function refuseUserAccess(userId){

}

export function acceptUserAccess(userId){
  
}

//===================================================

//===============获取登录用户的信息==========================
export function expectUserInfo(){

}
export function loadUserInfo(){

}
export function loadUserInfoError(){

}
//=========================================================
//===============载入用户信息==========================================
export function expectUserById(id){

}
export function loadUserById(id){

}
export function expectUsersAsFollows(){

}
//=======================================


