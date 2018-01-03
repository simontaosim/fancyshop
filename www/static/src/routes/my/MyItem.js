import React from 'react';
import { Flex, List, Badge } from 'antd-mobile';

class MyItem extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
    <div>
      <div className = "flex-container" style = {{border:'1px solid #f1f1f1',borderRadius:'8px',backgroundColor:'#fefefe'}}>
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
      <div className = "flex-container" style = {{border:'1px solid #f1f1f1',borderRadius:'8px',backgroundColor:'#fefefe'}}>
        <List.Item extra="extra" arrow="horizontal">
          <Badge text={0} style={{ marginLeft:" 12 "}}>
            <img src = {{}} style = {{height:'20px',width:'20px'}}/>我的订单</Badge>
          {/* <Badge text={'new'} style={{ marginLeft:" 12 "}} /> */}
        </List.Item>
        <List.Item>
          <img src = {{}} style = {{height:'12px',width:'12px'}}/>
          <span style = {{fontSize:'12px'}}>待付款</span>
          <img src = {{}} style = {{height:'15px',width:'15px'}}/>
          <span>未处理</span>
          <img src = {{}} style = {{height:'15px',width:'15px'}}/>
          <span>已完成</span>
          <img src = {{}} style = {{height:'15px',width:'15px'}}/>
          <span>已失效</span>
        </List.Item>
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
