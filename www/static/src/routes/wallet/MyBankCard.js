import React from 'react';
import { Flex, Modal} from 'antd-mobile';
import s from './MyBankCard.css';

const alert = Modal.alert;
class MyBankCard extends React.Component {
  constructor() {
    super();
    this.editbankcard = this.editbankcard.bind(this)
  }
  editbankcard(){
    this.props.history.push('/editbankcard')
 }
  render(){
    return (
      <div className = {s['bank-item']}>
        <Flex justify = "center" className = {s['mybankcard']}>我的银行卡</Flex>
        <Flex justify = "around" className = {s['username']}>
          <span>开户名</span>
          <span>username</span>
        </Flex>
        <Flex justify = "around" className = {s['bankcardid']}>
          <span>卡号</span>
          <span>bankcardid</span>
        </Flex>
        <Flex justify = "around" className = {s['username']}>
          <span>开户行</span>
          <span>bankid</span>
        </Flex>
        <Flex justify = "around" className = {s['username']}>
          <span>绑定时间</span>
          <span>time</span>
        </Flex>
        <Flex justify = "around" className = {s['username']}>
          <span onClick = {this.editbankcard}>解除绑定</span>
          <img alt="" src = {require('../svg/delete.svg')} className = {s['delete-svg']}
          onClick={() => alert('Delete', '确定要删除这张银行卡吗？', [
           { text: 'Cancel', onPress: () => console.log('cancel') },
           { text: 'Ok', onPress: () => console.log('ok') },])}
        />
        </Flex>
      </div>
    )
  }
}

export default MyBankCard;
