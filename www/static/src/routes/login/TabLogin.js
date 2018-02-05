import React from 'react'
import { List, InputItem, Button, WhiteSpace, WingBlank,Tabs } from 'antd-mobile';
import { connect } from 'react-redux'
import Login from './Login'
import MobileLogin from './MobileLogin'
import {  Redirect } from 'react-router-dom'



const tabs = [
  { title: '手机登陆', sub: '1' },
  { title: '密码登陆', sub: '2' },
];


class TabLogin  extends React.Component {
  constructor(props) {
    super(props)

   }

   render() {

    const authenticated = this.props.user.authenticated
    if(authenticated){
      return (
        <Redirect to="/"/>
      );
    }
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
    user: state.user
  }
}


export default connect(mapStateToProps)(TabLogin);
