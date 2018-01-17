// import React from 'react';
// import { Flex,Checkbox,Button,List } from 'antd-mobile';
// import ShopName from './ShopName';
// import ShopEdit from './ShopEdit';
// import Edit from './Edit';
// import styles from './GoodItem.css';
// import style from './common.css';
//
// import goodsImg from '../../assets/img/reward/good.jpg';
// const CheckboxItem = Checkbox.CheckboxItem;
//
//
//
// class Change extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         CheckAll: false,
//         isCheck: false,
//         data: [
//             { value: 0, label:'',checked: false },
//             { value: 1, label: '',checked: false  },
//             { value: 2, label: '',checked: false  },
//           ]
//     }
//   }
//
//   onChange = (e,val,bel,index) => {
//       this.state.data[index].checked = !this.state.data[index].checked
//       this.setState({
//           data: this.state.data
//       })
//     }
//
//   CheckAll = () => {
//       for(var i =0; i < this.state.data.length; i++){
//          this.state.data[i].checked=!this.state.CheckAll
//       }
//       this.setState({
//           CheckAll: !this.state.CheckAll,
//           data: this.state.data
//       })
//   }
//
//   render(){
//
//     const data = this.state.data
//     return(
//     // <div style = {{paddingLeft:'5px'}}>
//     <div>
//       <div style = {{backgroundColor:'#eee',marginBottom:'14px'}}>
//         {/* <div>
//         <ShopName/>
//         </div> */}
//           {/* <CheckboxItem onChange={()=>this.CheckAll()} checked={this.state.CheckAll}>全选</CheckboxItem> */}
//         <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}
//           onChange={()=>this.CheckAll()} checked={this.state.CheckAll}
//           >
//           <Flex >
//             <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111',marginRight:'10px'}}/>
//             <span>这是店铺的名字</span>
//           </Flex>
//         </CheckboxItem>
//         <div className = {styles['am-list-item']} className = {styles['am-list-thumb']} >
//            {data.map((i,index)=> (
//            <CheckboxItem key={i.value} onChange={(e) => this.onChange(e,i.value,i.label,i.value)} checked={i.checked} className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
//                {i.label}
//                {/* {index} */}
//                <Flex>
//                  <img src = {goodsImg} className = {styles['good-img']} style = {{height:'45px',width:'45px'}}/>
//                <div style = {{width:'120px',marginLeft:'15px'}}>
//                  <ShopEdit/>
//                </div>
//              </Flex>
//            </CheckboxItem>
//            ))}
//            {/* <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
//            Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
//            </CheckboxItem> */}
//        </div>
//         {/* <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
//           <Flex>
//             <img src = {goodsImg} className = {styles['good-img']} style = {{height:'45px',width:'45px'}}/>
//           <div style = {{width:'120px',marginLeft:'15px'}}>
//             <ShopEdit/>
//           </div>
//         </Flex>
//         </CheckboxItem>
//         <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
//           <Flex>
//             <img src = {goodsImg} className = {styles['good-img']} style = {{height:'45px',width:'45px'}}/>
//           <div style = {{width:'120px',marginLeft:'15px'}}>
//             <ShopEdit/>
//           </div>
//         </Flex>
//         </CheckboxItem> */}
//       </div>
//       <div className = {style['bottom-pos']}>
//       <Flex >
//         <CheckboxItem className = {style['bottom-all']}><span style = {{color:'white'}}>全选</span></CheckboxItem>
//         <Flex justify = "center" className = {style['bottom-balance-red']}>结算</Flex>
//       </Flex>
//       </div>
//     </div>
//     )
//   }
// }
//
// export default Change;
