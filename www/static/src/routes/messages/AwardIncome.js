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
      <Flex align = "center">
          <img src={require('../../assets/svg/income.svg')} className = {styles['income-svg']}/>
          <span className = "svg-des">收益</span>
      </Flex>
      <Flex direction = "column" align = "around" className = {styles['income-item-border']} >
        <Flex justify = "around" className = {styles['income-time']}>
          <span>今日</span>
          <span>一周</span>
          <span>30天</span>
        </Flex>
        <Flex  justify = "around" className = {styles['income-money']}>
          <span className = {styles['income-money-border']}>38.88</span>
          <span className = {styles['income-money-border']}>150.05</span>
          <span>388.88</span>
        </Flex>
      </Flex>
      <br/>
      {/* <table style = {{border:'1px solid #00b7ee',borderRadius:'6px',width:'100%',align:'center'}}>
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
      </table> */}
    </div>
  )
 }
}
export default AwardIncome;
