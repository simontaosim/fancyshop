import React from 'react';

import { Flex, Button } from 'antd-mobile';

class Refund extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div style = {{backgroundColor:'#333',marginTop:'48px'}}>
        <div style = {{backgroundColor:'#f6f6f6',margin:'8px'}}>
        <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',height:'auto',margin:'15px 10px'}}>
          <div>
            <img style = {{height:'60px',width:'60px'}}/>
          </div>
          <div>
            我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
            类型：4L 自喜力     ￥250  ×1
          </div>
        </Flex>
        <Flex justify = "end" style = {{marginRight:'10px'}}>
          应付款：<span style = {{color:'red'}}> ￥500</span>
        </Flex>
        <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',height:'auto',margin:'15px 10px'}}>
          <div>
            <img style = {{height:'60px',width:'60px'}}/>
          </div>
          <div>
            我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
            类型：4L 自喜力     ￥250  ×1
          </div>
        </Flex>
        <Flex justify = "end" style = {{marginRight:'10px'}}>
          应付款：<span style = {{color:'red'}}> ￥500</span>
        </Flex>
      </div>
      <div style = {{margin:'10px 20px'}}>
        <span style = {{color:'white'}}>退款原因:</span><br/>
        <textarea rows="5" cols="20" style = {{border:'1px solid #333',borderRadius:'5px',width:'100%'}} placeholder = "请输入退款原因">

        </textarea>
        <Flex justify = "end">
          <span style = {{color:'white'}} align = "right">退款金额:￥500</span>
        </Flex>
      </div>
      <Flex justify = "end" style = {{border:'2px solid red',width:'150px',marginLeft:'170px'}}>

      </Flex>
      <div style = {{marginTop:'200px'}}>
        <Button type = "warning">提交</Button>
      </div>
    </div>
    )
  }

}

export default Refund;
