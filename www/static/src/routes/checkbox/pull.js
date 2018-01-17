/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../service/data/datasource'
import axios from 'axios';

function genData(data) {
  console.log(data[0]);
    const dataArr = [];
    for (let i = 0; i < data.length; i++) {
      dataArr.push(data[i]);
    }
    console.log(111)
    console.log(dataArr)
    return dataArr;
  }
  
  class Pull extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        refreshing: false,
        down: false,
        height: document.documentElement.clientHeight,
        data: [],
      };
    }
  
    componentDidMount() {
     
      const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
      setTimeout(() =>  axios.get('/goods')
      .then(result=>{
        console.log(result.data.goods)
        this.setState({
          height: hei,
          data: genData(result.data.goods)
        })
      })
      .catch(erorr=>{
        console.log(erorr)
      }), 0);
    }
  
    render() {
      return (<div style={{marginTop: '100px'}}>
        {/* <Button
          style={{ marginBottom: 15 }}
          onClick={() => this.setState({ down: !this.state.down })}
        >
          direction: {this.state.down ? 'down' : 'up'}
        </Button> */}
        <PullToRefresh
          ref={el => this.ptr = el}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
          direction={this.state.down ? 'down' : 'up'}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({ refreshing: true });
            setTimeout(() => {
              this.setState({ refreshing: false });
            }, 1000);
          }}
        >
          {this.state.data.map(i => (
            <div key={i.id} style={{ textAlign: 'center', padding: 20 }}>
              {i.id}
               {i.name}
               {i.brand}
            </div>
          ))}
        </PullToRefresh>
      </div>);
    }
  }

export default Pull;