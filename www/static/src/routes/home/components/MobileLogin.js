import React from 'react'
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { asteroid } from '../../../config/asteroid.config.js'
import { connect } from 'react-redux'
import { login } from '../../../reducers/user.redux.js'
import "./MobileLogin.css"

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
    
    
    
    
      
    // let mobile = this.state.user.replace(/\s|\xA0/g,"")
    // console.log(mobile)
    // asteroid.call("get.phonesms",mobile)
    // .then(result => {
    //   console.log(result);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    
    // let self = this;

    // if(!self.state.disabled){
    
    //     self.timer = setInterval(function () {
    //       var count = self.state.count;
    //       self.setState({
    //         liked: false,
    //         disabled: true
    //       })
    //       count -= 1;
    //       if (count < 1) {
    //         self.setState({
    //           disabled: false
    //         });
    //         count = 10;
    //       }
    //       self.setState({
    //         count: count
    //       });
    //     }, 1000);
      
    // }else{
    
    //   return false;
    // }
//     console.log(mobile);
//     if(this.state.user == ''){
//       Toast.info('账户格式错误!');
//       return
//     }

//     asteroid.apply("get.phonesms",[mobile])
//     .then(result => {
//         console.log("Success");
//         console.log(result);
//     })
//     .catch(error => {
//         console.log("Error");
//         console.error(error);
//     });
  
//     const methodId = asteroid.method("get.phonesms", [mobile]);
//     console.log(`id: ${methodId}`);
//     ddp.on("result", message => {
//       console.log(message);
//         if (message.id === methodId && !message.error) {
//             Toast.info('验证码成功发送!');
//         }else{
//           console.log(message.error);
//         }
//     });
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
      <div>
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
         <button   onClick={this.sendCode} style={{
              fontSize: "15px",
              position: "absolute",
              top: 0,
              right: 0,
              padding: "0 0 7px 0",
              lineHeight: "42px",
              border: "none",
              background: "#fff"
  }} >{code}</button>
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
    );
  }
}

MobileLogin = connect(
 state=> state.user,
 {login}
)(MobileLogin)


export default MobileLogin;