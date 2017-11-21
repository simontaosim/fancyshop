import {SET_APP_TIILE} from '../actions/app.js'

export function AppInfo(state={
  title: "万人车汇",
  path: "/"
},action){
  switch (action.type) {
    case SET_APP_TIILE:
      let title = state.title;
      if (action.path ==='/') {
        title = "万人车汇";
      }
      if (action.path === '/messages') {
        title = "消息"
      }
      return Object.assign({}, state, {
        title,
        path: action.path,
      });
    default:
      return state;
  }
}
