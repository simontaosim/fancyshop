import React from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Icon, TabBar } from 'antd-mobile';
import createHistory from 'history/createHashHistory'
import Gun from 'gun';
const history = createHistory()
class MainLayout extends React.Component{
  constructor(props){
    super(props);
    this.gun = Gun('http://localhost:8080/gun');
    let self = this;
    this.gun.get('mark').on(function(data, key){
      self.state = {
        selectedTab: 'redTab',
        hidden: false,
        fullScreen: false,
        name: data.name,
        email: data.email,
        number: data.number,
      };
    });


  }
  componentDidMount(){
    let self = this;
    this.gun.get('mark').on(function(data, key){
      self.setState({
        name: data.name,
        email: data.email,
        number: data.number

      })
    });

  }

  render(){
    return(
        <div>
        <div style={{ position: 'fixed', width: '100%', top: 0 }}>
          <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => {

                this.gun.get('mark').put({
                  name: "Mark",
                  email: "mark@sa33333wae.io",
                  number: Math.random().toString(),
                });

                console.log('onLeftClick')}}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
            >NavBar
          </NavBar>
        </div>

        <div style={{marginTop: "20%", marginBottom: "30%"}}>
          {this.state.name} | {this.state.email} | {this.state.number}
        {this.props.children}
        </div>

        <div style={{ position: 'fixed', height: '10%', width: '100%', bottom: 0 }}>


        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
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
            title="热门"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              history.push("/sale");
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
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
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
        </div>

    )
  }
}


export default MainLayout;
