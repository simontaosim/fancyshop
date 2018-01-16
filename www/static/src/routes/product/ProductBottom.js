import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import goodImg from '../../assets/img/reward/good.jpg';
import style from './ProductBottom.css';

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
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
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

  render(){
    return(
      <div>
        <Flex>

          <Flex.Item><img src={require('../svg/shop.svg')} style = {{width:'30px',height:'30px'}}/><span style = {{lineHeight:'2em'}}>店铺</span></Flex.Item>
          <Flex.Item style = {{backgroundColor:'#00b7ee'}}>
            <span style = {{lineHeight:'3.2em',color:'#fff'}}>加入购物车</span>
          </Flex.Item>
          <Flex.Item style = {{backgroundColor:'#ffcf2d'}} >
            <Flex.Item onClick={this.showModal('modal2')} style = {{lineHeight:'2.8em',color:'white',justify:'center'}}>立即购买</Flex.Item>
              <WhiteSpace />
              <Modal
               popup
               visible={this.state.modal2}
               maskClosable={false}
               animationType="slide-up"
              >
               <div>
                 <Flex>
                   <img src = {goodImg} style = {{width:'70px',height:'70px',border:'6px solid #680000'}}/>
                   <div style = {{paddingLeft:'10px'}}>
                     <span style = {{color:'red',fontSize:'16px'}}>￥269.1</span>
                     <span align = "right" onClick = {this.onClose('modal2')} style = {{border:'1px solid #111',borderRadius:'10px',height:'16px',width:'16px',padding:'0px 4px',justifyContent:'flex-end',marginLeft:'148px'}}>×</span><br/>
                     <span style = {{color:'#aaa'}}>请选择类型</span>
                   </div>
                 </Flex>

                 {/* <div style = {{display: 'flex',flexDirection:'row',justifyContent:'space-around',marginTop:'30px',flexWrap:'wrap'}}>
                   <div style = {{height:'30px',backgroundColor:'#e5e5e5',padding:'2px 8px',borderRadius:'5px'}}>黄色</div>
                   <div style = {{height:'30px',backgroundColor:'#e5e5e5',padding:'2px 8px',borderRadius:'5px'}}>黄色</div>
                   <div style = {{height:'30px',backgroundColor:'#e5e5e5',padding:'2px 8px',borderRadius:'5px'}}>黄色</div>
                   <div style = {{height:'30px',backgroundColor:'#e5e5e5',padding:'2px 8px',borderRadius:'5px'}}>黄色</div>
                   <div style = {{height:'30px',backgroundColor:'#e5e5e5',padding:'2px 8px',borderRadius:'5px'}}>黄色</div> */}

                   <div className = {style['color-destop']}>
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
                </div>

                   {/* <div style = {{height:'30px',backgroundColor:'#e5e5e5',padding:'0 8px',borderRadius:'5px'}}>黄色</div>
                   <div style = {{height:'30px',backgroundColor:'#e5e5e5',padding:'0 8px',borderRadius:'5px'}}>黄色</div>
                   <div style = {{height:'30px',backgroundColor:'#e5e5e5',padding:'0 8px',borderRadius:'5px'}}>黄色</div> */}



                   {/* <Flex justify = "center space-around" >
                     <Flex.Item>紫色</Flex.Item>
                     <Flex.Item>紫色</Flex.Item>
                     <Flex.Item>紫色</Flex.Item>
                     <Flex.Item>紫色</Flex.Item>
                     <Flex.Item>紫色</Flex.Item>
                     <Flex.Item>紫色</Flex.Item>

                   </Flex>
                   <Flex justify = "center">
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                     <Button>紫色</Button>
                   </Flex>
                    */}
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
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}

export default ProductBottom;
