import React from 'react'
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { MClient } from '../../config/asteroid.config.js'
import { connect } from 'react-redux'
import { login, expectLoginFinished, loginFail } from '../../actions/users.js';


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
    this.handleForgot = this.handleForgot.bind(this)
  }

  sendCode() {
    let mobile = this.state.user.replace(/\s|\xA0/g,"")
    console.log(mobile);
    if(this.state.user === ''){
      Toast.info('账户格式错误!');
      return
    }

    MClient.apply("get.phonesms",[mobile])
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
    this.props.history.push('/register');
  }

  handleLogin() {
    const { dispatch } = this.props;
    let username = this.state.user
    let password = this.state.pwd
    let loginParams = {
      username,
      password
    }
    dispatch(login("password", loginParams));
  }
  handleForgot() {
    this.props.history.push('/forgotpassword')
  }

  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }

  componentWillReceiveProps(nextProps){
    const { appUser, dispatch} = nextProps;
    if(appUser.loginStatus === "logining"){
      Toast.loading("登录中，请稍后", 1, function(){
        //将登录状态还原为未发起
        dispatch(expectLoginFinished());
        
      });
    }
    if(appUser.loginFailReason !== ""){
      Toast.fail(appUser.loginFailReason, 2, function(){
        //将登录反馈状态还原为未发起
        dispatch(loginFail(""));
        dispatch(expectLoginFinished());
        
      });
    }
    if(appUser.loginStatus === "logined"){
      Toast.fail("登陆成功！", 2, ()=>{
        //将登录反馈状态还原为未发起
        expectLoginFinished();
        nextProps.history.push(appUser.pathBeforeLogined);
      });
    }
   
    Toast.hide();
  }
  render() {
   
   

    return(
      <div>
      <WingBlank>
      <List renderHeader={() => '进入万车汇'}>
        <InputItem
          type="text"
          placeholder="手机号/用户名"
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
        <Button onClick={this.register} type='primary' >注册</Button>
        <WhiteSpace />
        <Button onClick={this.handleForgot} type='primary' >忘记密码</Button>
      </WingBlank>

    </div>

    )
  }

}



function mapStateToProps(state) {
  return {
    user: state.user,
    appUser: state.AppUser
  }
}


export default connect(mapStateToProps)(Login);
