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
import { asteroid } from '../../config/asteroid.config'

class MessageBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: [
        {name: 'Hiark'},
      ],
      balanck: [],
    }
  }

  componentDidMount() {
    asteroid.subscribe("get.current.balance");
    asteroid.ddp.on("added", ({collection, id, fields}) => {
        console.log(`Element added to collection ${collection}`);
        console.log(id);
        console.log(fields);
    });
  }

  render(){
    return (
    <div>
      {/* <WingBlank/> */}
      <AwardHead/>
      <AwardIncome/>
      <AwardDetail/>
    </div>

    )
  }
}


export default connect(appInfo)(MessageBox);
