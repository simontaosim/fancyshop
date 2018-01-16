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
    this.state = {
      modal2: false,
      val: 1,
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
    }
  }

  showModal = key => (e) => {
   e.preventDefault(); // 修复 Android 上点击穿透
   this.setState({
     [key]: true,
   });
 }
 onClose = key => () => {
   this.setState({
     [key]: false,
   });
 }

 onChange = (val) => {
   // console.log(val);
   this.setState({ val });
   if (this.state.value == 9) {
     // alert("您最多只能购买十件商品！")
     console.log('您最多只能购买十件该商品');
   }
 }

  render(){
    return(
      <div>
        <Flex>
            <Flex style = {{width:'25%'}} justify = "center">
                <Link to = "/facilitator"><img src={require('../svg/shop.svg')} style = {{width:'30px',height:'30px'}}/><span style = {{lineHeight:'2em'}}>店铺</span>
                </Link>
              </Flex>

          <Link to = "./shop_cart">
            <Flex style = {{backgroundColor:'#00b7ee'}}>
              <span style = {{lineHeight:'3.2em',color:'#fff'}}>加入购物车</span>
            </Flex>
          </Link>
          <Flex.Item style = {{backgroundColor:'#ffcf2d',width:'40%'}} >
            <Link to = "/firmorder">
              <Flex justify = "center"  style = {{lineHeight:'2.8em',color:'white'}}>立即购买</Flex>
            </Link>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}

export default ProductBottom;
