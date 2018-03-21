import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button} from 'antd-mobile';
import cartnullImg from '../../assets/img/cartnull.jpg';

class CartNull extends React.Component{


  render(){
    return (
      <div style = {{marginTop:'150px'}}>
        <Flex justify = 'center' >
          <img src={cartnullImg} style={{ width: '150px', height: '150px', marginBottom: '60px' }} alt="图片未显示"/>
        </Flex>

          <Flex justify = 'center'>
            <Link to = '/#'>
              <Button style = {{backgroundColor:'#fc3e43',width:'200px',color:'#fff'}}>去商城逛逛</Button>
            </Link>
          </Flex>
      </div>
    )
  }
}

export default CartNull;
