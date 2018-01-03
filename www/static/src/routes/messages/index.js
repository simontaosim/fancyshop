/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';

import { appInfo } from '../../map_props.js';
import { Flex, WhiteSpace, WingBlank,Tabs } from 'antd-mobile';

//redux actions
import {setAppTitle} from '../../actions/app.js';
import  AwardDetail  from './AwardDetail.js';
import AwardIncome from './AwardIncome.js';
import AwardHead from './AwardHead.js';


class MessageBox extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (


    <div>
      <WingBlank/>
      <AwardHead/>
      <AwardIncome/>
      <AwardDetail/>
    </div>
    )
  }
}


export default connect(appInfo)(MessageBox);
