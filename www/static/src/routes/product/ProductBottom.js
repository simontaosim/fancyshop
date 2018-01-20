import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import { Link } from 'react-router-dom';
import history from 'react-router-dom';
import goodImg from '../../assets/img/reward/good.jpg';
import style from './ProductBottom.css';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class ProductBottom extends React.Component {
  constructor() {
    super();
    this.facilitator = this.facilitator.bind(this)
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

          <Link to = "./shop_cart">
            <Flex style = {{backgroundColor:'#00b7ee'}}>
              <span style = {{lineHeight:'2.4em',color:'#fff',fontSize:'20px'}}>加入购物车</span>
            </Flex>
          </Link>
          <Link to = "/firmorder">
            <Button style = {{backgroundColor:'#ffcf2d',color:'#fff',borderRadius:'0',width:'150%'}}>立即购买</Button>
          </Link>
        </Flex>
    )
  }
}

export default ProductBottom;
