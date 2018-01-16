import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import { Link } from 'react-router-dom';
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
  }

  render(){
    return(
        <Flex>
            <Flex style = {{width:'25%',color:'#333'}} justify = "center">
                <Link to = "/facilitator"><img src={require('../svg/shop.svg')} style = {{width:'30px',height:'30px'}}/><span style = {{lineHeight:'2em',color:'#333'}}>店铺</span>
                </Link>
            </Flex>
          <Link to = "./shop_cart">
            <Flex style = {{backgroundColor:'#00b7ee'}}>
              <span style = {{lineHeight:'3em',color:'#fff'}}>加入购物车</span>
            </Flex>
          </Link>
          <Flex.Item style = {{backgroundColor:'#ffcf2d',width:'40%'}} >
            <Link to = "/firmorder">
              <Flex justify = "center"  style = {{lineHeight:'2.8em',color:'white'}}>立即购买</Flex>
            </Link>
          </Flex.Item>
        </Flex>
    )
  }
}

export default ProductBottom;
