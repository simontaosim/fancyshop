import React from 'react'
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { asteroid } from '../../../config/asteroid.config.js'
import { connect } from 'react-redux'
import { login, loginOut } from '../../../reducers/user.redux.js'
import {  Redirect } from 'react-router-dom'




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
  
    // const methodId = ddp.method("get.phonesms", [mobile]);
    // console.log(`id: ${methodId}`);
    // ddp.on("result", message => {
    //   console.log(message);
    //     if (message.id === methodId && !message.error) {
    //         Toast.info('验证码成功发送!');
    //     }else{
    //       console.log(message.error);
    //     }
    // });
//      if(this.state.liked){
//           this.timer = setInterval(function () {
//             var count = this.state.count;
//             this.state.liked = false;
//             this.state.disabled = true;
//             count -= 1;
//             if (count < 1) {
//               this.setState({
//                 liked: true,
//                 disabled: false
//               });
//               count = 10;
// 　　　　　　　　clearInterval(this.timer);
//             }
//             this.setState({
//               count: count
//             });
//           }.bind(this), 1000);
//         }
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
    const authenticated = this.props.user.authenticated
    if(authenticated){
      return (
        <Redirect to="/"/>
      );
    }
    return(
      <div>
      <WingBlank>
      <List renderHeader={() => '进入万车汇'}>
        <InputItem
          type="text"
          placeholder="输入您的账户"
          onChange={v=>this.handleChange('user',v)}
        >账户</InputItem>
        <InputItem
          type="password"
          placeholder="输入您的密码"
          onChange={v=>this.handleChange('pwd',v)}
          
      >密码
      </InputItem>
      </List>
      <WhiteSpace />
        <Button onClick={this.handleLogin} type='primary' >登录</Button>
        <WhiteSpace />
        <Button onClick={this.handleLogout} type='primary' >退出</Button>
        <WhiteSpace />
        <Button onClick={this.register} type='primary' >注册</Button>
      </WingBlank>

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