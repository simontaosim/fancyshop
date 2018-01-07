import React from 'react';
import { Flex, Button, Checkbox } from 'antd-mobile';

import ShopEdit from './ShopEdit';
import GoodsItem from './GoodsItem';
import ShopName from './ShopName';
import Edit from './Edit';
import goodsImg from './good.jpg';

const CheckboxItem = Checkbox.CheckboxItem;


class ShopCart extends React.Component{
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <div style = {{backgroundColor:'#fff'}}>
          <Flex>
            <ShopName/>
          </Flex>
          <Flex>
            <GoodsItem/>
            <GoodsItem/>
          </Flex>
          <Flex>
            <GoodsItem/>
          </Flex>
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <Flex>
            <ShopName/>
          </Flex>
          <Flex>
            <GoodsItem/>
            <GoodsItem/>
          </Flex>
          <Flex>
            <GoodsItem/>
          </Flex>
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <Flex>
            <ShopName/>
          </Flex>
        </div>
        {/* <Flex>
          <div>
            <input type = "checkbox" style = {{width:'20px'}}/>
            <img src = {{}} style = {{height:'30px',width:'40px'}}/>
          </div>
          <div>
            <ShopEdit/>
          </div>
        </Flex> */}

        <Edit/>
      </div>
    )
  }
}

export default ShopCart;
