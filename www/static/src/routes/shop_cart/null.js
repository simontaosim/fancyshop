import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button, Radio} from 'antd-mobile';
import goodsImg from '../../assets/img/reward/good.jpg';
import s from './test.css';

const RadioItem = Radio.RadioItem;
class CartNull extends React.Component{
  constructor() {
    super()
  }

  render(){
    return (
      <div style = {{marginTop:'150px'}}>
        <Flex justify = 'center' >
          <img src = {goodsImg} style = {{width:'150px',height:'150px',marginBottom:'60px'}}/>
        </Flex>
        <Link to = '/#'>
          <Flex justify = 'center'>
            <Button style = {{backgroundColor:'#fc3e43',width:'200px',color:'#fff'}}>去商城逛逛</Button>
          </Flex>
        </Link>
        {/* <RadioItem>
          <div>支付宝</div>
          <div>微信</div>
          <div>支付码</div>
        </RadioItem>
        <div style={{ padding: '15px',backgroundColor:'#fff'}}>
        {/* <Flex.Item style={{ padding: '15px 0', color: '#888', flex: 'none' }}>Radio demo(dustomized style)</Flex.Item> */}
        {/* <Flex.Item>
          <Radio>Agree</Radio>
        </Flex.Item>
        <Flex.Item>
          <Radio  className="my-radio" checked = "true">Disagree</Radio>

        </Flex.Item>
        <br/>
        <br/>
        <Radio style = {{backgroundColor:'#eee',padding:'8px',margin:'10px'}}><img/>微信支付</Radio>
      </div>
      <Flex style={{ padding: '15px' }}>
      <Flex.Item style={{ padding: '15px 0', color: '#888', flex: 'none' }}>Radio demo(dustomized style)</Flex.Item>
      <Flex.Item>
        <Radio className= {s['am-radio']} >Agree</Radio>
      </Flex.Item>
    </Flex>  */}
      </div>


    )
  }
}

export default CartNull;
