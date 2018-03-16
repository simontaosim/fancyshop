import React from 'react';

import { Tabs, Flex, WhiteSpace } from 'antd-mobile';
import styles from './AwardDetail.css';
import goodsImg from '../../assets/img/reward/good.jpg';

class AwardDetail extends React.Component {


  render(){
    const tabs = [
      {title:'已付款'},
      {title:'已结算'},
      {title:'已失效'}
    ]
    return(
      <div className = {styles['Award-frame']}>
        <Flex>
          <img alt="" src={require('../svg/details.svg')} className = {styles['detail-svg']}/>
          <span className = "svg-des">明细</span>
        </Flex>
        <Tabs tabs = {tabs} initialPage = {2} animated = {false} useOnPan = {false}>
          <div style = {{backgroundColor:'#fff',width:'100%',padding:'15px 0'}}>
            {/* <Flex style = {{padding:'18px 10px 10px 5px',width:'100%'}}>
              <img alt="" src = {goodsImg} style = {{height:'80px',width:'80px',border:'1px solid #ccc',borderRadius:'5px',marginRight:'10px',marginTop:'-15px'}}/>
              <Flex direction = "column" jusitify = "start" align = "start" style= {{}}>
                <span style = {{fontSize:'16px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>我叫商品的名字是是占位符只能是一行</span>
                <span  style = {{fontSize:'14px',color:'#888'}}>我叫店铺名</span>
                <WhiteSpace/>
                <WhiteSpace/>
                <div  style = {{color:'#333',fontSize:'16px',display:'flex',justifyContent:'around'}}>
                  <span>付款金额：<span style = {{color:'red'}}>215</span></span>
                  <span  style = {{position:'absolute',right:'15px'}}>佣金:<span style = {{color:'#ffcf2d'}}>10</span></span>
                </div>
              </Flex>
            </Flex>
            <span style = {{float:'right',color:'#aaa',paddingBottom:'15px'}}>
              2017.08.22 13:39
            </span> */}
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
