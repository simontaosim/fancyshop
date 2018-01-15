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
import { List, Badge,Button,WhiteSpace,WingBlank,Card ,Checkbox} from 'antd-mobile';
import MyItem from './MyItem';
import style from './common.css';
import userImg from '../../assets/img/reward/good.jpg';
// const CheckboxItem = Checkbox.CheckboxItem;


class AppMy extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div>
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
            <Button>退出当前帐号</Button>
          </WingBlank>

          <MyList  history={this.props.history} />
        </div>

        {/* <WingBlank size="lg">
   <WhiteSpace size="lg" />
   <CheckboxItem>
   <Card>
     <Card.Header
       title="This is title"
       thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
      //  extra={<span>this is extra</span>}
       extra={<img style = {{width:'25px',height:'25px'}}/>}

     />
     <Card.Body>
       <div>

       </div>
     </Card.Body>
     <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
   </Card>
   </CheckboxItem>
   <WhiteSpace size="lg" />
 </WingBlank> */}



      </div>
    )
  }
}


export default connect(appInfo)(AppMy);
