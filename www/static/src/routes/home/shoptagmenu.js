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
    <Flex style = {{backgroundColor:'white',padding:'15px',marginTop:'10px'}}>
      <Flex.Item  align="center">
        <img src = {addImg} alt = "商品图片" className = {styles['Img-size']}/>
        <span style = {{textAlign:'center'}}>4s保养</span>
      </Flex.Item>
      <Flex.Item  align="center">
      <img src = {barImg} alt = "商品图片" className = {styles['Img-size']}/>
        充值
      </Flex.Item>
      <Flex.Item  align="center">
        <WingBlank size = "lg"><img src = {beautyImg} alt = "商品图片" style = {{width:"150%",height:"150%"}}/></WingBlank>
        喷漆
      </Flex.Item>
      <Flex.Item  align="center">
        <img src = {shopImg} alt = "商品图片" style = {{width:"75%",height:"75%"}}/>
        <span align = "center">超市</span>
      </Flex.Item>
      <Flex.Item  align="center">
        <img src = {runImg} alt = "商品图片" className = {styles['Img-size']}/>
        新车
      </Flex.Item>
      {/* <h1 className = {styles.test}>zheshiyigeceshi</h1> */}
    </Flex>
  </div>
    )
  }
}
export default ShopTagMenu;
