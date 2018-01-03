import React from 'react';

import { Tabs, Flex } from 'antd-mobile';
import styles from './AwardDetail.css';

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
      <Flex><img src = {{}} /><span>明细</span></Flex>
      <Tabs tabs = {tabs} initialPage = {2} animated = {false} useOnPan = {false}>
        <div style = {{ display:'flex',height:'150px',backgroundColor:'#fff',margin:'10px',padding:'10px'}}>
          <Flex>
            <img src = {{}} style = {{height:'100px',width:'100px'}}/>
          </Flex>
          <Flex>
            <div style = {{}}>
            <span>我叫商品的名字哈哈哈哈</span><br/>
            <span>我叫店铺名</span><br/><br/><br/>
            <span>付款金额</span><span>215</span>
            <span>佣金</span><span>10</span><br/>
            <span style = {{textAlign:'right'}}>2017.12.26 10:52</span>
          </div>
          </Flex>

        </div>
        <div style = {{ display:'flex',alignItems:'center',justifyContent:'center',height:'250px',backgroundColor:'#fff'}}>

        </div>
        <div style = {{ display:'flex',alignItems:'center',justifyContent:'center',height:'250px',backgroundColor:'#fff'}}>

        </div>
      </Tabs>
    </div>
  )}
}
export default AwardDetail;
