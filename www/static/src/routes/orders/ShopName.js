import React from 'react';
import { Flex } from 'antd-mobile';


class ShopName extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <Flex style = {{padding:'0 15px 15px 15px'}}>
        <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111'}}/>这是店铺的名字
      </Flex>
    )
  }
}
 export default ShopName;
