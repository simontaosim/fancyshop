import React from 'react';
import { Flex, Button, Checkbox } from 'antd-mobile';

import ShopEdit from './ShopEdit';
import GoodsItem from './GoodsItem';
import ShopName from './ShopName';
import Edit from './Edit';
import goodsImg from './good.jpg';
import Change from './Change';

const CheckboxItem = Checkbox.CheckboxItem;


class ShopCart extends React.Component{
  constructor() {
    super()
  }

  render(){
    return(
      <div style = {{backgroundColor:'#eee',paddingBottom:'1000px'}}>
        <Change/>
        <div style = {{backgroundColor:'#fff',marginBottom:'14px'}}>
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
        <div style = {{backgroundColor:'#fff',marginBottom:'14px'}}>
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
        <Flex>
          <Edit/>
        </Flex>
        <Flex>
          <GoodsItem/>
        </Flex>
        <div style = {{position:'fixed',bottom:'50px'}}>
        <Flex >
          <CheckboxItem style = {{width:'180px',backgroundColor:'#333',color:'#fff'}}><span style = {{color:'white'}}>全选</span><span style = {{float:'right',color:'#fff'}}>合计：<span style= {{color:'red'}}>￥250</span></span></CheckboxItem>
          <Flex justify = "center" style = {{width:'150px',backgroundColor:'#ffcf2d',color:'#fff',lineHeight:'3.2em'}}>结算</Flex>
        </Flex>
        </div>
      </div>
    )
  }
}

export default ShopCart;
