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
      <div className = {style['bottom-pos']}>
      <Flex >
        <CheckboxItem className = {style['bottom-all']}><span style = {{color:'white'}}>全选</span></CheckboxItem>
        <Link to="/nullcart">
        <Flex justify = "center" className = {style['bottom-balance-red']}>删除</Flex>
        </Link>
        {/* <Button style= {{backgroundColor:'red',width:'100%',textAlign:'center',color:'white',border:'1px solid red'}}>删除</Button> */}
      </Flex>
      </div>
    )
  }
}

export default BtnRed;
