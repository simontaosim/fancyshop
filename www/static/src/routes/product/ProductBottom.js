import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper} from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class ProductBottom extends React.Component {
  constructor() {
    super();
    this.state = {
      modal2: false,
      val: 1,
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

 onChange = (val) => {
   // console.log(val);
   this.setState({ val });
   if (this.state.value == 9) {
     // alert("您最多只能购买十件商品！")
     console.log('您最多只能购买十件该商品');
   }
 }

  render(){
    return(
      <div>
        <Flex>
          <Flex.Item><img src = {{}} style = {{width:'20px',height:'20px'}}/>店铺</Flex.Item>
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
    )
  }
}

export default ProductBottom;
