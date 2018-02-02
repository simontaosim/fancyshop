import React from 'react';
import { Flex,Checkbox, List, InputItem, Radio, WhiteSpace} from 'antd-mobile';
import { Link } from 'react-router-dom';
import styles from "./Paid.css";
import codeImg from '../../assets/img/orders/code.png';
import payImg from '../../assets/img/orders/pay.png';
import wechatImg from '../../assets/img/orders/wechat.png';
import { asteroid } from '../../config/asteroid.config';

const CheckboxItem = Checkbox.CheckboxItem;
const RadioItem = Radio.RadioItem;
const AgreeItem = Checkbox.AgreeItem;


class Paid extends React.Component {
  constructor() {
    super()
    this.state = {
      order:  {
        "_id" : "",
       "type" : null,
       "userId" : "",
       "status" : "",
       "shopId" : "",
       "products" : [
       ],
       "username" : "",
       "address" : null
        },
        value: 0,
    }
  }
  onChange = (value) => {
   console.log('checkbox');
   this.setState({
     value,
   });
 };
  componentDidMount() {
    let id = this.props.match.params.orderId;
    asteroid.call('app.order.getone',id)
            .then(result => {
              console.log(result);
              if(result){
                this.setState({
                  order: result.order,
                })
              }
            })
            .catch(error => {
              console.log(error);
            })
  }
  render(){
    let {order} = this.state
    const { value, value2, value3, value4 } = this.state;

    const wechat = <div>
      <img src = {wechatImg} style = {{width:'23px',height:'22px',marginRight:'3px'}}/>
      <span style = {{color:'#bbb',fontSize:'14px'}}>微信支付</span>
    </div>

    const alipay =  <div>
        <img src = {payImg} style = {{width:'26px',height:'18px'}}/>
        <span style = {{color:'#bbb',fontSize:'14px'}}>支付宝支付</span>
      </div>

    const payment = <div style = {{backgroundColor:'#eee'}}>
      <div>
        <img src = {codeImg} style = {{width:'26px',height:'18px'}}/>
        <span style = {{color:'#333',fontSize:'14px'}}>支付码支付</span>
      </div>
      <div style = {{backgroundColor:'#eee',borderTop:'1px solid #aaa',borderBottom:'1px solid #aaa',width:'90%',margin:'15px auto 0 auto'}} className = {styles['am-list-item']}>
        <InputItem placeholder = "输入支付码" style = {{backgroundColor:'#eee',border: '1px solid #333',borderRadius:'5px',padding:'8px',fontSize:'12px'}} className = {styles['am-list-item']} value = "KSt145689">

        </InputItem>
      </div>
      <Flex justify = "center" align = "center" style = {{color:'red',margin:'10px',fontSize:'14px'}}>
        如何获取支付码
      </Flex>
      </div>

    const data = [
      { value: 0, label: wechat },
      { value: 1, label: alipay },
      { value: 2, label: payment },
    ];
    return(
    <div style = {{marginTop:'46px',backgroundColor:'#fff'}}>
      <Flex className = {styles["letter-box"]}>
        <div className = {styles["letter-border"]}>
          <Flex style = {{padding:'15px 10px'}}>
            订单号：{order._id}
          </Flex>
          <Flex justify = "center" style = {{marginLeft:'10px',borderBottom:'1px solid #aaa',width:'270px'}}>
          </Flex>
          <Flex style = {{padding:'15px 10px'}}>
            购买的商品：{order.products.length>0? order.products[0].name : null}
          </Flex>
          <Flex justify = "center" style = {{marginLeft:'10px',borderBottom:'1px solid #aaa',width:'270px'}}>
          </Flex>
          <Flex style = {{padding:'15px 10px'}}>
            总价：￥{order.products.length>0 ? order.products[0].price* order.products[0].count : 0}
          </Flex>
        </div>
      </Flex>
      <List >
       {data.map(i => (
         <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)} style = {{backgroundColor:'#eee',margin:'15px 0'}}>
           {i.label}
         </RadioItem>
       ))}
     </List>
        <Flex justify = "center">
          <Link to="./paysuccess">
            <button style = {{backgroundColor:'#ea4b4b',color:'#fff',borderRadius:'5px',border:'1px solid #ea4b4b',width:'200px',padding:'8px 0'}}>立即支付</button>
          </Link>
        </Flex>
    </div>
    )
  }
}

export default Paid;
