import React from 'react';
import { Flex, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { loadUserCard } from '../../actions/users';
import { getStore } from '../../config/mUtils.js';

class VipCard extends React.Component {

  componentDidMount(){
    const { dispatch } = this.props;
    let userId = getStore("userId");
    let token = getStore("stampedToken");
    dispatch(loadUserCard(userId, token));
    document.title = "我的卡片"
  }
  componentWillReceiveProps(nextProps){
    const { appUser } = nextProps;
    if(appUser.loading){
      return Toast.loading("载入中", 1, ()=>{
        console.log('')
      });
    }
    if(appUser.status === 'logouting' ){
      Toast.loading("正在登出", 3, ()=>{
        console.log('登出中')
      });
    }
    if(appUser.status === 'offline' ){
      Toast.info("请登录用户", 1, ()=>{
        this.props.history.push('/tablogin');
      });
    }
  }

  render(){
    const { appUser } = this.props;
    let loadImage = function(){
      if(!appUser.card){
        return "要找一张默认加载图片"
      }else{
        return appUser.card.cover;
      }
    }
    return (
      <Flex direction = "column" justify = "start" align = "start" style = {{padding:'0 15px',backgroundColor:'#fff'}}>
        <div style = {{margin:'15px 0',borderLeft:'3px solid #aaa',paddingLeft:'10px'}}>我的会员卡</div>
        <img alt="" src = {loadImage()} style = {{width:'100%',height:'100%',marginBottom:'15px'}}/>
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
