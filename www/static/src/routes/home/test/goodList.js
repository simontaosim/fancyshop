import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

class goodList extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div>
        
      <div className="sub-title">Custom content</div>
      <Grid data={data1}
        columnNum={3}
        renderItem={dataItem => (
      <div style={{ padding: '12.5px' }}>
        <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
          <span>I am title..</span>
        </div>
      </div>
    )}
    />
  </div>
)
}
}

export default goodList;
