import React from 'react';
import { Flex, Button, Tabs } from 'antd-mobile';
import s from './Withdraw.css';
import waitImg from '../../assets/img/withdrowait.png';

class WithdrawWait extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      // <Flex className = {s['withdraw-details']}>
        <Flex className = {s['details-item']}>
          <div className = {s['details-describe']}>
            用户名：zuoting<br/>
            开户名：小小<br/>
            开户行：建设银行金牛支行<br/>
            卡号：12345678945565555<br/>
            提现金额：100.00<br/>
            到账金额： 99.95<br/>
            发起时间： 2017年8月3日  23：00<br/>
          </div>
          <Flex direction = "column" justify = "end">
            <img src = {waitImg} className = {s['wait-img']}/>
            <Button size = "small" className = {s['revoke-btn']}>撤销</Button>
          </Flex>
        </Flex>

    )
  }
}

export default WithdrawWait;
