import React from 'react'
import { WhiteSpace, Tabs } from 'antd-mobile';
import { connect } from 'react-redux'
import Login from './Login'
import MobileLogin from './MobileLogin'

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
