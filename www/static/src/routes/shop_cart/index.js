import React from 'react';
import { Flex, Button, Checkbox } from 'antd-mobile';
import goodsImg from '../../assets/img/reward/good.jpg';
import ShopCartList from './ShopCartList';
import style from './common.css';
// import ShopCartList from './test';

import { getCart } from '../../reducers/cart.redux';
import { connect } from 'react-redux';
import { cartInfo } from '../../map_props';
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

  componentDidMount() {
    // this.props.getCart(2);
  }




  render(){
    var text = this.state.edit ? '完成' : '编辑'
    var btn = this.state.edit ? <DeleteBtn history={this.props.history}/>:<BalanceBtn history={this.props.history}/>

    return(

      <div className = {style['bg-color']} >

        <Flex justify = "end" style = {{backgroundColor:"#333",color:'#fff',lineHeight:'3em',padding:'5px 10px'}}>
          <span style = {{textAlign:'right'}}> <span  onClick={(e) => {
            e.preventDefault();
            this.setState({
              edit:!this.state.edit,
            });
          }}>{text}</span></span>
        </Flex>
        <div className = {style['item-frame']}>
          <ShopCartList/>
        </div>
        <div>
          {btn}
        </div>
      </div>
    )
  }
}

export default connect(cartInfo,{getCart})(ShopCart);
