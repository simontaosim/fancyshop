import React from 'react';
import { Button,Flex,Checkbox } from 'antd-mobile';
import {Link} from 'react-router-dom';
import style from './common.css';

const CheckboxItem = Checkbox.CheckboxItem;

class BtnRed extends React.Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this)

  }

  delete() {
    console.log(this.props.history);
    this.props.history.push('/nullcart')
  }


  render(){
    return (
      <div style = {{position:'fixed',bottom:'50px',marginTop:'20px',width:'100%'}}>
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
    {/*
        <div style = {{flexGrow:'1',backgroundColor:'red',justifyContent:'center'}}>
          <Link to="/nullcart">
          <Button style = {{backgroundColor:'red',color:'#fff',borderRadius:'0',border:'none'}}>删除</Button>
        </Link>

        </div>
    */}

        <button style = {{flexGrow:'1',backgroundColor:'red',justifyContent:'center',backgroundColor:'red',color:'#fff',borderRadius:'0',border:'none',fontSize:'17px',lineHeight:'2.7em',color:'#fff'}}><Link to="/nullcart" style = {{color:'#fff'}}>删除</Link></button>
      </Flex>

    </div>

    )
  }
}

export default BtnRed;
