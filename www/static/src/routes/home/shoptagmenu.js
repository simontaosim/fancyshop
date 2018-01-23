import React from 'react';
import { connect } from 'react-redux';
import { appInfo } from '../../map_props.js';

import { Flex, WingBlank, Icon, Button } from 'antd-mobile';
import goodsImg from '../../assets/img/home/one.jpg';
import addImg from '../../assets/img/home/add.png'
import barImg from '../../assets/img/home/bar.png'
import beautyImg from '../../assets/img/home/beauty.png'
import runImg from '../../assets/img/home/run.png'
import shopImg from '../../assets/img/home/shop.png'
import styles from './shoptagmenu.css';
import { asteroid } from '../../config/asteroid.config.js'

import {getHomeTags} from '../../actions/app.js'
import { Link } from 'react-router-dom';


const icons = [addImg, barImg, beautyImg, runImg, shopImg]

class ShopTagMenu extends React.Component {
  constructor() {
    super();
  };
  componentDidMount(){
      const {dispatch} = this.props;
      dispatch(getHomeTags());

  }
  componentwillunmount(){
    console.log('destroy');
  }


renderTagItem(tagId, tagName, index){

  return (
    <Link to={'/shops/'+tagId.toString()}>
    <Flex key={tagId} direction = "column" justify = "center">
      <img src = {icons[index]} alt = "标签{tagName}" className = {styles['Img-size']}/>
      <p>{tagName}</p>
    </Flex>
    </Link>
  )
}
render(){
  let tags =null;
  if (this.props.AppInfo.homeTags.length >= 0) {
    tags = this.props.AppInfo.homeTags.map((item, index) => {
      return this.renderTagItem(item.id, item.fields.name, index);
    })
  }

  return(
  <div className = {styles['all']}>
    <Flex justify = "center" className = {styles['main']}>
      {tags}
    </Flex>
  </div>
    )
  }
}
export default connect(appInfo)(ShopTagMenu);
