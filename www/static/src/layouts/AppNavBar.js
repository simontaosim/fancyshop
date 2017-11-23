import React from 'react'
import {Icon, NavBar} from 'antd-mobile';
import {connect} from 'react-redux';
import {appInfo} from '../map_props.js';

class AppNavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isBack: false,

      backTo: '/',
      hiddenBar: false,
    }
  }

  renderLeft(){
    const {history} = this.props;
    if (this.state.isBack) {
        return <Icon type="left" />;
    }
    const pathname = history.location.pathname;

    if (pathname === '/') {
      return <span>地理位置</span>
    }
  }


  render(){

    const top = this.state.hiddenBar ? "-42px" : "0";
    return(
      <div style={{ position: 'fixed', width: '100%', top: top }}>
        <NavBar
            mode="light"

            leftContent={
              this.renderLeft()
            }
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
              <Icon key="1" type="ellipsis" />,
            ]}
          >
          {this.props.AppInfo.title}
        </NavBar>
      </div>
    )
  }
}

export default connect(appInfo)(AppNavBar);
