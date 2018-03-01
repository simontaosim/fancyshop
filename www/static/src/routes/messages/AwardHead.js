import React from 'react';
import { Flex,Toast } from 'antd-mobile';
import styles from './AwardHead.css';
import userImg from '../../assets/img/timg.jpg'

class AwardHead extends React.Component {
  constructor() {
    super()
  }

  render(){
    let {balance} = this.props;
    return(
      <div className = {styles['Head-frame']}>
        <div> 
            <Flex>
              <img src = {userImg} className = {styles['user-img']}/>
              <span  className = {styles['user-name-span']}>这是名字</span>
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
