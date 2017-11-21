import React from 'react'
import { NavBar, Icon, TabBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { appInfo } from '../map_props.js';

class AppNavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isBack: false,
      
      backTo: '/',
    }
  }

  renderLeft(){
    if (this.state.isBack) {
        return <Icon type="left" />;
    }
  }


  render(){


    return(
      <div style={{ position: 'fixed', width: '100%', top: 0 }}>
        <NavBar
            mode="light"
            icon={this.renderLeft()}
            onLeftClick={() => {

              console.log('onLeftClick')
            }}
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
