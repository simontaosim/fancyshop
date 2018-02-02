import React from 'react';
import { Flex, Tabs } from 'antd-mobile';
import OrderList from './OrderList';
import WaitPayBtn from './WaitPayBtn';
import UntreatedBtn from './UntreatedBtn';
import FinishBtn from './FinishBtn';
import InvalidBtn from './InvalidBtn';
import '../../service/data/datasource';
import axios from 'axios';

class Orders extends React.Component{
  constructor() {
    super();
    this.state = {
      // waitpay: waitpaybtn,
      waitpay: <WaitPayBtn/>,
      untreated: <UntreatedBtn/>,
      finish: <FinishBtn/>,
      invalid: <InvalidBtn/>
    }
  }
  // var waitpaybtn = <WaitPayBtn history = {this.props.history}/>
  render(){
    // var waitpaybtn = <WaitPayBtn history = {this.props.history}/>
    const tabs = [
      {title:'全部',status: '全部'},
      {title:'待付款', status: '待付款'},
      {title:'未处理', status: '未处理'},
      {title:'已完成', status: '已完成'},
      {title:'无效', status: '无效'},
    ]
    return(
      <div style = {{marginTop:'50px',backgroundColor:'#fff'}}>
        <Tabs tabs = {tabs} initialPage = {5} animated = {false} useOnPan = {false}>
          <div>
            <OrderList/>
            <div> {this.state.finish} </div>
            <OrderList/>
            <div > {this.state.waitpay} </div>
          </div>
          <div>
            <OrderList/>
            <div > {this.state.waitpay} </div>
          </div>
          <div>
            <OrderList/>
            <div> {this.state.untreated} </div>
          </div>
          <div>
            <OrderList/>
            <div> {this.state.finish} </div>
          </div>
          <div>
            <OrderList/>
            <div> {this.state.invalid} </div>
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Orders;
