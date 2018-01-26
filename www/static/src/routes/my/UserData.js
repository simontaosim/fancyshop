import React from 'react';
import { Flex, Accordion, InputItem, Button, TextareaItem, Calendar, ImagePicker, WingBlank, SegmentedControl,DatePicker, List, PickerView } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
    //  files: data,
     date:now,
     value: null,
    }
  }

//   const seasons = [
//   [
//     {
//       label: '2013',
//       value: '2013',
//     },
//     {
//       label: '2014',
//       value: '2014',
//     },
//   ],
//   [
//     {
//       label: '春',
//       value: '春',
//     },
//     {
//       label: '夏',
//       value: '夏',
//     },
//   ],
// ];

  onChange = (value) => {
     console.log(value);
     this.setState({
       value,
     });
   }
   onScrollChange = (value) => {
     console.log(value);
   }

  render(){
    return(
    <div>
      <Accordion>
        <Accordion.Panel header = "花名" >
          <Flex justify = "center">
            <InputItem placeholder = "设置花名" style = {{borderBottom:'1px solid #aaa'}}/>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
        <Accordion.Panel header = "性别" >
          {/* <PickerView
            onChange={this.onChange}
            onScrollChange={this.onScrollChange}
            value={this.state.value}
            data={seasons}
            cascade={false}
          /> */}
        </Accordion.Panel>
        <Accordion.Panel header = "签名" >
          <TextareaItem placeholder = "开始发布您的签名吧（30个字符限制）" rows={2}  count={30} style = {{width:'95%',marginBottom:'8px',marginRight:'16px',border:'1px solid #aaa',borderRadius:'5px',fontSize:'12px'}} >
          </TextareaItem>
          <Flex justify = "center" style = {{}}>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff',width:'30%',marginBottom:'15px'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
        <Accordion.Panel header = "地区" >

        </Accordion.Panel>
        <Accordion.Panel header = "生日" >
          <Flex style = {{width:'100%'}}>
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
          </Flex>
          <Flex justify = "center">
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
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

export default UserData;
