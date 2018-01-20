import React from 'react';
import { Flex,WingBlank,WhiteSpace } from 'antd-mobile';
import goodImg from '../../assets/img/orders/good.jpg';
import userImg from '../../assets/img/timg.jpg';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div style= {{marginTop:'55px'}}>
      <WhiteSpace/>
      <Flex direction = "column" justify = "center" align = "start" style = {{backgroundColor:'#fff',borderRadius:'5px',border:'1px solid #eee',width:'90%',margin:'0 auto',padding:'10px'}}>

        <Flex center = "start" style = {{borderLeft:'4px solid #ffcf2d',marginLeft:'-10px',paddingLeft:'10px',marginBottom:'10px'}}>
          <img src = {userImg} style = {{width:'40px',height:'40px',borderRadius:'20px'}}/>
          <Flex direction = "column" style={{paddingLeft:'10px'}}>
          <span style = {{fontSize:'16px'}}>滴滴洗车行（沙湾店）</span>
          <WhiteSpace/>
          <Flex>
            <img src={require('../svg/location-gray.svg')} style = {{width:'12px',height:'12px'}}/>
            <span style = {{fontSize:'12px',color:'#aaa'}}>成都市金牛区沙湾路63号</span>
          </Flex>
          </Flex>
          <WingBlank/>
          <Flex justify = "end" align = "end">
            <span style = {{fontSize:'16px',color:'#50c1f1',paddingLeft:'40px'}}>500m</span>
          </Flex>
        </Flex>

        <WhiteSpace/>
        <Flex>
          <img src = {goodImg} style = {{width:'40px',height:'40px',borderRadius:'3px',marginLeft:'20px'}}/>
          <Flex direction = "column">
            <span style = {{fontSize:'14px',color:'#444'}}>我是商品的名字只能线上一排</span>
            <WhiteSpace/>
            <Flex justify = "around">

              <span style = {{fontSize:'12px',color:'red'}}>价格:183</span>
              <WingBlank/>
              <span style = {{fontSize:'12px',color:'#e858cd'}}>销量:18</span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
    )
  }
}

export default SearchResult;
