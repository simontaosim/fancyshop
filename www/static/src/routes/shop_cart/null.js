import React from 'react';

import { Flex, Button } from 'antd-mobile';
import goodsImg from './good.jpg';

class CartNull extends React.Component{
  constructor() {
    super()
  }

  render(){
    return (
      <div style = {{marginTop:'150px'}}>
        <Flex justify = 'center' >
          <img src = {goodsImg} style = {{width:'150px',height:'150px',marginBottom:'60px'}}/>
        </Flex>
        <Flex justify = 'center'>
          <Button style = {{backgroundColor:'#fc3e43',width:'200px'}}>去商城逛逛</Button>
        </Flex>
        {/* <div>
          <Flex>
            <div>
              <img src = {require(../svg/home.svg)} />
              店铺名：这是一个店铺名
            </div>
          </Flex>
        </div> */}
      </div>


    )
  }
}

export default CartNull;
