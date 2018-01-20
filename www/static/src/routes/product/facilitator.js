import React from 'react';

import { Flex, Tabs } from 'antd-mobile';
import style from './facilitator.css';
import goodImg from '../../assets/img/reward/good.jpg';
import userImg from '../../assets/img/timg.jpg';

class Facilitator extends React.Component {
  constructor() {
    super();
  };

  render(){
    const tabs = [
      {title : '商品' },
      {title : '简介' },
    ];
    return (
      <div >
        <div className = { style['bg-img']}>
          <Flex justify = "center" align = "center" className = {style['user']}><img src={userImg}/></Flex>
          <Flex justify = "center" className = {style['distance']}>服务商名</Flex>
          <Flex justify = "center" className = {style['distance2']}><img src = {require('../svg/location-white.svg')} style = {{width:'15px',height:'15px',color:'#fff',letterSpacing:'1px'}}/>四川省成都市金牛区沙湾路63号<img src = {require('../../assets/svg/phone-blue.svg')} style = {{backgroundColor:'#00b7ee',borderRadius:'14px',width:'16px',height:'16px',padding:'6px',alignSelf:'flex-end'}}/></Flex>
        </div>
        <Tabs tabs = {tabs} >
          <div>
            <Flex style = {{backgroundColor:'#fff',border:'1px solid #eee',borderRadius:'5px',margin:'10px',padding:'10px'}}>
              <div><img src={goodImg} style = {{width:'45px',height:'45px'}}/></div>
              <div style = {{marginLeft:'8px'}}>这是商品的名称占位符占位符<br/>
              <span style = {{color:'red',marginLeft:'25px'}}>价格:183</span><span style = {{color:'purple',marginLeft:'25px'}}>销量:18</span>
            </div>
            </Flex>
          </div>
          <div>
            这是服务商简介
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Facilitator;
