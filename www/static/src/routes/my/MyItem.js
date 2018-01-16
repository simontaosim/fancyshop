import React from 'react';
import { Flex, List, Badge,WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

class MyItem extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
    <div>
      <div style = {{border:'1px solid #f1f1f1',borderRadius:'8px',backgroundColor:'#fefefe',margin:'0 10px',padding:'10px 0'}}>
        <Flex justify = "center" >
          <Flex.Item align = "center">
            <img src={require('../svg/bwallat.svg')}  style = {{height:'50px',width:'50px'}}/>
            <p>我的钱包</p>
          </Flex.Item>
          <Flex.Item align = "center">
            <img src={require('../svg/card.svg')}  style = {{height:'50px',width:'50px'}}/>
            <p>卡包</p>
          </Flex.Item>
          <Flex.Item align = "center">
            <img src={require('../svg/coupon.svg')} style = {{height:'50px',width:'50px'}}/>
            <p>优惠券</p>
          </Flex.Item>
        </Flex>
      </div>
      <WhiteSpace/>
      <div style = {{border:'1px solid #f1f1f1',borderRadius:'8px',backgroundColor:'#fefefe',margin:'10px'}}>
        <Link to = '/orders'>
        <List.Item extra="全部订单" arrow="horizontal" style = {{fontSize:'12px'}}>
          <Badge text={0} style={{ marginLeft:" 12 "}}>
            <img src={require('../svg/orders.svg')}  style = {{height:'20px',width:'20px'}}/><span style = {{paddingLeft:'8px',color:'#464646',fontSize:'14px',fontFamily:'sans-serif'}}>我的订单</span></Badge>
          {/* <Badge text={'new'} style={{ marginLeft:" 12 "}} /> */}
        </List.Item>
      </Link>

      <Flex style = {{padding:'10px 15px',borderTop:'1px solid #eee'}}>
        
        <Flex.Item>
          <img src={require('../svg/wait.svg')}  style = {{height:'15px',width:'15px'}}/>
          <span style = {{}}>待付款</span>
        </Flex.Item>
        <Flex.Item>
          <img src={require('../svg/no.svg')} style = {{height:'15px',width:'15px'}}/>
          <span>未处理</span>
        </Flex.Item>
        <Flex.Item>
          <img src={require('../svg/success.svg')}  style = {{height:'15px',width:'15px'}}/>
          <span>已完成</span>
        </Flex.Item>
        <Flex.Item>
          <img src={require('../svg/close.svg')}  style = {{height:'15px',width:'15px'}}/>
          <span>已失效</span>
        </Flex.Item>
      </Flex>
      </div>
      <Flex style = {{border:'1px solid #fff',boxShadow:'2px 2px 2px #eee',borderRadius:'10px',backgroundColor:'#fefefe',margin:'10px'}}>
        <List.Item>
        <img src={require('../svg/details.svg')} style = {{height:'24px',width:'24px'}}/>
        <span style = {{paddingLeft:'8px',color:'#464646',fontSize:'14px',fontFamily:'sans-serif'}}>新手指导</span>
        </List.Item>
      </Flex>
    </div>

    )
  }
}

export default MyItem;
