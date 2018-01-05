import React from 'react';
import goodImg from './good.jpg';
import { Flex } from 'antd-mobile';

class Goods extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
        <div>
          <img src = { goodImg } style = {{height:'60px',width:'60px'}}/>
        </div>
        <div style = {{paddingLeft:'8px'}}>
          <span style = {{paddingBottom:'10px'}}>我是商品的长名字占位符占位符占位符哈哈哈哈哈哈</span><br/>
          <span style = {{color:'#a1a1a1'}}>类型：4L 自喜力     <span style = {{float:'right'}}>￥250 &nbsp;&nbsp; ×1</span></span>
        </div>
      </Flex>
    )
  }
}
export default Goods;
