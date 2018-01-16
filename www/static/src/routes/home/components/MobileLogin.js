import React from 'react'
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { asteroid } from '../../../config/asteroid.config.js'
import { connect } from 'react-redux'
import { login } from '../../../reducers/user.redux.js'
import "./MobileLogin.css"
import backImg from './back.png'
import userImg from './people.png'
import pswImg from './validate1.png'

let self = this;
let sendBtnDisabled = false;
let count = 10;
let smsCounter = function(){
  console.log('sendBtnDisabled', sendBtnDisabled);

  console.log('count',count);
  if(count <= 10 && count >= 1 && sendBtnDisabled){
    sendBtnDisabled = true;
    count -= 1;
  }

  if(count < 1){
    sendBtnDisabled = false;
  }
}


class MobileLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user:'',
      pwd:'',
      count: 10,
      liked: true,
      disabled: false,
      hasError: false,

    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.sendCode = this.sendCode.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }

  sendCode() {
    let timer = null;

    if(count < 10 && count >= 1){
      sendBtnDisabled = true;
    }
    if(count === 10 && !sendBtnDisabled){
      sendBtnDisabled = true;
      count = 10;
      timer = setInterval(smsCounter, 1000)
    }
    if(count === 0 ){
      sendBtnDisabled = true;
      count = 10;
      window.clearInterval(timer);
    }
  }

  register() {
    console.log('resgiter');
    this.props.history.push('/register')
    // console.log(this.props.hisory)
  }

  handleLogin() {
    let username = this.state.user
    let password = this.state.pwd
      asteroid.loginWithPassword({username,password}).then(result => {
        console.log("Success");
        console.log(result);
    })
    .catch(error => {
        console.log("Error");
        console.error(error);
    });
      console.log('登陆')
      console.log(asteroid);
      console.log(`状态:${asteroid.loggedIn}`);
      if (asteroid.loggedIn){
        console.log(1)
      }else{
        console.log(2);
      }
  }
  handleLogout() {
    console.log(111);
    asteroid.logout()
    console.log(asteroid);
  }

  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }
  render() {
    var code = this.state.liked ? '获取验证码' : this.state.count + '秒后重发';
    // var disabled = this.state.disabled ? true : false
    // var sendCode = this.state.disabled ? function() {console.log(321)} : this.sendCode;
    return (
      <div className="all">
        {/*<div class='test'>hello</div>
        <div className="Test">
          123122
        </div>
        */}
        <div>
          <img src = {backImg} alt="返回按钮" className="back"/>
          <span　className="user-login">用户登陆</span>
          <span className="phone-login">验证码登陆</span>
        </div>
        <div className="frame">
        {/*
          <div className="username">
            <img src = {userImg} className="user-img"/>
          </div>
          <div className="password">
            <img src = {pswImg} className="psw-img"/>
          </div>
          <div className = "div-bor">
            <i className = "icon-user"></i>
            <input type="text" className="user"/>
          </div>
        */}
        <div className = "username" >
          <img src = {userImg} className="user-img"/>
          <input type="text" className = "user-input"
          placeholder="input your phone"
          onChange={v=>this.handleChange('user',v)}
          onErrorClick={this.onErrorClick}
          error={this.state.hasError}
          />
        </div>
        <div className="password">
          <img src = {pswImg} className="psw-img"/>
          <input type = "text" className = "psw-input"
          placeholder="input your phone"
          onChange={v=>this.handleChange('pwd',v)}
          />
        </div>
          <button onClick={this.handleLogin} className="login-btn">登陆</button>
          <span className="forget-psw">忘记密码?</span>

        </div>
        {/*
          <div className = "div-bor">
            <i className = "icon-user"></i>
            <input type="text" className="user"/>
          </div>

        </div>

        <div className = "div-bor">
          <i className = "icon-user"></i>
          <input type="text" className="user"/>
        </div>

        <WingBlank>
        <List renderHeader={() => '进入万车汇'}>
          <InputItem
            type="text"
            placeholder="input your phone"
            onChange={v=>this.handleChange('user',v)}
            onErrorClick={this.onErrorClick}
            error={this.state.hasError}
          >手机号码</InputItem>
           <InputItem
            type="password"
            placeholder="input your phone"
            onChange={v=>this.handleChange('pwd',v)}
         >密码
         <button   onClick={this.sendCode}  >{code}</button>
         </InputItem>
        </List>
        <WhiteSpace />
          <Button onClick={this.handleLogin} type='primary' >登录</Button>
          <WhiteSpace />
           <Button onClick={this.handleLogout} type='primary' >退出</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary' >注册</Button>
        </WingBlank>
        */}
      </div>
    );
  }
}

MobileLogin = connect(
 state=> state.user,
 {login}
)(MobileLogin)


export default MobileLogin;
