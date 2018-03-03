import React from 'react';
import { Flex, Button, Modal, WhiteSpace, List, Stepper} from 'antd-mobile';
import goodImg from '../../assets/img/reward/good.jpg';
import style from './ProductBottom.css';
import { connect } from 'react-redux';
import { openSpecModel, closeSpecModel } from '../../reducers/model.redux';
// import { changeProduct } from '../../reducers/product.redux';
import {  addCount,createOrder } from '../../actions/products';
import { addProductCount } from '../../actions/productAction';
import { addCart, getCart, insertCart  } from '../../reducers/cart.redux';
import { modelInfo } from '../../map_props';


class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal2: false,
      val: 1,
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
      tagMenuClick: [false,false],
    }
  }


  componentDidMount() {
    console.log(this.props)
    // this.props.getCart(2)
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tagMenuClick: nextProps.tagMenuClick
    });
  }

    showModal = key => (e) => {
     e.preventDefault(); // 修复 Android 上点击穿透
     this.props.openSpecModel()
   }

   loopSpecOrderItem(spec) {

   }

   //加入购物车
   onClose = key => (e) => {
    e.preventDefault(); 
    console.log(123)
    let {cart, dispatch} = this.props;
    // let product = this.props.productShow.product;
    let {product} = this.props;
    console.log(`在这里`)
    console.log(product)
    let count = product.count;
    // console.log(product)
    // console.log(cart)
    let spec = this.props.spec.length == 0 ?  '默认规格': product.product.specifications;
    if(this.props.model.way=="orders"){
      let params = {
        userId: 2,
        status: 'unpay',
        shopId: product.product.shopId,
        address: "user.address.id",
        username: "李逍遥",
        mobile: "13751124249",
        products: [
          {
            price: product.product.endPrice,
            count,
            cover: product.product.cover,
            id: product.product._id,
            name: product.product.name_zh,
            specifications: {
              name: spec
            }
          },
        ]
      };
      console.log(`提交订单`)
      console.log(params);
      dispatch(createOrder(params));
      dispatch(closeSpecModel());
    //   this.props.createOrder(params);
    //   this.props.closeSpecModel()
     }
    
   
   }

   Close = key => (e) => {
    e.preventDefault();
    this.props.closeSpecModel()
   }

   onChange = (val) => {
     this.setState({ val },()=>{
      //  this.props.addCount(this.state.val)
       this.props.dispatch(addProductCount(this.state.val))
     });

   }

   handleSelectedSpec(i){
    let tagMenuClick = this.state.tagMenuClick;
       this.clearClickedStyle();
       tagMenuClick[i] = !tagMenuClick[i];
    this.setState({
      tagMenuClick,
    })
    // this.props.changeProduct(i)
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
     let modelStatus = this.props.model.spec_model;
     let {product} = this.props
     console.log(this.props.spec.length)
     let spec = this.props.spec.length == 0 ? [{name: '默认规格',price: product.product.endPrice,isThis: true}] : product.product.specifications;
     console.log(spec)
     console.log(spec.length)
     let specArr = []
     let price = [];
     for(var i=0; i<spec.length; i++){
        specArr.push(
        <div className = {style['color-div']} style={{background: this.state.tagMenuClick[i] ? "#e85839" : "#e5e5e5"}} key={i} onClick={this.handleSelectedSpec.bind(this,i)}>
            {spec[i].name}
        </div>
       )
       if(spec[i].isThis === true){
        price.push(`${spec[i].price}`);
       }
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
              <img alt="" src = {goodImg} style = {{width:'60px',height:'60px',border:'6px solid #680000'}}/>
              <div style = {{paddingLeft:'10px'}}>
                <span style = {{color:'red',fontSize:'22px',paddingRight:'10px'}}>￥{price/100}</span><br/>
                <span style = {{color:'#666',fontSize:'14px'}}>请选择类型</span>
              </div>
              <img alt="" src = {require('../svg/close_black.svg')} style = {{position:'absolute',right:'15px',top:'10px',width:'25px',height:'25px',paddingBottom:'44px'}} onClick = {this.Close('modal2')}/><br/>
          </Flex>


            <Flex style = {{display:'flex',alignSelf:'flex-end'}}>

            </Flex>
            <WhiteSpace/>
            <Flex wrap = "wrap" justify = "start">
              {specArr}

            </Flex>
            <Flex className = {style['num-padding']}>
              购买数量：
              <Stepper
                style={{ width: '50%', minWidth: '80px'}}
                showNumber
                max={99}
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

 function mapStateToProps(state) {
   return {
     product: state.productReducer,
     model: state.model,
   }
 }

export default connect(mapStateToProps)(ProductModal);
