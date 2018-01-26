import React from 'react';
import { Flex, Button, Tabs, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import s from './MyWallet.css';

class MyWallet extends React.Component {
  constructor() {
    super();
  }
  render(){
    const tabs = [
      {title : '入账' },
      {title : '出账' },
    ];

    return(
    <div style = {{marginTop:'48px',backgroundColor:'#fff',paddingTop:'15px'}}>
      <Flex justify = "center" style = {{margin:'15px'}}>
        <Flex.Item align = "center" direction = "column" style = {{border:'1px solid #ffcf2d'}}>
          <div style = {{backgroundColor:'#ffcf2d',color:'#fff',fontSize:'16px',lineHeight:'2.5em',padding:''}}>我的收入</div>
          <span style = {{lineHeight:'4em',fontSize:'20px'}}>80.00</span>
        </Flex.Item>
        <Flex.Item align = "center" direction = "column" style = {{border:'1px solid #ffcf2d'}}>
          {/* <span style = {{backgroundColor:'#ffcf2d',color:'#fff',fontSize:'16px',lineHeight:'1.6em',padding:''}}>可以提现余额</span> */}
          <div style = {{backgroundColor:'#ffcf2d',color:'#fff',fontSize:'16px',lineHeight:'2.5em',padding:''}}>可以提现余额</div>
            <span style = {{lineHeight:'4em',fontSize:'20px'}}>0.00</span>
        </Flex.Item>
      </Flex>
      <Flex justify = "around" style = {{borderTop:'1px solid #aaa',margin:'15px',padding:'15px 0'}}>
        <Flex.Item>
          <Link to = "/withdraw">
            <Button size = "small" style = {{backgroundColor:'red',color:'#fff'}}>提现</Button>
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Button size = "small" style = {{backgroundColor:'#ffcf2d',color:'#fff'}}>我的银行卡</Button>
        </Flex.Item>
      </Flex>
      <Flex style = {{padding:'20px'}} justify = "center">
        注：余额提现后7个工作日内到账，提现手续费为0.05%，最小提现额为100元
      </Flex>
      <Flex justify = "center">
        明细
      </Flex>
      <WhiteSpace/>
      <Flex  style = {{border:'1px solid #333',borderRadius:'5px',margin:'0 10px',backgroundColor:'#fff'}}>
        <Tabs tabs = {tabs}>
          <div>
            <table align = "center" cellpadding="8px" cellspacing="" style = {{marginTop:'15px'}}>
              {/* <caption>明细</caption> */}
              <tr align = "center" style = {{borderBottom:'1px solid #333',backgroundColor:'#eee'}}>
                <th>事由</th>
                <th>金额</th>
                <th>备注</th>
                <th>时间</th>
              </tr>
              <tr align = "center">
                <td>分享奖励</td>
                <td>20.00</td>
                <td>来自小李子的购买</td>
                <td>1分钟以前</td>
              </tr>
              <tr align = "center">
                <td>分享奖励</td>
                <td>20.00</td>
                <td>来自小李子的购买</td>
                <td>1个月以前</td>
              </tr>
              <tr>
                <td>分享奖励</td>
                <td>20.00</td>
                <td>来自小李子的购买</td>
                <td>12天以前</td>
              </tr>
              <tr>
                <td>分享奖励</td>
                <td>20.00</td>
                <td>来自小李子的购买</td>
                <td>1个月以前</td>
              </tr>
            </table>
          </div>
          <div>

          </div>
        </Tabs>
      </Flex>
    </div>
    )
  }
}

export default MyWallet;
