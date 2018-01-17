import React from 'react';
import { Flex, Button, Checkbox } from 'antd-mobile';

import ShopEdit from './ShopEdit';
import GoodsItem from './GoodsItem';
import ShopName from './ShopName';
import Edit from './Edit';
import goodsImg from '../../assets/img/reward/good.jpg';
import Change from './Change';
import Shop from './shopcart';
import style from './common.css';

const CheckboxItem = Checkbox.CheckboxItem;


class ShopCart extends React.Component{
  constructor() {
    super()
  }

  render(){
    return(
      <div style = {{backgroundColor:'#eee',paddingBottom:'20px'}}>
        {/* <Change/> */}
        <div style = {{backgroundColor:'#fff',marginBottom:'14px'}}>
          {/* <Flex>
            <ShopName/>
          </Flex>
          <Flex>
            <GoodsItem/>
            <GoodsItem/>
          </Flex>
          <Flex>
            <GoodsItem/>
          </Flex> */}
          <Shop/>
        </div>
        {/* <div style = {{backgroundColor:'#fff',marginBottom:'14px'}}>
          <Flex>
            <ShopName/>
          </Flex>
          <Flex>
            <GoodsItem/>
          </Flex>
          <Flex>
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
        </div> */}
        {/* <Flex>
          <div>
            <input type = "checkbox" style = {{width:'20px'}}/>
            <img src = {{}} style = {{height:'30px',width:'40px'}}/>
          </div>
          <div>
            <ShopEdit/>
          </div>
        </Flex> */}
        <div style = {{backgroundColor:'#fff',marginBottom:'14px'}}>
          <Flex>
            <Edit/>
          </Flex>
        </div>

        {/* <Flex>
          <GoodsItem/>
        </Flex> */}
        <div className = {style['bottom-pos']}>
        <Flex >
          <CheckboxItem className = {style['bottom-all']}><span style = {{color:'white'}}>全选</span><span style = {{float:'right',color:'#fff'}}>合计：<span style= {{color:'red'}}>￥250</span></span></CheckboxItem>
          <Flex justify = "center" className = {style['bottom-balance']}>结算</Flex>
        </Flex>
        </div>
      </div>
    )
  }
}

export default ShopCart;
