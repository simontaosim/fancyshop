import React from 'react';
import { Flex } from 'antd-mobile';

class Goods extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
        <div>
          <img style = {{height:'60px',width:'60px'}}/>
        </div>
        <div>
          我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
          类型：4L 自喜力     ￥250  ×1
        </div>
      </Flex>
    )
  }
}
export default Goods;
