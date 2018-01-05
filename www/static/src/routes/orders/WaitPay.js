import React from 'react';
import { Flex } from 'antd-mobile';
import ShopName from './ShopName.js';
import Goods from './Goods.js';

class WaitPay extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div style = {{backgroundColor:'#fff'}}>
        <ShopName/>
        <Goods/>
        <Goods/>
        <Flex justify = "end" style = {{marginRight:'10px'}}>
          合计：<span style = {{color:'red'}}> ￥500</span>
        </Flex>
        <Flex justify = "end" style = {{margin:'10px'}}>
          <a href = '#/details'><button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'80px',padding:'6px',marginRight:'15px'}}>详情</button></a>
          <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'80px',padding:'6px',marginRight:'15px'}}>取消订单</button>
          <a href = "#/paid"><button style = {{backgroundColor:'#fe4f4f',color:'#fff',border:'1px solid #fe4f4f',borderRadius:'15px',width:'80px',padding:'6px'}}>支付</button></a>
        </Flex>
        <Flex justify = "end" style = {{width:'200px',borderBottom:'3px solid red',marginLeft:'160px'}}></Flex>
      </div>
    )
  }
}

export default WaitPay;
