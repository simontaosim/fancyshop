import React from 'react';

import { Flex, Icon, Button } from 'antd-mobile';

class OrdersDetail extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
    <div>
      <div style = {{backgroundColor:'#fff',borderRadius:'5px',borderLeft:'3px solid #ff9224',margin:'15px',padding:'10px 0'}}>
        <div><Icon></Icon>配送方式：到店自提</div>
        <div><Icon></Icon>地址：成都市金牛区沙湾路63号</div>
        <div><Icon></Icon>电话：123456789</div>
      </div>

      <div style = {{backgroundColor:'#fff',borderRadius:'5px',borderLeft:'3px solid #2894ff',margin:'15px',paddingBottom:'10px'}}>
        <Icon>check-circle</Icon>左婷——18324190947——川A777777
      </div>

      <div style = {{backgroundColor:'#fff',borderRadius:'5px',borderLeft:'3px solid #019858',margin:'15px',padding:'10px 0px'}}>
        <Icon></Icon>备注：<br/>
        到店自提这是占位符占位符请不要介意如此粗糙的占位符哈哈哈哈
      </div>

      <div style = {{border:'1px dashed #111',borderRadius:'5px',margin:'15px'}}>
        <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',height:'auto',margin:'15px 10px'}}>
          <div>
            <img style = {{height:'60px',width:'60px'}}/>
          </div>
          <div>
            我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
            类型：4L 自喜力     ￥250  ×1
          </div>
        </Flex>

        <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',height:'auto',margin:'15px 10px'}}>
          <div>
            <img style = {{height:'60px',width:'60px'}}/>
          </div>
          <div>
            我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
            类型：4L 自喜力     ￥250  ×1
          </div>
        </Flex>
        <Flex justify = "end" style = {{marginRight:'10px'}}>
          应付款：<span style = {{color:'red'}}> ￥500</span>
        </Flex>
        <Flex justify = "end" style = {{margin:'10px'}}>
          <Button>取消订单</Button>
          <Button>支付</Button>
        </Flex>
      </div>

      <div style = {{backgroundColor:'#fff',borderRadius:'5px',borderLeft:'3px solid red',margin:'15px',padding:'10px 0px'}}>
        <Icon></Icon>订单号：12346578154<br/>
        <Icon></Icon>下单时间： 2017/5/13 10：15
      </div>

    </div>
    )
  }
}

export default OrdersDetail;
