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
      balance: {
        
      },
    }
  }

  componentDidMount() {
    console.log(`balance`)
    let userId = "ZCFqbZeRpKZge3uGf"
    asteroid.subscribe("app.get.current.balance",userId);
    asteroid.connect();
    let self = this;
    asteroid.ddp.on("added", ({collection, id, fields}) => {
     
        console.log(collection)
        console.log(id)
        console.log(fields)
        self.setState({
          balance: fields
        })
    });
  }

  render(){
    let { balance } = this.state;
    console.log(this.state.balance)
    return (
    <div>
      {/* <WingBlank/> */}
      <AwardHead balance={balance}/>
      <AwardIncome />
      <AwardDetail/>
    </div>

    )
  }
}


export default connect(appInfo)(MessageBox);
