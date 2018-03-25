import React from 'react'
import { List, InputItem, Toast ,WingBlank, Button, WhiteSpace} from 'antd-mobile';
import { register } from '../../reducers/user.redux.js'
import { connect } from 'react-redux'
import { getAddress } from '../../service/amap/api/getCurrentLocationByIP'
import { testPhone, testPassword, testUser} from '../../config/reg'
import Count from '../login/Count'
import { getRegSMSCode } from '../../actions/users.js';

class Register extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: '',
      pwd: '',
      pwdRepeat: '',
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
  const { dispatch } = this.props;
  dispatch(getRegSMSCode(this.state.mobile));
}






  onChildChange(tips,status){
    if(status)
      this.setState({
      status: status
      })
  }
  componentDidMount(){
    document.title = "注册万车汇帐号"
  }

  componentWillReceiveProps(nextProps){
     const { appUser } = nextProps;
     if(appUser.regSMSCode === "loading"){
       return  Toast.loading("消息发送中.......");
     }
     if(appUser.regSMSCode=== "error"){
       if(appUser.regFailReason ==="MOBILE TAKEN"){
          return Toast.fail("失败，手机号已经被占用");
       }else{
          return Toast.fail("失败，检查您的网络");
       }
     }

  }

  goBack() {
    this.props.history.goBack()
  }

  

  register(){
    let {user, pwd, mobile,verify} = this.state
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
    this.props.dispatch(register(user,pwd,mobile,verify))
  }

  handlePhone=(event)=>{
    var phone = event;
    if(this.state.status==='sending')
        return false;
    this.setState({
       mobile: phone
    });
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
           <InputItem
            type="password"
            placeholder="输入您的重复密码"
            onChange={v=>this.handleChange('pwd',v)}
          >重复密码</InputItem>
        </List>

        <WhiteSpace />
         <Button onClick={this.register} type='primary' >同意协议并且注册</Button><br/>
         <p><a href="#123">查看协议</a></p>
         <WhiteSpace />
         <Button onClick={this.goBack} type='primary' >返回</Button>
          
        </WingBlank>
      </div> 
    );
  }
}



function mapStateToProps(state) {
  return {
    appUser: state.AppUser
  }
}

export default connect(mapStateToProps)(Register);