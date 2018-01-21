import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import goodImg from '../../assets/img/reward/good.jpg';
import style from './ProductBottom.css';
import s from './ProductModal.css';
import { connect } from 'react-redux';
import { openSpecModel, closeSpecModel } from '../../reducers/model.redux';
import { modelInfo } from '../../map_props';
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
      // modal2: false,
      val: 1,
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
    }
  }


    componentDidMount() {
      // console.log(this.props);
      // let { dispatch } = this.props;
      // dispatch(openSpecModel());
      // this.props.openSpecModel;
     // simulate img loading
     setTimeout(() => {
       this.setState({
         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
       });
     }, 100);
   }

    showModal = key => (e) => {
     e.preventDefault(); // 修复 Android 上点击穿透
     this.props.dispatch(openSpecModel())
    //  this.setState({
    //    [key]: true,
    //  });
   }
   onClose = key => (e) => {
     console.log(this.props)
     if(this.props.model.spec_status){
       console.log('测试')
     }else{
       this.props.dispatch(closeSpecModel())
     }
    //  this.setState({
    //    [key]: false,
    //  });
   }

   Close = key => (e) => {
    e.preventDefault();
    this.props.dispatch(closeSpecModel())
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
     let modelStatus = this.props.model.spec_model
     return(
       <div>
       <Flex.Item onClick={this.showModal('modal2')} style = {{color:'black',justify:'center'}}><span style = {{color:'#888'}}>选择类型</span></Flex.Item>
       <WhiteSpace />
       <Modal
        popup
        visible={modelStatus}
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
              <img src = {require('../svg/close_black.svg')} style = {{display:'flex',width:'25px',height:'25px',paddingLeft:'35%',paddingBottom:'44px',alignSelf:'flex-end'}} onClick = {this.Close('modal2')}/><br/>
          </Flex>


            <Flex style = {{display:'flex',alignSelf:'flex-end'}}>

            </Flex>
            <Flex wrap = "wrap" justify = "start">
              <div className = {style['color-div']}>绿色</div>
              <div className = {style['color-div']}>绿色</div>
              <div className = {style['color-div']}>尼古拉斯色</div>
              <div className = {style['color-div']}>灰绿色</div>
              <div className = {style['color-div']}>蓝色</div>
              <div className = {style['color-div']}>粉白色</div>
              <div className = {style['color-div']}>白色</div>
              <div className = {style['color-div']}>紫色</div>
              <div className = {style['color-div']}>黑色</div>
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
     </div>
     )
   }
 }

   export default connect(modelInfo)(ProductModal);
