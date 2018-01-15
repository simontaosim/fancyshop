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
import BtnRed from './BtnRed';
import BtnYellow from './BtnYellow';
import ProductBottom from '../product/ProductBottom';

const CheckboxItem = Checkbox.CheckboxItem;


class ShopCart extends React.Component{
  constructor() {
    super()
    this.state = {
      edit: false,
    }
  }


  render(){
    var text = this.state.edit ? '完成' : '编辑'
    var link = this.state.edit ? '#/shopedit' : '#/shop_cart'
    var btn = this.state.edit ? <BtnRed/>:<BtnYellow/>
    return(
      <div className = {style['bg-color']}>

        <Flex justify = "end" style = {{backgroundColor:"#333",color:'#fff',lineHeight:'3em',padding:'5px 10px'}}>
          <span style = {{textAlign:'right'}}> <span   onClick={(e) => {
            e.preventDefault();
            this.setState({
              edit:!this.state.edit,
            });
          }}>{text}</span></span>
        </Flex>
        <div className = {style['item-frame']}>
          <Shop/>
          <Shop/>
        </div>
        {/* <div className = {style['item-last']}>
            <Shop/>
            <Edit/>
        </div> */}
        <div>

        </div>
        {/* <div>
          <ShopEdit/>
          <ProductBottom/>
        </div> */}
        {/* <div className = {style['bottom-pos']}>
        <Flex >
          <CheckboxItem className = {style['bottom-all']}><span style = {{color:'white'}}>全选</span><span style = {{float:'right',color:'#fff'}}>合计：<span style= {{color:'red'}}>￥250</span></span></CheckboxItem>
          <a href ="#/shopedit"><Flex justify = "center" className = {style['bottom-balance']}>结算</Flex></a>
        </Flex>

        </div> */}
        <div>
          {btn}
        </div>
      </div>
    )
  }
}

export default ShopCart;
