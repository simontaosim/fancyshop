/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { appInfo } from '../../map_props.js';
import ShopTagMenu from "./components/ShopTagMenu.js"

import { Flex, Carousel, WhiteSpace, WingBlank, Grid , Card, Button, List, Stepper} from 'antd-mobile';

//redux actions
import {setAppTitle} from '../../actions/app.js';
import './index.css';
import goodsImg from './one.jpg'
import addImg from './add.png'
import barImg from './bar.png'
import beautyImg from './beauty.png'
import runImg from './run.png'
import shopImg from '../../assets/img/home/shop.png'

import { ListView } from 'antd-mobile';
import Goods from './goods.js';
import MyOrders from './myorders.js';
import WaitDetails from './waitdetails.js';
import Refund from './refund.js';
import Facilitator from './facilitator.js';
// import { Card, WhiteSpace } from 'antd-mobile';
// import { Card, WhiteSpace } from 'antd-mobile';


// function MyBody(props) {
//   return (
//     <div className="am-list-body my-body">
//       <span style={{ display: 'none' }}>you can custom body wrap element</span>
//       {props.children}
//     </div>
//   );
// }
//
// const data = [
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ];
// const NUM_SECTIONS = 2;
// const NUM_ROWS_PER_SECTION = 2;
// let pageIndex = 0;
//
// const dataBlobs = {};
// let sectionIDs = [];
// let rowIDs = [];
// function genData(pIndex = 0) {
//   for (let i = 0; i < NUM_SECTIONS; i++) {
//     const ii = (pIndex * NUM_SECTIONS) + i;
//     const sectionName = `Section ${ii}`;
//     sectionIDs.push(sectionName);
//     dataBlobs[sectionName] = sectionName;
//     rowIDs[ii] = [];
//
//     for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
//       const rowName = `S${ii}, R${jj}`;
//       rowIDs[ii].push(rowName);
//       dataBlobs[rowName] = rowName;
//     }
//   }
//   sectionIDs = [...sectionIDs];
//   rowIDs = [...rowIDs];
// }
//
// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
//     const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
//
//     const dataSource = new ListView.DataSource({
//       getRowData,
//       getSectionHeaderData: getSectionData,
//       rowHasChanged: (row1, row2) => row1 !== row2,
//       sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
//     });
//
//     this.state = {
//       dataSource,
//       isLoading: true,
//       height: document.documentElement.clientHeight * 3 / 4,
//     };
//   }
//
//   componentDidMount() {
//     // you can scroll to the specified position
//     // setTimeout(() => this.lv.scrollTo(0, 120), 800);
//
//     const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
//     // simulate initial Ajax
//     setTimeout(() => {
//       genData();
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
//         isLoading: false,
//         height: hei,
//       });
//     }, 600);
//   }
//
//   // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.dataSource !== this.props.dataSource) {
//   //     this.setState({
//   //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
//   //     });
//   //   }
//   // }
//
//   onEndReached = (event) => {
//     // load new data
//     // hasMore: from backend data, indicates whether it is the last page, here is false
//     if (this.state.isLoading && !this.state.hasMore) {
//       return;
//     }
//     console.log('reach end', event);
//     this.setState({ isLoading: true });
//     setTimeout(() => {
//       genData(++pageIndex);
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
//         isLoading: false,
//       });
//     }, 1000);
//   }
//
//   render() {
//     const separator = (sectionID, rowID) => (
//       <div
//         key={`${sectionID}-${rowID}`}
//         style={{
//           backgroundColor: '#F5F5F9',
//           height: 8,
//           borderTop: '1px solid #ECECED',
//           borderBottom: '1px solid #ECECED',
//         }}
//       />
//     );
//     let index = data.length - 1;
//     const row = (rowData, sectionID, rowID) => {
//       if (index < 0) {
//         index = data.length - 1;
//       }
//       const obj = data[index--];
//       return (
//         <div key={rowID} style={{ padding: '0 15px' }}>
//           <div
//             style={{
//               lineHeight: '50px',
//               color: '#888',
//               fontSize: 18,
//               borderBottom: '1px solid #F6F6F6',
//             }}
//           >{obj.title}</div>
//           <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
//             <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
//             <div style={{ lineHeight: 1 }}>
//               <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
//               <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
//             </div>
//           </div>
//         </div>
//       );
//     };
//
//     return (
//       <ListView
//         ref={el => this.lv = el}
//         dataSource={this.state.dataSource}
//         renderHeader={() => <span>header</span>}
//         renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
//           {this.state.isLoading ? 'Loading...' : 'Loaded'}
//         </div>)}
//         renderSectionHeader={sectionData => (
//           <div>{`Task ${sectionData.split(' ')[1]}`}</div>
//         )}
//         renderBodyComponent={() => <MyBody />}
//         renderRow={row}
//         renderSeparator={separator}
//         style={{
//           height: this.state.height,
//           overflow: 'auto',
//         }}
//         pageSize={4}
//         onScroll={() => { console.log('scroll'); }}
//         scrollRenderAheadDistance={500}
//         onEndReached={this.onEndReached}
//         onEndReachedThreshold={10}
//       />
//     );
//   }
// }



