import {SET_APP_TIILE} from '../actions/app.js'

export function AppSetting(state={
  title: "万人车汇"
},action){
  switch (action.type) {
    case SET_APP_TIILE:
      return state;
    default:
      return state;
  }
}
