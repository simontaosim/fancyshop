/*
  Author @Simon xsqfeather@gmail.com
  首页的图标导航
*/
import React from 'react'
import { connect } from 'react-redux';

import { Flex, WingBlank  } from 'antd-mobile';
import {getStore} from '../../../config/mUtils'


class ShopTagMenu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tagMenuClick: [false, false, false, false, false]
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
    return (
      <WingBlank>
      <Flex className="shop-tag-menu"  direction="row" align="stretch">
        <WingBlank>
          <Flex justify="center" direction="column" style={{background: this.state.tagMenuClick[0] ? "lightgray" : "none"}} onClick={()=>{this.handleTagMenuClick(0)}} >
            <WingBlank  size="lg"><img src="http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/service1.png" alt=""/></WingBlank>
            4s保养
          </Flex>
        </WingBlank>
        <WingBlank>
          <Flex justify="center" direction="column" style={{background: this.state.tagMenuClick[1] ? "lightgray" : "none"}} onClick={()=>{this.handleTagMenuClick(1)}}>
            <WingBlank size="lg"><img src="http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/service2.png" alt=""/></WingBlank>
            油卡充值
          </Flex>
        </WingBlank>
        <WingBlank>
          <Flex justify="center" direction="column" style={{background: this.state.tagMenuClick[2] ? "lightgray" : "none"}} onClick={()=>{this.handleTagMenuClick(2)}}>
            <WingBlank size="lg"><img src="http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/service3.png" alt=""/></WingBlank>
            喷漆
          </Flex>
        </WingBlank>
        <WingBlank>
          <Flex justify="center" direction="column" style={{background: this.state.tagMenuClick[3] ? "lightgray" : "none"}} onClick={()=>{this.handleTagMenuClick(3)}}>
            <WingBlank size="lg"><img src="http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/service4.png" alt=""/></WingBlank>
            机油超市
          </Flex>
        </WingBlank>
        <WingBlank>
          <Flex justify="center" direction="column" style={{background: this.state.tagMenuClick[4] ? "lightgray" : "none"}} onClick={()=>{this.handleTagMenuClick(4)}}>
            <WingBlank size="lg"><img src="http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/service5.png" alt=""/></WingBlank>
            新车
          </Flex>
        </WingBlank>
      </Flex>
      </WingBlank>
    )
  }
}


export default ShopTagMenu;
