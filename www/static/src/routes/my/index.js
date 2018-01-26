/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';

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

const alert = Modal.alert;

class AppMy extends React.Component{
  constructor(props) {
    super(props);
    this.ConfirmWindow = this.ConfirmWindow.bind(this);
  }

  ConfirmWindow() {
    alert('123','321',[
      { text: '确定', onPress: () => {
          // console.log(this.props)
          // this.props.history.push('/tablogin')
          this.props.loginOut()
      }},
      { text: '取消', onPress: () => console.log('取消了') },
    ])
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if(!nextProps.user.authenticated){
        nextProps.history.push('/tablogin');
    }
  }


  render(){

    return (
      <div >
        <div className = {style['back-color']}>
          <Flex justify = 'center' align = "center">
              <img src = {userImg} className = {style['user-img']}/>
          </Flex>
          <Flex justify = "end" className = {style['pencil-position']} >
            <Link to = "/userdata">
              <img src = {require('../svg/pencil.svg')} className = {style['pencil-svg']} />
            </Link>
           </Flex>
          <Flex justify = "center"  className = {style['nick-name-pos']}>
            <span>我是花名</span>
          </Flex>
          <Flex justify = "center">
            <span className = {style['user-name-span']}>（用户名：我是用户名）</span>
          </Flex>
          <Flex justify = "center">
            <span className = {style['slogan-span']}>我的口号是，让世界和平</span>
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
    user: state.user
  }
}

export default connect(mapStateToProps,{loginOut})(AppMy);
// export default connect(appInfo)(AppMy);
