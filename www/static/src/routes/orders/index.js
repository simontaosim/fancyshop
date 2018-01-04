import React from 'react';
import { Flex, Tabs, Button } from 'antd-mobile';
// import { Goods, ShopName } from './OrdersCommon';
import ShopName from './ShopName';
import Goods from './Goods';
import OrdersItem from './OrdersDetail';
import Paid from './paid';

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
            <a href = '#/details'><Button>详情</Button></a>
            <Button>取消订单</Button>
            <a href = "#/paid"><Button>支付</Button></a>
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
