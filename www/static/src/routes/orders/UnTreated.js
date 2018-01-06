import React from 'react';
import { Flex } from 'antd-mobile';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';
import UntreatedDetail from './UntreatedDetail';
import QrCode from './qrcode.js';

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
          合计：<span className = {styles['total-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" className = {styles['btn-frame']}>
          <a href = "#/untreated">
          <button className = {styles['detail-btn']}>详情</button>
          </a>
          <a href = "#/refund">
            <button className = {styles['refund-btn']}>申请退款</button>
          </a>
          <a href = "#/qrcode">
          <button className = {styles['qr-btn']}>二维码</button>
        </a>
        </Flex>
        <Flex justify = "end" className = {styles['red-border']}></Flex>

      </div>
    )
  }
}

export default UnTreated;
