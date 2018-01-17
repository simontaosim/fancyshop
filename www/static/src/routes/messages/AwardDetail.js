import React from 'react';

import { Tabs, Flex } from 'antd-mobile';
import styles from './AwardDetail.css';
import goodsImg from '../../assets/img/reward/good.jpg';

class AwardDetail extends React.Component {
  constructor() {
    super()
  }

render(){
  const tabs = [
    {title:'已付款'},
    {title:'已结算'},
    {title:'已失效'}
  ]
  return(
    <div className = {styles['Award-frame']}>
      <Flex><img src={require('../svg/details.svg')} style = {{height:'28px',width:'28px'}}/><span>明细</span></Flex>
      <Tabs tabs = {tabs} initialPage = {2} animated = {false} useOnPan = {false}>
        <div style = {{ display:'flex',height:'150px',backgroundColor:'#fff',width:'100%'}}>
          <Flex>
            <img src = {goodsImg} style = {{height:'80px',width:'80px'}}/>
          </Flex>

          <div style = {{margin:'30px 0 10px 8px'}} >
            <span>我叫商品的名字哈哈占位符</span><br/>
            <span>我叫店铺名</span><br/><br/><br/>
            <span>付款金额:</span><span style = {{color:'red'}}>215</span>
            <span style = {{float:'right'}}><span >佣金:</span><span style = {{color:'#ffcf2d'}}>10</span></span><br/>
            <span style = {{textAlign:'right'}}>2017.12.26 10:52</span>
          </div>


        </div>
        <div style = {{ display:'flex',alignItems:'center',justifyContent:'center',height:'250px',backgroundColor:'#fff'}}>
          已结算
        </div>
        <div style = {{ display:'flex',alignItems:'center',justifyContent:'center',height:'250px',backgroundColor:'#fff'}}>
          已失效
        </div>
      </Tabs>
    </div>
  )}
}
export default AwardDetail;
