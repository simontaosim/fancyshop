import React from 'react';
import { Flex,WhiteSpace } from 'antd-mobile';
import styles from '../orders/WaitDetails.css';
import s from './Address.css';


class Address extends React.Component {
  constructor() {
    super();
    this.state = {
      tagMenuClick: [false, false, false, false, false],
    }
  }

  handleTagMenuClick(num){
    let tagMenuClick = this.state.tagMenuClick;
    this.clearClickedStyle();
    tagMenuClick[num] = !tagMenuClick[num];
    this.setState({
      tagMenuClick,
    })
  }

  clearClickedStyle(){
    let tagMenuClick = this.state.tagMenuClick;
    for (var i = 0; i < tagMenuClick.length; i++) {
      tagMenuClick[i] = false;
    }
  }


  render(){
    return(
    <div>
      <div className = {s['address-item-one']} style={{border: this.state.tagMenuClick[0] ? "2px dashed red" : "2px dashed #aaa"}} onClick={()=>{this.handleTagMenuClick(0)}}>
        {/* style={{border: this.state.AddressClick ? "2px dashed red" : "2px dashed #aaa"}} onClick={()=>{this.handAddressClick}} */}
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
      <div className = {s['address-item']} style={{border: this.state.tagMenuClick[1] ? "2px dashed red" : "2px dashed #aaa"}} onClick={()=>{this.handleTagMenuClick(1)}}>
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
      <div className = {s['address-item']} style={{border: this.state.tagMenuClick[2] ? "2px dashed red" : "2px dashed #aaa"}} onClick={()=>{this.handleTagMenuClick(2)}}>
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
    </div>
    )
  }
}

export default Address;
