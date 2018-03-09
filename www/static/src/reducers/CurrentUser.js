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
    "nickname" : "花名",
    "dataAutograph" : "xxx",
  };
export default function CurrentUser(state = initialState,action){
  switch (action.type){
    case 'SET_CURRENT_USER':
    
    return action.user
    default:
    return state
  }
}