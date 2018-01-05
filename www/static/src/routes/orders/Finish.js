import React from 'react';
import { Flex } from 'antd-mobile';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';

class Finish extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div className = {styles['item-bg']}>
        <ShopName/>
        <Goods/>
        <Flex justify = "end" className = {styles['total']}>
          合计：<span className = {styles['total-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" className = {styles['btn-frame']}>
          <button className = {styles['detail-btn']}>详情</button>
          <button className = {styles['delete-btn']}>删除订单</button>
        </Flex>
        <Flex justify = "end" className = {styles['red-border']}></Flex>
      </div>
    )
  }
}

export default Finish;
