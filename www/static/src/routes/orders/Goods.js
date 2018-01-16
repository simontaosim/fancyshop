import React from 'react';
import goodImg from './good.jpg';
import { Flex } from 'antd-mobile';

class Goods extends React.Component {
  constructor(props) {
    super(props)
  }


  

  render(){
    // console.log('goods')
    // let goods = this.props.goods!=undefined? this.props.goods: []
    // console.log(goods)
    let {name, price, spec,num} = this.props
    return(
      <div>
        {this.props.goods}
          <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
          <div>
            <img src = { goodImg } style = {{height:'60px',width:'60px'}}/>
          </div>
          <div style = {{paddingLeft:'8px'}}>
            <Flex style = {{marginBottom:'10px'}}><span style = {{fontSize:'14px'}}>{name}</span></Flex>
            <span style = {{color:'#666',fontSize:'13px'}}>类型：{spec}     <span style = {{float:'right'}}>￥{price} &nbsp;&nbsp; ×{num}</span></span>
          </div>
        </Flex>

        
      </div>
    )
  }
}
export default Goods;
