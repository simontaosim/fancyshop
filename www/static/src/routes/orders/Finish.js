import React from 'react';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import ShopName from './ShopName.js';
import Goods from './Goods.js';
import styles from './Common.css';

class Finish extends React.Component {

  constructor(props) {
    super(props)
    this.details = this.details.bind(this)
  }

  details() {
    this.props.history.push('/details')
  }
  render(){
    let data = this.props.finish;
    console.log(data)
    return (
      <div className = {styles['item-bg']} key = "test">
        <ShopName />
        {data.map(v=>(
           <Goods key = {v.name} name={v.name} spec={v.spec} price={v.price} num={v.num}/>
							))}
        <Flex justify = "end" className = {styles['total']}>
          合计1：<span className = {styles['total-font']}> ￥500</span>
        </Flex>
        <Flex justify = "end" className = {styles['btn-frame']}>
          <button className = {styles['detail-btn']} onClick = {this.details}>详情</button>
          <button className = {styles['delete-btn']}>删除订单</button>
        </Flex>
        {/* <Flex justify = "end" className = {styles['red-border']}></Flex> */}
      </div>
    )
  }
}

export default Finish;
