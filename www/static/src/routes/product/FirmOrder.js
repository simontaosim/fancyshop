import React from 'react';
import { List, Icon, Flex, Button, InputItem, TextareaItem } from 'antd-mobile';
import { Link } from 'react-router-dom';
import goodImg from '../../assets/img/reward/good.jpg';
import styles from '../orders/WaitDetails.css';
import stylec from '../orders/Common.css';
import { orderInfo} from '../../map_props';
import { loadOrderById } from '../../actions/orders';
import { connect } from 'react-redux';
import { asteroid } from '../../config/asteroid.config'


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
       }
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
    asteroid.call('app.order.getone',id)
            .then(result => {
              console.log(result);
              if(result){
                this.setState({
                  order: result
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
    this.props.history.push('/paid')
  }

  render(){
    let {order} = this.state;
   let productItem;
   if(order.products.length>0){
      productItem  = order.products.map((product,index)=> {
       return(
       <div className = {styles['goods-frame']} style = {{border:'1px dashed red'}} key={index}>
         <Flex justify = "center" className = {styles['goods-item']}>
            <div className = {styles['img-border']} >
              <img src = {goodImg} className = {styles['goods-img']}/>
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
   console.log(productItem)
    
    // console.log(this.props.order)
    // let {order} = this.props
    // console.log(order);
    // console.log(order.username);
    // console.log(order.products.length);
    // if(order.products.length>0){
    //   console.log(order.username)
    // }
    // let productItem = order.products.map((product)=>{
    //   return(
    //     <div>{product.name}222{product.count}</div>
    //   )
    // })
    // if(order.orderItems.length>0){
    //   console.log(order.orderItems)
    // }
    // let orderItems = order.orderItems.map((v)=>{
    //   console.log(v)
    //   return(
 
    //   )
    // })
    // console.log(orderItems);
    return(
      <div style = {{marginTop:'60px'}}>
        <div className = {styles['item-info']}>
          <div><img src={require('../svg/send.svg')} className = {styles['item-icon']}/>配送方式：<span style = {{color:'#888'}}>到店自提</span></div>
          <div>
          <Link to = "/address">
            <div style = {{color:'#333'}}><img src={require('../svg/location.svg')} className = {styles['item-icon']}/>地址：<span style = {{color:'#888',backgroundColor:'#eee'}}>成都市金牛区沙湾路63号</span></div>
            <div style = {{color:'#333'}}><img src={require('../svg/phone.svg')} className = {styles['item-icon']}/>电话：<span style = {{color:'#888',backgroundColor:'#eee'}}>123456789</span></div>
          </Link>
          </div>
        </div>

        <div className = {styles['item-user']}>
          <Flex>
            <img src={require('../svg/people.svg')} className = {styles['item-icon']}/>姓&nbsp;名：<InputItem placeholder = "默认为黑卡姓名" style = {{backgroundColor:"#eee",borderRadius:'4px',fontSize:'14px',lineHeight:'2em',padding:'0 20px 0 10px'}}/>
          </Flex>
        <Flex>
          <Flex style = {{textIndent:'15px'}}>
          手机号：</Flex>
          <InputItem placeholder = "默认为黑卡手机号" style = {{backgroundColor:"#eee",borderRadius:'4px',fontSize:'14px',lineHeight:'2em',padding:'0 20px 0 10px'}}/>
        </Flex>
        <Flex>
          <span style = {{textIndent:'15px'}}>车牌号：</span>
          <InputItem placeholder = "默认为黑卡车牌号" style = {{backgroundColor:"#eee",borderRadius:'4px',fontSize:'14px',lineHeight:'2em',padding:'0 20px 0 10px'}}/>
        </Flex>
        </div>

        <div className = {styles['item-notice']}>
          <div><img src={require('../svg/notice.svg')} className = {styles['item-icon']}/>备注：<br/>
          <TextareaItem rows = "3" style = {{backgroundColor:'#eee',fontSize:'14px',width:'95%',padding:'10px 3px'}} placeholder = "到店自提这是占位符占位符请不要介意如此粗糙的占位符哈哈哈哈"/>
        </div>
        </div>

        {productItem }

        <Flex style = {{position:'fixed',bottom:'50px',marginTop:'20px',width:'100%',flexGrow:'1'}}>
          <Flex justify="start" style= {{backgroundColor:'#333',color:'#fff',lineHeight:'3.4em',padding:'0 15px',flexGrow:'2',height:'50px',fontSize:'14px'}}>合计：<span style = {{color:'red',paddingLeft:'5px',fontSize:'16px'}}>￥250</span></Flex>
          <button style = {{display:'flex',flexGrow:'1',backgroundColor:'#ffcf2d',justifyContent:'center',color:'#fff',borderRadius:'0',border:'none',height:'50px',fontSize:'17px'}} onClick={this.paid}>
            <span style= {{textAlign:'center',color:'#fff',lineHeight:'1.95em'}} >提交订单</span>
          </button>
        </Flex>

      </div>
    )
  }

}

export default connect(orderInfo)(FirmOrder);
