/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';
import { Flex } from 'antd-mobile';
import { 
  Button,
  WingBlank, Modal, 
  Toast} from 'antd-mobile';
import { Link } from 'react-router-dom';
import MyItem from './MyItem';
import style from './common.css';
import userImg from '../../assets/img/timg.jpg';
import{ logout, memoryPathBeforeLogined, loadLoginedUserInfo } from '../../actions/users';

const alert = Modal.alert;

class AppMy extends React.Component{
  constructor(props) {
    super(props);
    this.confirmWindow = this.confirmWindow.bind(this);
    
  }

  confirmWindow() {
    const {dispatch} = this.props;
    alert('退出当前账号','您是否确认推出当前帐号?',[
      { text: '确定', onPress: () => {
          dispatch(logout());
      }},
      { text: '取消', onPress: () => console.log('取消了') },
    ])
  }


  componentWillMount(){
    document.title = '个人中心';
    const { dispatch } = this.props;
    dispatch(memoryPathBeforeLogined('/my'));
    dispatch(loadLoginedUserInfo());
   
  }

  componentWillReceiveProps(nextProps){
    const {appUser } = nextProps;
    if(appUser.loading){
      return Toast.loading("载入中", 1, ()=>{
        console.log('')
      });
    }
    if(appUser.status === 'logouting' ){
      Toast.loading("正在登出", 3, ()=>{
        console.log('登出中')
      });
    }
    if(appUser.status === 'offline' ){
      Toast.info("请登录用户", 1, ()=>{
        this.props.history.push('/tablogin');
      });
    }
  }


  render(){
    

   
    return (
      <div >
        <div className = {style['back-color']}>
          <Flex justify = 'center' align = "center">
              <img alt="" src = {userImg} className = {style['user-img']}/>
          </Flex>
          <Flex justify = "end" className = {style['pencil-position']} >
            <Link to = "/personal">
              <img  alt="" src = {require('../svg/pencil.svg')} className = {style['pencil-svg']} />
            </Link>
           </Flex>
          <Flex justify = "center"  className = {style['nick-name-pos']}>
            <span>{11}</span>
          </Flex>
          <Flex justify = "center">
            <span className = {style['user-name-span']}>{11}</span>
          </Flex>
          <Flex justify = "center">
            <span className = {style['slogan-span']}>{11}</span>
          </Flex>
        </div>
        <div className = {style['item-position']} >

          <MyItem/>
          <WingBlank>
            <Button className = {style['sign-out-btn']} onClick={this.confirmWindow}>退出当前帐号</Button>
          </WingBlank>
        </div>

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

export default connect(mapStateToProps)(AppMy);

