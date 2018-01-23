import React from 'react'
import { List, InputItem, Toast ,WingBlank, Button, WhiteSpace} from 'antd-mobile';
import { register,getLocation } from '../../reducers/user.redux.js'
import { connect } from 'react-redux'
import { getAddress } from '../../service/amap/api/getCurrentLocationByIP'
import { testPhone, testPassword, testUser} from '../../config/reg'
import Count from '../login/Count'
import { setStore } from '../../config/mUtils'
import { asteroid } from '../../config/asteroid.config'

class Register extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: '',
      pwd: '',
      mobile: '',
      verify: '',
      count: 60,
      countingDone:false,
      status: 'disable'
    }

    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
    this.onChildChange = this.onChildChange.bind(this)
    this.sendCode = this.sendCode.bind(this)
  }


sendCode() {
  console.log(123);
  console.log(`发送验证码1:${this.state.user}`)
  asteroid.call('get.phonesms', this.state.user)
  .then(result => {
      Toast.info('验证码已发送请查看手机');
      setStore('verify', result)
  })
  .catch(error => {

  })
}






onChildChange(tips,status){
  if(status)
    this.setState({
    status:status
    })
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.user.authenticated){
          nextProps.history.push('/');
      }
  }

  goBack() {
    this.props.history.goBack()
  }

  

  register(){
    let self = this;
    let {user, pwd, mobile,verify} = this.state
    console.log(`mobile`)
    console.log(mobile)
    if(!testUser(user)){
      Toast.info('账户格式错误')
      return 
    }
    if(!testPhone(mobile)){
      Toast.info('手机格式错误')
      return
    }
    if(!testPassword(pwd)){
      Toast.info('密码格式错误')
      return
    }
    getAddress()
    this.props.register(user,pwd,mobile,verify)
  }

  handlePhone=(event)=>{
    // 倒计时按钮处于倒计时未结束状态时手机号不能修改
    var phone = event;
    console.log(event)
    if(this.state.status==='sending')
        return false;
    // 同步input值
    this.setState({
       mobile: phone
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
            placeholder="输入您的账户"
            onChange={v=>this.handleChange('user',v)}
            error={this.state.hasError}
          >账户</InputItem>
          
          <InputItem
            type="number"
            placeholder="输入您的手机"
            onChange={this.handlePhone}
          >手机</InputItem>
          
          <InputItem
            type="number"
            placeholder="验证码"
            onChange={v=>this.handleChange('verify',v)}
            
        >验证码
         <Count status={this.state.status} nums={this.state.count} callback={this.onChildChange} sendCode={this.sendCode}/>
        </InputItem>
        <InputItem
            type="password"
            placeholder="输入您的密码"
            onChange={v=>this.handleChange('pwd',v)}
          >密码</InputItem>
        </List>

        <WhiteSpace />
         <Button onClick={this.register} type='primary' >登录</Button>
         <WhiteSpace />
         <Button onClick={this.goBack} type='primary' >返回</Button>
          
        </WingBlank>
      </div> 
    );
  }
}



function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,{register})(Register);