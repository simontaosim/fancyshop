import React from 'react';
import { Button,Flex,Checkbox } from 'antd-mobile';
import style from './common.css';
import s from '../product/common.css';

const CheckboxItem = Checkbox.CheckboxItem;

class BtnYellow extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div>
      {/* <div className = {style['bottom-pos']}>
      <Flex justify = "start">
        <CheckboxItem className = {style['bottom-all']}>
          <span style = {{color:'white'}}>全选</span>
          <span style = {{float:'right',color:'#fff'}}>合计：
          <span style= {{color:'red'}}>￥250</span></span>
        </CheckboxItem>
        <Button size = "large" className = {style['bottom-balance']}>结算</Button>
        {/* <Flex justify = "center" className = {style['bottom-balance']}>结算</Flex> /}
      </Flex>
    </div> */}
    <div className = {s['container']}>
      <CheckboxItem className = {s['box1']} className = {s['am-list-line']} style = {{backgroundColor:'#333',border:'none',padding:'2px',flexGrow:'0',paddingLeft:'7px'}}>
        <span style = {{color:'white'}}>全选</span>
        <span style = {{float:'right',color:'#fff',paddingLeft:'15px'}}>合计：
        <span style= {{color:'red'}}>￥250</span></span>
      </CheckboxItem>
      <div className = {s['box2']} style = {{backgroundColor:'#ffcf2d',flexGrow:'1'}}>
        <Button style = {{backgroundColor:'#ffcf2d',color:'#fff'}}>结算</Button>
      </div>
    </div>
       </div>
    )
  }
}

export default BtnYellow;
