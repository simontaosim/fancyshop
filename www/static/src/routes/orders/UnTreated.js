import React from 'react';
import { Flex } from 'antd-mobile';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';
import { connect } from 'react-redux';

class UnTreated extends React.Component {
  constructor(props) {
    super(props);
    this.untreated = this.untreated.bind(this)
    this.refund = this.refund.bind(this)
    this.qrcode = this.qrcode.bind(this)
  }

  untreated(){
    this.props.history.push('/untreated')
  }
  refund(){
    this.props.history.push('/refund')
  }
  qrcode(){
    this.props.history.push('/qrcode')
  }

  render(){
    const {untreated}  = this.props
    return (
      <div className = {styles['item-bg']}>
        <ShopName/>
         {untreated.map(v=>(
           <Goods key = {v.name} name={v.name} spec={v.spec} price={v.price} num={v.count}/>
							))}
        <Flex justify = "end" className ={styles['total']}>
          合计：<span className = {styles['total-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" className = {styles['btn-frame']}>
          <button className = {styles['detail-btn']} onClick = {this.untreated}>详情</button>
          <button className = {styles['refund-btn']} onClick = {this.refund}>申请退款</button>
          <button className = {styles['qr-btn']} onClick = {this.qrcode}>二维码</button>
        </Flex>
        {/* <Flex justify = "end" className = {styles['red-border']}></Flex> */}

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