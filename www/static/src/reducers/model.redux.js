import { MClient } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';


const OPEN_SPEC_MODEL = "OPEN_SPEC_MODEL";
const CLOSE_SPEC_MODEL = "CLOSE_SPEC_MODEL";


const initialState = {
  spec_model: false,
  way: 'add_cart',
}
export function model(state=initialState,action) {
  switch(action.type){
    case OPEN_SPEC_MODEL:
    let spec_status = action.payload;
    let way = action.way
    return Object.assign({},state,{spec_model: true,spec_status,way})
      break;
    case CLOSE_SPEC_MODEL:
    return Object.assign({},state,{spec_model: false,spec_status:false})
      break;
    default:
      return state
  }
}

export function openSpecModel(data=false,way='add_cart') {
  return { type: OPEN_SPEC_MODEL ,payload: data, way } 
}


export function closeSpecModel() {
  return { type: CLOSE_SPEC_MODEL, payload: false }
}
