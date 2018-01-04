import React from 'react';

import { Flex, WingBlank, WhiteSpace} from "antd-mobile";
import styles from './GoodsList.css';

import goodsImg from './one.jpg';

class GoodsList extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div className = {styles['back-img']}>
        <Flex justify = "end" className = {styles['main-top']}>
          <div style = {{textAlign:'center'}}>
            <img className = {styles['goods-img']} src = {goodsImg} alt = "商品图片"/>
            <p className = {styles['goods-name']}>嘉实多</p>
          </div>
          <div style = {{textAlign:'center'}}>
            <img className = {styles['goods-img']} src = {goodsImg} alt = "商品图片"/>
            <p className = {styles['goods-name']}>嘉实多</p>
          </div>
          <div style = {{textAlign:'center'}}>
            <img className = {styles['goods-img']} src = {goodsImg} alt = "商品图片"/>
            <p className = {styles['goods-name']}>嘉实多</p>
          </div>
        </Flex>
        <Flex justify = "end" className = {styles['main-end']}>
          <div style = {{textAlign:'center'}}>
            <img className = {styles['goods-img']} src = {goodsImg} alt = "商品图片" />
            <p className = {styles['goods-name']}>嘉实多</p>
          </div>
          <div style = {{textAlign:'center'}}>
            <img className = {styles['goods-img']} src = {goodsImg} alt = "商品图片" />
            <p className = {styles['goods-name']}>嘉实多</p>
          </div>
          <div style = {{textAlign:'center'}}>
            <img className = {styles['goods-img']} src = {goodsImg} alt = "商品图片" />
            <p className = {styles['goods-name']}>嘉实多</p>
          </div>
          <div style = {{textAlign:'center'}}>
            <img className = {styles['goods-img']} src = {goodsImg} alt = "商品图片" />
            <p className = {styles['goods-name']}>嘉实多</p>
          </div>
        </Flex>
      </div>
    )
  }
}

export default GoodsList;
