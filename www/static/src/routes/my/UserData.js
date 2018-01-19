import React from 'react';
import { Flex, List, Accordion, InputItem, Button, TextareaItem, Calendar, ImagePicker, WingBlank, SegmentedControl} from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
     files: data,
    }
  }

  onChange = (key) => {
  console.log(key);
}

onChangeP = (files, type, index) => {
 console.log(files, type, index);
 this.setState({
   files,
 });
}


  render(){
     const { files } = this.state;
    return(
      <div style={{ marginTop: 50, marginBottom: 10 }}>
        <Flex>
        <san>头像：</san>
        <ImagePicker
         files={files}
         onChangeP={this.onChangeP}
         onImageClick={(index, fs) => console.log(index, fs)}
       />
       </Flex>
       {/*
      <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
        <Accordion.Panel header="头像">
          <List className="my-list">
            头像
          </List>
        </Accordion.Panel>
      </Accordion>
         <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
        <Accordion.Panel header="Title 3" className="pad">
          text text text text text text text text text text text text text text text
        </Accordion.Panel> */}

      <Accordion>
        <Accordion.Panel header="花名">
          <Flex>
            <Flex.Item>
            <InputItem placeholder = "设置花名"/>
            </Flex.Item>
            <Flex.Item>
              <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff',width:'60%',marginBottom:'10px'}}>提交</Button>
            </Flex.Item>
          </Flex>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="性别">
          <Flex>
            <InputItem placeholder = "请选择性别" style = {{width:'50%',marginRight:'10%'}}/>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff',width:'30%',marginBottom:'10px'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="签名">
            <TextareaItem placeholder = "写一句话吧"  rows={2}  count={300}  style = {{border:'1px solid #aaa',width:'95%',marginRight:'20px'}}>

            </TextareaItem>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff',width:'30%',marginBottom:'10px'}}>提交</Button>

        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="地区">
            <Button style = {{backgroundColor:'#2bbbba',width:'30%',margin:'0 auto'}}>提交</Button>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="生日">
            <Calendar/>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff',width:'30%',marginBottom:'10px'}}>提交</Button>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="修改密码">
          <InputItem placeholder = "设置你的新密码" style = {{borderBottom:'1px solid #aaa',outLine:'blue'}}/>
          <InputItem placeholder = "确认你的新密码"/><br/>
          <Flex justify = "center" style = {{}}>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff',width:'30%',marginBottom:'10px'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="手机号123">
          <Flex justify = "center" style = {{fontSize:'18px',padding:'15px'}}>暂不支持修改此项</Flex>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="车牌号">
          <Flex>
            <InputItem placeholder = "设置车牌号" style = {{borderBottom:'1px solid #aaa',width:'80%'}}/>
            <Button size = "small" style = {{backgroundColor:'#2bbbba',color:'#fff'}}>提交</Button>
          </Flex>
          </Accordion.Panel>
      </Accordion>



    </div>
    )
  }
}

export default UserData;
