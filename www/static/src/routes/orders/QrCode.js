import React from 'react';
import { Flex } from 'antd-mobile';
import picture from '../../assets/img/orders/qrcode.jpg';

class QrCode extends React.Component {

  render(){
    return (
      <Flex justify = "center" style = {{marginTop:'180px'}}><img  src = {picture} style = {{width:'260px',height:'200px'}} alt="图片未显示"/></Flex>
    )
  }
}
export default QrCode;
