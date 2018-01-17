import React from 'react';
import { Flex,WhiteSpace } from 'antd-mobile';
import styles from '../orders/waitdetails.css';


class Address extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div style = {{marginTop:'60px',border:'1px dashed #aaa',borderRadius:'5px',backgroundColor:'#fff',width:'90%',margin:'50px auto',fontSize:'16px',padding:'10px'}}>
        <Flex>
          <img src={require('../svg/people.svg')} className = {styles['item-icon']}/>店铺名：这是一个好听的名字
        </Flex>
        <WhiteSpace/>
        <Flex>
          <img src={require('../svg/location.svg')} className = {styles['item-icon']}/>地址：<span style = {{color:'#888'}}>成都市金牛区沙湾路63号</span>
        </Flex>
        <WhiteSpace/>
        <Flex>
          <img src={require('../svg/phone.svg')} className = {styles['item-icon']}/>电话：<span style = {{color:'#888'}}>123456789</span>
        </Flex>
      </div>
    )
  }
}

export default Address;
