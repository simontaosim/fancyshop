import React from 'react';
import { Flex, Button } from 'antd-mobile';
import SuccessImg from '../../assets/img/paysuccess.jpg';
import s from './PaySuccess.css';

class PaySuccess extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <Flex justify="center" align="center" direction="column" className = {s['flex-center']}>
        <img src={SuccessImg} className = {s['success-img']}/>
        <Button className = {s['check-btn']}>查看订单</Button>
      </Flex>
    )
  }
}

export default PaySuccess;
