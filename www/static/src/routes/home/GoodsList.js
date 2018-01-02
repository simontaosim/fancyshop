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
        <WingBlank/>
        <Flex justify = "end" >
            <Flex.Item  align="center"><WingBlank size = "sm"><img src = {goodsImg} alt = "商品图片" style = {{width:"50%",height:"50%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span></Flex.Item>
            <Flex.Item  align="center"><WingBlank size = "sm"><img src = {goodsImg} alt = "商品图片" style = {{width:"60%",height:"60%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span></Flex.Item>
            <Flex.Item  align="center"><WingBlank size = "sm"><img src = {goodsImg} alt = "商品图片" style = {{width:"60%",height:"60%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span></Flex.Item>
        </Flex>
        <WhiteSpace/>
        <Flex justify = "end">
          <div  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></div>
          <div  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></div>
          <div  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></div>
          <div  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></div>
        </Flex>
      </div>
    )
  }
}

export default GoodsList;
