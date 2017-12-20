/*
  Author @Simon xsqfeather@gmail.com
  这个文件处理消息盒子
*/
import React from 'react'
import { connect } from 'react-redux';

import { appInfo } from '../../map_props.js';

//redux actions
import {setAppTitle} from '../../actions/app.js';
import MyList from './MyList'


class AppMy extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(setAppTitle(this.props.path));


  }
  render(){
    return (
      <div>
        <div>个人中心</div>
        <MyList />
      </div>
    )
  }
}


export default connect(appInfo)(AppMy);
