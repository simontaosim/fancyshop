import { asteroid } from '../config/asteroid.config.js'

export const EXCEPT_RECOMMAND_PRODUCTS = 'EXCEPT_RECOMMAND_PRODUCTS';
export const RECEIVE_RECOMMAND_PRODUCTS = 'RECEIVE_RECOMMAND_PRODUCTS';


function exceptRecommandProduct(){
  return {
    type: EXCEPT_RECOMMAND_PRODUCTS,
    text: '加载中',
  }
}

function receiveRecommandProduct(products){
  return {
    type: RECEIVE_RECOMMAND_PRODUCTS,
    products,
  }
}

export function loadRecommandProducts(page, pagesize){
  return dispatch => {
    dispatch(exceptRecommandProduct());
    asteroid.subscribe("home.top.products", page, pagesize);
    let products = [];
    asteroid.connect();
    asteroid.ddp.on("added", ({collection, id, fields}) => {
      if (collection === 'products') {
        if (products.length < pagesize) {
          products.push({fields, id});
          dispatch(receiveRecommandProduct(products));
        }
      }

    });
  }
}
