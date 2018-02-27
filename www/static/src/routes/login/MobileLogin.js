import React from 'react'
import { List, InputItem, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import { MClient } from '../../config/asteroid.config.js'
import { connect } from 'react-redux'
import { mobileRegister } from '../../reducers/user.redux'
import Count from './Count'
import { setStore } from '../../config/mUtils'
import { testPhone } from '../../config/reg'
import { getLoginSMSCode } from '../../actions/users.js'


class MobileLogin extends React.Component {
  constructor(props) {

    super(props)

    this.state = {
      user:'',
      pwd:'',
      count: 60,
      countingDone:false,
      status: 'disable'

    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.onChildChange = this.onChildChange.bind(this)
    this.sendCode = this.sendCode.bind(this)

  }
  componentDidMount(){
    document.title="登陆万人车汇";
   
  }


sendCode() {
  const {dispatch, appUser} = this.props;
  dispatch(getLoginSMSCode(this.state.user));
  if(appUser.loginSMSCode !=="" && appUser.loginSMSCode !=="loading" && appUser.loginSMSCode !== "error"){
    Toast.success("验证码发送成功！");
  }
  if(appUser.loginSMSCode ==="error"){
    Toast.offline("验证码发送失败，请检查您的网络链接,或者是您请求过于频繁，过一个小时再试试吧", 3);
  }
  if (appUser.loginSMSCode==="loading") {
    Toast.loading("正在发送验证码");
  }
}






  onChildChange(tips,status){
	  if(status)
		  this.setState({
			status:status
      })
    }


  register() {
    this.props.history.push('/register')
  }

  handleLogin() {
    let phone = this.state.user;
    let pwd = this.state.pwd

    if(!testPhone(phone)){
      Toast.info("手机格式不正确")
    }else{
      this.props.mobileRegister(phone,pwd)
    }
  }
  handleLogout() {
    MClient.logout()
  }
  handlePhone=(event)=>{
    // 倒计时按钮处于倒计时未结束状态时手机号不能修改
    console.log(event);
    var phone = event;

    if(this.state.status==='sending')
        return false;
    // 同步input值
    this.setState({
       user: phone
    });
    // 验证手机号
    if(testPhone(phone)){
        this.setState({
          status:'able'
        });
    }
    else{
        this.setState({
          status:'disable'
        });
    }
}

  handleChange(key,value){

    this.setState({
      [key]:value
    })
  }
  render() {
    const { appUser } = this.props;
    
    return (
      <div>
        <WingBlank>
        <List renderHeader={() => '进入万车汇'}>
          <InputItem
            type="text"
            placeholder="输入您的手机号"
            onChange={this.handlePhone}
            onErrorClick={this.onErrorClick}
            error={this.state.hasError}
          >手机号码</InputItem>
           <InputItem
            type="password"
            placeholder="输入您的验证码"
            onChange={v=>this.handleChange('pwd',v)}
         >验证码
        <Count status={this.state.status} nums={this.state.count} callback={this.onChildChange} sendCode={this.sendCode}/>
         </InputItem>
        </List>
        <WhiteSpace />
          <Button onClick={this.handleLogin} type='primary' >登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary' >注册</Button>
        </WingBlank>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appUser: state.AppUser,
  }
}

export default connect(mapStateToProps)(MobileLogin);

