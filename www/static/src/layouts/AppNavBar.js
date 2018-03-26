import React from 'react'
import {NavBar, Modal, List, Button, Badge} from 'antd-mobile';
import {connect} from 'react-redux';
import {appInfo} from '../map_props.js';
import { setAppCity } from '../actions/app.js';
import {getAddress} from '../service/amap/api/getCurrentLocationByIP';
import { Link } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faShoppingCart);

class AppNavBar extends React.Component{
  constructor(props){
    super(props);
    this.search = this.search.bind(this)
    this.state = {
      isBack: false,
      backTo: '/',
      hiddenBar: false,
      modal1: false,
      modal2: false,
    }
    getAddress(this.props);

  }

  renderLeft(){
   
    const {AppInfo} = this.props;
    
    if (AppInfo.leftBackPath === '') {
    return <Button onClick={this.showModal('modal2')} >{AppInfo.location.city}</Button>
    }
    if (AppInfo.leftBackPath === "/") {
      return  <Button icon="left" onClick={()=>this.props.history.replace(AppInfo.leftBackPath)}>返回</Button>
    } else {
      
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

search () {
  this.props.history.push('./searchbar')
}

  render(){
    const { cart, dispatch } = this.props;
    const top = this.props.AppInfo.navBarHidden ? "-42px" : "0";


    return(
      <div style={{ position: 'fixed', width: '100%', top: top, zIndex: 9999999 }}>
        <NavBar
            mode="light"

            leftContent={
              this.renderLeft()
            }
            rightContent={[
              <Link to="/shop_cart" key="1">
              <Badge text={cart.list.shopsData.length} />
              <FontAwesomeIcon icon="shopping-cart" size="lg" />
              </Link>,
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
         <List renderHeader={() => (<div>选择城市</div>)} className="popup-list" >
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
