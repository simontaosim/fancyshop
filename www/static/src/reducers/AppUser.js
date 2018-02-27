import { EXPECT_LOGOUT, LOGOUT_SUCCESS, EXPECT_LOGIN_SMS_CODE, GET_LOGIN_SMS_CODE_SUCCESS, GET_LOGIN_SMS_CODE_FAIL, LOGIN_SMS_CODE_FEED_BACK, EXPECT_LOGIN } from "../actions/users";

export default function AppUser(state={
    id: '',
    username: "",
    loginStatus: "notWoken",
    status: 'offline',
    loginSMSCode: '',
    validSMSCode: "",
    roleName: 'nobody',
    loginSMSCodeFeedBackTimes: 0,
    orders: [],
    balance: {
        incomes: [],
        charges: [],
    },
    products: [],
  }, action){
    switch (action.type) {
        case EXPECT_LOGIN:
            return Object.assign({}, state, {
                loginStatus: "logining",
            })
        case EXPECT_LOGOUT:
            return Object.assign({}, state, {
                status: 'logouting'
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                status: 'offline'
            });
        case EXPECT_LOGIN_SMS_CODE:
            return Object.assign({}, state, {
                loginSMSCode: "loading",
            });
        case GET_LOGIN_SMS_CODE_SUCCESS:
            return Object.assign({}, state, {
                    loginSMSCode: action.code,
            })
        case GET_LOGIN_SMS_CODE_FAIL:
            return  Object.assign({}, state, {
                loginSMSCode: "error",
            })    
        case LOGIN_SMS_CODE_FEED_BACK:  
            return  Object.assign({}, state, {
                loginSMSCodeFeedBackTimes: action.feedBackTimes,
            })
        default:
            return state;
    }
  }