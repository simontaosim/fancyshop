import React from 'react';
import { Link } from 'react-router-dom';
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
          <Flex justify = "center" className = {style['distance2']}>
            <img src = {require('../svg/location-white.svg')} style = {{width:'12px',height:'12px',color:'#fff',letterSpacing:'1px',padding:'0 5px'}}/>四川省成都市金牛区沙湾路63号
            <img src = {require('../../assets/svg/phone-blue.svg')} style= {{backgroundColor:'#00b7ee',borderRadius:'14px',width:'16px',height:'16px',padding:'6px',alignSelf:'flex-end',marginLeft:'10px'}}/>
          </Flex>
        </div>
        <Tabs tabs = {tabs} >
          <div>
            <Link to ='/product/1'>
            <Flex style = {{backgroundColor:'#fff',border:'1px solid #eee',borderRadius:'5px',margin:'10px',padding:'15px',paddingLeft:'20px'}}>
              <img src={goodImg} style = {{width:'45px',height:'45px'}}/>
              <div style = {{marginLeft:'15px',marginTop:'10px',color:'#000'}}>这是商品的名称占位符占位符占一排<br/>
              <div style = {{display:'flex',justifyContent:'around',padding:'5px'}}>
                <span style = {{color:'red',marginLeft:'25px'}}>价格:183</span>
                <span style = {{color:'#fc65e4',marginLeft:'25px'}}>销量:18</span>
              </div>
            </div>
            </Flex>
            </Link>
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
