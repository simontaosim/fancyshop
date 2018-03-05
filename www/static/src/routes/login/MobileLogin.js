import React from 'react'
import { List, InputItem, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import Count from './Count'
import { testPhone } from '../../config/reg'
import { getLoginSMSCode, loginSMSCodeFeedBack, login, expectLoginFinished, loginFail } from '../../actions/users.js'
const crypto = require('crypto');

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
    this.onChildChange = this.onChildChange.bind(this)
    this.sendCode = this.sendCode.bind(this)

  }
  componentDidMount(){
    document.title="登陆万人车汇";
   
  }


  sendCode() {
    const {dispatch} = this.props;
    dispatch(getLoginSMSCode(this.state.user));
    
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
    const {dispatch, appUser} = this.props;
    let hash = crypto.createHash('sha256');
    let cryptoCode = hash.update(pwd).digest('hex');
    if(cryptoCode===appUser.loginSMSCode){
      dispatch(login('mobileSMS', {
        mobile: phone,
        sendCode: pwd,
      }));
      
    }else{
      dispatch(login('mobileSMS', {
        mobile: phone,
        sendCode: pwd,
      }));
      Toast.offline("验证码错误",1);
    }
    
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
    const { appUser, dispatch } = this.props;
    if(appUser.loginSMSCodeFeedBackTimes === 1){
      if (appUser.loginSMSCode==="loading") {
        Toast.loading("正在发送验证码");
        dispatch(loginSMSCodeFeedBack(0));
      }
    }
    if(appUser.loginSMSCodeFeedBackTimes === 2){
      if(appUser.loginSMSCode !=="" && appUser.loginSMSCode !=="loading" && appUser.loginSMSCode !== "error"){
        Toast.success("验证码发送成功！", 1);
        dispatch(loginSMSCodeFeedBack(0));
      }
      if(appUser.loginSMSCode ==="error"){
        Toast.offline("验证码发送失败，请检查您的网络链接,或者是您请求过于频繁，过一个小时再试试吧", 2);
        dispatch(loginSMSCodeFeedBack(0));
        
      }
    }
    if(appUser.loginSMSCodeFeedBackTimes === 0){
      Toast.hide();
    }
       
    
    
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

