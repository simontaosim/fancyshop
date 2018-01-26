import React from 'react';
import { Flex,WingBlank,WhiteSpace } from 'antd-mobile';
import goodImg from '../../assets/img/orders/good.jpg';
import userImg from '../../assets/img/timg.jpg';
import s from './index.css';

import { connect } from 'react-redux';

import { appInfo } from '../../map_props.js';

import { asteroid } from '../../config/asteroid.config.js'


import { setAppTitleName } from '../../actions/app.js'
class Shops extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch(setAppTitleName("列表载入中..."));
    asteroid.call("get.tag.id", this.props.params.tagId)
    .then(result => {
        console.log("Success");
        console.log(result);
        dispatch(setAppTitleName(result.name));
    })
    .catch(error => {
        console.log("Error");
        console.error(error);
    });
  }

  render(){
    return(
      <div className = {s['item-top']}>
      <WhiteSpace/>
      <Flex direction = "column" justify = "center" align = "start" className = {s['item']}>

        <Flex center = "start" className = {s['shop-item']}>
          <img src = {userImg} className = {s['shop-img']}/>
          <Flex direction = "column" className = {s['shop-describe']}>
          <span className = {s['shop-name-font']}>滴滴洗车行（沙湾店）</span>
          <WhiteSpace/>
          <Flex>
            <img src={require('../svg/location-gray.svg')} className = {s['location-img']}/>
            <span className = {s['location-describe']}>成都市金牛区沙湾路63号</span>
          </Flex>
          </Flex>
          <WingBlank/>
          <Flex justify = "end" align = "end">
            <span className = {s['distance']}>500m</span>
          </Flex>
        </Flex>

        <WhiteSpace/>
        <Flex>
          <img src = {goodImg} className = {s['good-img']}/>
          <Flex direction = "column">
            <span className = {s['good-name']}>我是商品的名字只能线上一排</span>
            <WhiteSpace/>
            <Flex justify = "around">

              <span className = {s['good-price']}>价格:183</span>
              <WingBlank/>
              <span className = {s['good-num']}>销量:18</span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
    )
  }
}

export default connect(appInfo)(Shops);
