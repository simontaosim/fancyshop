import React from 'react';
import { Stepper } from 'antd-mobile';
import styles from './ShopEdit.css';

class ShopEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 1,
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
    return(
      <div>
        <select placeholder = "下拉列表框" style = {{width:'100%',border:'1px solid #aaa',borderRadius:'5px',fontSize:'14px',padding:'4px 0'}}>
          <option defaultValue="产品规格" disabled>产品规格</option>
          <option value="1L">产品规格：1L</option>
          <option value="2L">规格：2L</option>
          <option value="3L">规格：3L</option>
          <option value="4L">4L</option>
        </select>
        <Stepper className = {styles['am-stepper-handler-down']}
          style={{ width: '70%', minWidth: '100px'}}
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
