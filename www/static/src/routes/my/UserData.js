import React from 'react';
import { Flex, Accordion, InputItem, Button, TextareaItem, ImagePicker, WingBlank, SegmentedControl,DatePicker, List, PickerView, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import { district, provinceLite } from 'antd-mobile-demo-data';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
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

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
    //  files: data,
     date:now,
     value: null,
     sValue: ['未知'],
    }
  }


  render(){
    const {getFieldProps} = this.props.form;
    return(
    <div>
      <Accordion>
        <Accordion.Panel header = "花名&nbsp;&nbsp;&nbsp;&nbsp;设置花名" >
          <Flex justify = "center">
            <InputItem placeholder = "设置花名" style = {{borderBottom:'1px solid #aaa'}}/>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
      </Accordion>
       <Picker data={gender} cols={1} >
          <List.Item arrow="horizontal"
        //     value={this.state.sValue}
        //  onChange={v => this.setState({ sValue: v })}
        //  onOk={v => this.setState({ sValue: v })}
             >性别</List.Item>
       </Picker>
      <Accordion>
        <Accordion.Panel header = "签名" >
          <TextareaItem placeholder = "开始发布您的签名吧（30个字符限制）" rows={2}  count={30} style = {{width:'95%',marginBottom:'8px',marginRight:'16px',
            border:'1px solid #aaa',borderRadius:'5px',fontSize:'12px'}} >
          </TextareaItem>
          <Flex justify = "center" style = {{}}>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff',width:'30%',marginBottom:'15px'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
      </Accordion>
         <Picker extra="地区"
           data={district}
           title="地区"
           {...getFieldProps('district', {
             initialValue: ['340000', '341500', '341502'],
           })}
           onOk={e => console.log('ok', e)}
           onDismiss={e => console.log('dismiss', e)}
         >
           <List.Item arrow="horizontal">地区</List.Item>
         </Picker>
          <List>
            <DatePicker
              style = {{width:'100%'}}
             mode="date"
             title="请选择你的出生日期"
            //  extra="Optional"
             value={this.state.date}
             onChange={date => this.setState({ date })}
           >
             <List.Item arrow="horizontal">生日</List.Item>
           </DatePicker>
         </List>
        <Accordion>
        <Accordion.Panel header = "修改密码" >
          <InputItem placeholder = "设置你的新密码" />
          <InputItem placeholder = "确认你的新密码"/><br/>
          <Flex justify = "center" style = {{}}>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff',width:'30%',marginBottom:'15px'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
        <Accordion.Panel header = "手机" >
          <Flex justify ="center" style = {{fontSize:'18px',padding:'15px'}}>暂不支持修改此项</Flex>
        </Accordion.Panel>
        <Accordion.Panel header = "车牌号" >
          <Flex justify = "center">
            <InputItem placeholder = "设置车牌号" style = {{borderBottom:'1px solid #aaa'}}/>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
      </Accordion>

      </div>
    )
  }
}

const UserDataWrapper = createForm()(UserData);
export default UserDataWrapper;
