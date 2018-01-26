import React from 'react';
import { Flex, Button, Checkbox } from 'antd-mobile';
import goodsImg from '../../assets/img/reward/good.jpg';
import Shop from './shopcart';
import style from './common.css';
import BtnRed from './BtnRed';
import BtnYellow from './BtnYellow';
import { getCart } from '../../reducers/cart.redux';
import { connect } from 'react-redux';
import { cartInfo } from '../../map_props';

const CheckboxItem = Checkbox.CheckboxItem;
class ShopCart extends React.Component{
  constructor() {
    super()
    this.state = {
      edit: false,
    }
  }

  componentDidMount() {

  }


  render(){
    var text = this.state.edit ? '完成' : '编辑'
    var link = this.state.edit ? '#/shopedit' : '#/shop_cart'
    var btn = this.state.edit ? <BtnRed/>:<BtnYellow/>
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
          <Shop/>
        </div>
        <div history={this.props.history}>
          {btn}
        </div>
      </div>
    )
  }
}

export default connect(cartInfo,{getCart})(ShopCart);
