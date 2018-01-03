import React from 'react';
import { Flex, Button } from 'antd-mobile';

import ShopEdit from './ShopEdit';
import GoodsItem from './GoodsItem';
import ShopName from '../orders/ShopName';

class ShopCart extends React.Component{
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <Flex>
          <input type = "checkbox" style = {{width:'20px'}}/>
          <ShopName/>
        </Flex>
        <Flex>
          <input type = "checkbox" style = {{width:'20px'}}/>
          <GoodsItem/>
          <img src = {{}} style = {{height:'20px',width:'20px'}}/>
        </Flex>
        <Flex>
          <input type = "checkbox" style = {{width:'20px'}}/>
          <GoodsItem/>
          <img src = {{}} style = {{height:'20px',width:'20px'}}/>
        </Flex>
        <h1>我是分隔符哈哈哈哈</h1>
        <Flex>
          <div>
            <input type = "checkbox" style = {{width:'20px'}}/>
            <img src = {{}} style = {{height:'30px',width:'40px'}}/>
          </div>
          <div>
            <ShopEdit/>
          </div>
        </Flex>
        <h1>我是分隔符哈哈哈哈</h1>
        <Flex>
          <Flex.Item>
            <input type = "checkbox" style = {{width:'20px'}}/>
            <img src = {{}} style = {{height:'30px',width:'40px'}}/>
          </Flex.Item>
          <Flex.Item>
            <ShopEdit/>
          </Flex.Item>
          <Flex.Item>
            <Button size="small" style = {{border:'1px solid #111'}} >确定</Button>
            <Button size="small" style = {{backgroundColor:'red',color:'white'}}>删除</Button>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}

export default ShopCart;
