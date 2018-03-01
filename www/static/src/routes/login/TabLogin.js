import React from 'react'
import { WhiteSpace, Tabs, Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import Login from './Login'
import MobileLogin from './MobileLogin'
import { login, expectLoginFinished, loginFail } from '../../actions/users.js';

const tabs = [
  { title: '手机登陆', sub: '1' },
  { title: '密码登陆', sub: '2' },
];


class TabLogin  extends React.Component {
  constructor(props) {
    super(props)

   }
   componentDidMount(){

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
      Toast.success("登陆成功！", 2, ()=>{
        //将登录反馈状态还原为未发起
        expectLoginFinished();
        nextProps.history.push(appUser.pathBeforeLogined);
      });
    }
   
    Toast.hide();
  }

   render() {
    
    return (
      <div >

    <Tabs tabs={tabs}
      initialPage={0}
      tabBarPosition="top"
      renderTab={tab => <span>{tab.title}</span>}
    >
      <div style={{  height: '300px', backgroundColor: '#fff' }}>
        <MobileLogin history={this.props.history}/>
      </div>
      <div style={{ height: '300px', backgroundColor: '#fff' }}>
        <Login history={this.props.history}/>
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
      )
   }
 }

 function mapStateToProps(state) {
  return {
    user: state.user,
    appUser: state.AppUser,
  }
}


export default connect(mapStateToProps)(TabLogin);
