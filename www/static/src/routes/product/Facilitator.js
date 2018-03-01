import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Tabs} from 'antd-mobile';
import style from './Facilitator.css';
import {MClient} from '../../config/asteroid.config.js';
import { connect } from 'react-redux';
import { loadShopProductsByShopId } from '../../actions/products';

class Facilitator extends React.Component {
  constructor() {
    super();
    this.state = {
      shop: [],
    }
  };
  componentDidMount() {
    let id = this.props.match.params.shopId;
    let { dispatch } = this.props;
    dispatch(loadShopProductsByShopId(id,1,10))
    let methodId = MClient.method("shops.findShopById", [id]);
    MClient.on("result", message => {
      if(message.id === methodId && !message.error){
        this.setState({
          shop: message.result,
        })
      }else{
      }
    })
  }

  render(){
    const tabs = [
      {title : '商品' },
      {title : '简介' },
    ];
    let { shop }  = this.state
    console.log(this.props.products)
    let productsItem;
    if(this.props.shopproducts.length>0){
      productsItem = this.props.shopproducts.map((product)=>{
        return(
          <div key={product.id}>
            <Link to ={`/product/${product.id}`} >
            <Flex style = {{backgroundColor:'#fff',border:'1px solid #eee',borderRadius:'5px',margin:'10px',padding:'15px',paddingLeft:'20px'}}>
              <img alt="" src={product.fields
  .cover} style = {{width:'45px',height:'45px'}}/>
              <div style = {{marginLeft:'15px',marginTop:'10px',color:'#000'}}>{product.fields
  .name_zh}<br/>
              <div style = {{display:'flex',justifyContent:'around',padding:'5px'}}>
                <span style = {{color:'red',marginLeft:'25px'}}>价格:{product.fields
  .price}</span>
                <span style = {{color:'#fc65e4',marginLeft:'25px'}}>销量:18</span>
              </div>
            </div>
            </Flex>
            </Link>
        </div>
        )
      })
    }else{
      console.log(`加载失败`)
    }
    return (
      <div >
        <div className = { style['bg-img']}>
          <Flex justify = "center" align = "center" className = {style['user']}><img alt="" src={shop.cover}/></Flex>
          <Flex justify = "center" className = {style['distance']}>{shop.name}</Flex>
          <Flex justify = "center" className = {style['distance2']}>
            <img  alt="" src = {require('../svg/location-white.svg')} style = {{width:'12px',height:'12px',color:'#fff',letterSpacing:'1px',padding:'0 5px'}}/>{shop.address}
            <img alt="" src = {require('../../assets/svg/phone-blue.svg')} style= {{backgroundColor:'#00b7ee',borderRadius:'14px',width:'16px',height:'16px',padding:'6px',alignSelf:'flex-end',marginLeft:'10px'}}/>
          </Flex>
        </div>
        <Tabs tabs = {tabs} >
          <div>
           { productsItem }
          </div>
          <div>
           <Flex justify = "start" align = "center" style = {{margin:'10px',padding:'15px 10px',fontSize:'14px',backgroundColor:'#fff'}}>
              {shop.description}
            </Flex>
          </div>
        </Tabs>
      </div>
    )
  }
}

function mapProducts(state){
  return {
    shopproducts: state.productShow.shopProducts
  }
}

export default connect(mapProducts)(Facilitator);
