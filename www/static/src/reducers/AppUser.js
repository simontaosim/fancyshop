import { EXPECT_LOGOUT, LOGOUT_SUCCESS, EXPECT_LOGIN_SMS_CODE, GET_LOGIN_SMS_CODE_SUCCESS } from "../actions/users";

export default function AppUser(state={
    id: '',
    username: "",
    status: 'offline',
    loginSMSCode: '',
    validSMSCode: "",
    roleName: 'nobody',
    orders: [],
    balance: {
        incomes: [],
        charges: [],
    },
    products: [],
  }, action){
    switch (action.type) {
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
        default:
            return state;
    }
  }