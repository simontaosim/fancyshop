import React from 'react';
import { Flex, Tabs, Button } from 'antd-mobile';
// import { Goods, ShopName } from './OrdersCommon';
import ShopName from './ShopName';
import Goods from './Goods';
import Paid from './Paid';
import UnTreated from './UnTreated';
import WaitPay from './WaitPay';
import Finish from './Finish';
import Invalid from './Invalid';
import styles from './Common.css';
import '../../service/data/datasource';
import axios from 'axios';

class Orders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      all: [],
      waitpay: [],
      untreated: [],
      finish: [],
    }
    this.switchTab = this.switchTab.bind(this);
  }
  switchTab(tab,index) {
    let status = tab.status;
    let self = this;
    switch(status){
      case  '全部':
        console.log(this.state.all)
        axios.get('/orderlist')
        .then(function(data){
          console.log();
          self.setState({
            all: data.data.list
          })
        })
        break;
      case '待付款':
      axios.get('/orderlist1')
      .then(function(data){
        self.setState({
          waitpay: data.data
        },function(){console.log(self.state.waitpay.list)})
      })
        break;
      case '未处理':
      axios.get('/orderlist2')
      .then(function(data){
        self.setState({
          untreated: data.data.list
        })
      })
        break;
      case '已完成':
      console.log(3333);
      axios.get('/orderlist3')
      .then(function(data){
        console.log(data);
        self.setState({
          finish: data.data.list
        })
      })
        break;
      default:
        console.log('无效');
    }
    // console.log(`tab:${tab},index: ${index}`);



  }


  render(){
    const tabs = [
      {title:'全部',status: '全部'},
      {title:'待付款', status: '待付款'},
      {title:'未处理', status: '未处理'},
      {title:'已完成', status: '已完成'},
      {title:'无效', status: '无效'},
    ]
    console.log(this.state.waitpay)
    let {waitpay,all,untreated,finish}= this.state;
    console.log(111);
    console.log(this.state.waitpay)
    return(
    <div className = "all">
      <Tabs tabs = {tabs} initialPage = {5} animated = {false} useOnPan = {false} onChange={this.switchTab}>
        <div style = {{backgroundColor:'#fff',paddingBottom:'10px'}} key = "all">
          {/* <WaitPay waitpay={all}/> */}
          {/* <UnTreated untreated={all}/> */}
          {/* <Finish data={all}/> */}
          {/* <Invalid/>  */}
          {/* {this.state.all} */}

        </div>
        <div className = "waitpay" style = {{backgroundColor:'#fff'}} key = "waitay">
          <WaitPay waitpay={waitpay.list} shop={waitpay.shop_name} />
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <UnTreated untreated={untreated}/>
        </div>
        <div className = "finish" style = {{backgroundColor:'#fff'}} key = "finish">
          <Finish finish={finish}/>
        </div>
      <div className = "invalid">
        <div style = {{backgroundColor:'#fff',marginBottom:'15px'}} key = "invalid">
          {/* <Finish/> */}
          </div>
          <div style = {{backgroundColor:'#fff'}} >
          <ShopName/>
          <Goods/>
          <Flex justify = "end" style = {{marginRight:'10px'}}>
            合计：<span className = {styles['total']}> ￥500</span>
          </Flex>
          <Flex justify = "end" style = {{margin:'10px'}}>
            <button className = {styles['detail-btn']}>详情</button>
            <button className = {styles['revoke-btn']}>撤销退款</button>
          </Flex>
          </div>
      </div>
      </Tabs>
    </div>
    )
  }
}

export default Orders;
