/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';

import { appInfo } from '../../map_props.js';
import { Flex, WhiteSpace, WingBlank  } from 'antd-mobile';

//redux actions
import {setAppTitle} from '../../actions/app.js';


class MessageBox extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(setAppTitle(this.props.path));


  }
  render(){
    return (
      <WingBlank justify="center" direction="column">
        <WhiteSpace />
        <Flex  direction="row" align="stretch">
          <Flex>商城</Flex>
          <Flex  direction="column">
            <Flex>财务</Flex>
            <Flex>新手</Flex>
          </Flex>
        </Flex>
        <Flex>商品推荐</Flex>
        <Flex>商铺的四个标签检索</Flex>
        <Flex>另外一栏商品推荐</Flex>
      </WingBlank>
    )
  }
}


export default connect(appInfo)(MessageBox);
