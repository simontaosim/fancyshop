import React from 'react';
import { Flex, Button } from 'antd-mobile';
import shopImg from '../../assets/img/timg.jpg';
import goodImg from '../../assets/img/reward/good.jpg';
import WaitPayBtn from './WaitPayBtn';
import UntreatedBtn from './UntreatedBtn';
import s from './OrderList.css';

class OrderList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      waitpay:<WaitPayBtn/>,
      untreated: <UntreatedBtn/>,
    }
  }
  render(){
    return (
      <div className = {s['order-frame']}>
        <Flex justify = "start">
          <img src = {shopImg} className = {s['shop-img']}/>
          <span className = {s['shop-name']}>店铺名字</span>
        </Flex>
        <Flex justify = "start" className = {s['good-item']}>
          <Flex className = {s['good-img']}>
            <img src = {goodImg}/>
          </Flex>
          <Flex direction = "column" justify = "start" align = "start" className = {s['good-des']}>
            <span className = {s['good-describe']}>这是商品名称一般情况下可以占两行</span><br/>
            <div className = {s['good-type']}>
              <div>类型：1L 自喜力</div>
              <div className = {s['good-price']}>￥87元</div>
              <div>×83</div>
            </div>
          </Flex>
        </Flex>
        <Flex justify = "start" style = {{backgroundColor:'#eee',padding:'10px',marginTop:'10px'}}>
          <Flex style = {{width:'70px'}}>
            <img src = {goodImg} style = {{width:'60px',height:'60px'}}/>
          </Flex>
          <Flex direction = "column" justify = "start" align = "start" style = {{width:'100%'}}>
            <span style = {{color:'#333',fontSize:'16px',fontWeight:'600',width:'100%',paddingLeft:'10px'}}>这是商品名称一般情况下可以占两行</span><br/>
            <div style = {{display:'flex',justifyContent:'space-around',paddingLeft:'10px',color:'#666'}}>
              <div>类型：1L 自喜力</div>
              <div style = {{paddingLeft:'3rem',paddingRight:'15px'}}>￥87元</div>
              <div>×83</div>
            </div>
          </Flex>
        </Flex>
        <Flex justify = "start" style = {{backgroundColor:'#eee',padding:'10px',marginTop:'10px'}}>
          <Flex style = {{width:'70px'}}>
            <img src = {goodImg} style = {{width:'60px',height:'60px'}}/>
          </Flex>
          <Flex direction = "column" justify = "start" align = "start" style = {{width:'100%'}}>
            <span style = {{color:'#333',fontSize:'16px',fontWeight:'600',width:'100%',paddingLeft:'10px'}}>这是商品名称一般情况下可以占两行</span><br/>
            <div style = {{display:'flex',justifyContent:'space-around',paddingLeft:'10px',color:'#666'}}>
              <div>类型：1L 自喜力</div>
              <div style = {{paddingLeft:'3rem',paddingRight:'15px'}}>￥87元</div>
              <div>×83</div>
            </div>
          </Flex>
        </Flex>

        <Flex justify = "end" className = {s['total']}>
          <span className = {s['total-font']}>合计:</span>
          <span className = {s['total-price']}>￥500</span>
        </Flex>

      </div>
    )
  }
}

export default OrderList;
