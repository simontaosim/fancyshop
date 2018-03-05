import React from 'react';
import { Flex } from 'antd-mobile';
// import s from './BtnStyle.css';
import styles from './Common.css';
class OrderBtn extends React.Component {
  constructor(props) {
    super(props)
    this.paid = this.paid.bind(this)
    this.details = this.details.bind(this)
  }

  paid(){
    this.props.history.push('/paid')
  }
  details(){
    this.props.history.push(`/order_details/${this.props.orderId}`)
  }

  render() {
    return (
      <div>
         {(()=>{
           switch(this.props.status) {
             case 1:
             return (
                <Flex justify = "end" >
                  <button >详情</button>
                  <button >删除订单</button>
                </Flex>
              );
             case 2: 
             return( 
             <Flex justify = "end" style = {{margin:'10px',paddingBottom:'10px'}}>
              <button className = {styles['detail-btn']} onClick = {this.details}>详情</button>
              <button className = {styles['cancel-btn']}>取消订单</button>
              <button className = {styles['pay-btn']} style = {{marginLeft:'15px'}} >支付</button>
             </Flex>
           );
            case 3: 
            return(
              <Flex justify = "end" className = {styles['btn-frame']}>
                <button className = {styles['detail-btn']} >详情</button>
                <button className = {styles['delete-btn']}>删除订单</button>
              </Flex>
            )
            case 4:
            return(
              <Flex justify = "end" style = {{margin:'10px'}}>
                <button className = {styles['detail-btn']}>详情</button>
                <button className = {styles['revoke-btn']}>撤销退款</button>
              </Flex>
            )
            default:
              return (
                <Flex justify = "end" >
                  <button >详情</button>
                  <button >删除订单</button>
                </Flex>
              );
           }
         })()}
      </div>
    )
  }
}


export default OrderBtn;