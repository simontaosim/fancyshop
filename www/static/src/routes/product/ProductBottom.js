import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import { Link } from 'react-router-dom';
import history from 'react-router-dom';
import goodImg from '../../assets/img/reward/good.jpg';
import style from './ProductBottom.css';
import s from './common.css';
import { asteroid } from '../../config/asteroid.config';
import { connect } from 'react-redux';
import { openSpecModel, closeSpecModel } from '../../reducers/model.redux';
import { modelInfo } from '../../map_props';


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

  componentDidMount() {

  }

  blockModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    console.log(`为什么走这里`)
    this.props.dispatch(openSpecModel(true))
   //  this.setState({
   //    [key]: true,
   //  });
   }


  AddCart() {
    // console.log(this.props.product)
    let product = Object.assign({},this.props.product,{user_id: 1},{count: 1})
    console.log(product);
    asteroid.call('shop_carts.add_cart',product)
  }

  facilitator () {
    console.log(this.props)
    this.props.history.push(`/facilitator/${this.props.product.good.shop_id}`)
  }

  render(){
    return(
      <div>
        {/* <Flex >
            <Flex align = "center" style = {{width:'30%',color:'#333'}} justify = "center" align = "stretch" onClick={this.facilitator}>
                <img src={require('../svg/shop.svg')} style = {{width:'30px',height:'30px'}}/><span style = {{lineHeight:'2em',color:'#333'}}>店铺</span>
            </Flex>

          {/* <Link to = "./shop_cart"> */}

            {/* <Flex style = {{backgroundColor:'#00b7ee'}} align = "stretch">
              <span style = {{lineHeight:'2.4em',color:'#fff',fontSize:'20px',padding:'0 2rem'}} onClick={this.AddCart}>加入购物车</span>
            </Flex> *}
            <Button style = {{backgroundColor:'#00b7ee',color:'#fff',borderRadius:'0',padding:'0 10%'}} onClick={this.AddCart}>加入购物车</Button>
          {/* </Link> *}

          <Link to = "/firmorder">
            <Button style = {{backgroundColor:'#ffcf2d',color:'#fff',borderRadius:'0',width:'150%'}}>立即购买</Button>
          </Link>
        </Flex> */}
        <div className = {s['container']}>
          <div className = {s['box1']} onClick={this.facilitator}>
            <img src={require('../svg/shop.svg')} /><span>店铺</span>
          </div>

          {/* <div className = {s['box2']} onClick={this.blockModal('modal2')}> */}
              <button style = {{flexGrow:'1',backgroundColor:'#00b7ee',justifyContent:'center',color:'#fff',borderRadius:'0',border:'none',fontSize:'17px',lineHeight:'2.65em' }} onClick={this.blockModal('modal2')}>加入购物车</button>
            {/* <Button align = "stretch" style = {{backgroundColor:'#00b7ee',color:'#fff',borderRadius:'0',border:'none',padding:'0 10px'}} >加入购物车</Button> */}
          {/* </div> */}
          <Link to = "/firmorder">

          <div className = {s['box3']}>
            <Button style = {{backgroundColor:'#ffcf2d',color:'#fff',borderRadius:'0',border:'none',outline:'none',padding:'0 20px'}}>立即购买</Button>
          </div>
          {/* </Link> */}

          {/* <div className = {s['box1']}>123232</div>
          <div className = {s['box2']}><button>hello</button></div>
          <div className = {s['box3']}>12155</div>
          <div className = {s['box4']}>444444444444</div>
          <div className = {s['box5']}>222</div> */}
        </div>

      </div>
    )
  }
}

export default connect(modelInfo)(ProductBottom);
