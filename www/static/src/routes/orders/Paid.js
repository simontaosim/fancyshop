import React from 'react';
import { Flex,Checkbox, List, InputItem, Radio} from 'antd-mobile';
import { Link } from 'react-router-dom';
import styles from "./Paid.css";
import codeImg from '../../assets/img/orders/code.png';
import payImg from '../../assets/img/orders/pay.png';
import wechatImg from '../../assets/img/orders/wechat.png';

const CheckboxItem = Checkbox.CheckboxItem;
const RadioItem = Radio.RadioItem;
const AgreeItem = Checkbox.AgreeItem;


class Paid extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
    <div style = {{marginTop:'46px',}}>
      <Flex className = {styles["letter-box"]}>
        <div className = {styles["letter-border"]}>
          <Flex style = {{padding:'15px 10px'}}>
            订单号：13165465
          </Flex>
          <Flex justify = "center" style = {{marginLeft:'10px',borderBottom:'1px solid #aaa',width:'270px'}}>
          </Flex>
          <Flex style = {{padding:'15px 10px'}}>
            购买的商品：尊享卡*1
          </Flex>
          <Flex justify = "center" style = {{marginLeft:'10px',borderBottom:'1px solid #aaa',width:'270px'}}>
          </Flex>
          <Flex style = {{padding:'15px 10px'}}>
            总价：888
          </Flex>
        </div>
      </Flex>
      <div style = {{backgroundColor:'#fff',paddingBottom:'1000px'}}>
        <CheckboxItem style = {{backgroundColor:'#eee',margin:'15px 0'}}>
          <img src = {wechatImg} style = {{width:'23px',height:'22px',marginRight:'3px'}}/>
          <span style = {{color:'#bbb',fontSize:'14px'}}>微信支付</span>
        </CheckboxItem>
        <CheckboxItem className = {styles['check-item']}>
          <img src = {payImg} style = {{width:'26px',height:'18px'}}/>
          <span style = {{color:'#bbb',fontSize:'14px'}}>支付宝支付</span>
        </CheckboxItem>
        <div style = {{backgroundColor:'#eee',padding:'0 0 1px 0'}}>
        <CheckboxItem className = {styles['check-item']}>
          <img src = {codeImg} style = {{width:'26px',height:'18px'}}/>
          <span style = {{color:'#333',fontSize:'14px'}}>支付码支付</span>
        </CheckboxItem>
        <div style = {{backgroundColor:'#eee',borderTop:'1px solid #aaa',borderBottom:'1px solid #aaa',width:'90%',margin:'0 auto'}}>
          <InputItem placeholder = "输入支付码" style = {{backgroundColor:'#eee',border: '1px solid #333',borderRadius:'5px',padding:'8px',fontSize:'12px'}} className = {styles['am-list-item']}>

          </InputItem>
        </div>
        <Flex justify = "center" align = "center" style = {{color:'red',margin:'15px'}}>
          如何获取支付码
        </Flex>
        </div>
        <Flex justify = "center" style = {{marginTop:'20px'}}>
          <Link to="./paysuccess">
            <button style = {{backgroundColor:'#ea4b4b',color:'#fff',borderRadius:'5px',border:'1px solid #ea4b4b',width:'200px',padding:'8px 0'}}>立即支付</button>
          </Link>
        </Flex>
      </div>
    </div>
    )
  }
}

export default Paid;
