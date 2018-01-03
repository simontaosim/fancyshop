import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
// import '../../service/data/datasource';
// import axios from 'axios'
import style from './order.css'

const tabs = [
  { title: '全部' },
  { title: '待付款' },
  { title: '未处理' },
  { title: '已完成' },
  { title: '无效' },
];


class TabExample extends React.Component {
    // componentDidMount(){
    //     axios.get('/myWallet').then(res => {
    //         console.log(res);
    //     })
    // }
    render(){
        // console.log(style)
        return(
            <div className={style.App}>123</div>
        )
    }
}
export default TabExample;