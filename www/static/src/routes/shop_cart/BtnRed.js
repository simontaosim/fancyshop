import React from 'react';
import { Button,Flex,Checkbox } from 'antd-mobile';
import style from './common.css';

const CheckboxItem = Checkbox.CheckboxItem;

class BtnRed extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div className = {style['bottom-pos']}>
      <Flex >
        <CheckboxItem className = {style['bottom-all']}><span style = {{color:'white'}}>全选</span></CheckboxItem>
        <Flex justify = "center" className = {style['bottom-balance-red']}>结算</Flex>
      </Flex>
      </div>
    )
  }
}

export default BtnRed;
