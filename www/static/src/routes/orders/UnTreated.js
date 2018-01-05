import React from 'react';
import { Flex } from 'antd-mobile';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';

class UnTreated extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className = {styles['item-bg']}>
        <ShopName/>
        <Goods/>
        <Flex justify = "end" className ={styles['total']}>
          合计：<span className = {styles['tatal-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" className = {styles['btn-frame']}>
          <button className = {styles['detail-btn']}>详情</button>
          <a href = "#/refund">
            <button className = {styles['refund-btn']}>申请退款</button>
          </a>
          <button className = {styles['qr-btn']}>二维码</button>
        </Flex>
        <Flex justify = "end" className = {styles['red-border']}></Flex>
      </div>
    )
  }
}

export default UnTreated;
