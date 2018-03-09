import { Modal,List, InputItem,Picker, Button, DatePicker,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import React from 'react';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { setStore, getStore, removeStore } from '../../config/mUtils.js';
import { getUserbyId,getUserbyName,updateNickname, updateDataAutograph} from '../../actions/users'; 
import MyActivityIndicator  from '../common/MyActivityIndicator';



const Item = List.Item;
const prompt = Modal.prompt;
const gender = [
  {
    label:'未知',
    value:'未知',
  },{
    label:'保密',
    value:'保密',
  },{
    label:'男',
    value:'男',
  },{
    label:'女',
    value:'女',
  },
] 

class Personal extends React.Component {
   constructor() {
      super();
      this.state = {
        isFetching:true
      }
   }

   componentWillMount(){

     console.log("获取当前用户")
     const {dispatch} = this.props
     const {appUser,loading} = this.props
     console.log(this.props.appUser)
     let userId = getStore("userId");
     if (userId == undefined){
       let username = this.props.appUser.username 
       dispatch(getUserbyName(username))
     }
     console.log(userId)
     dispatch(getUserbyId(userId))
   }
   componentDidMount(){
     document.title = "个人资料"
     
   }
   updateNickname(value){
    console.log(value)
    const { dispatch } = this.props
    dispatch(updateNickname(value))
   }
   updateDataAutograph(value){
    console.log("value")
    const { dispatch } = this.props
    dispatch(updateDataAutograph(value))
   }

  render() {
    const { getFieldProps } = this.props.form;
    const { currentUser,loading } =  this.props
    return(
        <List renderHeader={() => '个人信息'}>

          <Item 
          extra={this.props.currentUser.nickname?this.props.currentUser.nickname:"未设置花名"} arrow="horizontal" 
          onClick={() => prompt('花名', '修改花名', [
            { text: '取消' },
            { text: '确定', onPress: value => this.updateNickname(value)},
          ], 'default', this.props.currentUser.nickname?this.props.currentUser.nickname:"未设置花名")}
          >花名</Item>          
          <Item 
          extra={this.props.currentUser.dataAutograph?this.props.currentUser.dataAutograph:"未设置个性签名"} arrow="horizontal" 
          onClick={() => prompt('签名', '修改签名', [
            { text: '取消' },
            { text: '确定', onPress: value => this.updateDataAutograph(value) },
          ], 'default', this.props.currentUser.dataAutograph?this.props.currentUser.dataAutograph:"未设置个性签名")}
          >签名</Item>
                    {/* <Item 
          extra="extra content" arrow="horizontal" 
          onClick={() => prompt('车牌号', '修改车牌号', [
            { text: '取消' },
            { text: '确定', onPress: value => console.log(`输入的内容:${value}`) },
          ], 'default', '100')}
          >车牌号</Item> */}
          <Item extra={this.props.currentUser.profile.mobile}  onClick={() => {}}>手机号码</Item>
          <Picker data={gender} cols={1} 
          {...getFieldProps('district', {
            initialValue: [this.props.currentUser.sex],
          })}  className="forss">
          <List.Item arrow="horizontal">性别</List.Item>
          </Picker>
        <Picker extra="请选择(可选)"
          data={district}
          title="Areas"
          {...getFieldProps('area', {
            initialValue: [this.props.currentUser.area?this.props.currentUser.area:"未设置地区"],
          })}
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">地区</List.Item>
        </Picker>
        <DatePicker
             style = {{width:'100%'}}
             mode="date"
             extra={this.props.currentUser.changebirth?this.props.currentUser.changebirth:"未设置生日"}
             title="请选择你的出生日期"
             value={this.props.currentUser.changebirth}
             onChange={date => console.log(`date:${date}`)}
             
           >
             <List.Item arrow="horizontal">生日</List.Item>
           </DatePicker>
        </List>
      )
  }
}



const PersonalWrapper = createForm()(Personal)
function mapStateToProps(state) {
  return {
    loading:state.CurrentUser.loading,
    currentUser: state.CurrentUser,
    user: state.user,
    appUser: state.AppUser,
  }
}

export default connect(mapStateToProps)(PersonalWrapper);