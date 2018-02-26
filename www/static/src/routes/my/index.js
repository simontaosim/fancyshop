/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { appInfo } from '../../map_props.js';
import {setAppTitle} from '../../actions/app.js';
import MyList from './MyList';
import { Flex } from 'antd-mobile';
import { List, Badge,Button,WhiteSpace,WingBlank,Card ,Checkbox,Modal} from 'antd-mobile';
import { Link } from 'react-router-dom';
import MyItem from './MyItem';
import style from './common.css';
import userImg from '../../assets/img/timg.jpg';
import{ loginOut } from '../../reducers/user.redux';
import { MClient } from '../../config/asteroid.config.js'



const alert = Modal.alert;

class AppMy extends React.Component{
  constructor(props) {
    super(props);
    this.ConfirmWindow = this.ConfirmWindow.bind(this);
  }

  ConfirmWindow() {
    let self = this
    const { dispatch } = this.props;
    alert('退出当前账号','您是否确认推出当前帐号?',[
      { text: '确定', onPress: () => {
          // console.log(this.props)
          this.props.history.push('/tablogin')
          dispatch(loginOut())
      }},
      { text: '取消', onPress: () => console.log('取消了') },
    ])
  }


  componentDidMount(){
    const { dispatch } = this.props;
    console.log('组件渲染完成');
    console.log(MClient)
    console.log(MClient.userId)

    console.log('userId local', window.localStorage["Meteor.userId"]);
  }


  render(){
    const { dispatch, current_user } = this.props;
    console.log("当前用户", current_user)

    return (
      <div >
        <div className = {style['back-color']}>
          <Flex justify = 'center' align = "center">
              <img src = {userImg} className = {style['user-img']}/>
          </Flex>
          <Flex justify = "end" className = {style['pencil-position']} >
            <Link to = "/personal">
              <img src = {require('../svg/pencil.svg')} className = {style['pencil-svg']} />
            </Link>
           </Flex>
          <Flex justify = "center"  className = {style['nick-name-pos']}>
            <span>{this.props.current_user.nickname}</span>
          </Flex>
          <Flex justify = "center">
            <span className = {style['user-name-span']}>{this.props.current_user.username}</span>
          </Flex>
          <Flex justify = "center">
            <span className = {style['slogan-span']}>{this.props.current_user.dataAutograph}</span>
          </Flex>
        </div>
        <div className = {style['item-position']} >

          <MyItem/>
          <WingBlank>
            <Button className = {style['sign-out-btn']} onClick={this.ConfirmWindow}>退出当前帐号</Button>
          </WingBlank>
        </div>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    current_user: state.currentUser.current_user,
    user: state.user
  }
}

export default connect(mapStateToProps)(AppMy);

// export default connect(appInfo)(AppMy);
