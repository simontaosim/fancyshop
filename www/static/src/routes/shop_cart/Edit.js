import React from 'react';
import { Flex,Checkbox,Button } from 'antd-mobile';
import styles from './GoodItem.css';

import goodsImg from './good.jpg';
import ShopEdit from './ShopEdit';
const CheckboxItem = Checkbox.CheckboxItem;
class Edit extends React.Component{
  constructor(){
    super();
  }

render(){
  return(
    <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
        <Flex>
        <img src = {goodsImg} className = {styles['good-img']} style = {{height:'30px',width:'40px'}}/>
      {/* <Flex.Item>
        <ShopEdit/>
      </Flex.Item>
      <Flex.Item>
        <Button size="small" style = {{border:'1px solid #111',paddingLeft:'10px'}} >确定</Button>
        <Button size="small" style = {{backgroundColor:'red',color:'white',paddingLeft:'10px'}}>删除</Button>
      </Flex.Item> */}
      <div >
        <ShopEdit/>
      </div>
      <div style = {{margin:'0 0 0 10px'}}>
        <Button size="small" style = {{border:'1px solid #111',paddingLeft:'10px',marginBottom:'10px',width:'70px'}} >确定</Button>
        <Button size="small" style = {{backgroundColor:'red',color:'white',paddingLeft:'10px'}}>删除</Button>
      </div>
    </Flex>
    </CheckboxItem>
  )
}
}
export default Edit;
