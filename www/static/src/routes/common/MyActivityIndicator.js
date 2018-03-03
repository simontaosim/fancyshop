import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { ActivityIndicator } from 'antd-mobile'
class MyActivityIndicator extends Component {
  constructor(props) {
    super(props)
    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }

  render() {
    return createPortal(
      <div>
        <ActivityIndicator
          toast
          text="加载中..."
          animating={this.props.isFetching}
        />
      </div>,
      this.node
    )
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node)
  }
}

export default MyActivityIndicator;


