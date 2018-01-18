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
    }
  }

  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.id
    axios.get('/products')
         .then(result=>{
           console.log(result);
           let product = result.data.goods.find(x=>{ return x.id == id});
           
           this.setState({
             product: product
           },()=>{console.log(this.state.product)})
         })
         .catch(error => {
         })
   // simulate img loading
     this.setState({
       data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
     });
     
 }

render(){
  let {product} = this.state
  console.log(product);
  let  spec = product.spec ? product.spec : []
  let carousel = product.images ? product.images : []
  let pic = carousel.map((img,index)=>{
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
        {/* <div className="sub-title">Normal</div> */}
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
      <Flex>
        <Flex.Item>
          <span className = {style['price-font']}>￥{product.price}</span>
          <span className = {style['black-card']}>{product.name}</span>
        </Flex.Item>
        <span align = "right" style = {{color:'#888'}}>四川 成都</span>
      </Flex>
        <span style = {{ textDecoration:'line-through',color:'#aaa',paddingTop:'3px',lineHeight:'1.8em'}}>￥299</span>
      </div>
      <Flex justify = "around" className = {style['item']}>
        <Flex><img src = {require('../svg/share.svg')} style = {{paddingRight:'6px',width:'28px',height:'28px'}}/><ProductShare/></Flex>
        <Flex>一级奖励:<span style= {{color:'#ffcf2d'}}>￥20</span></Flex>
        <Flex>二级奖励:<span style= {{color:'#ffcf2d'}}>￥10</span><img src={require('../svg/no.svg')} style = {{paddingLeft:'10px',width:'12px',width:'12px'}}/></Flex>
      </Flex>
      <Flex justify = "between" className = {style['item-des']}>
        <Flex>配送方式:{product.deliver}</Flex>
        <Flex>库存:{product.inventory}</Flex>
        <Flex>销量: {product.sales}</Flex>
      </Flex>
      <Flex className = {style['item-type']}>
        <ProductModal/>
      </Flex>
      <ProductTabs/>
      <ProductBottom history={this.props.history}/>
    </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps,{getProduct})(Goods);
