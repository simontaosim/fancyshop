/*
  Author @Simon xsqfeather@gmail.com
  此处是App主要布局
*/
import React from 'react'

import AppNavBar from './AppNavBar';
import BottomMenu from './BottomMenu';
import {appInfo} from '../map_props.js';
import {connect} from 'react-redux';
import {  Redirect } from 'react-router-dom'

import "./common.less";   // 用于覆盖上面定义的变量
import CurrentUser from '../models/CurrentUser.js';

class MainLayout extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
      name: "",
      email: "",
      number: ""
    }
  }


  componentDidMount() {


  }


  render(){

    console.log("开始构造权限业务逻辑");
    if ('user.has.role.login_user') {

    }
    if ('user.has.role.nobody') {

    }
    CurrentUser.getId();
    // console.log(CurrentUser.getId());
    // if(this.props.history.location.pathname === '/my'){
    //   this.props.history.push('/tablogin');
    // }
    return(
      <div>
        <AppNavBar history={this.props.history} />
        <div style={{marginTop: "11%", marginBottom: "30%"}}>
          {this.props.children}
        </div>
        <BottomMenu history={this.props.history} />
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default MainLayout;
// export default connect (mapStateToProps)(MainLayout);
