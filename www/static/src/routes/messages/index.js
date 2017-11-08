import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class MessageBox extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>此处是消息盒子</div>
    )
  }
}


export default MessageBox;
