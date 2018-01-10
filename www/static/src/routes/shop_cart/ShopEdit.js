import React from 'react';
import { Stepper, Picker, List} from 'antd-mobile';
//import { district, provinceLite } from 'antd-mobile-demo-data';
import styles from './ShopEdit.css';

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

const types = [
  [
    {
      label:'1L',
      value:'1L',
    },
    {
      label:'2L',
      value:'2L',
    },
    {
      label:'3L',
      value:'3L',
    },
    {
      label:'4L',
      value:'4L',
    },
  ],[
    {
      label:'蓝喜力',
      value:'蓝喜力',
    },
    {
      label:'红喜力',
      value:'红喜力',
    }
  ]
];

class ShopEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 1,
      data: [],
      cols: 1,
      pickerValue: [],
      asyncValue: [],
      // sValue: ['2013', '春'],
      sValue:['1L','蓝喜力'],
      visible: false,
    }
  }

  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
    if (this.state.value == 9) {
      // alert("您最多只能购买十件商品！")
      console.log('您最多只能购买十件该商品');
    }
  }
  render(){
    //  const { getFieldProps } = this.props.form;
    return(
      <div>
        {/* <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
         <List.Item arrow="horizontal">Single</List.Item>
       </Picker> */}
       <Picker
       style = {{width:'100%'}}
       data={types}
       title="选择产品规格"
       cascade={false}
       extra="请选择(可选)"
       value={this.state.sValue}
       onChange={v => this.setState({ sValue: v })}
       onOk={v => this.setState({ sValue: v })}
     >
       <List.Item arrow="horizontal">类型</List.Item>
     </Picker>

        {/* <select placeholder = "下拉列表框" style = {{width:'100%',border:'1px solid #aaa',borderRadius:'5px',fontSize:'14px',padding:'4px 0'}}>
          <option defaultValue="产品规格" disabled>产品规格</option>
          <option value="1L">产品规格：1L</option>
          <option value="2L">规格：2L</option>
          <option value="3L">规格：3L</option>
          <option value="4L">4L</option>
        </select> */}
        <Stepper className = {styles['am-stepper-handler-down']}
          style={{ width: '100%', minWidth: '100px'}}
          showNumber
          max={10}
          min={1}
          value={this.state.val}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default ShopEdit;
