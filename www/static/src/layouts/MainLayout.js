/*
  Author @Simon xsqfeather@gmail.com
  此处是App主要布局
*/
import React from 'react'

import AppNavBar from './AppNavBar';
import BottomMenu from './BottomMenu';
import {appInfo} from '../map_props.js';
import {connect} from 'react-redux';
import "./common.less";   // 用于覆盖上面定义的变量


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
