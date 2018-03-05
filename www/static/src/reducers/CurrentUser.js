import {SET_CURRENT_USER, SET_CURRENT_USER_ERROR } from '../actions/users.js'


const initialState =  {
      "id": "",
      "username" : "",
      "profile" : {
          "mobile" : "",
          "isNewFromMobile" : false
      },
      "score" : '',
      "headurl" : "",
      "createdAt" : '',
      "logintimes" : '',
      "lastLoginTime" : '',
      "sex" : "保密",
      "nickname" : "未设置花名",
      "dataAutograph" : "我的梦想是让世界和平",
  };
export default function CurrentUser(state = initialState,action){
  switch (action.type){

    default:
    return state;
  }
}