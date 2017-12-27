/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';

import { appInfo } from '../../map_props.js';
import { Flex, WhiteSpace, WingBlank,Tabs } from 'antd-mobile';

//redux actions
import {setAppTitle} from '../../actions/app.js';
// import pswImg from './validate1.png'



class MessageBox extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(setAppTitle(this.props.path));


  }
  render(){
    const tabs = [
      {title:'已付款'},
      {title:'已结算'},
      {title:'已失效'}
    ]
    return (


    <div>
      <WingBlank/>
      <div className = "flex-container" style = {{border:'1px solid #aaa',backgroundColor:'#fff',backgroundImage:'url(./)'}}>
        <div style = {{display:'flex'}}>
          <img style = {{border:'1px solid #aaa',borderRadius:'15px',height:'30px',width:'30px'}}/>
          <span style = {{verticalAlign:'middle',lineHeight:'30px'}}>This is my name</span>
        </div>
        <br/>
        <br/>
        <Flex justify = "center">"已在万人车汇APP累计获得佣金"</Flex><br/>
        <Flex justify = "center" style = {{color:'#ffd308',fontSize:'30px'}}>￥3888</Flex><br/>
        <Flex justify = "center" style = {{color:'#ffd308',fontSize:'12px'}}>厉害了，你已超过100%的客户</Flex>

      </div>
      <div className = "flex-container" style = {{border:'1px solid #aaa',backgroundColor:'#fff'}}>
        <Flex><img src = {{}}/><span>收益</span></Flex>
        <table style = {{border:'1px solid #108ee9',borderRadius:'6px',width:'100%',align:'center'}}>
          <tbody>
            <tr style = {{backgroundColor:'#108ee9',color:'#fff',borderRadius:'6px',height:'30px'}}>
              <th>今日</th>
              <th>一周</th>
              <th>30天</th>
            </tr>
            <tr style = {{border:'1px solid blue',align:'center'}}>
              <td align = "center">38.88</td>
              <td align = "center">150.05</td>
              <td align = "center">388.80</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div style = {{backgroundColor:'#fff',borderRadious:'8px'}}
        <Flex>
          <img src = {{pswImg}}/>
          <span>收益</span>
        </Flex>
        <WingBlank/>
        <WingBlank>

        {/* <div style = {{backgroundColor:'#fff',borderRadius:'5px'}}>
        <WingBlank>
        <div className = "flex-container" style = {{border:'1px solid #aaa',backgroundColor:'#fff'}}>

            <table style = {{border:'1px solid red',borderRadius:'6px',width:'100%',align:'center'}}>
              <tbody>
                <tr>
                  <th>今日</th>
                  <th>一周</th>
                  <th>30天</th>
                </tr>
                <tr style = {{border:'1px solid blue',align:'center'}}>
                  <td>38.88</td>
                  <td>150.05</td>
                  <td>388.80</td>
                </tr>
              </tbody>
            </table>

        </div>

      </WingBlank>
      */}
      <div style = {{backgroundColor:'#fff',border:'1px solid #aaa',borderRadius:'8px',align:'center',margin:'20px'}}>
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
        {/* <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs> */}
      </div>
    </div>
    )
  }
}


export default connect(appInfo)(MessageBox);
