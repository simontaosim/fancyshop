/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';
import { appInfo } from '../../map_props.js';
import { Flex, Carousel, WhiteSpace, WingBlank, Grid } from 'antd-mobile';
import Recommend from "./recommend";
import ShopTagMenu from "./shoptagmenu";
import GoodsList from "./GoodsList";
import goodList from './goodList';


//redux actions
import {setAppTitle} from '../../actions/app.js';
import './index.css';
import axios from 'axios';
import Good from './good'
import '../../service/data/datasource'
class AppHome extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: ['','',''],
      good: [],
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
   axios.get('/goods')
        .then(result=>{
          console.log(result.data.goods);
          this.setState({
            good: result.data.goods
          },()=>{console.log(this.state.good)})
        })

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
          <WhiteSpace/>
          <Recommend/>
          <WhiteSpace/>
            <ShopTagMenu/>
            {/* <goodList/> */}
          <WhiteSpace/>
          <GoodsList/>

        </Flex>
    )
  }
}

export default connect(appInfo)(AppHome);
