import React from 'react';
import { Flex, List, Badge,WhiteSpace } from 'antd-mobile';

class MyItem extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
    <div>
      <div style = {{border:'1px solid #f1f1f1',borderRadius:'8px',backgroundColor:'#fefefe',margin:'0 5px',padding:'10px 0'}}>
        <Flex justify = "center" >
          <Flex.Item align = "center">
            <img style = {{height:'50px',width:'50px'}}/>
            <p>我的钱包</p>
          </Flex.Item>
          <Flex.Item align = "center">
            <img style = {{height:'50px',width:'50px'}}/>
            <p>卡包</p>
          </Flex.Item>
          <Flex.Item align = "center">
            <img style = {{height:'50px',width:'50px'}}/>
            <p>优惠券</p>
          </Flex.Item>
        </Flex>
      </div>
      <WhiteSpace/>
      <div style = {{border:'1px solid #f1f1f1',borderRadius:'8px',backgroundColor:'#fefefe'}}>
        <a href = "#/orders">
        <List.Item extra="全部订单" arrow="horizontal">
          <Badge text={0} style={{ marginLeft:" 12 "}}>
            <img src = {{}} style = {{height:'20px',width:'20px'}}/>我的订单</Badge>
          {/* <Badge text={'new'} style={{ marginLeft:" 12 "}} /> */}
        </List.Item>
        </a>
      <Flex style = {{padding:'10px 15px'}}>
        <Flex.Item>
          <img src = {{}} style = {{height:'12px',width:'12px'}}/>
          <span style = {{fontSize:'12px'}}>待付款</span>
        </Flex.Item>
        <Flex.Item>
          <img src = {{}} style = {{height:'15px',width:'15px'}}/>
          <span>未处理</span>
        </Flex.Item>
        <Flex.Item>
          <img src = {{}} style = {{height:'15px',width:'15px'}}/>
          <span>已完成</span>
        </Flex.Item>
        <Flex.Item>
          <img src = {{}} style = {{height:'15px',width:'15px'}}/>
          <span>已失效</span>
        </Flex.Item>
      </Flex>
      </div>
      <List style = {{border:'1px solid #aaa',borderRadius:'10px',backgroundColor:'#fefefe',margin:'10px'}}>
        <List.Item>
          <img/>新手指导
        </List.Item>
      </List>
    </div>
    )
  }
}

export default MyItem;
