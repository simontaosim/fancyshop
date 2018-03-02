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
// import {getProduct} from '../../reducers/product.redux';
import { getCart } from '../../reducers/cart.redux';
import { loadProductById } from '../../actions/products';
import { getProduct } from '../../actions/productAction';
import { connect } from 'react-redux';
import 
 MyActivityIndicator  from '../common/MyActivityIndicator';


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
      tagMenuClick: [true]
    }
  }


componentDidMount() {
    let id = this.props.match.params.id;
    let { dispatch } = this.props;
    dispatch(getProduct(id))
    // this.props.loadProductById(id)

    // this.props.getProduct(id)  
 }

 componentWillReceiveProps(nextProps) {
   if(nextProps.reviceProduce) {
    //  let tagMenuArr = [];
    //  let spec = nextProps.productShow.specifications
    //  for(var i=0;i<spec.length;i++){
    //     tagMenuArr.push(false)
    //  }
    //  tagMenuArr[0] = true
    //  console.log(tagMenuArr)
    //  this.setState({
    //   tagMenuClick: tagMenuArr
    //  })
   }
    // if(nextProps.product.good){
    //   let spec = nextProps.product.good.spec
    //   let tagMenuArr = [];
    //   for(var i=0;i<spec.length;i++){
    //     if(spec[i].isThis == true){
    //       tagMenuArr.push(true)
    //     }else{
    //       tagMenuArr.push(false)
    //     }
    //   }
    //   this.setState({
    //     // product: nextProps.product.good,
    //     tagMenuClick: tagMenuArr
    //   })
    // }else{
    //   console.log('no')
    // }
 }

render(){
  let { product } = this.props
  return (
    <div className = {style['product-frame']}>
     <MyActivityIndicator isFetching={product.isFetching} />
      <div >
          <Carousel
            dots = {true}
            autoplay={false}
            infinite
            selectedIndex={0}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
          { product.product.images.map((img,index)=>{
          return(
              <div
                  key={index}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`${img}`}
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}  
                  />
                </div>
            )
          })
        }
        </Carousel>
      </div>

      <div  className = {style['describe']}>
      <Flex className = {style['describe-font']}>
        {product.product.description}
      </Flex>
      <Flex style = {{marginBottom:'-10px'}}>
        <Flex.Item justify = "center" >
          <span className = {style['price-font']}>￥{product.product.endPrice/100}</span>
          <span className = {style['black-card']}>{product.product.name_zh}</span>
        </Flex.Item>
        <span align = "right" style = {{color:'#7b7b7b'}}>{product.product.address}</span>
      </Flex>
        <span style = {{ textDecoration:'line-through',color:'#aaa',paddingTop:'3px',lineHeight:'1.8em'}}>￥{product.product.price}</span>
      </div>
      <Flex justify = "between" className = {style['item']}>
        <Flex > <ProductShare/></Flex>
        <Flex>一级奖励:<span style= {{color:'#ffcf2d'}}>￥20</span></Flex>
        <Flex>二级奖励:<span style= {{color:'#ffcf2 d'}}>￥10</span><img src={require('../svg/no.svg')} style = {{paddingLeft:'10px',width:'14px',width:'14px'}}/></Flex>
      </Flex>
      <Flex justify = "between" className = {style['item-des']}>
        <Flex>配送方式:{product.deliver}</Flex>
        <Flex>库存:{product.inventory}</Flex>
        <Flex>销量: {product.sales} </Flex>
      </Flex>
      <Flex className = {style['item-type']}>
        <ProductModal spec={product.product.specifications} tagMenuClick={this.state.tagMenuClick} history={this.props.history}/>
      </Flex>
      <ProductTabs/>
      <ProductBottom history={this.props.history} shopId={product.product.shopId} />
    </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    product: state.productReducer,
    // product: state.product,
    // reviceProduce: state.productShow.product
  }
}

export default connect(mapStateToProps)(Goods);
