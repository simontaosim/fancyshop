import React from 'react';
import { Flex,Checkbox,Button } from 'antd-mobile';

import goodsImg from './good.jpg';
import ShopEdit from './ShopEdit';
const CheckboxItem = Checkbox.CheckboxItem;
class Edit extends React.Component{
  constructor(){
    super();
  }

render(){
  return(
    <CheckboxItem>
        <Flex>
        <img src = {goodsImg} style = {{height:'30px',width:'40px'}}/>
      <Flex.Item>
        <ShopEdit/>
      </Flex.Item>
      <Flex.Item>
        <Button size="small" style = {{border:'1px solid #111'}} >确定</Button>
        <Button size="small" style = {{backgroundColor:'red',color:'white'}}>删除</Button>
      </Flex.Item>
    </Flex>
    </CheckboxItem>
  )
}
}
export default Edit;
