import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';
import {getStore, setStore,removeStore} from '../config/mUtils';


const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCESS = 'LOGIN_SUCESS';
const LOGIN_OUT = 'LOGIN_OUT';
const USER_LOCALTION = 'USER_LOCATION';

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

export function getLocation(data){
  return { type: USER_LOCALTION, payload: data }
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
      // removeStore('authenticated')
      return Object.assign({},state,{
        authenticated: false
      })
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
        console.log('登陆后:')
        console.log(result);
       Toast.success('登陆成功', 1);
       dispatch(loginSuccess(result))
      })
      .catch(error => {
        Toast.fail('账户或者密码错误', 1);
      });
  }
}


export function loginOut(fn) {
  console.log(`退出`)
  return dispatch=> {
     asteroid.logout()
     .then(result => {
         dispatch(loginOutSuccess(result))
        
     })
     .catch(error => {
     })
  }
}

export function register(username,password,mobile) {
  return dispatch=> {
      asteroid.call('users.mobile.exist',mobile)
      .then(result => {
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
  }
}


export function mobileRegister(mobile,verify){
  return dispatch => {
    let code = getStore('verify')
    if(verify===code){
      console.log(`mobile: ${mobile} verify: ${verify}`)
      asteroid.call('login.mobie',mobile)
      .then(result => {
        console.log(result);
        removeStore('verify')
        dispatch(loginSuccess(result))
      })
      .catch(error => {
        console.log(error);
      })
    }else{
      Toast.info('验证码错误');
    }
   
  }
}