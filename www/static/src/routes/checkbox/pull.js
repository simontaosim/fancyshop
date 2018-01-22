/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../service/data/datasource'
import axios from 'axios';


  class Pull extends React.Component {
    constructor(props) {
      super(props);
      
    }
    render() {
      let showArry = ['hello1', 'hello2', 'hello3'];
      var newArry=[];
      for(var i=0;i<showArry.length;i++){
          var item=showArry[i];
          return newArry.push(<li onClick={console.log(i)}>{item}</li>)
      }
      return (
        <div>
          21312312
            fadfadsfadsf
        </div>
      );
    }
  }

export default Pull;