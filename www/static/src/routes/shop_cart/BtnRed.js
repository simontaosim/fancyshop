import React from 'react';
import { Button,Flex,Checkbox } from 'antd-mobile';
import {Link} from 'react-router-dom';
import style from './common.css';

const CheckboxItem = Checkbox.CheckboxItem;

class BtnRed extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div>
{/*
      <div className = {style['bottom-pos']}>
      <Flex >
        <CheckboxItem className = {style['bottom-all']}><span style = {{color:'white'}}>全选</span></CheckboxItem>
        <Button size = "large" className = {style['bottom-balance-red']}>删除</Button>
        {/* <Link to="/nullcart">
        <Flex justify = "center" className = {style['bottom-balance-red']}>删除</Flex>
        </Link> *
        {/* <Button style= {{backgroundColor:'red',width:'100%',textAlign:'center',color:'white',border:'1px solid red'}}>删除</Button> *}
      </Flex>
      </div> */}

      <Flex>
        <div style = {{flexGrow:'1',color:'#fff'}}>
          <CheckboxItem style = {{backgroundColor:'#333',color:'#fff',paddingLeft:'7px'}}>
            <span style= {{color:'#fff',lineHeight:'1.95em'}}>全选</span>
          </CheckboxItem>
        </div>

        <div style = {{flexGrow:'1',backgroundColor:'red'}}>
          <Link to="/nullcart">
          <Button style = {{backgroundColor:'red',color:'#fff'}}>删除</Button>
        </Link>

        </div>
      </Flex>

    </div>

    )
  }
}

export default BtnRed;
