import React from 'react';
import { Flex, Tabs, Button } from 'antd-mobile';
// import { Goods, ShopName } from './OrdersCommon';
import ShopName from './ShopName';
import Goods from './Goods';
import OrdersItem from './OrdersDetail';
import Paid from './paid';
import UnTreated from './UnTreated';
import WaitPay from './WaitPay';
import Finish from './Finish';
import Invalid from './Invalid';

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
    <div className = "all">
      <Tabs tabs = {tabs} initialPage = {5} animated = {false} useOnPan = {false} >
        <div style = {{backgroundColor:'#fff',paddingBottom:'10px'}}>
          <WaitPay/>
          <UnTreated/>
          <Finish/>
          <Invalid/>
        </div>
        <div className = "waitpay" style = {{backgroundColor:'#fff'}}>
          <WaitPay/>
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <UnTreated/>
        </div>
        <div className = "finish" style = {{backgroundColor:'#fff'}}>
          <Finish/>
        </div>
      <div className = "invalid">
        <div style = {{backgroundColor:'#fff',marginBottom:'15px'}}>
          <Finish/>
          </div>
          <div style = {{backgroundColor:'#fff'}} >
          <ShopName/>
          <Goods/>
          <Flex justify = "end" style = {{marginRight:'10px'}}>
            合计：<span style = {{color:'red'}}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{margin:'10px'}}>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'8px',width:'70px',padding:'6px'}}>详情</button>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'8px',width:'80px',padding:'6px'}}>撤销退款</button>
          </Flex>
          </div>
      </div>
      </Tabs>
    </div>
    )
  }
}

export default MyOrders;
