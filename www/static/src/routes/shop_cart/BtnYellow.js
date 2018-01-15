import React from 'react';
import { Button,Flex,Checkbox } from 'antd-mobile';
import style from './common.css';

const CheckboxItem = Checkbox.CheckboxItem;

class BtnYellow extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div className = {style['bottom-pos']}>
      <Flex >
        <CheckboxItem className = {style['bottom-all']}><span style = {{color:'white'}}>全选</span><span style = {{float:'right',color:'#fff'}}>合计：<span style= {{color:'red'}}>￥250</span></span></CheckboxItem>
        <a href ="#/shopedit"><Flex justify = "center" className = {style['bottom-balance']}>结算</Flex></a>
      </Flex>
      </div>
    )
  }
}

export default BtnYellow;
