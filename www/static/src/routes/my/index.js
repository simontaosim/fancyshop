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
          <Flex>
            <Flex.Item align = "center"><img src = {userImg} style = {{height:'60px',width:'60px',
              borderRadius:'30px',backgroundColor:'#aaa'}}/></Flex.Item>
          </Flex>
          <a href = "#/userdata">  <img src = {require('../svg/pencil.svg')} style = {{display:'flex',marginLeft:'280px',marginTop:'-60px',height:'20px',width:'20px',justifyContent:'flex-end'}}/>
          </a>
          <Flex justify = "center" style = {{marginTop:"50px"}}>
            <span style = {{fontSize:'14px'}}>我是花名，可以自己随便起</span>
          </Flex>
          <Flex justify = "center">
            <span style = {{color:'#dca214',lineHeight:'1.8em'}}>（用户名：我是用户名）</span>
          </Flex>
          <Flex justify = "center">
            <span style = {{color:'#ac780c'}}>我的口号是，让世界和平</span>
          </Flex>
        </div>
        <div style = {{position:'absolute',top:'200px',left:'',width:'100%'}} >

          <MyItem/>
          <WingBlank>
            <Button style = {{backgroundColor:'#ea4b4b',color:'#fff',height:'40px',marginBottom:'100px',fontSize:'12px'}}>退出当前帐号</Button>
          </WingBlank>

          {/* <MyList  history={this.props.history} /> */}
        </div>

      </div>
    )
  }
}


export default connect(appInfo)(AppMy);
