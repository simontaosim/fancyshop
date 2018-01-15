import React from 'react';
import { Flex, Carousel } from 'antd-mobile';

import ProductTabs from './ProductTabs';
import ProductShare from './ProductShare';
import ProductBottom from './ProductBottom';
import style from './common.css'
import goodImg from '../../assets/img/reward/good.jpg';


class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      val: 1,
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
    }
  }

  componentDidMount() {
   // simulate img loading
   setTimeout(() => {
     this.setState({
       data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
     });
   }, 10);
 }

render(){
  return (
    <div className = {style['product-frame']}>
      <div >
        {/* <div className="sub-title">Normal</div> */}
    <Carousel
      dots = {true}
      autoplay={false}
      infinite
      selectedIndex={1}
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
      {this.state.data.map(val => (
        <a
          key={val}
          href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
        >
          <img
            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
          {/* <img src= {goodImg} style = {{border:'1px solid #aaa',height:'200px',width:'310px'}}/> */}
      </div>
      <div  className = {style['describe']}>
      <Flex>
        新车推荐，壳牌喜力润滑油，高性价比合成有机油，黑卡会员特价
      </Flex>
      <Flex>
        <Flex.Item>
          <span className = {style['price-font']}>￥269.1</span>
          <span className = {style['black-card']}>黑卡价</span>
        </Flex.Item>
        <span align = "right">四川 成都</span>
      </Flex>
        <span style = {{ textDecoration:'line-through'}}>￥299</span>
      </div>
      <Flex className = {style['item-des']}>
        <Flex.Item><img src={require('../svg/share.svg')} className = {style['share-img']}/><ProductShare/></Flex.Item>
        <Flex.Item>一级奖励</Flex.Item>
        <Flex.Item>二级奖励<img src={require('../svg/no.svg')} className = {style['question-img']}/></Flex.Item>
      </Flex>
      <Flex className = {style['item-des']}>
        <Flex.Item>配送方式</Flex.Item>
        <Flex.Item>库存</Flex.Item>
        <Flex.Item>销量</Flex.Item>
      </Flex>
      <Flex className = {style['item-des']}>
        选择规格
      </Flex>
      <ProductTabs/>
      <ProductBottom/>
    </div>
    )
  }
}

export default Goods;
