import {SET_APP_TIILE} from '../actions/app.js'

export function AppInfo(state={
  title: "万人车汇",
  path: "/",
  location: {
    planet: "地球",
    country: '中国',
    province: "北京市",
    city: '北京市',
    rectangle: '116.0119343,39.66127144;116.7829835,40.2164962',
    adcode: '110000',
  }
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
