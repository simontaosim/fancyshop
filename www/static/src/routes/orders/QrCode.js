import React from 'react';
import { Flex } from 'antd-mobile';
import picture from '../../assets/img/orders/qrcode.jpg';

class QrCode extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <Flex justify = "center" style = {{marginTop:'180px'}}><img  src = {picture} style = {{width:'260px',height:'200px'}}/></Flex>
    )
  }
}
export default QrCode;
