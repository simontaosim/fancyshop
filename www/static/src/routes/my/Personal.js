import { Modal,List, InputItem,Picker, Button, DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import React from 'react';
import { district, provinceLite } from 'antd-mobile-demo-data';

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
        current_user: {},
      }
   }
   componentWillMount(){

   }
   

  render() {
    const { getFieldProps } = this.props.form;
    return(
        <List renderHeader={() => '个人信息'}>
          <Item 
          extra="extra content" arrow="horizontal" 
          onClick={() => prompt('花名', '修改花名', [
            { text: '取消' },
            { text: '确定', onPress: value => console.log(`输入的内容:${value}`) },
          ], 'default', '100')}
          >花名</Item>          
          <Item 
          extra="extra content" arrow="horizontal" 
          onClick={() => prompt('签名', '修改签名', [
            { text: '取消' },
            { text: '确定', onPress: value => console.log(`输入的内容:${value}`) },
          ], 'default', '100')}
          >签名</Item>
                    <Item 
          extra="extra content" arrow="horizontal" 
          onClick={() => prompt('车牌号', '修改车牌号', [
            { text: '取消' },
            { text: '确定', onPress: value => console.log(`输入的内容:${value}`) },
          ], 'default', '100')}
          >车牌号</Item>
          <Item extra="18026938187"  onClick={() => {}}>手机号码</Item>
          <Picker data={gender} cols={1} {...getFieldProps('gender')} className="forss">
          <List.Item arrow="horizontal">性别</List.Item>
          </Picker>
        <Picker extra="请选择(可选)"
          data={district}
          title="Areas"
          {...getFieldProps('district', {
            initialValue: [],
          })}
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">Multiple & cascader</List.Item>
        </Picker>
        <DatePicker
             style = {{width:'100%'}}
             mode="date"
             title="请选择你的出生日期"
             value={this.state.date}
             onChange={date => this.setState({ date })}
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
    current_user: state.currentUser.current_user,
    user: state.user,
    appUser: state.AppUser,
  }
}

export default connect(mapStateToProps)(PersonalWrapper);