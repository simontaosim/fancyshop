import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'antd-mobile';
import shopImg from '../../assets/img/timg.jpg';
import goodImg from '../../assets/img/reward/good.jpg';
import OrderBtn from './OrderBtn';
import {getShopNameById} from '../../actions/orders'

class OrderList extends React.Component {

  getShopNameById(shopId){
    const { dispatch } = this.props;
    dispatch(getShopNameById(shopId))
  }


  render(){
    let { dataSource } = this.props;
    console.log(dataSource)
    return (
      <div style = {{backgroundColor:'#fff',marginTop:'50px',padding:'10px 10px'}}>
      {dataSource.map((v,index)=>{
       return( 
       <div key={index}>
          <Flex justify = "start">
            <img alt="" src = {shopImg} style = {{width:'38px',height:'38px',borderRadius:'19px',marginRight:'10px'}}/>
            <span style = {{color:'#333',fontSize:'16px',fontWeight:'600'}}>{this.getShopNameById(v.shopId)}</span>
          </Flex>
          <Flex justify = "start" style = {{backgroundColor:'#eee',padding:'10px',marginTop:'10px'}}>
            <Flex style = {{width:'70px'}}>
              <img alt="" src = {goodImg} style = {{width:'60px',height:'60px'}}/>
            </Flex>
            <Flex direction = "column" justify = "start" align = "start" style = {{width:'100%'}}>
              <span style = {{color:'#333',fontSize:'16px',fontWeight:'600',width:'100%',paddingLeft:'10px'}}>{v.name}</span><br/>
              <div style = {{display:'flex',justifyContent:'space-around',paddingLeft:'10px',color:'#666'}}>
                <div>类型：{v.spec}</div>
                <div style = {{paddingLeft:'3rem',paddingRight:'15px'}}>￥{v.price}元</div>
                <div>×{ v.count }</div>
              </div>
            </Flex>
          </Flex>
          <OrderBtn status={v.status} history={this.props.history} orderId={v._id}/>
       </div>
       )
      })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orders: state.ordersInfo.orders,
    user: state.user
  }
}

export default connect(mapStateToProps)(OrderList);