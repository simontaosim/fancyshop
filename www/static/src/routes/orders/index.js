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
          <div style = {{paddingTop:'20px'}}>
            <ShopName/>
          </div>
          <Goods/>
          <Goods/>
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <ShopName/>
          <Goods/>
          <Goods/>
          <Flex justify = "end" style = {{marginRight:'10px'}}>
            合计：<span style = {{color:'red'}}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{margin:'10px'}}>
            <Button><a href = '#/details'>详情</a></Button>
            <Button>取消订单</Button>
            <Button>支付</Button>
          </Flex>
          <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'150px'}}></Flex>
        </div>
        <div style = {{backgroundColor:'#fff',marginBottom:'10px'}}>
          <ShopName/>
          <Goods/>
          <Flex justify = "end" style = {{marginRight:'10px'}}>
            合计：<span style = {{color:'red'}}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{}}>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'70px',padding:'6px'}}>详情</button>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'80px',padding:'6px'}}>申请退款</button>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'70px',padding:'6px'}}>二维码</button>
          </Flex>
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