class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: ['','',''],
      val:3,
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

  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
    if (this.state.value == 9) {
      // alert("您最多只能购买十件商品！")
      console.log('您最多只能购买十件该商品');
    }
  }

  render(){

    return (
      <div>
        <WhiteSpace size="lg" />
        <Card full>
        <Card.Header
          extra={<input type = "checkbox" style = {{width:'20px'}}/>}
          title="This is title"
          thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"

        />
        <Card.Body>
          <div>
            <Flex>
              <input type = "checkbox" style = {{width:'20px'}}/>
              <img src = {{}} style = {{height:'30px',width:'40px'}}/>
              <div>
                <span>我是商品的名称123456565545665占位符占位</span><br/>
                <span>规格</span>
                <span align = "left">￥262.9</span>
                <span align = "right">×1</span>
              </div>
              <img src = {{}} style = {{height:'20px',width:'20px'}}/>
            </Flex>
            <Flex>
              <input type = "checkbox" style = {{width:'20px'}}/>
              <img src = {{}} style = {{height:'50px',width:'50px'}}/>
              <div>
                <span>我是商品的名称123456565545665占位符占位</span><br/>
                <span>规格</span>
                <span align = "left">￥262.9</span>
                <span align = "right">×{this.state.val}</span>
              </div>
              <img src = {{}} style = {{height:'20px',width:'20px'}}/>
            </Flex>
          </div>
        </Card.Body>
        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
      </Card>

      <WhiteSpace size="lg" />
      <Card full>
      <Card.Header
        // extra={<input type = "checkbox" style = {{width:'20px'}}/>}
        extra = {<span>zheshiyigextra</span>}
        title="This is title"
        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"

      />
      <Card.Body>
        <div>
          <Flex>
            <input type = "checkbox" style = {{width:'20px'}}/>
            <img src = {{}} style = {{height:'30px',width:'40px'}}/>
            <div>
              <span>我是商品的名称123456565545665占位符占位</span><br/>
              <span>规格</span>
              <span align = "left">￥262.9</span>
              <span align = "right">×1</span>
            </div>
            <img src = {{}} style = {{height:'20px',width:'20px'}}/>
          </Flex>
          <Flex>
            <input type = "checkbox" style = {{width:'20px'}}/>
            <img src = {{}} style = {{height:'50px',width:'50px'}}/>
            <div>
              <span>我是商品的名称123456565545665占位符占位</span><br/>
              <span>规格</span>
              <span align = "left">￥262.9</span>
              <span align = "right">×1</span>
            </div>
            <img src = {{}} style = {{height:'20px',width:'20px'}}/>
          </Flex>
        </div>
      </Card.Body>
      {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
    </Card>

    <WhiteSpace size="lg" />
    <Card full>
    <Card.Header
      // extra={<input type = "checkbox" style = {{width:'20px'}}/>}
      extra = {<span>zheshiyigextra</span>}
      title="This is title"
      thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"

    />
    <Card.Body>
      <div>
        <Flex>
          <Flex.Item>
            <input type = "checkbox" style = {{width:'20px'}}/>
            <img src = {{}} style = {{height:'30px',width:'40px'}}/>
          </Flex.Item>
          <Flex.Item>
            {/* <span>我是商品的名称123456565545665占位符占位</span><br/>
            <span>规格</span>
            <span align = "left">￥262.9</span>
            <span align = "right">×1</span> */}
            {/* <List style = {{width:'100%'}}>
              <List.Item
                wrap
                extra={
                  <Stepper
                    style={{ width: '50%', minWidth: '80px' }}
                    showNumber
                    max={10}
                    min={1}
                    value={this.state.val}
                    onChange={this.onChange}
                  />}
              >
            </List.Item>
          </List> */}
          <div>
            <select placeholder = "下拉列表框" style = {{width:'100%'}}>
              <option value="产品规格" disabled selected>规格</option>
              <option value="1L">规格：1L</option>
              <option value="2L">规格：2L</option>
              <option value="3L">规格：3L</option>
              <option value="4L">4L</option>
            </select>
            <Stepper
              style={{ width: '50%', minWidth: '80px'}}
              showNumber
              max={10}
              min={1}
              value={this.state.val}
              onChange={this.onChange}
            />
          </div>

        </Flex.Item>
          <Flex.Item>
            <Button size="small" style = {{border:'1px solid #111'}} >确定</Button>
            <Button size="small" style = {{backgroundColor:'red',color:'white'}}>删除</Button>
          </Flex.Item>
          {/* <img src = {{}} style = {{height:'20px',width:'20px'}}/> */}
        </Flex>
        <Flex>
          <input type = "checkbox" style = {{width:'20px'}}/>
          <img src = {{}} style = {{height:'50px',width:'50px'}}/>
          <div>
            <span>我是商品的名称123456565545665占位符占位</span><br/>
            <span>规格</span>
            <span align = "left">￥262.9</span>
            <span align = "right">×1</span>
          </div>
          <img src = {{}} style = {{height:'20px',width:'20px'}}/>
        </Flex>
      </div>
    </Card.Body>
    {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
  </Card>

  <Card>
    <Card.Body>
      <Flex>
        <Flex.Item>
          <input type = "checkbox" style = {{width:'20px'}}/>
          <img src = {{}} style = {{height:'30px',width:'40px'}}/>
        </Flex.Item>
        <Flex.Item>
          <div>
            <select placeholder = "下拉列表框" style = {{width:'100%'}}>
              <option value="产品规格" disabled selected>规格</option>
              <option value="1L">规格：1L</option>
              <option value="2L">规格：2L</option>
              <option value="3L">规格：3L</option>
              <option value="4L">4L</option>
            </select>
            <Stepper
              style={{ width: '50%', minWidth: '80px'}}
              showNumber
              max={10}
              min={1}
              value={this.state.val}
              onChange={this.onChange}
            />
          </div>
        </Flex.Item>
        <Flex.Item>

        </Flex.Item>
      </Flex>
    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <Flex>
        <Flex.Item>
          <input type = "checkbox" style = {{width:'20px'}}/>
          <img src = {{}} style = {{height:'30px',width:'40px'}}/>
        </Flex.Item>
        <Flex.Item>
          <div>
            <select placeholder = "下拉列表框" style = {{width:'100%'}}>
              <option value="产品规格" disabled selected>规格</option>
              <option value="1L">规格：1L</option>
              <option value="2L">规格：2L</option>
              <option value="3L">规格：3L</option>
              <option value="4L">4L</option>
            </select>
            <Stepper
              style={{ width: '50%', minWidth: '80px'}}
              showNumber
              max={10}
              min={1}
              value={this.state.val}
              onChange={this.onChange}
            />
          </div>
        </Flex.Item>
        <Flex.Item>

        </Flex.Item>
      </Flex>
    </Card.Body>
  </Card>

      <div style = {{position:'fixed',bottom:'60px',left:'15px',width:'100%'}}>
        <Flex >
          <Flex.Item >
            <input type = "checkbox"/>全选
            <span align = "right">合计：￥250</span>
          </Flex.Item>
          <Flex.Item>
            <Button>结算</Button>
          </Flex.Item>
        </Flex>
      </div>
      <div style = {{marginBottom:'290px'}}>
          <Goods/>
          <MyOrders/>
          <WaitDetails/>
          <Refund/>
          <Facilitator/>
      </div>
      </div>
    )
  }
}

export default connect(appInfo)(About);
