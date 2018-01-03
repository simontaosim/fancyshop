import React from 'react';
import { Flex, Tabs, Button } from 'antd-mobile';
// import { Goods, ShopName } from './OrdersCommon';
import ShopName from './ShopName';
import Goods from './Goods';
import OrdersItem from './OrdersDetail'

class MyOrders extends React.Component {
  constructor() {
    super()
  }
  render(){
    const tabs = [
      {title:'全部'},
      {title:'待付款'},
      {title:'未处理'},
      {title:'已完成'},
      {title:'无效'},
    ]
    return(
    <div>
      <Tabs tabs = {tabs} initialPage = {5} animated = {false} useOnPan = {false} >
        <div>
          <h2>全部</h2>
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <ShopName/>
          <Goods/>
          <Goods/>
          <Flex justify = "end" style = {{marginRight:'10px'}}>
            合计：<span style = {{color:'red'}}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{margin:'10px'}}>
            <Button>详情</Button>
            <Button>取消订单</Button>
            <Button>支付</Button>
          </Flex>
          <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'150px'}}></Flex>
        </div>
        <div>
          <h2>未处理</h2>
          <ShopName/>
          <Goods/>
        </div>
        <div>
          <h2>已完成</h2>
          <ShopName/>
          <Goods/>
        </div>
        <div>
          <h2>无效</h2>
          <ShopName/>
          <Goods/>
          <ShopName/>
          <Goods/>
        </div>
      </Tabs>
    </div>
    )
  }
}

export default MyOrders;
