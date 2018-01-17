import React from 'react';
import { Flex,Checkbox, List} from 'antd-mobile';
import { Link } from 'react-router-dom';
import styles from "./paid.css";
import codeImg from '../../assets/img/orders/code.png';
import payImg from '../../assets/img/orders/pay.png';
import wechatImg from '../../assets/img/orders/wechat.png';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;


class Paid extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
    <div style = {{marginTop:'46px',}}>
      <Flex class= {styles["letter-box"]}>
        <div class= {styles["letter-border"]}>
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
          <img src = {wechatImg}/>
          <span>微信支付</span>
        </CheckboxItem>
        <CheckboxItem className = {styles['check-item']}>
          <img src = {payImg}/>
          <span>支付宝支付</span>
        </CheckboxItem>
        <CheckboxItem className = {styles['check-item']}>
          <img src = {codeImg}/>
          <span>支付码支付</span>
        </CheckboxItem>
        {/* <Flex style = {{backgroundColor:'#eee',padding:'15px 0',margin:'15px 0'}}>
          <input type = "checkbox"></input>
          <img/>
          <span>支付宝支付</span>
        </Flex> */}

        {/* <div style = {{backgroundColor:'#eee',padding:'15px 0'}}>
          <Flex style = {{marginBottom:'15px'}}>
            <input type = "checkbox" />
            <img/>
            <span>支付码支付</span>
          </Flex>
          <Flex justify = "center" style = {{borderBottom:'1px solid #aaa',width:'300px'}}>
          </Flex>
          <Flex justify = "center" style = {{padding:'15px 0'}}>
            <input type = "text"/>
          </Flex>
          <Flex justify = "center" style = {{borderBottom:'1px solid #aaa',width:'300px'}}>
          </Flex>
          <Flex justify = "center" style = {{color:'#ea5e5e',marginTop:'15px'}}>
            如何获取支付码
          </Flex>
        </div> */}
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
