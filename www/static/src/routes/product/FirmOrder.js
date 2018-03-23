import React from 'react';
import { Flex, TextareaItem } from 'antd-mobile';
import { Link } from 'react-router-dom';
import styles from '../orders/WaitDetails.css';
import { MClient } from '../../config/asteroid.config.js'
import MyActivityIndicator  from '../common/MyActivityIndicator';
import { getStore } from '../../config/mUtils'
import goodImg from '../../assets/img/reward/good.jpg';


class FirmOrder extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div style = {{marginTop:'50px',backgroundColor:'#f6f6f6'}}>
                <div style = {{padding:'3px 5px',borderBottom:'15px solid #ddd'}}>
                    <span style = {{paddingLeft:'10px',paddingTop:'10px',fontWeight:'600',fontSize:'16px'}}>这是店铺的名字</span>
                    <div className = {styles['goods-frame']} style = {{border:'none',borderRadius:'0',borderBottom:'1px dashed red'}} >
                    <Flex justify = "center" className = {styles['goods-item']}>
                        <div className = {styles['img-border']} >
                            <img  className = {styles['goods-img']} src = { goodImg } alt="图片未显示"/>
                        </div>
                        <div >
                            <Flex style = {{marginBottom:'10px'}}></Flex>
                            <span className = {styles['type-color']}>规格：4L自喜力 </span>    <span className = {styles['price-pst']}><span className = {styles['price-color']}>￥26.88 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>×1</span>
                        </div>
                    </Flex>
                </div>
                <div className = {styles['']} style = {{borderBottom:'1px solid #ddd',paddingBottom:'10px'}}>
                    <div>
                        <img alt="" src={require('../svg/send.svg')} className = {styles['item-icon']}/>配送方式：<span style = {{color:'#888'}}>到店自提</span>
                    </div>
                <div>
                    <Link to = "/address">
                        <div style = {{color:'#333',padding:'10px 0'}}><img alt="" src={require('../svg/location.svg')} className = {styles['item-icon']}/>地址：<span style = {{color:'#888',backgroundColor:'#eee'}}>16号公馆</span></div>
                        <div style = {{color:'#333'}}><img alt="" src={require('../svg/phone.svg')} className = {styles['item-icon']}/>电话：<span style = {{color:'#888',backgroundColor:'#eee'}}>1782374899</span></div>
                    </Link>
                </div>
             </div>
             <div className = {styles['']} style = {{borderBottom:'',paddingBottom:'10px',backgroundColor:'#f6f6f6'}}>
                <div>
                    <img alt="" src={require('../svg/notice.svg')} className = {styles['item-icon']}/>备注：<br/>
                    <TextareaItem rows = "2" style = {{backgroundColor:'f6f6f6',fontSize:'14px',width:'95%',padding:'3px 3px'}} placeholder = "到店自提这是占位符占位符请不要介意如此粗糙的占位符哈哈哈哈" onChange={v=>this.handleChange('remark',v)}/>
                </div>
            </div>
        </div>

        <div style = {{marginTop:'20px'}}>
            <span style = {{paddingLeft:'10px',fontWeight:'600',fontSize:'16px'}}>这是店铺的名字</span>
            <div className = {styles['goods-frame']} style = {{border:'none',borderRadius:'0',borderBottom:'1px dashed red'}} >
                <Flex justify = "center" >
                    <div className = {styles['img-border']} >
                        <img  className = {styles['goods-img']} alt="图片未显示" src = { goodImg }/>
                    </div>
                    <div >
                        <Flex style = {{marginBottom:'10px'}}></Flex>
                        <span className = {styles['type-color']}>规格：4L自喜力 </span>  
                        <span className = {styles['price-pst']}>
                        <span className = {styles['price-color']}>￥26.88 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>×1</span>
                     </div>
                </Flex>
             </div>
            <div className = {styles['']} style = {{borderBottom:'1px solid #ccc',paddingBottom:'10px'}}>
                <div>
                    <img alt="" src={require('../svg/send.svg')} className = {styles['item-icon']}/>配送方式：<span style = {{color:'#888'}}>到店自提</span>
                </div>
                <div>
                    <Link to = "/address">
                        <div style = {{color:'#333',padding:'10px 0'}}><img alt="" src={require('../svg/location.svg')} className = {styles['item-icon']}/>地址：<span style = {{color:'#888',backgroundColor:'#eee'}}>16号公馆</span></div>
                        <div style = {{color:'#333'}}><img alt="" src={require('../svg/phone.svg')} className = {styles['item-icon']}/>电话：<span style = {{color:'#888',backgroundColor:'#eee'}}>1782374899</span></div>
                    </Link>
                </div>
            </div>
            <div className = {styles['']} style = {{borderBottom:'1px solid #ccc',paddingBottom:'10px'}}>
            <div>
                <img alt="" src={require('../svg/notice.svg')} className = {styles['item-icon']}/>备注：<br/>
                <TextareaItem rows = "2" style = {{backgroundColor:'#fff',fontSize:'12px',width:'95%',padding:'10px 3px'}} placeholder = "到店自提这是占位符占位符请不要介意如此粗糙的占位符哈哈哈哈" onChange={v=>this.handleChange('remark',v)}/>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default FirmOrder