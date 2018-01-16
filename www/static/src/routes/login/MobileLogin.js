import React from 'react'
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { asteroid } from '../../config/asteroid.config'
import { connect } from 'react-redux'
import { mobileRegister } from '../../reducers/user.redux'
import Count from './Count'
import { setStore } from '../../config/mUtils'
import { testPhone } from '../../config/reg'



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


sendCode() {
    console.log(`发送验证码1:${this.state.user}`)
    asteroid.call('get.phonesms', this.state.user)
    .then(result => {
        Toast.info('验证码已发送请查看手机');
        setStore('verify', result)
    })
    .catch(error => {
      console.log(error);
    })
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
    console.log(`${this.state.user}`)
    console.log(`${this.state.pwd}`)
    let phone = this.state.user;
    let pwd = this.state.pwd

    if(!testPhone(phone)){
      Toast.info("手机格式不正确")
    }else{
      console.log(`走这了`)
      this.props.mobileRegister(phone,pwd)
    }
  }
  handleLogout() {
    asteroid.logout()
  }
  handlePhone=(event)=>{
    // 倒计时按钮处于倒计时未结束状态时手机号不能修改
    var phone = event;
    console.log(event)
    if(this.state.status==='sending')
        return false;
    // 同步input值
    this.setState({
       user: phone
    });
    // 验证手机号
    if(testPhone(phone)){
      console.log(`手机验证成功`)
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
    return (
      <div>
        <WingBlank>
        <List renderHeader={() => '进入万车汇'}>
          <InputItem
            type="text"
            placeholder="input your phone"
            onChange={this.handlePhone}
            onErrorClick={this.onErrorClick}
            error={this.state.hasError}
          >手机号码</InputItem>
           <InputItem
            type="password"
            placeholder="input your phone"
            onChange={v=>this.handleChange('pwd',v)}
         >密码
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

MobileLogin = connect(
 state=> state.user,
 {mobileRegister}
)(MobileLogin)


export default MobileLogin;
