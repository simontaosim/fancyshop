import React from 'react';
import { Flex, Carousel } from 'antd-mobile';

import ProductTabs from './ProductTabs';
import ProductShare from './ProductShare';
import ProductBottom from './ProductBottom';
import ProductModal from './ProductModal';
import style from './common.css'
import goodImg from '../../assets/img/reward/good.jpg';
import '../../service/data/datasource';
import axios from 'axios';
import {getProduct} from '../../reducers/product.redux';
import { getCart } from '../../reducers/cart.redux';
import { loadProductById } from '../../actions/products';
import { connect } from 'react-redux';


class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      val: 1,
      product: [],
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
      tagMenuClick: []
    }
  }


componentDidMount() {
    let id = this.props.match.params.id;
    this.props.loadProductById(id)

    // this.props.getProduct(id)  
 }

 componentWillReceiveProps(nextProps) {
    if(nextProps.product.good){
      let spec = nextProps.product.good.spec
      let tagMenuArr = [];
      for(var i=0;i<spec.length;i++){
        if(spec[i].isThis == true){
          tagMenuArr.push(true)
        }else{
          tagMenuArr.push(false)
        }
      }
      this.setState({
        product: nextProps.product.good,
        tagMenuClick: tagMenuArr
      })
    }else{
      console.log('no')
    }
 }

render(){
  let product = this.props.productShow.product
  console.log(product)
  let productDefault =  this.props.productShow
  let pic = product.images.map((img,index)=>{
    return(
      <a
          key={index}
          href="#"
          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
        >
          <img
            src={`${img}`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </a>
    )
  })
  return (
    <div className = {style['product-frame']}>
      <div >
    <Carousel
      dots = {true}
      autoplay={false}
      infinite
      selectedIndex={1}
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
    {pic}
    </Carousel>
      </div>
      <div  className = {style['describe']}>
      <Flex className = {style['describe-font']}>
        {product.description}
      </Flex>
      <Flex style = {{marginBottom:'-10px'}}>
        <Flex.Item justify = "center" >
          <span className = {style['price-font']}>￥{product.price}</span>
          <span className = {style['black-card']}>{product.name_zh}</span>
        </Flex.Item>
        <span align = "right" style = {{color:'#7b7b7b'}}>{productDefault.address}</span>
      </Flex>
        <span style = {{ textDecoration:'line-through',color:'#aaa',paddingTop:'3px',lineHeight:'1.8em'}}>￥299</span>
      </div>
      <Flex justify = "between" className = {style['item']}>
        <Flex > <ProductShare/></Flex>
        <Flex>一级奖励:<span style= {{color:'#ffcf2d'}}>￥20</span></Flex>
        <Flex>二级奖励:<span style= {{color:'#ffcf2 d'}}>￥10</span><img src={require('../svg/no.svg')} style = {{paddingLeft:'10px',width:'14px',width:'14px'}}/></Flex>
      </Flex>
      <Flex justify = "between" className = {style['item-des']}>
        <Flex>配送方式:{productDefault.deliver}</Flex>
        <Flex>库存:{productDefault.inventory}</Flex>
        <Flex>销量: {productDefault.sales} </Flex>
      </Flex>
      <Flex className = {style['item-type']}>
        <ProductModal spec={product.specifications} tagMenuClick={this.state.tagMenuClick} history={this.props.history}/>
      </Flex>
      <ProductTabs/>
      <ProductBottom history={this.props.history} shopId={product.shopId} />
    </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    product: state.product,
    productShow: state.productShow
  }
}

export default connect(mapStateToProps,{getProduct,loadProductById})(Goods);
