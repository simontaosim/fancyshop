import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';
import {getStore, setStore,removeStore} from '../config/mUtils';


const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCESS = 'LOGIN_SUCESS';
const LOGIN_OUT = 'LOGIN_OUT';
const USER_LOCALTION = 'USER_LOCATION';
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
const RET_PASSWORD = 'RET_PASSWORD';

const initState = {
  userId: '',
  authenticated: false,
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

function forgotPassword(data){
  return { type: FORGOT_PASSWORD, payload: data}
}

function resPwd(data) {
  return { type: RET_PASSWORD, payload: data}
}




export function user(state=initState,action) {
  switch(action.type){
    case LOGIN_SUCESS:
      // return {}
      let userId = action.payload;
      let authenticated = true;
      setStore('authenticated','true')
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
      removeStore('authenticated')
      return Object.assign({},state,{
        authenticated: false
      });
    case USER_LOCALTION:
      return Object.assign({},state,{

      });
    case FORGOT_PASSWORD:
      var userId = action.payload;
      var authenticated = true;
      setStore('authenticated','true')
      setStore('userId',userId)
      return Object.assign({},state,{
        userId,
        authenticated,
      });
    case RET_PASSWORD:
     var userId = action.payload;
     var authenticated = true;
     setStore('authenticated','true')
    setStore('userId',userId)
     return Object.assign({},state,{
        userId,
        authenticated,
      });
    default:
      return state
  }
}




export function login(user,pwd) {
  console.log(user)
  console.log(pwd)
    return dispatch=>{
      console.log(12314)
      asteroid.loginWithPassword({username:user,password:pwd})
      .then(result => {
        console.log(222)
       Toast.success('登陆成功', 1);
       dispatch(loginSuccess(result))
      })
      .catch(error => {
        console.log(333)
        Toast.fail('账户或者密码错误', 1);
      });
  }
}


export function loginOut(fn) {
  return dispatch=> {
     asteroid.logout()
     .then(result => {
         dispatch(loginOutSuccess(result))

     })
     .catch(error => {
     })
  }
}

export function register(username,password,mobile,verify) {
  return dispatch=> {
    let code = getStore('verify')
    if(verify===code){
        asteroid.call('users.mobile.exist',mobile)
        .then(result => {
          if(result){
            asteroid.call('createUser',{username,password})
            .then(result => {
                let userId = result.id
                let address = JSON.parse(getStore('address'));
                console.log(address);
                asteroid.call('users.update',userId,mobile,address)
                .then(result => {
                  Toast.success('注册成功',1)
                  dispatch(registerSuccess(result))
                })
                .catch(error => {
                })
            })
            .catch(error => {
                  if(error.reason==="Username already exists."){
                    Toast.fail("用户名已存在")
                  }
            })
          }
          else
          {
            Toast.info("手机已被使用")
          }
        })
    }else{
      Toast.info('验证码错误')
    }
  }
}


export function mobileRegister(mobile,verify){
  return dispatch => {
    let code = getStore('verify')
    if(verify===code){
      console.log(`mobile: ${mobile} verify: ${verify}`)
      asteroid.call('login.mobie',mobile)
      .then(result => {
        removeStore('verify')
        dispatch(loginSuccess(result))
      })
      .catch(error => {
        if(error.reason==="Username already exists."){
          Toast.fail("用户名已存在")
        }
      })
    }else{
      Toast.info('验证码错误');
    }

  }
}


//忘记密码

export function forgotPwd(mobile,verify){
  return dispatch => {
    console.log(verify)
    console.log(mobile)
    let code = getStore('verify')
    console.log(code);
    if(verify===code){
      console.log(123)
      asteroid.call('forgot.mobile',mobile)
      .then(result => {
        // removeStore('verify')
        // console.log(`result: ${result}`)
        dispatch(forgotPassword(result))
      })
      .catch(error => {
        console.log(error);
      })
    }else{
      Toast.info('验证码错误');
    }
  }
}

//重置密码

export function resetPWd(user,pwd) {
  return dispatch => {
    console.log(user);
    console.log(`pwd: ${pwd}`)
    asteroid.call('set.password',user,pwd)
    .then(result => {
      console.log(`result: ${result}`)
      dispatch(resPwd(result))
    })
    .catch(error => {
      console.log(error);
    })
  }
}
