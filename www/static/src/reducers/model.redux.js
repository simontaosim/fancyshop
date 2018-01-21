import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';


const OPEN_SPEC_MODEL = "OPEN_SPEC_MODEL";
const CLOSE_SPEC_MODEL = "CLOSE_SPEC_MODEL";


const initialState = {
  spec_model: false,
}
export function model(state=initialState,action) {
  switch(action.type){
    case OPEN_SPEC_MODEL:
    let spec_status = action.payload;
    return Object.assign({},state,{spec_model: true,spec_status})
      break;
    case CLOSE_SPEC_MODEL:
    // let spec_status = false;
    return Object.assign({},state,{spec_model: false,spec_status:false})
      break;
    default:
      return state
  }
}

export function openSpecModel(data=false) {
  return { type: OPEN_SPEC_MODEL ,payload: data }
}


export function closeSpecModel() {
  return { type: CLOSE_SPEC_MODEL, payload: false }
}
