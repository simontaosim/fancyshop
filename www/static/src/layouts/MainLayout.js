/*
  Author @Simon xsqfeather@gmail.com
  此处是App主要布局
*/
import React from 'react'

import AppNavBar from './AppNavBar';
import BottomMenu from './BottomMenu';
class MainLayout extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
      name: "",
      email: "",
      number: "",
    };



  }
  componentDidMount(){

  }

  render(){
    return(
      <div>
        <AppNavBar history={this.props.history} />
        <div style={{marginTop: "20%", marginBottom: "30%"}}>
          {this.props.children}
        </div>
        <BottomMenu history={this.props.history} />
      </div>

    )
  }
}


export default MainLayout;
