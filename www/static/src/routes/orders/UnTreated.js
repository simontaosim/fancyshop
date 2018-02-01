import React from 'react';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';
import UntreatedDetail from './UntreatedDetail';
import QrCode from './QrCode.js';
import { connect } from 'react-redux';

class UnTreated extends React.Component {
  constructor() {
    super();
  }

  render(){
    const {untreated}  = this.props
    return (
      <div className = {styles['item-bg']}>
        <ShopName/>
         {untreated.map(v=>(
           <Goods name={v.name} spec={v.spec} price={v.price} num={v.count}/>
							))}
        <Flex justify = "end" className ={styles['total']}>
          合计：<span className = {styles['total-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" className = {styles['btn-frame']}>
          <Link to = "/untreated">
            <button className = {styles['detail-btn']}>详情</button>
          </Link>
          <Link to = "/refund">
            <button className = {styles['refund-btn']}>申请退款</button>
          </Link>
          <Link to = "/qrcode">
            <button className = {styles['qr-btn']}>二维码</button>
          </Link>
        </Flex>
        <Flex justify = "end" className = {styles['red-border']}></Flex>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    untreated: state.ordersInfo.orders,
    user: state.user
  }
}

export default connect(mapStateToProps)(UnTreated);