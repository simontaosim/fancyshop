import React from 'react';
import { Flex, WingBlank, Icon, Button } from 'antd-mobile';
import goodsImg from '../../assets/img/home/one.jpg';
import addImg from '../../assets/img/home/add.png'
import barImg from '../../assets/img/home/bar.png'
import beautyImg from '../../assets/img/home/beauty.png'
import runImg from '../../assets/img/home/run.png'
import shopImg from '../../assets/img/home/shop.png'
import styles from './shoptagmenu.css';



class ShopTagMenu extends React.Component {
  constructor() {
    super()
  };

render(){
  return(
  <div className = {styles['all']}>
    <Flex justify = "center" className = {styles['main']}>
      {/* <Flex.Item  align="center">
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
      </Flex.Item> */}
      <Flex direction = "column" justify = "center">
        <img src = {addImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>4s保养</p>
      </Flex>
      <Flex direction = "column" justify = "center" >
        <img src = {barImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>喷漆</p>
      </Flex>
      <Flex direction = "column" justify = "center" >
        <img src = {beautyImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>油卡充值</p>
      </Flex>
      <Flex direction = "column" justify = "center">
        <img src = {shopImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>机油超市</p>
      </Flex>
      <Flex direction = "column" justify = "center">
        <img src = {runImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>新车</p>
      </Flex>
      {/* <Flex>
        <img src = {addImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>4s保养</p>
      </Flex>
      <Flex>
        <img src = {addImg} alt = "商品图片" className = {styles['Img-size']}/>
        <p>4s保养</p>
      </Flex> */}
    </Flex>
  </div>
    )
  }
}
export default ShopTagMenu;
