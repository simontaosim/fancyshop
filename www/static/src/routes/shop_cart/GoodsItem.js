import React from 'react';
import { Flex } from 'antd-mobile';

class GoodsItem extends React.Component{
  constructor() {
    super();
  }

  render(){
    return (
      <Flex>
      {/* <input type = "checkbox" style = {{width:'20px'}}/> */}
        <img src = {{}} style = {{height:'30px',width:'40px'}}/>
        <div>
          <span>我是商品的名称123456565545665占位符占位</span><br/>
          <span>规格</span>
          <span align = "left">￥262.9</span>
          <span align = "right">×1</span>
        </div>
        {/* <img src = {{}} style = {{height:'20px',width:'20px'}}/> */}
      </Flex>
    )
  }
}

export default GoodsItem;
