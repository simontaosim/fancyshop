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
import configureStore from "../stores/index";
const store = configureStore();

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
    console.log('redux 仓库',store);
    console.log('路由地址',this.props.history);
    //载入当前用户信息
    let pathname = this.props.history.location.pathname;
    if (pathname === '/') {

    }


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
  return {allState: state}
}

export default MainLayout;
// export default connect (mapStateToProps)(MainLayout);
