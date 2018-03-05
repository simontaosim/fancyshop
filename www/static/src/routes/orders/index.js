import React from 'react';
import { connect } from 'react-redux';
import { Flex, Tabs } from 'antd-mobile';
import ShopName from './ShopName';
import Goods from './Goods';
import styles from './Common.css';
import '../../service/data/datasource';
import { gainAllOrders, gainPaidOrders,gainUnPaidOrders} from '../../actions/orders';
import OrderList from './OrderList';

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
    const { dispatch } = this.props;
    let status = tab.status;
    let userId = 'akDYXHWR7wcmzR9rz'
    switch(status){
      case  '全部':
        dispatch(gainAllOrders(userId));
        break;
      case '待付款':
        dispatch(gainUnPaidOrders(userId));
        break;
      case '未处理':
        dispatch(gainUnPaidOrders(userId));
        break;
      case '已完成':
        dispatch(gainPaidOrders(userId));
        break;
      default:
        console.log('无效');
    }
  }


  render(){
    const tabs = [
      {title:'全部',status: '全部'},
      {title:'待付款', status: '待付款'},
      {title:'未处理', status: '未处理'},
      {title:'已完成', status: '已完成'},
      {title:'无效', status: '无效'},
    ]
   
    return(
    <div className = "all">
      <Tabs tabs = {tabs} initialPage = {5} animated = {false} useOnPan = {false} onChange={this.switchTab}>
        <div style = {{backgroundColor:'#fff',paddingBottom:'10px'}} key = "all">
        </div>
        <div className = "waitpay" style = {{backgroundColor:'#fff'}} key = "waitay">
          <OrderList dataSource={this.props.orders}  history={this.props.history}/>
        </div>
        <div style = {{backgroundColor:'#fff'}}>
          <OrderList dataSource={this.props.orders} history={this.props.history} />
        </div>
        <div className = "finish" style = {{backgroundColor:'#fff'}} key = "finish">
          <OrderList dataSource={this.props.orders}  history={this.props.history}/>
        </div>
      <div className = "invalid">
        <div style = {{backgroundColor:'#fff',paddingBottom:'15px'}} key = "invalid">
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

function mapStateToProps(state) {
  return {
    orders: state.ordersInfo.orders,
    user: state.user
  }
}

export default connect(mapStateToProps)(Orders);