import React from 'react';
import { Flex, WingBlank, Icon, Button } from 'antd-mobile';
import goodsImg from './one.jpg';
import addImg from './add.png'
import barImg from './bar.png'
import beautyImg from './beauty.png'
import runImg from './run.png'
import shopImg from './shop.png'
import styles from './shoptagmenu.css';



class ShopTagMenu extends React.Component {
  constructor() {
    super()
  };

render(){
  return(
  <div>
    <Flex className = {styles['main']}>
      <Flex.Item  align="center">
        <img src = {addImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>4s保养</p>
      </Flex.Item>
      <Flex.Item  align="center">
      <img src = {barImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>充值</p>
      </Flex.Item>
      <Flex.Item  align="center">
        <img src = {beautyImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>喷漆</p>
      </Flex.Item>
      <Flex.Item  align="center">
        <img src = {shopImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>超市</p>
      </Flex.Item>
      <Flex.Item  align="center">
        <img src = {runImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>新车</p>
      </Flex.Item>
    </Flex>
  </div>
    )
  }
}
export default ShopTagMenu;
