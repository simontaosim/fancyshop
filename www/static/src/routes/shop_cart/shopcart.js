import React from 'react';

import { Flex, Checkbox, } from 'antd-mobile';
import styles from './GoodItem.css';
import goodsImg from './good.jpg';

const CheckboxItem = Checkbox.CheckboxItem;

class Shop extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      < div>
        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
          <Flex>
            <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111',marginRight:'10px'}}/>
            <span>这是店铺的名字</span>
          </Flex>
        </CheckboxItem>
        {/* <CheckboxItem>
          <Flex>
            <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111',marginRight:'10px'}}/>
            <span>商品的描述</span>

          </Flex>
        </CheckboxItem> */}
        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
        <Flex>

          <Flex className = {styles['good-item']}>
            <img src = { goodsImg } className = {styles['good-img']}/>
            <Flex.Item classnam = {styles['decribe-frame']}>
              <span style = {{fontSize:'14px'}}>我是商品的名称1254565占位符</span><br/>
              <span className = {styles['good-type']}>规格:4L蓝喜力</span><br/>
              <span align = "left" className = {styles['good-price']}>￥262.9</span>
              <span align = "right" className = {styles['good-num']}>×1</span>
            </Flex.Item>
          </Flex>
          <img src = {require('../svg/pencil.svg')} style = {{marginLeft:'10px',height:'16px',width:'16px',paddingTop:'-20px'}}/>

        </Flex>
        </CheckboxItem>
      </div>
    )
  }
}

export default Shop;
