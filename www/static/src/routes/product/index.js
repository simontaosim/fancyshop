import React from 'react';
import { Flex } from 'antd-mobile';

import ProductTabs from './ProductTabs';
import ProductShare from './ProductShare';
import ProductBottom from './ProductBottom';
import goodImg from './good.jpg';


class Goods extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
  return (
    <div style = {{marginTop:'50px',marginBottom:'280px',backgroundColor:'#fff'}}>
      <div>
          <img src= {goodImg} style = {{border:'1px solid #aaa',height:'200px',width:'310px'}}/>
      </div>
      <Flex>
        新车推荐，壳牌喜力润滑油，高性价比合成有机油，黑卡会员特价
      </Flex>
      <Flex>
        <Flex.Item>
          <span style = {{color:'red',fontSize:'16px'}}>￥269.1</span>
          <span style = {{color:'white',backgroundColor:'#00acff',borderRadius:'10px'}}>黑卡价</span>
        </Flex.Item>
        <span align = "right">四川 成都</span>
      </Flex>
        <span style = {{ textDecoration:'line-through'}}>￥299</span>
      <Flex style = {{borderBottom:'4px solid #eee',padding:'10px 0'}}>
        <Flex.Item><img src={require('../svg/share.svg')} style = {{width:'26px',height:'26px'}}/><ProductShare/></Flex.Item>
        <Flex.Item>一级奖励</Flex.Item>
        <Flex.Item>二级奖励<img src={require('../svg/no.svg')} style = {{width:'12px',height:'12px'}}/></Flex.Item>
      </Flex>
      <Flex style = {{borderBottom:'4px solid #eee',padding:'10px 0'}}>
        <Flex.Item>配送方式</Flex.Item>
        <Flex.Item>库存</Flex.Item>
        <Flex.Item>销量</Flex.Item>
      </Flex>
      <Flex style = {{borderBottom:'4px solid #eee',padding:'10px 0'}}>
        选择规格
      </Flex>
      <ProductTabs/>
      <ProductBottom/>
    </div>
    )
  }
}

export default Goods;
