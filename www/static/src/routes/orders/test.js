import React from 'react';
import { Flex, Tabs, Button } from 'antd-mobile';
// import { Goods, ShopName } from './OrdersCommon';
import ShopName from './ShopName';
import Goods from './Goods';
import OrdersItem from './OrdersDetail';
import Paid from './paid';
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
    <div>
      <Invalid/>
      <Tabs tabs = {tabs} initialPage = {5} animated = {false} useOnPan = {false} >
        <div style = {{backgroundColor:'#fff',paddingBottom:'10px'}}>
          <ShopName/>
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
            <a href = '#/details'><button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'80px',padding:'6px',marginRight:'15px'}}>详情</button></a>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'80px',padding:'6px',marginRight:'15px'}}>取消订单</button>
            <a href = "#/paid"><button style = {{backgroundColor:'#fe4f4f',color:'#fff',border:'1px solid #fe4f4f',borderRadius:'15px',width:'80px',padding:'6px'}}>支付</button></a>
          </Flex>
          <Flex justify = "end" style = {{width:'200px',borderBottom:'3px solid red',marginLeft:'160px'}}></Flex>
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <ShopName/>
          <Goods/>
          <Flex justify = "end" style = {{marginRight:'10px'}}>
            合计：<span style = {{color:'red'}}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{margin:'10px'}}>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'70px',padding:'6px'}}>详情</button>
            <a href = "#/refund">
              <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'80px',padding:'6px'}}>申请退款</button>
            </a>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'15px',width:'70px',padding:'6px'}}>二维码</button>
          </Flex>
          <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'150px'}}></Flex>
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <ShopName/>
          <Goods/>
          <Flex justify = "end" style = {{marginRight:'10px'}}>
            合计：<span style = {{color:'red'}}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{margin:'10px'}}>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'8px',width:'70px',padding:'6px'}}>详情</button>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'8px',width:'80px',padding:'6px'}}>删除订单</button>
          </Flex>
          <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'150px'}}></Flex>
        </div>
      <div>
        <div style = {{backgroundColor:'#fff'}}>
          <ShopName/>
          <Goods/>
          <Flex justify = "end" style = {{marginRight:'10px'}}>
            合计：<span style = {{color:'red'}}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{margin:'10px'}}>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'8px',width:'70px',padding:'6px'}}>详情</button>
            <button style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'8px',width:'80px',padding:'6px'}}>删除订单</button>
          </Flex>
          <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'160px',marginBottom:'10px'}}></Flex>
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
