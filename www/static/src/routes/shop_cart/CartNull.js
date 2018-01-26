import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button, Radio} from 'antd-mobile';
import cartnullImg from '../../assets/img/cartnull.jpg';

const RadioItem = Radio.RadioItem;
class CartNull extends React.Component{
  constructor() {
    super()
  }

  render(){
    return (
      <div style = {{marginTop:'150px'}}>
        <Flex justify = 'center' >
          <img src = {cartnullImg} style = {{width:'150px',height:'150px',marginBottom:'60px'}}/>
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
