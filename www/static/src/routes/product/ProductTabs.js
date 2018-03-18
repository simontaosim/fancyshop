import React from 'react';

import { Tabs, Flex } from 'antd-mobile';
import style from './ProductTabs.css';
import deoneImg from '../../assets/img/deone.jpeg';
import detwoImg from '../../assets/img/detwo.jpeg';


class ProductTabs extends React.Component {
  

  render(){
    const tabs = [
      {title:'详情'},
      {title:'参数'},
    ];

    return(
      <div className = {style['tab-height']}>
        <Tabs tabs = {tabs} initialPage = {2} animated = {false} useOnPan = {false}>
          <div className = {style['tab-first']}>
             <img src = {deoneImg}/>
             <img src = {detwoImg}/>
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
