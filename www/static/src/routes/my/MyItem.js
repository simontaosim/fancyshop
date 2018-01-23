import React from 'react';
import { Flex, List, Badge,WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import s from "./MyItem.css";

class MyItem extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
    <div>
      <div className = {s['card-item-border']}>
        <Flex justify = "center" >
          <Flex.Item align = "center">
            <Link to = "/wallet">
            <img src={require('../svg/bwallat.svg')}  className = {s['card-svg']}/>
            <p>我的钱包</p>
            </Link>
          </Flex.Item>
          <Flex.Item align = "center">
            <img src={require('../svg/card.svg')}  className = {s['card-svg']}/>
            <p>卡包</p>
          </Flex.Item>
          <Flex.Item align = "center">
            <img src={require('../svg/coupon.svg')} className = {s['card-svg']}/>
            <p>优惠券</p>
          </Flex.Item>
        </Flex>
      </div>
      <WhiteSpace/>
      <div className = {s['item-border']}>
        <Link to = '/orders'>
        <List.Item extra="全部订单" arrow="horizontal" className = {s['am-list-extra']}>
          <Badge text={0} style={{ marginLeft:" 12 "}}>
            <img src={require('../svg/orders.svg')}  className = {s['order-svg']}/><span className = {s['order-span']}>我的订单</span></Badge>
        </List.Item>
      </Link>

      <Flex justify = "between" align = "center" className = {s['item-order-border']}>

        <Flex justify="center" align="center">
          <img src={require('../svg/wait.svg')}  className = {s['status-svg']}/>
          <span>待付款</span>
        </Flex>
        <Flex justify="center" align="center">
          <img src={require('../svg/no.svg')} className = {s['status-svg']}/>
          <span>未处理</span>
        </Flex>
        <Flex justify="center" align="center">
          <img src={require('../svg/success.svg')}  className = {s['status-svg']}/>
          <span>已完成</span>
        </Flex>
        <Flex justify="center" align="center">
          <img src={require('../svg/close.svg')}  className = {s['status-svg']}/>
          <span>已失效</span>
        </Flex>
      </Flex>
      </div>
      <Flex className = {s['item-border']}>
        <List.Item>
        <img src={require('../svg/details.svg')}  className = {s['fish-svg']}/>
        <span className = {s['fish-span']}>新手指导</span>
        </List.Item>
      </Flex>
    </div>

    )
  }
}

export default MyItem;
