import React from 'react';
import { Button,Flex,Checkbox } from 'antd-mobile';
import {Link} from 'react-router-dom';
import style from './common.css';
import s from '../product/common.css';
import { connect } from 'react-redux';
import { cartInfo } from '../../map_props';
import { shopCheckAll } from '../../reducers/cart.redux'

const CheckboxItem = Checkbox.CheckboxItem;

class BalanceBtn extends React.Component {
  constructor() {
    super()
  }
  CheckAll(e) {
    let data = this.props.cart.goods
    for(var i=0;i<data.shopsData.length;i++){
      data.shopsData[i].checked = e.target.checked;
      for(var j=0;j<data.shopsData[i].productsData.length;j++){
        data.shopsData[i].productsData[j].checked = e.target.checked;
      }
    }
    this.props.shopCheckAll(data)
  }

  render(){
    return (
      <div style = {{position:'fixed',bottom:'50px',marginTop:'20px',width:'100%'}}>
    <Flex>
      <div style = {{flexGrow:'1',color:'#fff'}}>
        <CheckboxItem style = {{backgroundColor:'#333',color:'#fff',paddingLeft:'7px'}} onChange={(e)=>this.CheckAll(e)}>
          <span style = {{color:'white',lineHeight:'1.95em'}}>全选</span>
          <span style = {{float:'right',color:'#fff',lineHeight:'1.95em'}}>合计：
          <span style= {{color:'red',lineHeight:'1.95em'}}>￥{this.props.cart.total}</span></span>
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

export default connect(cartInfo,{shopCheckAll})(BalanceBtn);
