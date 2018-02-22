import React from 'react';
import { List, Icon, Flex, Button, InputItem, TextareaItem } from 'antd-mobile';
import { Link } from 'react-router-dom';
import goodImg from '../../assets/img/reward/good.jpg';
import styles from '../orders/WaitDetails.css';
import stylec from '../orders/Common.css';
import { orderInfo} from '../../map_props';
import { loadOrderById } from '../../actions/orders';
import { connect } from 'react-redux';
import { MClient } from '../../config/asteroid.config.js'


class FirmOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order:  {
       "_id" : "",
      "type" : null,
      "userId" : "",
      "status" : "",
      "shopId" : "",
      "products" : [
      ],
      "username" : "",
      "address" : null
       },
       shop: {

       },
       remark: ''
    }
    this.paid = this.paid.bind(this)
  }

  componentWillMount() {
    // let id = this.props.match.params.orderId;
    // let {dispatch} = this.props;
    // dispatch(loadOrderById(id))
  }
  componentDidMount() {
    let id = this.props.match.params.orderId;
    console.log(`走不走`)
    MClient.call('app.order.getone',id)
            .then(result => {
              console.log(result);
              if(result){
                this.setState({
                  order: result.order,
                  shop: result.shop
                })
              }
            })
            .catch(error => {
              console.log(error);
            })
  }
 
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  paid() {
    console.log(`提交`)
  console.log(this.state.remark)
    let params = {
      remark: this.state.remark,
      id: this.state.order._id,
      shop_name: this.state.shop.name,
      address: this.state.shop.address
    }
    MClient.call('app.order.update',params)
            .then(result => {
                if(result){
                  this.props.history.push(`/paid/${this.state.order._id}`)
                }
            })
            .catch(error => {

            })
  }

  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }

  render(){
    let {order, shop} = this.state;
   let productItem;
   if(order.products.length>0){
      productItem  = order.products.map((product,index)=> {
       return(
       <div className = {styles['goods-frame']} style = {{border:'1px dashed red'}} key={index}>
         <Flex justify = "center" className = {styles['goods-item']}>
            <div className = {styles['img-border']} >
              <img src = {product.cover} className = {styles['goods-img']}/>
            </div>
            <div >
              <Flex style = {{marginBottom:'10px'}}>{product.name}</Flex>
              <span className = {styles['type-color']}>规格：{product.specifications.name} </span>    <span className = {styles['price-pst']}><span className = {styles['price-color']}>￥{product.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>×{product.count}</span>
            </div>
          </Flex>
        </div>
       )
     })
   }

    return(
      <div style = {{marginTop:'60px',fontSize:'16px'}}>
        <div className = {styles['item-info']}>
          <div><img src={require('../svg/send.svg')} className = {styles['item-icon']}/>配送方式：<span style = {{color:'#888'}}>到店自提</span></div>
          <div>
          <Link to = "/address">
            <div style = {{color:'#333',padding:'10px 0'}}><img src={require('../svg/location.svg')} className = {styles['item-icon']}/>地址：<span style = {{color:'#888',backgroundColor:'#eee'}}>{shop.address}</span></div>
            <div style = {{color:'#333'}}><img src={require('../svg/phone.svg')} className = {styles['item-icon']}/>电话：<span style = {{color:'#888',backgroundColor:'#eee'}}>{shop.phone}</span></div>
          </Link>
          </div>
        </div>


        <div className = {styles['item-notice']}>
          <div><img src={require('../svg/notice.svg')} className = {styles['item-icon']}/>备注：<br/>
          <TextareaItem rows = "3" style = {{backgroundColor:'#eee',fontSize:'14px',width:'95%',padding:'10px 3px'}} placeholder = "到店自提这是占位符占位符请不要介意如此粗糙的占位符哈哈哈哈" onChange={v=>this.handleChange('remark',v)}/>
        </div>
        </div>

        {productItem }

        <Flex style = {{position:'fixed',bottom:'50px',marginTop:'20px',width:'100%',flexGrow:'1'}}>
          <Flex justify="start" style= {{backgroundColor:'#333',color:'#fff',lineHeight:'3.4em',padding:'0 15px',flexGrow:'2',height:'50px',fontSize:'14px'}}>合计：<span style = {{color:'red',paddingLeft:'5px',fontSize:'16px'}}>￥{order.products.length>0? order.products[0].price*order.products[0].count : 0}</span></Flex>
          <button style = {{display:'flex',flexGrow:'1',backgroundColor:'#ffcf2d',justifyContent:'center',color:'#fff',borderRadius:'0',border:'none',height:'50px',fontSize:'17px'}} onClick={this.paid}>
            <span style= {{textAlign:'center',color:'#fff',lineHeight:'1.95em'}} >提交订单</span>
          </button>
        </Flex>

      </div>
    )
  }

}

export default connect(orderInfo)(FirmOrder);
