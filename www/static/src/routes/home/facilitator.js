import React from 'react';

import { Flex, Tabs } from 'antd-mobile';

class Facilitator extends React.Component {
  constructor() {
    super();
  };

  render(){
    const tabs = [
      {title : '商品' },
      {title : '简介' },
    ];
    return (
      <div>
        这是服务商主页
        <div>
          <Flex justify = "center"><img style = {{height:'50px',width:'50px',borderRadius:'25px',border:'1px solid #aaa'}}/></Flex>
          <Flex justify = "center">服务商名</Flex>
          <Flex justify = "center">四川省成都市金牛区沙湾路63号</Flex>
        </div>
        <Tabs tabs = {tabs} >
          <div>
            这是商品主页
            <Flex style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'5px',margin:'10px',padding:'10px'}}>
              <div><img style = {{width:'45px',height:'45px'}}/></div>
              <div style = {{marginLeft:'8px'}}>这是商品的名称占位符占位符<br/>
              <span style = {{color:'red',marginLeft:'25px'}}>价格:183</span><span style = {{color:'purple',marginLeft:'25px'}}>销量:18</span>
            </div>
            </Flex>
          </div>
          <div>
            这是服务商简介
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Facilitator;
