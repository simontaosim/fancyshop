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
import mystyle from '../../layouts/common.less';


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
    this.firmorder = this.firmorder.bind(this)
    this.AddCart = this.AddCart.bind(this)
  }

  componentDidMount() {

  }

  blockModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.props.dispatch(openSpecModel(true))
   //  this.setState({
   //    [key]: true,
   //  });
   }


  AddCart() {
    let product = Object.assign({},this.props.product,{user_id: 1},{count: 1})
    console.log(product);
    asteroid.call('shop_carts.add_cart',product)
  }

  facilitator () {
    this.props.history.push(`/facilitator/${this.props.product.good.shop_id}`)
  }
  firmorder() {
    this.props.history.push('/firmorder')
  }

  render(){
    return(
      <div>
        {/* <div className = {s['container']}>
          <div style = {{display:'flex',borderTop:'1px solid #eee',flexGrow:'1',backgroundColor:'#fff',justifyContent:'center',alignItems: 'center',color:'#1b1b1b',borderRadius:'0',fontSize:'17px',lineHeight:'2.65em',paddingTop:'1px'}} onClick={this.facilitator}>
            <img src={require('../svg/shop.svg')} /><span>店铺</span>
          </div>
          <button style = {{flexGrow:'1',backgroundColor:'#00b7ee',justifyContent:'center',color:'#fff',borderRadius:'0',border:'none',fontSize:'17px',lineHeight:'2.65em' }} onClick={this.blockModal('modal2')}>加入购物车</button>
          <button style = {{flexGrow:'1',backgroundColor:'#ffcf2d',justifyContent:'center',color:'#fff',borderRadius:'0',border:'none',fontSize:'17px',lineHeight:'2.65em',padding:'1px 15px'}} onClick={this.firmorder}>立即购买</button>
        </div> */}
        <div className = {s['container']}>
          <div style = {{display:'flex',borderTop:'1px solid #eee',flexGrow:'1',backgroundColor:'#fff',justifyContent:'center',alignItems: 'center',color:'#1b1b1b',borderRadius:'0'}} onClick={this.facilitator}>
            <img src={require('../svg/shop.svg')} /><span>店铺</span>
          </div>
          {/* <button>
            <img src={require('../svg/shop.svg')} /><span>店铺</span>
          </button> */}
          <button style = {{flexGrow:'1',backgroundColor:'#00b7ee',justifyContent:'center',color:'#fff',borderRadius:'0',border:'none'}} onClick={this.blockModal('modal2')}>加入购物车</button>
          <button style = {{flexGrow:'1',backgroundColor:'#ffcf2d',justifyContent:'center',color:'#fff',borderRadius:'0',border:'none'}} onClick={this.firmorder}>立即购买</button>
        </div>
        {/* <div className = {s['container']}>
          <Button className = {mystyle['my-btn']} style = {{flexGrow:'1',align:'center',border:'none'}}><img src={require('../svg/shop.svg')}/><span>店铺</span></Button>
          <Button style = {{flexGrow:'1',backgroundColor:'#00b7ee',color:'#fff',borderRadius:'0',border:'0px solid #00b7ee',fontSize:'17px'}}>加入购物车</Button>
          <Button style = {{flexGrow:'1',backgroundColor:'#ffcf2d',color:'#fff',borderRadius:'0',border:'none',fontSize:'17px'}}>立即购买</Button>
        </div> */}
      </div>
    )
  }
}

export default connect(modelInfo)(ProductBottom);
