import {SET_CURRENT_USER, SET_CURRENT_USER_ERROR } from '../actions/users.js'


const initialState = {
  current_user: {
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
  },
}
export function currentUser(state = initialState,action){
  switch (action.type){
    case SET_CURRENT_USER:
    return Object.assign({}, state, {
      current_user: action.user,
    })
    default:
    return state
  }
}
