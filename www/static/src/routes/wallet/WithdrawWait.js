import React from 'react';
import { Flex, Button, Tabs } from 'antd-mobile';

class WithdrawWait extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <Flex style = {{backgroundColor:'#fff',marginTop:'50px'}}>
        <Flex style = {{border:'1px dashed black',margin:'10px',borderRadius:'5px'}}>
          <div style = {{padding:'10px',fontSize:'16px'}}>
            用户名：zuoting<br/>
            开户名：小小<br/>
            开户行：建设银行金牛支行<br/>
            卡号：12345678945565555<br/>
            提现金额：100.00<br/>
            到账金额： 99.95<br/>
            发起时间： 2017年8月3日  23：00<br/>
          </div>
          {/* <div style = {{display:'flex',justifyContent:'flex-end'}}> */}
          <div>
            <img style = {{width:'80px',height:'80px',borderRadius:'40px'}}/>
            <Button size = "small" style = {{backgroundColor:'#ddd',color:'#fff'}}>撤销</Button>
          </div>
        </Flex>
      </Flex>
    )
  }
}

export default WithdrawWait;
