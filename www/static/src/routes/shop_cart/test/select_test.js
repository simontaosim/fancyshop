// import { Picker, List, WhiteSpace } from 'antd-mobile';
// import React from 'react';
//
//
// const seasons = [
//
//   [
//     {
//       label: '春',
//       value: '春',
//     },
//     {
//       label: '夏',
//       value: '夏',
//     },
//   ],
// ];
//
// class SelectTest extends React.Component {
//   state = {
//   data: [],
//   cols: 1,
//   pickerValue: [],
//   asyncValue: [],
//   sValue: [ '春'],
//   visible: false,
// };
//   render(){
//     return(
//       <Picker
//        data={seasons}
//        title="选择季节"
//        cascade={false}
//        extra="请选择(可选)"
//        value={this.state.sValue}
//        onChange={v => this.setState({ sValue: v })}
//        onOk={v => this.setState({ sValue: v })}
//      >
//        <List.Item arrow="horizontal">Multiple</List.Item>
//       </Picker>
//     )
//   }
// }
//
// export default SelectTest
