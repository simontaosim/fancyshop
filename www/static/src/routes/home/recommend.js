import React from 'react';

import { Flex, WhiteSpace, WingBlank, Badge} from 'antd-mobile';
import style from './recommend.css';
import goodsImg from './one.jpg';
// import carImg from './car.xcf';


class Recommend extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div  style = {{backgroundColor:'#fff',padding:'10px'}}>
        {/* <div >
          <span style = {{borderLeft:'4px solid #aaa',paddingLeft:'10px',display:'block'}}>火爆推荐</span>
        </div>
      <WhiteSpace size="sm" />
      <Flex >
        <Flex.Item align="center" style = {{position:'relative'}}>
          <WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%"}}/></WingBlank>
          <span style = {{position:'absolute',backgroundColor:'#ff5b05',borderRadius:'12px',top:'0px',left:'80px',padding:'3px',color:'white'}}>火</span>
          <span style = {{color:'red'}}>现价：￥330</span><br/>
          <span　style = {{color:'#0e80d2'}}>佣金：2％</span>
        </Flex.Item>
        <Flex.Item align="center">
          <WingBlank size = "lg">

          <img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%"}}/></WingBlank>

          <span style = {{color:'red'}}>现价：￥330</span><br/>
          <span　style = {{color:'#0e80d2'}}>佣金：2％</span>
        </Flex.Item>
        <Flex.Item align="center" style = {{position:'relative'}}>
          <WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%"}}/></WingBlank>
          <span  style = {{position:'absolute',backgroundColor:'#05ff37',borderRadius:'12px',top:'0px',left:'80px',padding:'3px',color:'white'}} >新</span>
          <span style = {{color:'red'}}>现价：￥330</span><br/>
          <span　style = {{color:'#0e80d2'}}>佣金：2％</span>
        </Flex.Item>
      </Flex> */}

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
          {/* <div>
            <Badge text={'爆'} style={{ marginLeft: 55 }} />
            <img src = {goodsImg} alt = "商品图片" className = {style['good-img']}/><br/>
            <span className = {style['price-now']}>现价：￥330</span><br/>
            <span　className = {style['reward']}>佣金：2％</span>
          </div>

          <div>
            <img src = {goodsImg} alt = "商品图片" className = {style['good-img']}/><br/>
            <span className = {style['price-now']}>现价：￥330</span><br/>
            <span　className = {style['reward']}>佣金：2％</span>
          </div> */}

        </Flex>
      </div>
    </div>
    )
  }
}

export default Recommend;
