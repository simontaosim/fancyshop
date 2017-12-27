import React from "react";

import { Tabs, Flex, Button } from 'antd-mobile';

class MyOrders extends React.Component {
  constructor() {
    super();
  }
  render(){
    const tabs = [
      {title:'全部'},
      {title:'待付款'},
      {title:'未处理'},
      {title:'已完成'},
      {title:'无效'},
    ]
    return (
      <div style = {{backgroundColor:'#fff'}}>
        <Tabs tabs = {tabs} initialPage = {5} animated = {false} useOnPan = {false}>
          <div>
            quanbu
          </div>
          <div>
            <Flex style = {{padding:'0 15px 15px 15px'}}>
              <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111'}}/>这是店铺的名字
            </Flex>
            <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
              <div>
                <img style = {{height:'60px',width:'60px'}}/>
              </div>
              <div>
                我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
                类型：4L 自喜力     ￥250  ×1
              </div>
            </Flex>

            <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
              <div>
                <img style = {{height:'60px',width:'60px'}}/>
              </div>
              <div>
                我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
                类型：4L 自喜力     ￥250  ×1
              </div>
            </Flex>
            <Flex justify = "end" style = {{marginRight:'10px'}}>
              合计：<span style = {{color:'red'}}> ￥500</span>
            </Flex>
            <Flex justify = "end" style = {{margin:'10px'}}>
              <Button>详情</Button>
              <Button>取消订单</Button>
              <Button>支付</Button>
            </Flex>
            <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'150px'}}></Flex>
          </div>
          <div className = "untreated">
            <Flex style = {{padding:'0 15px 15px 15px'}}>
              <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111'}}/>这是店铺的名字
            </Flex>
            {/* <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
              <div>
                <img style = {{height:'60px',width:'60px'}}/>
              </div>
              <div>
                我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
                类型：4L 自喜力     ￥250  ×1
              </div>
            </Flex> */}

            <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
              <div>
                <img style = {{height:'60px',width:'60px'}}/>
              </div>
              <div>
                我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
                类型：4L 自喜力     ￥250  ×1
              </div>
            </Flex>
            <Flex justify = "end" style = {{marginRight:'10px'}}>
              合计：<span style = {{color:'red'}}> ￥500</span>
            </Flex>
            <Flex justify = "end" style = {{margin:'10px'}}>
              <Button style = {{border:'1px solid #111',borderRadius:'8px',width:'80px',height:'30px',verticalAlign:'middle'}}>详情</Button>
              <Button>申请退款</Button>
              <Button>二维码</Button>
            </Flex>
            <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'150px'}}></Flex>
          </div>
          <div className = "finished">
            <Flex style = {{padding:'0 15px 15px 15px'}}>
              <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111'}}/>这是店铺的名字
            </Flex>
            <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
              <div>
                <img style = {{height:'60px',width:'60px'}}/>
              </div>
              <div>
                我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
                类型：4L 自喜力     ￥250  ×1
              </div>
            </Flex>
            <Flex justify = "end" style = {{marginRight:'10px'}}>
              合计：<span style = {{color:'red'}}> ￥500</span>
            </Flex>
            <Flex justify = "end" style = {{margin:'10px'}}>
              <Button style = {{border:'1px solid #111',borderRadius:'8px',width:'80px',height:'30px',verticalAlign:'middle'}}>详情</Button>
              <Button>删除订单</Button>
              {/* <Button>二维码</Button> */}
            </Flex>
            <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'170px'}}></Flex>
          </div>
          <div className = "invalid">
            <Flex style = {{padding:'0 15px 15px 15px'}}>
              <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111'}}/>这是店铺的名字
            </Flex>
            <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
              <div>
                <img style = {{height:'60px',width:'60px'}}/>
              </div>
              <div>
                我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
                类型：4L 自喜力     ￥250  ×1
              </div>
            </Flex>
            <Flex justify = "end" style = {{marginRight:'10px'}}>
              合计：<span style = {{color:'red'}}> ￥500</span>
            </Flex>
            <Flex justify = "end" style = {{margin:'10px'}}>
              <Button style = {{border:'1px solid #111',borderRadius:'8px',width:'80px',height:'30px',verticalAlign:'middle'}}>详情</Button>
              <Button>删除订单</Button>
              {/* <Button>二维码</Button> */}
            </Flex>
            <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'170px'}}></Flex>

            <Flex style = {{padding:'0 15px 15px 15px'}}>
              <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111'}}/>这是店铺的名字
            </Flex>
            <Flex justify = "center" style = {{backgroundColor:'#f6f6f6',padding:'15px',height:'auto',margin:'15px 10px'}}>
              <div>
                <img style = {{height:'60px',width:'60px'}}/>
              </div>
              <div>
                我是商品的长名字占位符占位符占位符哈哈哈哈哈哈<br/>
                类型：4L 自喜力     ￥250  ×1
              </div>
            </Flex>
            <Flex justify = "end" style = {{marginRight:'10px'}}>
              合计：<span style = {{color:'red'}}> ￥500</span>
            </Flex>
            <Flex justify = "end" style = {{margin:'10px'}}>
              <Button style = {{border:'1px solid #111',borderRadius:'8px',width:'80px',height:'30px',verticalAlign:'middle'}}>详情</Button>
              <Button>撤销退款</Button>
              {/* <Button>二维码</Button> */}
            </Flex>
            <Flex justify = "end" style = {{width:'150px',borderBottom:'3px solid red',marginLeft:'170px'}}></Flex>
          </div>
        </Tabs>
      </div>
    )
  }
}

export default MyOrders;
