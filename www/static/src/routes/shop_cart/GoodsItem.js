import React from 'react';
import { Flex } from 'antd-mobile';

class GoodsItem extends React.Component{
  constructor() {
    super();
  }

  render(){
    return (
    <div>
      <Flex>
      {/* <input type = "checkbox" style = {{width:'20px'}}/> */}
        <img src = {{}} style = {{height:'30px',width:'40px',marginTop:'-25px'}}/>
        <div style = {{marginLeft:'10px',padding:'10px'}}>
          <span>我是商品的名称1254565占位符</span><br/>
          <span style = {{color:"#aaa"}}>规格:4L蓝喜力</span><br/>
          <span align = "left" style = {{color:"red"}}>￥262.9</span>
          <span align = "right" style = {{float:'right'}}>×1</span>
        </div>
      </Flex>
    </div>
    )
  }
}

export default GoodsItem;
