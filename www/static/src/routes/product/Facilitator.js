import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Tabs} from 'antd-mobile';
import style from './Facilitator.css';
import {MClient} from '../../config/asteroid.config.js';
import { connect } from 'react-redux';
import { getShopProducts } from '../../actions/shopProductsAction'
import MyActivityIndicator  from '../common/MyActivityIndicator';
import Shop from '../../assets/img/facilitator.png';

class Facilitator extends React.Component {
  constructor() {
    super();
    this.state = {
      shop: [],
      isFetching: true,
    }
  };
  componentDidMount() {
    let id = this.props.match.params.shopId;
    let { dispatch } = this.props;
    dispatch(getShopProducts(id,1,10))
    let methodId = MClient.method("shops.findShopById", [id]);
    MClient.on("result", message => {
      if(message.id === methodId && !message.error){
        this.setState({
          shop: message.result,
          isFetching: false
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
    let { shop,isFetching }  = this.state
    let { shopProducts } = this.props
    return (
      <div >
        <div className = { style['bg-img']}>
          <MyActivityIndicator isFetching={isFetching} />
          <Flex justify = "center" align = "center" className = {style['user']}><img src={shop.cover}  alt="图片未显示" /></Flex>
          <Flex justify = "center" className = {style['distance']}>{shop.name}</Flex>
          <Flex justify = "center" className = {style['distance2']}>
            <img  alt="" src = {require('../svg/location-white.svg')} style = {{width:'12px',height:'12px',color:'#fff',letterSpacing:'1px',padding:'0 5px'}}/>{shop.address}
            <a href={"tel: "+ shop.phone }><img alt="" src = {require('../../assets/svg/phone-blue.svg')} style= {{backgroundColor:'#00b7ee',borderRadius:'14px',width:'16px',height:'16px',padding:'6px',alignSelf:'flex-end',marginLeft:'10px'}}/></a>
          </Flex>
        </div>
        <Tabs tabs = {tabs} >
          <div>
           {
                 shopProducts.list.map((product)=>{
                  return(
                    <div key={product.id}>
                      <Link to ={`/product/${product.id}`} >
                      <Flex style = {{backgroundColor:'#fff',border:'1px solid #eee',borderRadius:'5px',margin:'10px',padding:'15px',paddingLeft:'20px'}}>
                        <img src={product
            .cover} style = {{width:'45px',height:'45px'}}  alt="图片未显示" />
                        <div style = {{marginLeft:'15px',marginTop:'10px',color:'#000'}}>{product
            .name_zh}<br/>
                        <div style = {{display:'flex',justifyContent:'around',padding:'5px'}}>
                          <span style = {{color:'red',marginLeft:'25px'}}>价格:{product
            .price/100}</span>
                          <span style = {{color:'#fc65e4',marginLeft:'25px'}}>销量:18</span>
                        </div>
                      </div>
                      </Flex>
                      </Link>
                  </div>
                  )
                })
           }
          </div>
          <div>
            <Flex direction="column" align="start" style={{ margin: '10px', padding: '15px 10px', fontSize: '14px', backgroundColor: '#fff' }}>
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
    shopProducts: state.shopProductsReducer
  }
}

export default connect(mapProducts)(Facilitator);
