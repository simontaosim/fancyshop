import React from 'react';
import { Flex, Button, Checkbox } from 'antd-mobile';

import ShopEdit from './ShopEdit';
import GoodsItem from './GoodsItem';
import ShopName from './ShopName';
import Edit from './Edit';
import goodsImg from './good.jpg';
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

      <div className = {style['bg-color']}>
        <div className = {style['item-frame']}>
          <Shop/>
        </div>
        <div className = {style['item-last']}>
            <Shop/>
            <Edit/>
        </div>
        <div className = {style['bottom-pos']}>
        <Flex >
          <CheckboxItem className = {style['bottom-all']}><span style = {{color:'white'}}>全选</span><span style = {{float:'right',color:'#fff'}}>合计：<span style= {{color:'red'}}>￥250</span></span></CheckboxItem>
          <a href = '#/shopedit'><Flex justify = "center" className = {style['bottom-balance']}>结算</Flex></a>
        </Flex>
        </div>
      </div>
    )
  }
}

export default ShopCart;
