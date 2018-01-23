import React from 'react';
import { Flex, Button, Tabs } from 'antd-mobile';

class WithdrawSuccess extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <Flex style = {{border:'1px dashed black',margin:'10px',borderRadius:'5px',backgroundColor:'#fff',marginTop:'50px'}}>
        <div style = {{padding:'10px',fontSize:'16px'}}>
          用户名：zuoting<br/>
          开户名：小小<br/>
          开户行：建设银行金牛支行<br/>
          卡号：12345678945565555<br/>
          提现金额：100.00<br/>
          到账金额： 99.95<br/>
          发起时间： 2017年8月3日  23：00<br/>
        </div>
        <div style = {{display:'flex',justifyContent:'flex-end'}}>
          <img style = {{width:'80px',height:'80px',borderRadius:'40px'}}/>
        </div>
      </Flex>
    )
  }
}

export default WithdrawSuccess;
