import {SET_APP_TIILE, SET_APP_CITY, SET_HOME_TAGS, SET_APP_TITLE_NAME, SET_LEFT_BACK_TO } from '../actions/app.js'

export function AppInfo(state={
  title: "万人车汇",
  appName: "万人车汇",
  navBarHidden: false,
  path: "/",
  leftBackPath: "",
  homeTags: [],
  location: {
    planet: "地球",
    country: '中国',
    province: "北京市",
    city: '北京市',
    rectangle: '116.0119343,39.66127144;116.7829835,40.2164962',
    adcode: '110000',
    citySelectModal: false,

  }
},action){
  switch (action.type) {
    case SET_LEFT_BACK_TO:
      return Object.assign({}, state, {
        leftBackPath: action.path,
      })
    case SET_APP_TIILE:
      let title = state.title;
      let navBarHidden = false;
      if (action.path ==='/') {
        title = "万人车汇";
        document.title = title;
      }
      if (action.path === '/messages') {
        title = "消息";
        document.title = title;

      }
      if (action.path === '/my') {
        title = "我的";

        navBarHidden = true;
      }
      return Object.assign({}, state, {
        title,
        navBarHidden,
        path: action.path,
      });
    case SET_APP_CITY:
      return Object.assign({}, state, {
        location: {
          city: action.city,
        }
      });
    case SET_HOME_TAGS:
      return Object.assign({}, state, {
        homeTags: action.tags,
      });

    case SET_APP_TITLE_NAME:
      document.title=action.title
      return  Object.assign({}, state, {
        title: action.title,
      });

    default:
      return state;
  }
}
