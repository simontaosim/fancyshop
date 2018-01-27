import React from 'react';
import { Button,Flex,Checkbox } from 'antd-mobile';
import {Link} from 'react-router-dom';
import style from './common.css';
import s from '../product/common.css';

const CheckboxItem = Checkbox.CheckboxItem;

class BalanceBtn extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div style = {{position:'fixed',bottom:'50px',marginTop:'20px',width:'100%'}}>
    <Flex>
      <div style = {{flexGrow:'1',color:'#fff'}}>
        <CheckboxItem style = {{backgroundColor:'#333',color:'#fff',paddingLeft:'7px'}}>
          <span style = {{color:'white',lineHeight:'1.95em'}}>全选</span>
          <span style = {{float:'right',color:'#fff',lineHeight:'1.95em'}}>合计：
          <span style= {{color:'red',lineHeight:'1.95em'}}>￥250</span></span>
        </CheckboxItem>
      </div>

      <div style = {{flexGrow:'1',backgroundColor:'#ffcf2d'}}>
        <Link to="/firmorder">
          <Button style = {{backgroundColor:'#ffcf2d',color:'#fff',padding:'0 30px'}}>结算</Button>
        </Link>
      </div>
    </Flex>
       </div>
    )
  }
}

export default BalanceBtn;
