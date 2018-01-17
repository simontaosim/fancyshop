// import React from 'react';
// import { Stepper, Picker, List} from 'antd-mobile';
// import styles from './ShopEdit.css';
// import style from './common.css';
//
// const spec = [
//   {
//     label:'1L自喜力',
//     value:'1L自喜力'
//   },{
//     label:'2L自喜力',
//     value:'2L自喜力'
//   },{
//     label:'3L自喜力',
//     value:'3L自喜力'
//   },{
//     label:'4L自喜力',
//     value:'4L自喜力'
//   }
// ];
//
// class ShopEdit extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       val: 1,
//       data: [],
//       sValue:['1L蓝喜力'],
//       visible: false,
//     }
//   }
//
//   onChange = (val) => {
//     // console.log(val);
//     this.setState({ val });
//     if (this.state.value == 9) {
//       // alert("您最多只能购买十件商品！")
//       console.log('您最多只能购买十件该商品');
//     }
//   }
//   render(){
//     //  const { getFieldProps } = this.props.form;
//     return(
//     <div>
//       <div style = {{width:'180px',fontSize:'12px'}} >
//          <Picker data = { spec } cols = {1}
//            className = {style['am-list-content']}
//            itemStyle = {{}} indicatorStyle = {{}}
//            value={this.state.sValue}
//            onChange={v => this.setState({ sValue: v })}
//            onOk={v => this.setState({ sValue: v })}
//            className="forss"
//            >
//            <List.Item arrow ="horizontal">规格</List.Item>
//          </Picker>
//      </div>
//
//         {/* <select placeholder = "下拉列表框" style = {{width:'100%',border:'1px solid #aaa',borderRadius:'5px',fontSize:'14px',padding:'4px 0'}}>
//           <option defaultValue="产品规格" disabled>产品规格</option>
//           <option value="1L">产品规格：1L</option>
//           <option value="2L">规格：2L</option>
//           <option value="3L">规格：3L</option>
//           <option value="4L">4L</option>
//         </select> */}
//         <Stepper className = {styles['am-stepper-handler-down']}
//           style={{ width: '100%', minWidth: '100px'}}
//           showNumber
//           max={10}
//           min={1}
//           value={this.state.val}
//           onChange={this.onChange}
//         />
//       </div>
//     )
//   }
// }
//
// export default ShopEdit;
