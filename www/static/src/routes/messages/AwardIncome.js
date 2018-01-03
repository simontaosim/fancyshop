import React from 'react';
import { Flex } from 'antd-mobile';
import styles from './AwardDetail.css';

class AwardIncome extends React.Component {
  constructor() {
    super()
  }

render(){
  return(
    <div className = {styles['Award-frame']}>
      <Flex><img src = {{}}/><span>收益</span></Flex>
      <table style = {{border:'1px solid #108ee9',borderRadius:'6px',width:'100%',align:'center'}}>
        <tbody>
          <tr style = {{backgroundColor:'#108ee9',color:'#fff',borderRadius:'6px',height:'30px'}}>
            <th>今日</th>
            <th>一周</th>
            <th>30天</th>
          </tr>
          <tr style = {{border:'1px solid blue',align:'center'}}>
            <td align = "center">38.88</td>
            <td align = "center">150.05</td>
            <td align = "center">388.80</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
 }
}
export default AwardIncome;
