import React from 'react';
import { Flex } from 'antd-mobile';
import userImg from '../../assets/img/timg.jpg';


class ShopName extends React.Component {
  render(){
    return (
      <Flex style = {{padding:'15px 15px 0px 15px'}}>
        <img alt="" src = {userImg} style = {{height:'34px',width:'34px',border:'1px solid #fff',borderRadius:'17px',marginRight:'10px'}}/>
        <span>{this.props.shop}</span>
      </Flex>
    )
  }
}
 export default ShopName;
