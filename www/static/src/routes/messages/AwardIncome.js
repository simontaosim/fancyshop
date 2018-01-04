import React from 'react';
import { Flex, Icon } from 'antd-mobile';
import styles from './AwardDetail.css';

class AwardIncome extends React.Component {
  constructor() {
    super()
  }

render(){
  return(
    <div className = {styles['Award-frame']}>
      {/* 111
      <img src={require('../svg/income.svg')} /> */}
      <Flex>
          <img src={require('../svg/income.svg')} style = {{height:'28px',width:'28px'}}/>
         {/* <Icon type={require('../svg/income.svg')} /> */}
      <span>收益</span></Flex>
      <table style = {{border:'1px solid #00b7ee',borderRadius:'6px',width:'100%',align:'center'}}>
        <tbody style = {{border:'1px solid #00b7ee'}}>
          <tr style = {{backgroundColor:'#00b7ee',color:'#fff',borderRadius:'6px',height:'30px'}}>
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
