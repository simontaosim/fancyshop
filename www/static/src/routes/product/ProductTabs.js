import React from 'react';

import { Tabs, Flex } from 'antd-mobile';
import style from './ProductTabs.css';
import deoneImg from '../../assets/img/deone.jpeg';
import detwoImg from '../../assets/img/detwo.jpeg';
import renderHTML from 'react-render-html';
const HtmlToReactParser = require('html-to-react').Parser;
 
const htmlToReactParser = new HtmlToReactParser();

class ProductTabs extends React.Component {

  render(){
    const tabs = [
      {title:'详情'},
      {title:'参数'},
    ];

    return(
      <div className = {style['tab-height']}>
        <Tabs tabs = {tabs} initialPage = {0} animated = {true} useOnPan = {false}>
          <div className = {style['tab-first']}><br/>
              { htmlToReactParser.parse(this.props.des)}
           </div>
           <Flex direction = "column" align = 'start' className = {style['tab-second']}>
             <p>品牌：Shell/壳牌</p>
             <p>型号：喜力HX7</p>
             <p>适合发动机种类：柴油发动机、汽油发动机</p>
             <p>机油分类：半合成机油</p>
             <p>粘度级别：5W-40</p>
             <p>机油级别：SN/CF</p>
           </Flex>
        </Tabs>
      </div>
    )
  }
}

export default ProductTabs;
