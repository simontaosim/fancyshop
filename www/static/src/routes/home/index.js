/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';

import { appInfo } from '../../map_props.js';
//import ShopTagMenu from "./components/ShopTagMenu.js"

import { Flex, Carousel, WhiteSpace, WingBlank, Grid } from 'antd-mobile';
import Recommend from "./recommend";
import ShopTagMenu from "./shoptagmenu";

//redux actions
import {setAppTitle} from '../../actions/app.js';
import './index.css';
import addImg from './add.png'
import barImg from './bar.png'
import beautyImg from './beauty.png'
import runImg from './run.png'
import shopImg from './shop.png'
import goodsImg from './one.jpg';


class AppHome extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: ['','',''],
    }
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(setAppTitle(this.props.path));
    setTimeout(() => {
     this.setState({
       data: ['banner1.jpeg', 'banner2.jpeg', 'banner3.jpeg'],
     });
   }, 100);


  }

  render(){

    return (
        <Flex  direction="column" className="flex-container ">
            <Carousel
              autoplay={false}
              infinite
              selectedIndex={1}
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(ii => (
                <a
                  key={ii}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/${ii}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
            <WhiteSpace/>
          <Flex  direction="row" align="center" justify="around" style={{width: "100%"}}>
            <Flex direction="row" justify="around" align="center" style={{background: "brown", color: "white",width: "50%",height: "100px"}} >商城</Flex>
            <Flex  direction="column"  align="center" style={{height: "100px", width: "50%"}}>
              <Flex justify="around" style={{height: "49px", background: "white", color: "grey", width: "100%"}}>财务</Flex>
              <Flex justify="around" style={{height: "50px", background: "grey", color: "white", width: "100%"}}>新手指导</Flex>
            </Flex>
          </Flex>
          <WhiteSpace/>
          <Recommend/>
          <WhiteSpace/>
          <ShopTagMenu/>
            {/*<ShopTagMenu/>
          <WhiteSpace/>


            <Flex>
          <Flex.Item align="center">
          <WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%"}}/></WingBlank>
          <span style = {{color:'red'}}>现价：￥330</span><br/>
          <span　style = {{color:'#0e80d2'}}>佣金：2％</span>
          </Flex.Item>
          <Flex.Item align="center">
          <WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%"}}/></WingBlank>
          <span style = {{color:'red'}}>现价：￥330</span><br/>
          <span　style = {{color:'#0e80d2'}}>佣金：2％</span>
          </Flex.Item>
          <Flex.Item align="center">
          <WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%"}}/></WingBlank>
          <span style = {{color:'red'}}>现价：￥330</span><br/>
          <span　style = {{color:'#0e80d2'}}>佣金：2％</span>
          </Flex.Item>
          <Flex.Item align="center">
          <WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%"}}/></WingBlank>
          <span style = {{color:'red'}}>现价：￥330</span><br/>
          <span　style = {{color:'#0e80d2'}}>佣金：2％</span>
          </Flex.Item>
          <Flex.Item align="center">
          <WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%"}}/></WingBlank>
          <span style = {{color:'red'}}>现价：￥330</span><br/>
          <span　style = {{color:'#0e80d2'}}>佣金：2％</span>
          </Flex.Item>
          </Flex>
        */}


          {/* <Flex>另外一栏商品推荐</Flex> */}
          <div className = "back-img">
            <WingBlank/>
            <Flex justify = "end" >
                {/* <Flex.Item  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"120%",height:"120%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><br/><span style = {{color:'#fff'}}>HX8 5W40</span></Flex.Item> */}
                <Flex.Item  align="center"><WingBlank size = "sm"><img src = {goodsImg} alt = "商品图片" style = {{width:"50%",height:"50%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span></Flex.Item>
                <Flex.Item  align="center"><WingBlank size = "sm"><img src = {goodsImg} alt = "商品图片" style = {{width:"60%",height:"60%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span></Flex.Item>
                <Flex.Item  align="center"><WingBlank size = "sm"><img src = {goodsImg} alt = "商品图片" style = {{width:"60%",height:"60%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span></Flex.Item>
            </Flex>
            <WhiteSpace/>
            <Flex justify = "end">
              <div  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></div>
              <div  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></div>
              <div  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></div>
              <div  align="center"><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></div>
            </Flex>
            {/* <Flex>
              <Flex.Item><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></Flex.Item>
              <Flex.Item><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></Flex.Item>
              <Flex><WingBlank size = "lg"><img src = {goodsImg} alt = "商品图片" style = {{width:"100%",height:"100%",borderRadius:'6px'}}/></WingBlank><span style = {{color:'#fff'}}>嘉实多</span><span style = {{color:'#fff'}}>HX8 5W40</span></Flex>
            </Flex> */}
          </div>
        </Flex>
    )
  }
}

export default connect(appInfo)(AppHome);
