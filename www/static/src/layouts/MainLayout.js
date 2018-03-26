/*
  Author @Simon xsqfeather@gmail.com
  此处是App主要布局
*/
import React from 'react'

import AppNavBar from './AppNavBar';
import BottomMenu from './BottomMenu';
import "./common.less";   // 用于覆盖上面定义的变量
import{ loadLoginedUserInfo } from '../actions/users';
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
    console.log(store);
    store.dispatch(loadLoginedUserInfo());

  }


  render(){


    
   
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



export default MainLayout;

