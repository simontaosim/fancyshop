import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import goodImg from '../../assets/img/reward/good.jpg';
import style from './ProductBottom.css';
import s from './ProductModal.css';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class ProductModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modal2: false,
      val: 1,
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
      tagMenuClick: [false,false,false,false]
    }
  }


    componentDidMount() {
     // simulate img loading
     setTimeout(() => {
       this.setState({
         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
       });
     }, 100);
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

   render(){
     return(
       <div>
       <Flex.Item onClick={this.showModal('modal2')} style = {{color:'black',justify:'center'}}><span style = {{color:'#888'}}>选择类型</span></Flex.Item>
       <WhiteSpace />
       <Modal
        popup
        visible={this.state.modal2}
        maskClosable={false}
        animationType="slide-up"
       >
        <div style = {{margin:'10px'}}>
          <Flex>
              <img src = {goodImg} style = {{width:'60px',height:'60px',border:'6px solid #680000'}}/>
              <div style = {{paddingLeft:'10px'}}>
                <span style = {{color:'red',fontSize:'22px',paddingRight:'10px'}}>￥269.1</span><br/>
                {/* <span align = "right" onClick = {this.onClose('modal2')} style = {{border:'1px solid #111',borderRadius:'10px',height:'16px',width:'16px',padding:'0px 4px',justifyContent:'flex-end',marginLeft:'148px'}}>×</span><br/> */}
                <span style = {{color:'#666',fontSize:'14px'}}>请选择类型</span>
              </div>
              <img src = {require('../svg/close_black.svg')} style = {{display:'flex',width:'25px',height:'25px',paddingLeft:'35%',paddingBottom:'44px',alignSelf:'flex-end'}} onClick = {this.onClose('modal2')}/><br/>
          </Flex>


            <Flex style = {{display:'flex',alignSelf:'flex-end'}}>

            </Flex>
            <WhiteSpace/>
            <Flex wrap = "wrap" justify = "start">
              <div className = {style['color-div']} style={{background: this.state.tagMenuClick[0] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(0)}}>绿色</div>
              <div className = {style['color-div']} style={{background: this.state.tagMenuClick[1] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(1)}}>绿色</div>
              <div className = {style['color-div']} style={{background: this.state.tagMenuClick[2] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(2)}}>尼古拉斯色</div>
              <div className = {style['color-div']} style={{background: this.state.tagMenuClick[3] ? "#ffcf2d" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(3)}}>灰绿色</div>
              <div className = {style['color-div']} style={{background: this.state.tagMenuClick[4] ? "#ffcf2d" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(4)}}>蓝色</div>
              <div className = {style['color-div']}>粉白色</div>
              <div className = {style['color-div']}>白色</div>
              <div className = {style['color-div']}>紫色</div>
              <div className = {style['color-div']}>黑色</div>
            </Flex>
          {/* <Flex wrap = "wrap">
            <div className={this.state.toggle? '123':'321'} style = {{backgroundColor:'#eee',color:'#333',padding:'4px 15px',borderRadius:'5px',margin:'10px'}} onClick={()=>{this.setState({toggle: !this.state.toggle})}}>粉色</div>
            <div className = {s['one']} style={{background: this.state.tagMenuClick[0] ? "lightgray" : "none"}} onClick={()=>{this.handleTagMenuClick(0)}}>粉色</div>
            <div className = {s['one']}>粉色</div>
            <div className = {s['one']}>粉色</div>
            <div className = {s['one']}>粉色</div>
            <div className = {s['one']}>粉色</div>
            <div className = {s['one']}>粉色</div>
          </Flex> */}

            {/* <div className = {style['color-destop']}>
              <div className = {style['color-div']}>绿色</div>
              <div className = {style['color-div']}>绿色</div>
              <div className = {style['color-div']}>蓝色</div>
              <div className = {style['color-div']}>蓝色</div>
              <div className = {style['color-div']}>蓝色</div>
          </div>

          <div className = { style['color-desbtm'] }>
            <div className = {style['color-div']}>黄色</div>
            <div className = {style['color-div']}>白色</div>
            <div className = {style['color-div']}>紫色</div>
            <div className = {style['color-div']}>黑色</div>
         </div> */}
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
     </div>
     )
   }
 }

   export default ProductModal;
