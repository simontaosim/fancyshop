import React from 'react';

import { Flex, Checkbox,Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import styles from './GoodItem.css';
import style from '../product/ProductBottom.css';
import goodImg from '../../assets/img/reward/good.jpg';
import goodsImg from '../../assets/img/reward/good.jpg';
import userImg from '../../assets/img/timg.jpg';


const CheckboxItem = Checkbox.CheckboxItem;

class Shop extends React.Component {
  constructor() {
    super()

    this.state = {
        val: 1,
        modal2: false,
        tagMenuClick: [false, false, false, false, false],
    }
  }

  handleTagMenuClick(num){
    let tagMenuClick = this.state.tagMenuClick;
    this.clearClickedStyle();
    tagMenuClick[num] = !tagMenuClick[num];
    this.setState({
      tagMenuClick,
    })
  }

  clearClickedStyle(){
    let tagMenuClick = this.state.tagMenuClick;
    for (var i = 0; i < tagMenuClick.length; i++) {
      tagMenuClick[i] = false;
    }
  }

  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
    if (this.state.value == 9) {
      // alert("您最多只能购买十件商品！")
      console.log('您最多只能购买十件该商品');
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

  render(){
    return (
      < div>
        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']} style = {{borderTop:'10px solid #eee'}}>
          <Flex>
            <img src = {userImg} style = {{height:'30px',width:'30px',borderRadius:'15px',backgroundColor:'#111',marginRight:'10px'}}/>
            <span>这是店铺的名字</span>
          </Flex>
        </CheckboxItem>

        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
          <Flex>

            <Flex className = {styles['good-item']} >
              <img src = { goodsImg } className = {styles['good-img']} style = {{width:'50px',height:'50px'}}/>
              <Flex.Item classnam = {styles['decribe-frame']} style = {{width:'100%',fontSize:'14px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>
                <span style = {{width:'100%',fontSize:'14px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>我是商品的名称1254565占位符哈哈哈哈</span><br/>
                <div style = {{border:'1px solid #aaa',fontSize:'14px',lineHeight:'2em',paddingLeft:'8px',borderRadius:'3px'}} onClick={this.showModal('modal2')}>白色，3L<img src={require('../svg/arrowdown.svg')} style = {{float:'right',width:'15px',height:'15px',margin:'6px 3px 0 0'}}/></div>
                <WhiteSpace />
                <Modal
                 popup
                 visible={this.state.modal2}
                 maskClosable={false}
                 animationType="slide-up"
                >
                 <div>
                   <Flex style = {{margin:'10px'}}>
                     <img src = {goodImg} style = {{width:'60px',height:'60px',border:'8px solid #680000'}}/>
                     <div style = {{paddingLeft:'10px'}}>
                       <span style = {{color:'red',fontSize:'16px'}}>￥269.1</span>
                       <img src = {require('../svg/close_black.svg')} style = {{position:'absolute',right:'15px',top:'10px',width:'25px',height:'25px',paddingBottom:'44px'}} onClick = {this.onClose('modal2')}/><br/>
                       <span style = {{color:'#aaa'}}>请选择类型</span>
                     </div>
                   </Flex>
                   <Flex wrap = "wrap" justify = "start">
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[0] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(0)}}>绿色</div>
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[1] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(1)}}>绿色</div>
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[2] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(2)}}>尼古拉斯色</div>
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[3] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(3)}}>灰绿色</div>
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[4] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(4)}}>蓝色</div>
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[5] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(5)}}>粉白色</div>
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[6] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(6)}}>白色</div>
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[7] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(7)}}>紫色</div>
                     <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[8] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(8)}}>黑色</div>
                   </Flex>
                     <Flex className = {style['num-padding']}>
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
                <span align = "left" className = {styles['good-price']}>￥262.9</span>
                <Stepper className = {styles['am-stepper-handler-down']}
                  style={{ width: '60%', minWidth: '100px',marginLeft:'22px'}}
                  showNumber
                  max={10}
                  min={1}
                  value={this.state.val}
                  onChange={this.onChange}
                />
              </Flex.Item>
            </Flex>
          </Flex>
        </CheckboxItem>
      </div>
    )
  }
}

export default Shop;
