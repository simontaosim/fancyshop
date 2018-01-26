import React from 'react';

import { Tabs } from 'antd-mobile';
import style from './ProductTabs.css';

class ProductTabs extends React.Component {
  constructor() {
    super()
  }

  render(){
    const tabs = [
      {title:'详情'},
      {title:'参数'},
    ];

    return(
      <div className = {style['tab-height']}>
        <Tabs tabs = {tabs} initialPage = {2} animated = {false} useOnPan = {false}>
          <div className = {style['tab-first']}>
             Content of first tab<br/>
             这是详情页面<br/>
             这是随便填充的内容
           </div>
           <div className = {style['tab-second']}>
             <span>品牌：Shell/壳牌</span><br/>
             <span>型号：喜力HX7</span><br/>
             <span>型号：喜力HX7</span><br/>
             <span>适合发动机种类：柴油发动机、汽油发动机</span><br/>
             <span>净含量：4L</span><br/>
             <span>机油分类：半合成机油</span><br/>
             <span>粘度级别：5W-40</span><br/>
             <span>机油级别：SN/CF</span>
           </div>
        </Tabs>
      </div>
    )
  }
}

export default ProductTabs;
