import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Tabs } from 'antd-mobile';
import style from './Facilitator.css';
import goodImg from '../../assets/img/reward/good.jpg';
import userImg from '../../assets/img/timg.jpg';
import {asteroid} from '../../config/asteroid.config';

class Facilitator extends React.Component {
  constructor() {
    super();
    this.state = {
      shop: [],
      products: [],
    }
  };
  componentDidMount() {
    let id = this.props.match.params.shopId;
    asteroid.call('shops.findShopById',id)
            .then(result=> {
              this.setState({
                shop: result,
              })
            })
            .catch(error=> {

            })
            console.log(123);
    asteroid.subscribe("get.shop.products",[id,1,10]);

    asteroid.ddp.on("added", ({collection, id, fields}) => {
        console.log(`Element added to collection ${collection}`);
        console.log(id);
        this.setState({
          products: fields
        })
    });
                    
  }

  render(){
    const tabs = [
      {title : '商品' },
      {title : '简介' },
    ];
    let { shop, products }  = this.state
    console.log(products);
    if(products.length>0){
      products.map((product)=> {
        return(
          <div>
            {product.name}
          </div>
        )
      })
    }
  
    // let prodcutsItem = products.map((product)=>{
    //   return(
    //     <div>
    //     <Link to ='/product/${product._id}'>
    //     <Flex style = {{backgroundColor:'#fff',border:'1px solid #eee',borderRadius:'5px',margin:'10px',padding:'15px',paddingLeft:'20px'}}>
    //       <img src={product.cover} style = {{width:'45px',height:'45px'}}/>
    //       <div style = {{marginLeft:'15px',marginTop:'10px',color:'#000'}}>{product.name}<br/>
    //       <div style = {{display:'flex',justifyContent:'around',padding:'5px'}}>
    //         <span style = {{color:'red',marginLeft:'25px'}}>价格:{product.price}</span>
    //         <span style = {{color:'#fc65e4',marginLeft:'25px'}}>销量:18</span>
    //       </div>
    //     </div>
    //     </Flex>
    //     </Link>
    //   </div>
    //   )
    // })
    return (
      <div >
        <div className = { style['bg-img']}>
          <Flex justify = "center" align = "center" className = {style['user']}><img src={shop.cover}/></Flex>
          <Flex justify = "center" className = {style['distance']}>{shop.name}</Flex>
          <Flex justify = "center" className = {style['distance2']}>
            <img src = {require('../svg/location-white.svg')} style = {{width:'12px',height:'12px',color:'#fff',letterSpacing:'1px',padding:'0 5px'}}/>{shop.address}
            <img src = {require('../../assets/svg/phone-blue.svg')} style= {{backgroundColor:'#00b7ee',borderRadius:'14px',width:'16px',height:'16px',padding:'6px',alignSelf:'flex-end',marginLeft:'10px'}}/>
          </Flex>
        </div>
        <Tabs tabs = {tabs} >
          <div>
            <Link to ='/product/1'>
            <Flex style = {{backgroundColor:'#fff',border:'1px solid #eee',borderRadius:'5px',margin:'10px',padding:'15px',paddingLeft:'20px'}}>
              <img src={goodImg} style = {{width:'45px',height:'45px'}}/>
              <div style = {{marginLeft:'15px',marginTop:'10px',color:'#000'}}>这是商品的名称占位符占位符占一排<br/>
              <div style = {{display:'flex',justifyContent:'around',padding:'5px'}}>
                <span style = {{color:'red',marginLeft:'25px'}}>价格:183</span>
                <span style = {{color:'#fc65e4',marginLeft:'25px'}}>销量:18</span>
              </div>
            </div>
            </Flex>
            </Link>
          </div>
          <div>
            <Flex justify = "center" align = "center">
              {shop.description}
            </Flex>
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Facilitator;
