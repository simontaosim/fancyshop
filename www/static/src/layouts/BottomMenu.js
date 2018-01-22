/*
  Author @Simon xsqfeather@gmail.com
  此处是App底部导航
*/
import React from 'react'

import { Link } from 'react-router-dom';
import { Icon, TabBar } from 'antd-mobile';
import { connect } from 'react-redux';

import { appInfo } from '../map_props.js';
class BottomMenu extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,

    };


  }
  componentDidMount(){
    // console.log(this.props);

    const { history }  = this.props;
    const pathname = history.location.pathname;
    switch (pathname) {
      case '/':
        this.setState({
          selectedTab: 'blueTab',
        });
        break;
      case '/messages':
        this.setState({
          selectedTab: 'redTab',
        });
        break;
      default:
        this.setState({
          selectedTab: 'blueTab',
        });
        break;

    }

  }

  render(){

    const { dispatch, history } = this.props;

    return(
        <div style={{ position: 'fixed', height: '10%', width: '100%', bottom: 0 }}>


        <TabBar
          unselectedTintColor="#949494"
          tintColor="#FECE42"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/bottom33.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/bottom3.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              history.push("/");
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="消息"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              history.push("/messages");
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="购物车"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              history.push("/shop_cart");
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/bottom44.png' }}
            selectedIcon={{ uri: 'http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/bottom4.png' }}
            title="我的"
            key="my"
            badge = {'爆'}
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              history.push("/my");
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
        </div>

    )
  }
}


export default connect(appInfo)(BottomMenu);;
