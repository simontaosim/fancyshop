import React from 'react';
import { Flex } from 'antd-mobile';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import Finish from './Finish';
import styles from './Common.css';

class Invalid extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <Finish/>
        <div style = {{backgroundColor:'#fff',marginBottom:'15px'}} >
          <ShopName/>
          <Goods/>
          <Flex justify = "end" className = {styles['total']}>
            合计：<span className = {styles['total-font']}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{margin:'10px'}}>
            <button className = {styles['detail-btn']}>详情</button>
            <button className = {styles['revoke-btn']}>撤销退款</button>
          </Flex>
        </div>
      </div>
    )
  }
}

export default Invalid;
