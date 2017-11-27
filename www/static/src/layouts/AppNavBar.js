import React from 'react'
import {Icon, NavBar, Modal, List, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {appInfo} from '../map_props.js';
import { setAppCity } from '../actions/app.js';

class AppNavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isBack: false,
      backTo: '/',
      hiddenBar: false,
      modal1: false,
      modal2: false,
    }

  }

  componentDidMount(){
    const {history} = this.props;


  }

  renderLeft(){
    const {history} = this.props;

    const pathname = history.location.pathname;
    if (pathname === '/') {
    return <Button onClick={this.showModal('modal2')} >{this.props.AppInfo.location.city}</Button>
    }

  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }


  render(){


    const { dispatch, history, AppInfo } = this.props;
    const top = this.props.AppInfo.navBarHidden ? "-42px" : "0";


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
        <Modal
         popup
         visible={this.state.modal2}
         maskClosable={false}
         animationType="slide-up"
       >
         <List renderHeader={() => <div>选择城市</div>} className="popup-list">
           {['北京市', '成都市'].map((i, index) => (
             <List.Item arrow="horizontal" multipleLine onClick={() => {
               dispatch(setAppCity(i));
               this.setState({
                 modal2: false,
               })
             }}  key={index}>{i}</List.Item>
           ))}
            <List.Item>更多城市敬请期待</List.Item>
         </List>
       </Modal>
      </div>
    )
  }
}

export default connect(appInfo)(AppNavBar);
