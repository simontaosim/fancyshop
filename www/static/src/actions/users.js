import { MClient } from '../config/asteroid.config.js'


export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_USER_ERROR = "SET_CURRENT_USER_ERROR";
export const CHANGE_USER_NICKNAME = "CHANGE_USER_NICKNAME";


//============== 用户的注册登录 ======================

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


