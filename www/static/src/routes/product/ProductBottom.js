import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import { Link } from 'react-router-dom';
import history from 'react-router-dom';
import goodImg from '../../assets/img/reward/good.jpg';
import style from './ProductBottom.css';
import { asteroid } from '../../config/asteroid.config'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class ProductBottom extends React.Component {
  constructor(props) {
    super(props);
    this.facilitator = this.facilitator.bind(this)
    this.AddCart = this.AddCart.bind(this)
  }


  AddCart() {
    // console.log(this.props.product)
    let product = Object.assign({},this.props.product,{user_id: 1})
    console.log(product);
    asteroid.call('shop_carts.add_cart',product)
  }

  facilitator () {
    this.props.history.push('/facilitator')
  }

  render(){
    return(
        <Flex >
            <Flex align = "center" style = {{width:'30%',color:'#333'}} justify = "center" onClick={this.facilitator}>
                <img src={require('../svg/shop.svg')} style = {{width:'30px',height:'30px'}}/><span style = {{lineHeight:'2em',color:'#333'}}>店铺</span>
            </Flex>

          {/* <Link to = "./shop_cart"> */}
            <Flex style = {{backgroundColor:'#00b7ee'}} align = "stretch">
              <span style = {{lineHeight:'2.4em',color:'#fff',fontSize:'20px',padding:'0 2rem'}} onClick={this.AddCart}>加入购物车</span>
            </Flex>
          {/* </Link> */}
          <Link to = "/firmorder">
            <Button style = {{backgroundColor:'#ffcf2d',color:'#fff',borderRadius:'0',width:'150%'}}>立即购买</Button>
          </Link>
        </Flex>
    )
  }
}

export default ProductBottom;
