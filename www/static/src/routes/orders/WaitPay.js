import React from 'react';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';

class WaitPay extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div style = {{backgroundColor:'#fff'}}>
        <ShopName/>
        <Goods/>
        <Goods/>
        <Flex justify = "end" style = {{marginRight:'10px'}}>
          合计：<span className = {styles['total-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" style = {{margin:'10px'}}>
          <Link to = '/details'><button className = {styles['detail-btn']}>详情</button></Link>
          <button className = {styles['cancel-btn']}>取消订单</button>
          <Link to = "/paid"><button className = {styles['pay-btn']} style = {{marginLeft:'15px'}}>支付</button></Link>
        </Flex>
        <Flex justify = "end" className = {styles['red-border']}></Flex>
      </div>
    )
  }
}

export default WaitPay;
