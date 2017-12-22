import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';
import {getStore, setStore,removeStore} from '../config/mUtils';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCESS = 'LOGIN_SUCESS';
const LOGIN_OUT = 'LOGIN_OUT';
const USER_LOCALTION = 'USER_LOCATION';

const initState = {
  userId: '',
  authenticated: false 
}

function loginSuccess(data) {
  return { type:LOGIN_SUCESS, payload: data}
}

function loginOutSuccess(data) {
  return { type: LOGIN_OUT, payload: data}
}
function registerSuccess(data){
  return { type: REGISTER_SUCCESS, payload: data}
}

export function getLocation(data){
  return { type: USER_LOCALTION, payload: data }
}



export function user(state=initState,action) {
  switch(action.type){
    case LOGIN_SUCESS:
      // return {}
      let userId = action.payload;
      let authenticated = true;
      setStore('authenticate','true')
      return Object.assign({}, state, {
        userId,
        authenticated,
      });
    case REGISTER_SUCCESS:
      var userId = action.payload;
      var authenticated = true;
      return Object.assign({}, state, {
        userId,
        authenticated,
      });
    case LOGIN_OUT:
      removeStore('authenticate')
      return {user: '',authenticated: false}
    case USER_LOCALTION:
      return Object.assign({},state,{

      })
    default:
      return state
  }
}




export function login(user,pwd) {
    return dispatch=>{
      asteroid.loginWithPassword({username:user,password:pwd})
      .then(result => {
       Toast.success('登陆成功', 1);
       dispatch(loginSuccess(result))
      })
      .catch(error => {
        Toast.fail('账户或者密码错误', 1);
        console.log(123);
          console.log("Error");
          console.error(error);
      });
  }
}


export function loginOut() {
  return dispatch=> {
     asteroid.logout()
     .then(result => {
         dispatch(loginOutSuccess(result))
     })
     .catch(error => {
        // console.log('')
     })
  }
}

export function register(username,password,mobile) {
  // let address = getStore('address');
  // console.log(address);
  return dispatch=> {
    console.log(mobile);
      asteroid.call('users.mobile.exist',mobile)
      .then(result => {
        console.log('走这里')
        if(result){
          asteroid.call('createUser',{username,password})
          .then(result => {
              let userId = result.id
              let address = JSON.parse(getStore('address'));
              asteroid.call('users.update',userId,mobile,address)
              .then(result => {
                Toast.success('注册成功',1)
                dispatch(registerSuccess(result))
              })
              .catch(error => {
                console.log('注册失败')
                  console.log(error);
              })
          })
          .catch(error => {
                if(error.reason=="Username already exists."){
                  Toast.fail("用户名已存在")
                } 
          })
        }
        else
        {
          Toast.info("手机已被使用") 
        }
      })
    
     
    // console.log(username);
    // asteroid.call('createUser', {username, password})
    // .then(result => {
    //   console.log(result.id);
    //   let userId = result.id
    //   asteroid.call('users.update',userId,mobile)
    //   .then(result => {
    //       console.log(result);
    //   })
    //   .catch(error => {
    //       console.log(error);
    //   })
    //   // Toast.success('注册成功',1)
    //   // dispatch(registerSuccess(result))
    // })
    // .catch(error => {
    //   console.log(error.reason);
    //   if(error.reason=="Username already exists."){
    //     Toast.fail("用户名已存在")
    //   }
    // }) 
  }
}