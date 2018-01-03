import React from 'react';

import { Tabs } from 'antd-mobile';

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
      <div style = {{ height: 200 }}>
        <Tabs tabs = {tabs} initialPage = {2} animated = {false} useOnPan = {false}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
             Content of first tab
           </div>
           <div style={{  alignItems: 'left', justifyContent: 'left', height: '250px', backgroundColor: '#fff',padding:'15px 0px 0px 15px',color:'#aaa' }}>
             <div><span>品牌：Shell/壳牌</span></div>
             <div><span>型号：喜力HX7</span></div>
             <div><span>型号：喜力HX7</span></div>
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
