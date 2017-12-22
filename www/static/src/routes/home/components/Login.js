import React from 'react'
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { asteroid } from '../../../config/asteroid.config.js'
import { connect } from 'react-redux'
import { login, loginOut } from '../../../reducers/user.redux.js'
import {  Redirect } from 'react-router-dom'
import { Flex } from 'antd-mobile';
import { Icon, Grid } from 'antd-mobile';

import "./MobileLogin.css"
import "./Login.css"
import backImg from './back.png'
import backgroundImg from './background.jpg'
import userImg from './people.png'
import validateImg from './validate.png'

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);


class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user:'',
      pwd:'',
      count: 10,
      liked: true,
      disabled: false,
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.sendCode = this.sendCode.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  sendCode() {
    let mobile = this.state.user.replace(/\s|\xA0/g,"")
    console.log(mobile);
    if(this.state.user == ''){
      Toast.info('账户格式错误!');
      return
    }

    asteroid.apply("get.phonesms",[mobile])
    .then(result => {
        console.log("Success");
        console.log(result);
    })
    .catch(error => {
        console.log("Error");
        console.error(error);
    });

  }

  register() {
    this.props.history.push('/register')
    // console.log(this.props.history)
  }

  handleLogin() {
    let username = this.state.user
    let password = this.state.pwd
    this.props.login(username,password)
    // this.props.login('superAdmin','superAdmin2017best')
  }
  handleLogout() {
    this.props.loginOut();
  }

  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }
  render() {
    // var code = this.state.liked ? '获取验证码' : this.state.count + '秒后重发';
    // var disabled = this.state.disabled ? "disabled" : ""
    const authenticated = this.props.user.authenticated;

    if(authenticated){
      return (
        <Redirect to="/"/>
      );
    }
    return(
    <div className = "all-mobile">
      <div className="flex-container">
        <Flex>

          <InputItem className = "input-item"
            type="phone"
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
            >
              <img src = {userImg}/>
            </InputItem>
        </Flex>
        <Flex>

          <InputItem className = "input-item"
            type="phone"
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
            >
              <img src = {userImg}/>
            </InputItem>
        </Flex>
        <Button type = "primary" className = "psw-btn btn-active">登陆</Button>
        <Flex>
          <span className = "forget-pwd" >忘记密码？</span>
        </Flex>

        {/*
        <Flex>
          <Button type = "primary">登陆</Button>
        </Flex>

        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        */}
        <WhiteSpace size="lg" />
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


export default connect(mapStateToProps,{login,loginOut})(Login);
