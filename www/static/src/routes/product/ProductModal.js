import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import goodImg from '../../assets/img/reward/good.jpg';
import style from './ProductBottom.css';
import s from './ProductModal.css';
import { connect } from 'react-redux';
import { openSpecModel, closeSpecModel } from '../../reducers/model.redux';
import { changeProduct, addCount } from '../../reducers/product.redux';
import { addCart  } from '../../reducers/cart.redux';
import { modelInfo } from '../../map_props';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal2: false,
      val: 1,
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
      tagMenuClick: [false,false,false,false],
    }
  }


  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tagMenuClick: nextProps.tagMenuClick
       });
    //  if(nextProps.cart){
    //    this.props.history.push('/shop_cart')
    //  }
  }

    showModal = key => (e) => {
     e.preventDefault(); // 修复 Android 上点击穿透
     this.props.openSpecModel()
   }
   onClose = key => (e) => {
    e.preventDefault(); 
     if(this.props.model.spec_status){
       let productinfo = this.props.product
       let selected = productinfo.selected !== undefined ? productinfo.selected : productinfo.good.spec[0]
       let count = productinfo.count !== undefined ? productinfo.count : 1
       let product = Object.assign({},productinfo.good,{selected},{count})
       this.props.addCart(product);
       this.props.history.push('/shop_cart')
     }else{
      this.props.closeSpecModel()
     }
   }

   Close = key => (e) => {
    e.preventDefault();
    this.props.closeSpecModel()
   }

   onChange = (val) => {
     this.setState({ val },()=>{
       this.props.addCount(this.state.val)
     });
    
   }

   handleSelectedSpec(i){
    let tagMenuClick = this.state.tagMenuClick;
       this.clearClickedStyle();
       tagMenuClick[i] = !tagMenuClick[i];
    this.setState({
      tagMenuClick,
    })
    this.props.changeProduct(i)
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
     let modelStatus = this.props.model.spec_model
     var spec=[];
     let price = [];
     for(var i=0; i<this.props.spec.length;i++){
      spec.push(
      <div className = {style['color-div']} style={{background: this.state.tagMenuClick[i] ? "#e85839" : "#e5e5e5"}} key={i} onClick={this.handleSelectedSpec.bind(this,i)}>
          {this.props.spec[i].name}
      </div>
       )
       {this.props.spec[i].isThis===true ? price.push(`${this.props.spec[i].price}`) : null }
     }
     
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
                <span style = {{color:'red',fontSize:'22px',paddingRight:'10px'}}>￥{price}</span><br/>
                <span style = {{color:'#666',fontSize:'14px'}}>请选择类型</span>
              </div>
              <img src = {require('../svg/close_black.svg')} style = {{display:'flex',width:'25px',height:'25px',paddingLeft:'35%',paddingBottom:'44px',alignSelf:'flex-end'}} onClick = {this.Close('modal2')}/><br/>
          </Flex>


            <Flex style = {{display:'flex',alignSelf:'flex-end'}}>

            </Flex>
            <WhiteSpace/>
            <Flex wrap = "wrap" justify = "start">
              {spec}
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

   export default connect(modelInfo,{changeProduct,addCart,addCount,openSpecModel,closeSpecModel})(ProductModal);
