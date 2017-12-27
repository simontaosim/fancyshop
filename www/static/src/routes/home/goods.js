import React from 'react'
import { connect } from 'react-redux';

import { Flex, WingBlank, Tabs, WhiteSpace, Toast, ActionSheet, Button, Modal, List, Stepper} from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:'none',
      clicked1:'none',
      click2:'none',
      modal2: false,
      val:4,
    };
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

 onChange = (val) => {
   // console.log(val);
   this.setState({ val });
   if (this.state.value == 9) {
     // alert("您最多只能购买十件商品！")
     console.log('您最多只能购买十件该商品');
   }
 }

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      // title: 'title',
      message: 'I am description, description, description',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('closed after 1000ms');
        setTimeout(resolve, 1000);
      });
    });
  }

  dataList = [
  { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
  { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
  { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
  { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
  { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
].map(obj => ({
  icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
  title: obj.title,
}));


render(){
  const tabs = [
    {title:'详情'},
    {title:'参数'},
  ];

  return (
    <div style = {{marginBottom:'280px'}}>
      <div>

      </div>
      <Flex>
        新车推荐，壳牌喜力润滑油，高性价比合成有机油，黑卡会员特价
      </Flex>
      <Flex>
        <Flex.Item>
          <span style = {{color:'red',fontSize:'16px'}}>￥269.1</span>
          <span style = {{color:'white',backgroundColor:'#00acff',borderRadius:'10px'}}>黑卡价</span>
          <span align = "right">四川 成都</span>
        </Flex.Item>
      </Flex>
      <Flex>
        <Flex.Item><span onClick = {this.showShareActionSheet}>分享再赚</span></Flex.Item>
        <Flex.Item>一级奖励</Flex.Item>
        <Flex.Item>二级奖励</Flex.Item>
      </Flex>
      <Flex>
        <Flex.Item>配送方式</Flex.Item>
        <Flex.Item>库存</Flex.Item>
        <Flex.Item>销量</Flex.Item>
      </Flex>
      <Flex>
        选择规格
      </Flex>
      <div>
        <Tabs tabs = {tabs} initialPage = {2} animated = {false} useOnPan = {false}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
             Content of first tab
           </div>
           <div style={{  alignItems: 'left', justifyContent: 'left', height: '250px', backgroundColor: '#fff',padding:'15px 0px 0px 15px',color:'#aaa' }}>
             <div><span>品牌：Shell/壳牌</span></div>
             <div><span>型号：喜力HX7</span></div>
             <div><span>型号：喜力HX7</span></div>
             <span>适合发动机种类：柴油发动机、汽油发动机</span><br/>
             <span>净含量：4L</span><br/>
             <span>机油分类：半合成机油</span><br/>
             <span>粘度级别：5W-40</span><br/>
             <span>机油级别：SN/CF</span>
           </div>
        </Tabs>
      </div>
      <div>
        <Flex>
          <Flex.Item><img src = {{}} style = {{width:'20px',height:'20px'}}/>店铺</Flex.Item>
          {/* <Flex.Item><Button>
            <Modal>
              <Flex>
                <img/>
                <div>
                  <span style = {{color:'red'}}>￥269.1</span><span align = "right" style = {{border:'1px solid #111'}}>×</span><br/>
                  <span style = {{color:'#aaa'}}>请选择规格</span>
                </div>
              </Flex>
              <Flex>
                <Button type = "warning">黄色</Button>
                <Button>黄色</Button>
                <Button>黄色</Button>
                <Button>黄色</Button>
                <Button>黄色</Button>
              </Flex>
              <Flex justify = "start">
                <Button>hahahha</Button>
                <Button>hahahha</Button>
                <Button>hahahha</Button>
                <Button>hahahha</Button>
              </Flex>
            </Modal>
          </Button></Flex.Item> */}
          <Flex.Item>
            <Button>加入购物车</Button>
          </Flex.Item>
          <Flex.Item>
            <Button onClick={this.showModal('modal2')}>popup</Button>
              <WhiteSpace />
              <Modal
               popup
               visible={this.state.modal2}
               maskClosable={false}
               animationType="slide-up"
              >
               {/* <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                 {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                   <List.Item key={index}>{i}</List.Item>
                 ))}
                 <List.Item>
                   <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
                 </List.Item>
               </List> */}
               <div>
                 <Flex>
                   <img style = {{width:'70px',height:'70px',border:'6px solid #680000'}}/>
                   <div style = {{paddingLeft:'10px'}}>
                     <span style = {{color:'red'}}>￥269.1</span>
                     <span align = "right" onClick = {this.onClose('modal2')} style = {{border:'1px solid #111',borderRadius:'10px',height:'16px',width:'16px',padding:'0px 4px'}}>×</span><br/>
                     <span style = {{color:'#aaa'}}>请选择类型</span>
                   </div>
                 </Flex>

                   <Flex justify = "center">
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                   </Flex>
                   <Flex justify = "center">
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                   </Flex>
                   <Flex>
                     购买数量：
                     <Stepper
                       style={{ width: '50%', minWidth: '80px'}}
                       showNumber
                       max={10}
                       min={1}
                       value={this.state.val}
                       onChange={this.onChange}
                     />
                   </Flex>
                  <List>
                   <List.Item>
                     <Button type = "warning" onClick = {this.onClose('modal2')}>确定</Button>
                   </List.Item>
                 </List>
               </div>
              </Modal>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  )
}
}


export default Goods;
