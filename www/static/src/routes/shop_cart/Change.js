import React from 'react';
import { Flex,Checkbox,Button } from 'antd-mobile';
import ShopName from './ShopName';
import ShopEdit from './ShopEdit';
import Edit from './Edit';
import styles from './GoodItem.css';
import goodsImg from './good.jpg';
const CheckboxItem = Checkbox.CheckboxItem;


class Change extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div style = {{backgroundColor:'#eee',marginBottom:'14px'}}>
        <div>
        <ShopName/>
        </div>
        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
          <Flex>
            <img src = {goodsImg} className = {styles['good-img']} style = {{height:'45px',width:'45px'}}/>
          <div style = {{width:'120px',marginLeft:'15px'}}>
            <ShopEdit/>
          </div>
        </Flex>
        </CheckboxItem>
        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
          <Flex>
            <img src = {goodsImg} className = {styles['good-img']} style = {{height:'45px',width:'45px'}}/>
          <div style = {{width:'120px',marginLeft:'15px'}}>
            <ShopEdit/>
          </div>
        </Flex>
        </CheckboxItem>
      </div>
    )
  }
}

export default Change;
