export const SET_APP_TIILE = "SET_APP_TIILE";
export const SET_APP_CITY = "SET_APP_CITY";

export function setAppTitle(path){
  return {
    type: SET_APP_TIILE,
    path
  }
}

export function setAppCity(city){
  return {
    type: SET_APP_CITY,
    city
  }
}
