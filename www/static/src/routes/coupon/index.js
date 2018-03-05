import React from 'react';
import { Flex } from 'antd-mobile';
import couponImg from '../../assets/img/coupon.png'

class Coupon extends React.Component {

  render(){
    return (
      <div style = {{backgroundColor:"#fff"}}>
      <Flex direction = "column" justify = "start" align = "start" style = {{margin:'0 15px',backgroundColor:'#fff',borderBottom:'1px solid #888',paddingBottom:'10px',marginBottom:'10px'}} >
        <div style = {{margin:'15px 0',borderLeft:'3px solid #aaa',paddingLeft:'10px'}}>我的优惠券</div>
        <div style = {{position:'absolute',right:'50px',top:'110px'}}>
          <span align = "center" style = {{color:'#fff',fontSize:'12px'}}>&nbsp;&nbsp;可抵</span><br/>
          <span style = {{fontSize:'26px',fontWeight:'700',color:'#ffcf2d',paddingLeft:'-15px'}}>200</span><span style = {{color:'#ffcf2d',fontSize:'12px'}}>元</span><br/><br/>
          <span style= {{color:'#fff',fontSize:'12px'}}>张数： &nbsp;2</span>
        </div>
        <img alt="" src = {couponImg} style = {{width:'100%',height:'100%'}}/>
        <div style = {{color:'#fff',position:'absolute',left:'30px',top:'100px'}}>
          <span style = {{fontSize:'16px',fontWeight:'700'}}>保养</span><br/>
          <span style = {{fontSize:'12px'}}>有效时长： 2018-02-02</span>
        </div>
      </Flex>
      {/* <span align = "center">这是一端占位符而已啦冬天快要结束拉开不开心啦啦啦啦啦啦啦啦啦拉拉</span> */}
      </div>
    )
  }
}

export default Coupon;
