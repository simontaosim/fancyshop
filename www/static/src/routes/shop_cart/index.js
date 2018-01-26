import React from 'react';
import { Flex, Button, Checkbox } from 'antd-mobile';
import goodsImg from '../../assets/img/reward/good.jpg';
// import Shop from './shopcart';
import ShopCartList from './ShopCartList';
import style from './common.css';
import DeleteBtn from './DeleteBtn';
import BalanceBtn from './BalanceBtn';

const CheckboxItem = Checkbox.CheckboxItem;
class ShopCart extends React.Component{
  constructor() {
    super()
    this.state = {
      edit: false,
    }
  }


  render(){
    var text = this.state.edit ? '完成' : '编辑'
    var link = this.state.edit ? '#/shopedit' : '#/shop_cart'
    var btn = this.state.edit ? <DeleteBtn/>:<BalanceBtn/>
    return(

      <div className = {style['bg-color']}  history={this.props.history}>

        <Flex justify = "end" style = {{backgroundColor:"#333",color:'#fff',lineHeight:'3em',padding:'5px 10px'}}>
          <span style = {{textAlign:'right'}}> <span   onClick={(e) => {
            e.preventDefault();
            this.setState({
              edit:!this.state.edit,
            });
          }}>{text}</span></span>
        </Flex>
        <div className = {style['item-frame']}>
          <ShopCartList/>
          <ShopCartList/>
        </div>
        <div history={this.props.history}>
          {btn}
        </div>
      </div>
    )
  }
}

export default ShopCart;
