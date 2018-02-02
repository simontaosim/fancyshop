import React from 'react';
import { Flex, Button, Tabs, InputItem, WhiteSpace, Picker, List} from 'antd-mobile';
import { Link } from 'react-router-dom';

const bankcard = [
  {
    label:'12457895445555',
    value:'12457895445555',
  },{
    label:'52457895445555',
    value:'52457895445555',
  },{
    label:'82457895445555',
    value:'82457895445555',
  },{
    label:'62457895445555',
    value:'62457895445555',
  },
]
class Withdraw extends React.Component {
  constructor() {
    super();
    this.withdrawsuccess = this.withdrawsuccess.bind(this)
    this.withdrawwait = this.withdrawwait.bind(this)
  }

  withdrawsuccess() {
    console.log(this.props.history);
    this.props.history.push('/withdrawsuccess')
  }
  withdrawwait(){
    this.props.history.push('/withdrawwait')
  }

  render(){
    return(
    <div style = {{backgroundColor:'#fff'}}>
      <div justify = "center" style = {{border:'1px solid #aaa',borderRadius:'5px',margin:'10px',backgroundColor:'#fff',padding:' 0 0 15px 0'}}>
      <Flex justify = "between" style = {{backgroundColor:'#ffcf2d',color:'#fff',lineHeight:'4em',fontSize:'16px',padding:'0 10px'}}>
        <Flex.Item justify = "start">
          可提现余额
        </Flex.Item>
        <Flex.Item justify = "end">
          ￥100
        </Flex.Item>
      </Flex>
      <div style = {{backgroundColor:'#fff',padding:' 0 10px 0 10px'}}>
      <Flex justify = "start" style = {{borderBottom:'1px solid #ccc'}}>
        <label style = {{fontSize:'17px',paddingLeft:'15px'}}>提现</label><InputItem placeholder = "请输入提现余额" style = {{width:'80%',paddingLeft:'10px'}}></InputItem>
      </Flex>
      {/* <Flex>
        选择银行卡：<InputItem placeholder = "请输入银行卡号" style = {{border:'1px solid #aaa'}}></InputItem>
      </Flex> */}
      <Picker data={bankcard} cols={1} >
         <List.Item arrow="horizontal">银行卡</List.Item>
      </Picker>
      <Flex style = {{padding:'20px 10px',borderTop:'1px solid #ddd'}}>
        <span align = "center">注：余额提现后7个工作日内到账，提现手续费微0.05%，最小提现额为100元</span>
      </Flex>
      <Flex justify = "center">
        <Button size = "small" style = {{color:'#fff',backgroundColor:'red',padding:'0 20px'}}>提现</Button>
      </Flex>
      </div>
      </div>
      <Flex justify = "around" style = {{border:'1px solid #aaa',borderRadius:'5px',margin:'10px',backgroundColor:'#fff'}}>
        {/* <table cellpadding="15px" cellspacing="">
          <tr align = "left">
            <th>提现记录</th>
          </tr>
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
            <Link to = "/withdrawsuccess">
            <td align = "left"><span>成功&nbsp;<img src = {require('../svg/arrow-right.svg')} style = {{width:'14px',height:'14px'}}/></span></td>
            </Link>
            {/* <img src = {require('../svg/arrow-right.svg')} style = {{width:'10px',height:'10px'}}/> *}
          </tr>
          <tr align = "center">
            <td>100.00</td>
            <td>99.95</td>
            <td>170802</td>
            <Link to = "/withdrawwait">
            <td align = "left">等待</td>
            <img src = {require('../svg/arrow-right.svg')} style = {{width:'14px',height:'14px',position:'absolute',right:'15px',bottom:'-26px'}}/>
            </Link>
          </tr>
        </table> */}

          <Flex direction = "column" justify = "around" align = "center"  style = {{margin:'7px 0'}}>
            <span align = 'center' style = {{fontWeight:'600'}} >提现金额</span>
            <WhiteSpace/>
            <span align = 'center'>100.00元</span>
            <WhiteSpace/>
            <span align = 'center'>100.00元</span>
            <WhiteSpace/>
          </Flex>
          <Flex direction = "column" justify = "center"  style = {{padding:'7px 0px'}}>
            <span align = 'center' style = {{fontWeight:'600'}}>到账金额</span>
            <WhiteSpace/>
            <span align = 'center'>99.95元</span>
            <WhiteSpace/>
            <span align = 'center'>99.95元</span>
            <WhiteSpace/>
          </Flex>
          <Flex direction = "column" justify = "center" style = {{padding:'7px 0px'}}>
            <span align = 'center' style = {{fontWeight:'600'}}>时间</span>
            <WhiteSpace/>
            <span align = 'center'>20170812</span>
            <WhiteSpace/>
            <span align = 'center'>20180125</span>
            <WhiteSpace/>
          </Flex>
          <Flex direction = "column" justify = "center"  style = {{padding:'7px 0'}}>
            <span align = 'center' style = {{fontWeight:'600'}}>状态</span>
            <WhiteSpace/>
            <span align = 'center' onClick={this.withdrawsuccess}>成功<img src = {require('../svg/arrow-right.svg')} style = {{width:'14px',height:'14px'}}/></span>
            <WhiteSpace/>
            <span align = 'center'  onClick={this.withdrawwait}>等待<img src = {require('../svg/arrow-right.svg')} style = {{width:'14px',height:'14px'}}/></span>
            <WhiteSpace/>
          </Flex>
        </Flex>
      </div>
    )
  }
}

export default Withdraw;
