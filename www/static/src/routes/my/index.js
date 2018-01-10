/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';

import { appInfo } from '../../map_props.js';

//redux actions
import {setAppTitle} from '../../actions/app.js';
import MyList from './MyList';
import { Flex } from 'antd-mobile';
import { List, Badge,Button,WhiteSpace,WingBlank } from 'antd-mobile';
import MyItem from './MyItem';
import userImg from './good.jpg';


class AppMy extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div>
        <div style = {{backgroundColor:'#ffcf2d',height:'170px',marginTop:'46px',
          paddingTop:'15px',position:'relative'}}>
          <Flex>
            <Flex.Item align = "center"><img src = {userImg} style = {{height:'60px',width:'60px',
              borderRadius:'30px',backgroundColor:'#aaa'}}/></Flex.Item>
            <img src = {require('../svg/pencil.svg')} style = {{marginLeft:'50px',marginRight:'0px',height:'16px',width:'16px'}}/>
          </Flex>
          <Flex justify = "center">
            我是花名，可以自己随便起
          </Flex>
          <Flex justify = "center">
            （用户名：我是用户名）
          </Flex>
          <Flex justify = "center">
            我的口号是，让世界和平
          </Flex>
        </div>
        <div >
          <MyItem/>
          <WingBlank>
            <Button>退出当前帐号</Button>
          </WingBlank>

          <MyList  history={this.props.history} />
        </div>



      </div>
    )
  }
}


export default connect(appInfo)(AppMy);
