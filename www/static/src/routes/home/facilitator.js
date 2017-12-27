import React from 'react';

import { Flex, Tabs } from 'antd-mobile';

class Facilitator extends React.Component {
  constructor() {
    super();
  };

  render(){
    const tabs = [
      {title : '商品' },
      {title : '简介' },
    ];
    return (
      <div>
        这是服务商主页
        <Tabs tabs = {tabs} >
          <div>
            这是服务商主页
          </div>
          <div>
            这是服务商简介
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Facilitator;
