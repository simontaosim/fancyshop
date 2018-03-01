import React from 'react';
import { connect } from 'react-redux';

import { Flex } from 'antd-mobile';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';

class Finish extends React.Component {
  render(){ 
    const{ finish} = this.props;
    return (
      <div className = {styles['item-bg']} key = "test">
        <ShopName />
        {finish.map(v=>(
           <Goods key = {v.name} name={v.name} spec={v.spec} price={v.price} num={v.count}/>
							))}
        <Flex justify = "end" className = {styles['total']}>
          合计1：<span className = {styles['total-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" className = {styles['btn-frame']}>
          <button className = {styles['detail-btn']} >详情</button>
          <button className = {styles['delete-btn']}>删除订单</button>
        </Flex>
        {/* <Flex justify = "end" className = {styles['red-border']}></Flex> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    finish: state.ordersInfo.orders,
    user: state.user
  }
}

export default connect(mapStateToProps)(Finish);