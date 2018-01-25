import React from 'react';
import { Flex, Button, Tabs } from 'antd-mobile';
import MyWallet from './MyWallet';
import Withdraw from './Withdraw';
import WithdrawSuccess from './WithdrawSuccess';
import WithdrawWait from './WithdrawWait';

class Wallet extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        <MyWallet/>
      </div>
    )
  }
}

export default Wallet;
