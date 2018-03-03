/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';
import { appInfo } from '../../map_props.js';
import {setAppTitle} from '../../actions/app.js';
import  AwardDetail  from './AwardDetail.js';
import AwardIncome from './AwardIncome.js';
import AwardHead from './AwardHead.js';
import { getBalance,getGetBalanceIncomesTotal } from '../../actions/balanceAction';
import MyActivityIndicator  from '../common/MyActivityIndicator';

class MessageBox extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    let userId = "ZCFqbZeRpKZge3uGf"
    dispatch(getBalance(userId))
    dispatch(getGetBalanceIncomesTotal(userId))
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
