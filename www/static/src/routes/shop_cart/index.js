import React from 'react';
import { Flex} from 'antd-mobile';
import ShopCartList from './ShopCartList';
import style from './common.css';
// import ShopCartList from './test';

// import { getCart } from '../../reducers/cart.redux';
import { getCart } from '../../actions/cartAction';
import { connect } from 'react-redux';
import DeleteBtn from './DeleteBtn';
import BalanceBtn from './BalanceBtn';
import CartNull from './CartNull';
import { getStore } from '../../config/mUtils';
import { setLeftBackTo } from '../../actions/app';


class ShopCart extends React.Component{
  constructor() {
    super()
    this.state = {
      edit: false,
    }
  }

  componentDidMount() {
    const {dispatch} = this.props;
    let userId = getStore('userId')
    dispatch(setLeftBackTo("/"));
    dispatch(getCart(userId))
  }







  render(){
    let { cart } = this.props;
    var text = this.state.edit ? '完成' : '编辑'
    var btn = this.state.edit ? <DeleteBtn history={this.props.history}/>:<BalanceBtn history={this.props.history}/>

    return(
      <div className = {style['bg-color']} >
        
        {(()=>{
          if(cart.list.shopsData.length>0){
           return(
             <div>

              <Flex justify = "end" style = {{backgroundColor:"#333",color:'#fff',lineHeight:'3em',padding:'5px 10px'}}>
                <span style = {{textAlign:'right'}}> <span  onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    edit:!this.state.edit,
                  });
                }}>{text}</span></span>
              </Flex>
              <div className = {style['item-frame']}>
                <ShopCartList/>
              </div>
              <div>
                {btn}
              </div>
            </div>
            )
          }else{
            return(
             <CartNull />
            )
          }
        })()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}
export default connect(mapStateToProps)(ShopCart);
