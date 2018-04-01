import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Flex} from 'antd-mobile';
import style from './RecommandProducts.css';
import MyActivityIndicator  from '../common/MyActivityIndicator';
import { relative } from 'path';
class RecommandProducts extends React.Component {
  render(){
    console.log(this.props);
    
    let { homeProducts } = this.props;
    return(
      <div  style = {{backgroundColor:'#fff',padding:'10px'}}>
      <div className = {style['recommend-frame']}>
        <span className = {style['recommend-font']}>火爆推荐</span>
        <Flex justify = "between">
          {
              this.props.homeProducts.map((product,index)=>{
                return (
                  <Link to = {"product/"+product._id} key={index}>
                    <div className = {style['test']}>
                      <img src = {product.cover} alt = {product.name} className = {style['good-img']}/>
                      <h2 style={{
                        textAlign: "center"
                      }}>{product.name_zh}</h2>
                      <h3 style={{
                        textAlign: "center",
                        position: "relative",
                        top: "-10px",
                      }}>{product.brief}</h3>
                      <div style={{
                        textAlign: "center",
                        position: "relative",
                        top: "-10px",
                        width: "90%"
                      }}>
                      <span className = {style['price-now']}>现价：￥{product.endPrice/100}</span>
                      <span　className = {style['reward']}>佣金：2％</span>
                      </div>
                     
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
    homeProducts: state.Home.products
  }
}


export default connect(mapRecommandProducts)(RecommandProducts);
