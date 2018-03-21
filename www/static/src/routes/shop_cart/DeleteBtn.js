import React from 'react';
import { Flex,Checkbox,Modal} from 'antd-mobile';
import { connect } from 'react-redux';
import { removeCart,shopCheckAll } from  '../../actions/cartAction';


const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

class DeleteBtn extends React.Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this)
    this.CheckAll = this.CheckAll.bind(this)

  }

  delete() {
    alert('', '确认将已选中的商品删除吗?', [
      { text: '取消', onPress: () => console.log('cancel')},
      { text: '删除', onPress: () => this.props.dispatch(removeCart(this.props.cart.list))},
    ]);
  }

  // deleteProduct() {
  //   let shopsData = this.props.cart.list.shopsData;
  // }



  CheckAll(e) {
    let { dispatch } = this.props;
    let data = this.props.cart.list
    for(var i=0;i<data.shopsData.length;i++){
      data.shopsData[i].checked = e.target.checked;
      for(var j=0;j<data.shopsData[i].productsData.length;j++){
        data.shopsData[i].productsData[j].checked = e.target.checked;
      }
    }
    dispatch(shopCheckAll(data))
  }


  render(){
    return (
      <div style = {{position:'fixed',bottom:'50px',marginTop:'20px',width:'100%'}}>
      <Flex>
      <CheckboxItem style = {{display:'flex',flexGrow:'1',backgroundColor:'#333',color:'#fff',paddingLeft:'7px',height:'50px'}} onChange={(e)=>this.CheckAll(e)}>
        <span style= {{color:'#fff',lineHeight:'1.95em'}}>全选</span>
      </CheckboxItem>
      <button style = {{display:'flex',flexGrow:'1', backgroundColor:'red',justifyContent:'center',color:'#fff',borderRadius:'0',border:'none',height:'50px',fontSize:'17px',lineHeight:'1.95em'}}
         onClick={this.delete}>删除</button>
      </Flex>
    </div>


    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}


export default connect(mapStateToProps)(DeleteBtn);
