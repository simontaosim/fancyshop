import React from 'react';
import { Flex, List, Accordion, InputItem, Button, TextareaItem, Calendar} from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

class UserData extends React.Component {
  constructor() {
    super();
  }

  onChange = (key) => {
  console.log(key);
}



  render(){
    return(
      <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
        <Accordion.Panel header="Title 1">
          <List className="my-list">
            头像
          </List>
        </Accordion.Panel>
        <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
        <Accordion.Panel header="Title 3" className="pad">
          text text text text text text text text text text text text text text text
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="花名">
          <Flex>
            <Flex.Item>
            <InputItem placeholder = "设置花名"/>
            </Flex.Item>
            <Flex.Item>
            <Button style = {{backgroundColor:'red'}}>提交</Button>
              </Flex.Item>
          </Flex>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="性别">
          <Flex>
            <InputItem placeholder = "请选择性别" style = {{width:'50%',marginRight:'10%'}}/>
            <Button style = {{backgroundColor:'red',width:'30%'}}>提交</Button>
          </Flex>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="签名">
            <TextareaItem placeholder = "写一句话吧"  rows={2}  count={300}  style = {{border:'1px solid #aaa',width:'95%',marginRight:'20px'}}>

            </TextareaItem>
            <Button style = {{backgroundColor:'red',width:'30%',margin:'0 auto'}}>提交</Button>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="地区">
            <Button style = {{backgroundColor:'red',width:'30%',margin:'0 auto'}}>提交</Button>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel header="生日">
            <Calendar/>
            <Button style = {{backgroundColor:'red',width:'30%',margin:'0 auto'}}>提交</Button>
        </Accordion.Panel>
      </Accordion>

    </div>
    )
  }
}

export default UserData;
