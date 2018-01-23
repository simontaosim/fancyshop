import React from 'react';
import { Flex, Button, Tabs, InputItem } from 'antd-mobile';
import { Link } from 'react-router-dom';


class Withdraw extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
    <div>
      <div justify = "center" style = {{border:'1px solid #aaa',borderRadius:'5px',margin:'10px',backgroundColor:'#fff'}}>
      <Flex>
        提现：<InputItem placeholder = "请输入提现余额"></InputItem><br/>
      </Flex>
      <Flex>
        选择银行卡：<InputItem placeholder = "请输入提现余额"></InputItem>
      </Flex>
      <Flex style = {{padding:'20px'}}>
        注：余额提现后7个工作日内到账，提现手续费微0.05%，最小提现额为100元
      </Flex>
      <Flex justify = "center">
        <Button size = "small" style = {{color:'#fff',backgroundColor:'red'}}>提现</Button>
      </Flex>
      </div>
      <Flex justify = "center" style = {{border:'1px solid #aaa',borderRadius:'5px',margin:'10px',backgroundColor:'#fff'}}>
        <table cellpadding="15px" cellspacing="">
          <caption>提现记录</caption>
          <tr align = "center">
            <th>提现现金</th>
            <th>到账金额</th>
            <th>时间</th>
            <th>状态</th>
          </tr>
          <tr align = "center">
            <td>100.00</td>
            <td>99.95</td>
            <td>170802</td>
            <Link to = "/nullcart">
            <td align = "left"><span>成功&nbsp;<img src = {require('../svg/arrow-right.svg')} style = {{width:'14px',height:'14px'}}/></span></td>
            </Link>
            {/* <img src = {require('../svg/arrow-right.svg')} style = {{width:'10px',height:'10px'}}/> */}
          </tr>
          <tr align = "center">
            <td>100.00</td>
            <td>99.95</td>
            <td>170802</td>
            <Link to = "/nullcart">
            <td align = "left"><span>等待&nbsp;<img src = {require('../svg/arrow-right.svg')} style = {{width:'14px',height:'14px'}}/></span></td>
            </Link>
          </tr>
        </table>
      </Flex>
      </div>
    )
  }
}

export default Withdraw;
