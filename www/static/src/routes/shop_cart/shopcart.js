import React from 'react';

import { Flex, Checkbox,Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import styles from './GoodItem.css';
import style from '../product/ProductBottom.css';
import goodImg from '../../assets/img/reward/good.jpg';
import goodsImg from '../../assets/img/reward/good.jpg';
import userImg from '../../assets/img/timg.jpg';
import { getCart,productCheckAll, prodoctSingelCheck,countProduct} from '../../reducers/cart.redux';
import { cartInfo } from '../../map_props';
import { connect } from 'react-redux';


const CheckboxItem = Checkbox.CheckboxItem;

class Shop extends React.Component {
  constructor() {
    super()

    this.state = {
        val: 1,
        modal2: false,
        data: [],
        tagMenuClick: [false, false, false, false, false],
    }
    this.handleTest = this.handleTest.bind(this)
  }
  handleTest() {
    console.log(123);
  }

  componentDidMount(){
    this.props.getCart(2)
  }

  ShopCheckAll(e,shop_id,index) {
    console.log(this.props.cart.goods.shopsData[index].checked = e.target.checked)
    for(let i=0; i < this.props.cart.goods.shopsData[index].productsData.length; i++){
      if(this.props.cart.goods.shopsData[index].productsData[i].shop_id==shop_id){
        this.props.cart.goods.shopsData[index].productsData[i].checked= e.target.checked
      }
  }
  
    this.props.productCheckAll(this.props.cart.goods)
  }


  CheckItemProdcut(e,shop_index,product_index,shop_id) {
    let data = this.props.cart.goods
    let  prodcutCheckArr = []
    data.shopsData[shop_index].productsData[product_index].checked = e.target.checked
    for(var i=0;i< data.shopsData[shop_index].productsData.length;i++){
      if(data.shopsData[shop_index].productsData[i].checked == data.shopsData[shop_index].productsData[product_index].checked){
        prodcutCheckArr.push(data.shopsData[shop_index].productsData[i].checked)
      }
    }
    if(prodcutCheckArr.length==data.shopsData[shop_index].productsData.length){
      data.shopsData[shop_index].checked = prodcutCheckArr[0]
    }else if(prodcutCheckArr[0] == false){
      data.shopsData[shop_index].checked = prodcutCheckArr[0]
    }
      this.props.prodoctSingelCheck(data);
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

  onChange (val,shop_index,product_index){
    let data = this.props.cart.goods;
    data.shopsData[shop_index].productsData[product_index].count = val;
    this.props.countProduct(data);
  }



  handleCount = (val) => {
      console.log(val);
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
    var shopList = ""
    if(this.props.cart.goods.shopsData.length>0){
       shopList =  this.props.cart.goods.shopsData.map((v,shop_index)=>{
        return(
          <div key={shop_index}>
            <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']} style = {{borderTop:'10px solid #eee'}}  onChange={(e) => this.ShopCheckAll(e,v.shop_id,shop_index)} checked={v.checked}>
              <Flex>
                <img src = {userImg} style = {{height:'30px',width:'30px',borderRadius:'15px',backgroundColor:'#111',marginRight:'10px'}}/>
                <span>{v.shop_name}</span>
              </Flex>
            </CheckboxItem>
            {v.productsData.map((product,product_index)=>{
              return(
                <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']} key={product.index} checked={product.checked} onChange={(e)=>this.CheckItemProdcut(e,shop_index,product_index,product.shop_id)} key={product_index}>
                <Flex>
      
                  <Flex className = {styles['good-item']} >
                    <img src = { goodsImg } className = {styles['good-img']} style = {{width:'50px',height:'50px'}}/>
                    <Flex.Item classnam = {styles['decribe-frame']} style = {{width:'100%',fontSize:'14px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>
                      <span style = {{width:'100%',fontSize:'14px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{product.name}</span><br/>
                      <div style = {{border:'1px solid #aaa',fontSize:'14px',lineHeight:'2em',paddingLeft:'8px',borderRadius:'3px'}} onClick={this.showModal('modal2')}>{product.prodductSpec.name}<img src={require('../svg/arrowdown.svg')} style = {{float:'right',width:'15px',height:'15px',margin:'6px 3px 0 0'}}/></div>
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
                             <span style = {{color:'red',fontSize:'16px'}}>￥{product.prodductSpec.price}</span>
                             <img src = {require('../svg/close_black.svg')} style = {{position:'absolute',right:'15px',top:'10px',width:'25px',height:'25px',paddingBottom:'44px'}} onClick = {this.onClose('modal2')}/><br/>
                             <span style = {{color:'#aaa'}}>请选择类型</span>
                           </div>
                         </Flex>
                         <Flex wrap = "wrap" justify = "start">
                           <div className = {style['color-div']}  style={{background: this.state.tagMenuClick[0] ? "#e85839" : "#e5e5e5"}} onClick={()=>{this.handleTagMenuClick(0)}}>绿色</div>
                          
                         </Flex>
                           <Flex className = {style['num-padding']}>
                             购买数量：
                             <Stepper
                               style={{ width: '50%', minWidth: '80px'}}
                               showNumber
                               max={99}
                               min={1}
                               value={product.count}
                               onChange={(val)=>this.onChange(val,shop_index,product_index)}
                             />
                           </Flex>
                          <List>
                           <List.Item>
                             <Button type = "warning" onClick = {this.onClose('modal2')}>确定</Button>
                           </List.Item>
                         </List>
                       </div>
                      </Modal>
                      <span align = "left" className = {styles['good-price']}>￥{product.prodductSpec.price}</span>
                      <Stepper className = {styles['am-stepper-handler-down']}
                        style={{ width: '60%', minWidth: '100px',marginLeft:'22px'}}
                        showNumber
                        max={99}
                        min={1}
                        value={product.count}
                        onChange={(val)=>this.onChange(val,shop_index,product_index)}
                      />
                    </Flex.Item>
                  </Flex>
                </Flex>
              </CheckboxItem>
              )
            })}
          </div>
        )
      })
    }
   
    return (
      < div>
        {shopList}
      </div>
    )
  }
}

export default connect(cartInfo,{getCart,productCheckAll,prodoctSingelCheck,countProduct})(Shop);
