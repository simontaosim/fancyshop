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
import { List, Badge,Button,WhiteSpace,WingBlank,Card ,Checkbox} from 'antd-mobile';
import { Link } from 'react-router-dom';
import MyItem from './MyItem';
import style from './common.css';
import userImg from '../../assets/img/timg.jpg';


class AppMy extends React.Component{
  constructor(props) {
    super(props);
  }


  render(){

    return (
      <div >
        <div className = {style['back-color']}>
          <Flex justify = 'center' align = "center">
              <img src = {userImg} className = {style['user-img']}/>
          </Flex>
          <Link to = "/userdata">
          <Flex justify = "end" className = {style['pencil-position']} >
            <img src = {require('../svg/pencil.svg')} className = {style['pencil-svg']} />
           </Flex>
          </Link>
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
            <Button className = {style['sign-out-btn']}>退出当前帐号</Button>
          </WingBlank>
        </div>

      </div>
    )
  }
}


export default connect(appInfo)(AppMy);
