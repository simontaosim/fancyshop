
import configureStore from "../stores/index";
import createHistory from 'history/createHashHistory';
import { ConnectedRouter } from 'react-router-redux'

const history = createHistory();


const store = configureStore();

function getCurrentUser(){

}

class CurrentUser {

  static init(){

  }
  static login(params){

  }
  static isLogined(){

    return false;
  }
  static getId(){
    return store.getState().CurrentUser.id;
  }
  static getName(){
    console.log('getName');
  }

}
export default CurrentUser;
