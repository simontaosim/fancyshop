import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Flex} from 'antd-mobile';
import style from './RecommandProducts.css';
import MyActivityIndicator  from '../common/MyActivityIndicator';
class RecommandProducts extends React.Component {
  render(){
    let { recommandProducts } = this.props;
    return(
      <div  style = {{backgroundColor:'#fff',padding:'10px'}}>
      <MyActivityIndicator isFetching={recommandProducts.isFetching}/>
      <div className = {style['recommend-frame']}>
        <span className = {style['recommend-font']}>火爆推荐</span>
        <Flex justify = "between">
          {
              this.props.recommandProducts.products.map((product,index)=>{
                return (
                  <Link to = {"product/"+product._id} key={index}>
                    <div className = {style['test']}>
                      <img src = {product.cover} alt = {product.name} className = {style['good-img']}/>
                      <span className = {style['price-now']}>现价：￥{product.endPrice/100}</span>
                      <span　className = {style['reward']}>佣金：2％</span>
                    </div>
                  </Link>
                )
              })
          }
        </Flex>
      </div>
    </div>
    )
  }
}

function mapRecommandProducts(state){
  return {
    recommandProducts: state.recommandProductsReducer
  }
}


export default connect(mapRecommandProducts)(RecommandProducts);
