import React from 'react';
import { List, Icon, Flex, Button, InputItem, TextareaItem } from 'antd-mobile';
import { Link } from 'react-router-dom';
import goodImg from '../../assets/img/reward/good.jpg';
import styles from '../orders/WaitDetails.css';
import stylec from '../orders/Common.css';


class FirmOrder extends React.Component {
  constructor() {
    super()
    this.paid = this.paid.bind(this)
  }

  paid() {
    this.props.history.push('/paid')
  }

  render(){
    return(
      <div style = {{marginTop:'60px'}}>
        <div className = {styles['item-info']}>
          <div><img src={require('../svg/send.svg')} className = {styles['item-icon']}/>配送方式：<span style = {{color:'#888'}}>到店自提</span></div>
          <div>
          <Link to = "/address">
            <div style = {{color:'#333'}}><img src={require('../svg/location.svg')} className = {styles['item-icon']}/>地址：<span style = {{color:'#888',backgroundColor:'#eee'}}>成都市金牛区沙湾路63号</span></div>
            <div style = {{color:'#333'}}><img src={require('../svg/phone.svg')} className = {styles['item-icon']}/>电话：<span style = {{color:'#888',backgroundColor:'#eee'}}>123456789</span></div>
          </Link>
          </div>
        </div>

        <div className = {styles['item-user']}>
          <Flex>
            <img src={require('../svg/people.svg')} className = {styles['item-icon']}/>姓&nbsp;名：<InputItem placeholder = "默认为黑卡姓名" style = {{backgroundColor:"#eee",borderRadius:'4px',fontSize:'14px',lineHeight:'2em',padding:'0 20px 0 10px'}}/>
          </Flex>
        <Flex>
          <Flex style = {{textIndent:'15px'}}>
          手机号：</Flex>
          <InputItem placeholder = "默认为黑卡手机号" style = {{backgroundColor:"#eee",borderRadius:'4px',fontSize:'14px',lineHeight:'2em',padding:'0 20px 0 10px'}}/>
        </Flex>
        <Flex>
          <span style = {{textIndent:'15px'}}>车牌号：</span>
          <InputItem placeholder = "默认为黑卡车牌号" style = {{backgroundColor:"#eee",borderRadius:'4px',fontSize:'14px',lineHeight:'2em',padding:'0 20px 0 10px'}}/>
        </Flex>
        </div>

        <div className = {styles['item-notice']}>
          <div><img src={require('../svg/notice.svg')} className = {styles['item-icon']}/>备注：<br/>
          <TextareaItem rows = "3" style = {{backgroundColor:'#eee',fontSize:'14px',width:'95%',padding:'10px 3px'}} placeholder = "到店自提这是占位符占位符请不要介意如此粗糙的占位符哈哈哈哈"/>
        </div>
        </div>
        <div className = {styles['goods-frame']} style = {{border:'1px dashed red'}}>
          <Flex justify = "center" className = {styles['goods-item']}>
            <div className = {styles['img-border']} >
              <img src = {goodImg} className = {styles['goods-img']}/>
            </div>
            <div >
              <Flex style = {{marginBottom:'10px'}}>我是商品的长名字占位符占位符占位符哈哈哈哈哈哈</Flex>
              <span className = {styles['type-color']}>类型：4L 自喜力 </span>    <span className = {styles['price-pst']}><span className = {styles['price-color']}>￥250 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>×1</span>
            </div>
          </Flex>

          <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',height:'auto',margin:'15px 10px'}}>
            <div style = {{backgroundColor:'#5e0f0f',padding:'2px 8px 8px 3px'}}>
              <img src = {goodImg} style = {{height:'50px',width:'50px'}}/>
            </div>
            <div style ={{paddingLeft:'10px'}}>
              我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
              <span style = {{color:'#888'}}>类型：4L 自喜力 </span>   <span style= {{float:'right'}}> <span style = {{color:'red'}}> ￥250 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ×1</span>
            </div>
          </Flex>
        </div>
        <Flex style = {{position:'fixed',bottom:'50px',marginTop:'20px',width:'100%',flexGrow:'1'}}>
          <Flex justify="start" style= {{backgroundColor:'#333',color:'#fff',lineHeight:'3.4em',padding:'0 15px',flexGrow:'1'}}>合计：<span style = {{color:'red',paddingLeft:'5px',fontSize:'16px'}}>￥250</span></Flex>
          {/* <Link to = "paid"> */}
          <div style = {{display:'flex'}} onClick = {this.paid}>
            <Button style = {{backgroundColor:'#ffcf2d',color:'#fff',padding:'0 10px',borderRadius:'0',padding:'0 30px'}}>提交订单</Button>
          </div>
          {/* </Link> */}
        </Flex>

      </div>
    )
  }

}

export default FirmOrder;
