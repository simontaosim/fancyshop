import React from 'react';

import { Flex, WhiteSpace, WingBlank, Badge} from 'antd-mobile';
import style from './recommend.css';
import goodsImg from '../../assets/img/home/one.jpg';


class Recommend extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div  style = {{backgroundColor:'#fff',padding:'10px'}}>
      <div className = {style['recommend-frame']}>
        <span className = {style['recommend-font']}>火爆推荐</span>
        <Flex justify = "between">
          <div className = {style['test']}>
            <img src = {goodsImg} alt = "商品图片" className = {style['good-img']}/>
            <span className = {style['price-now']}>现价：￥330</span>
            <span　className = {style['reward']}>佣金：2％</span>
          </div>
          <div className = {style['test']}>
            <img src = {goodsImg} alt = "商品图片" className = {style['good-img']}/>
            <span className = {style['price-now']}>现价：￥330</span>
            <span　className = {style['reward']}>佣金：2％</span>
          </div>
          <div className = {style['test']}>
            <img src = {goodsImg} alt = "商品图片" className = {style['good-img']}/>
            <span className = {style['price-now']}>现价：￥330</span>
            <span　className = {style['reward']}>佣金：2％</span>
          </div>
        
        </Flex>
      </div>
    </div>
    )
  }
}

export default Recommend;
