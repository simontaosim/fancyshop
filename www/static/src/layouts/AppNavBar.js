import React from 'react'
import { NavBar, Icon, TabBar } from 'antd-mobile';
import { connect } from 'react-redux';


class AppNavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={{ position: 'fixed', width: '100%', top: 0 }}>
        <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => {

              console.log('onLeftClick')}}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
              <Icon key="1" type="ellipsis" />,
            ]}
          >
          {this.props.AppSetting.title}
        </NavBar>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    AppSetting: state.AppSetting
   };
}
export default connect(mapStateToProps)(AppNavBar);
