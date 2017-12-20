import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
const LOGIN_OUT = 'LOGIN_OUT'
const IS_LOGIN = 'LS_LOGIN'

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



export function user(state=initState,action) {
  switch(action.type){
    case LOGIN_SUCESS:
      // return {}
      let userId = action.payload;
      let authenticated = true;
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
      return {user: '',authenticated: false}
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
  return dispatch=> {
    console.log(username);
    asteroid.call('createUser', {username, password})
    .then(result => {
      console.log(result.id);
      let userId = result.id
      asteroid.call('users.update',userId,mobile)
      .then(result => {
          console.log(result);
      })
      .catch(error => {
          console.log(error);
      })
      // Toast.success('注册成功',1)
      // dispatch(registerSuccess(result))
    })
    .catch(error => {
      console.log(error.reason);
      if(error.reason=="Username already exists."){
        Toast.fail("用户名已存在")
      }
    }) 
  }
}