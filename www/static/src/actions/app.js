import { MClient } from '../config/asteroid.config.js'


export const SET_APP_TIILE = "SET_APP_TIILE";

export const SET_APP_CITY = "SET_APP_CITY";
export const SET_HOME_TAGS = "SET_HOME_TAGS";
export const SET_APP_TITLE_NAME = "SET_APP_TITLE_NAME";
export function setAppTitle(path){
  return {
    type: SET_APP_TIILE,
    path
  }
}

export function setAppTitleName(title){
  return {
    type: SET_APP_TITLE_NAME,
    title
  }
}

export function setAppCity(city){
  return {
    type: SET_APP_CITY,
    city
  }
}

export function setHomeTags(tags){
  return {
    type: SET_HOME_TAGS,
    tags
  }
}

export function getHomeTags(){
  console.log('getHomeTags');
  return dispatch => {
    MClient.sub("home.tags");
    MClient.connect();
    let tags = [];
    MClient.on("added", ({collection, id, fields}) => {
      if (collection === 'tags') {
        if (tags.length < 5) {
          tags.push({fields, id});
        }
        dispatch(setHomeTags(tags));
      }

    });
  }
}

export function getHotProduct(){

}
