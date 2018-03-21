/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';
import  AwardDetail  from './AwardDetail.js';
import AwardIncome from './AwardIncome.js';
import AwardHead from './AwardHead.js';
import { getBalance,getBalanceIncomesTotal } from '../../actions/balanceAction';
import MyActivityIndicator  from '../common/MyActivityIndicator';
import { getStore } from '../../config/mUtils';

class MessageBox extends React.Component{


  componentDidMount() {
    let { dispatch } = this.props;
    let userId = getStore('userId');
    dispatch(getBalance(userId))
    dispatch(getBalanceIncomesTotal(userId))
  }
 

  render(){
    let {balance} = this.props
    return (
    <div>
      <MyActivityIndicator isFetching={balance.isFetching} />
      <AwardHead balance={balance.list}/>
      <AwardIncome total={balance.total}/>
      <AwardDetail/>
    </div>

    )
  }
}
function mapBalanceState(state) {
  return  {
    balance: state.balanceReducer
  }
}

export default connect(mapBalanceState)(MessageBox);
