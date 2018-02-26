import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';

class WaitPay extends React.Component {
  constructor(props) {
    super(props)
    this.paid = this.paid.bind(this)
    this.details = this.details.bind(this)
  }

  paid(){
    this.props.history.push('/paid')
  }
  details(){
    this.props.history.push('/details')
  }

  render(){

    // console.log('waitpay')
    let {waitpay,shop} = this.props
    console.log(waitpay)
   waitpay = waitpay === undefined ? []: waitpay
    // if( waitpay === undefined){
    //   waitpay = []
    // }else{
    //   waitpay = this.props.waitpay
    // }
    return(
      <div className = {styles['item-bg']}>

        <ShopName shop={shop}/>

         {waitpay.map(v=>(
           <Goods key = {v.name}  name={v.name} spec={v.spec} price={v.price} num={v.count}/>
							))}
        <Flex justify = "end" style = {{marginRight:'10px'}}>
          合计：<span className = {styles['total-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" style = {{margin:'10px',paddingBottom:'10px'}}>
          <button className = {styles['detail-btn']} onClick = {this.details}>详情</button>
          <button className = {styles['cancel-btn']}>取消订单</button>
          <button className = {styles['pay-btn']} style = {{marginLeft:'15px'}} onClick = {this.paid}>支付</button>
        </Flex>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    waitpay: state.ordersInfo.orders,
    user: state.user
  }
}

export default connect(mapStateToProps)(WaitPay);