import { List, InputItem,Picker, Button, DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import React from 'react';
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
        date: '',
      }
   }
   componentDidMount(){
     document.title = "个人资料";
   }

  render() {
    const { getFieldProps } = this.props.form;
    return(
        <List renderHeader={() => '个人信息'}>
          <InputItem
            clear
          >姓名</InputItem>
          <InputItem
            clear
          >签名</InputItem>
          <InputItem
            clear
          >花名</InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <Picker data={gender} cols={1} {...getFieldProps('gender')} className="forss">
          <List.Item arrow="horizontal">性别</List.Item>
        </Picker>
        <Picker extra="请选择"
          data=''
          title="地区"
          {...getFieldProps('district', {
            
          })}
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">地区</List.Item>
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
        <List.Item align="bottom" className="my-btn">
          <Button type="primary" size="small" inline onClick={this.onSubmit}  >保存</Button>
        </List.Item>
        </List>
      )
  }
}


const PersonalWrapper = createForm()(Personal)
export default PersonalWrapper;