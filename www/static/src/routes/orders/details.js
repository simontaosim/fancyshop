import React from "react";
import { List, Icon, Flex, Button } from 'antd-mobile';
import goodImg from '../../assets/img/reward/good.jpg';


class WaitDetails extends React.Component {
  constructor() {
    super();
  }

render(){
  return(
    <div style = {{marginTop:'60px'}}>
      <div style = {{backgroundColor:'#fff',borderRadius:'5px',borderLeft:'3px solid #ff9224',margin:'15px',padding:'10px 0'}}>
        <div><img src={require('../svg/send.svg')} style = {{width:'15px',height:'15px',margin:'0 6px'}}/>配送方式：<span style = {{color:'#888'}}>到店自提</span></div>
        <div><img src={require('../svg/location.svg')} style = {{width:'15px',height:'15px',margin:'0 6px'}}/>地址：<span style = {{color:'#888'}}>成都市金牛区沙湾路63号</span></div>
        <div><img src={require('../svg/phone.svg')} style = {{width:'15px',height:'15px',margin:'0 6px'}}/>电话：<span style = {{color:'#888'}}>123456789</span></div>
      </div>

      <div style = {{backgroundColor:'#fff',borderRadius:'5px',borderLeft:'3px solid #2894ff',margin:'15px',padding:'10px 0'}}>
        <div><img src={require('../svg/people.svg')} style = {{width:'15px',height:'15px',margin:'0 6px'}}/>左婷——18324190947——川A777777
        </div>
      </div>

      <div style = {{backgroundColor:'#fff',borderRadius:'5px',borderLeft:'3px solid #019858',margin:'15px',padding:'10px 0px'}}>
        <div><img src={require('../svg/notice.svg')} style = {{width:'15px',height:'15px',margin:'0 6px'}}/>备注：<br/>
        <div style = {{marginLeft:'30px',color:'#888'}}>到店自提这是占位符占位符请不要介意如此粗糙的占位符哈哈哈哈</div>
      </div>
      </div>
      <div style = {{border:'1px dashed #111',borderRadius:'5px',margin:'15px',backgroundColor:'#fff'}}>
        <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',height:'auto',margin:'15px 10px'}}>
          <div>
            <img src = {goodImg} style = {{height:'60px',width:'60px'}}/>
          </div>
          <div>
            我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
            类型：4L 自喜力     ￥250  ×1
          </div>
        </Flex>

        <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',height:'auto',margin:'15px 10px'}}>
          <div style = {{backgroundColor:'#5e0f0f',padding:'2px 8px 8px 3px'}}>
            <img src = {goodImg} style = {{height:'50px',width:'50px'}}/>
          </div>
          <div>
            我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
            <span style = {{color:'#888'}}>类型：4L 自喜力 </span>   <span style= {{float:'right'}}> <span style = {{color:'red'}}> ￥250 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ×1</span>
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
      订单号：12346578154<br/>
      下单时间： 2017/5/13 10：15
      </div>

    </div>
  )
}
}

export default WaitDetails;
