import React from 'react';
import { Flex } from 'antd-mobile';
import styles from './AwardHead.css';
import userImg from '../../assets/img/timg.jpg'
import { getStore } from '../../config/mUtils'

class AwardHead extends React.Component {


  render(){
    let userInfo = JSON.parse(getStore('userInfo'));
    let balance = this.props.balance;
    return(
      <div className = {styles['Head-frame']}>
        <div> 
            <Flex>
            <img src={userImg} className = {styles['user-img']} alt="图片未显示"/>
            <span className={styles['user-name-span']}>{userInfo.nickname}</span>
            </Flex>
            <br/>
            <Flex justify = "center" className = {styles['reward-decribe']}>"已在万人车汇APP累计获得佣金"</Flex><br/>
            <Flex justify = "center" className = {styles['reward-money']}>￥{balance.amount}</Flex>
            <Flex justify = "center" className = {styles['reward-ratio']}>厉害了，你已超过100%的客户</Flex>
        </div>
      </div>
    )
  }
}

export default AwardHead;
