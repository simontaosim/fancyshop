import React from 'react';
import { Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import cardImg from '../../assets/img/blackcard.png'
import { loadUserCard } from '../../actions/users';
import { getStore } from '../../config/mUtils.js';

class VipCard extends React.Component {
  constructor() {
    super();
  }
  componentDidMount(){
    const { appUser, dispatch} = this.props;
    let userId = getStore("userId");
    let token = getStore("stampedToken");
    dispatch(loadUserCard(userId, token));
  }

  render(){
    
    return (
      <Flex direction = "column" justify = "start" align = "start" style = {{padding:'0 15px',backgroundColor:'#fff'}}>
        <div style = {{margin:'15px 0',borderLeft:'3px solid #aaa',paddingLeft:'10px'}}>我的会员卡</div>
        <img src = {cardImg} style = {{width:'100%',height:'100%',marginBottom:'15px'}}/>
        <Flex justify = "center" align = "center">对应的车牌号</Flex>
      </Flex>
    )
  }
}

function mapState(state){
  return {
    appUser: state.AppUser,
  }
}

export default connect(mapState)(VipCard);
