import React from 'react';
import { Button,Flex,Checkbox } from 'antd-mobile';
import {Link} from 'react-router-dom';
import style from './common.css';

const CheckboxItem = Checkbox.CheckboxItem;

class DeleteBtn extends React.Component {
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
      <Flex>
        <div style = {{flexGrow:'1',color:'#fff'}}>
          <CheckboxItem style = {{backgroundColor:'#333',color:'#fff',paddingLeft:'7px'}}>
            <span style= {{color:'#fff',lineHeight:'1.95em'}}>全选</span>
          </CheckboxItem>
        </div>
        <button style = {{flexGrow:'1',backgroundColor:'red',justifyContent:'center',backgroundColor:'red',color:'#fff',borderRadius:'0',border:'none',fontSize:'17px',lineHeight:'2.7em',color:'#fff'}}><Link to="/nullcart" style = {{color:'#fff'}}>删除</Link></button>
      </Flex>

    </div>

    )
  }
}

export default DeleteBtn;
