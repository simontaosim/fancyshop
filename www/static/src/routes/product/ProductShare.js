import React from 'react';

import { ActionSheet, Toast } from 'antd-mobile';

class ProductShare extends React.Component {
  constructor() {
    super()
  }

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      // title: 'title',
      message: 'I am description, description, description',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('closed after 1000ms');
        setTimeout(resolve, 1000);
      });
    });
  }

  dataList = [
  { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
  { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
  { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
  { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
  { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
].map(obj => ({
  icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
  title: obj.title,
}));



  render(){
    return(
      <span onClick = {this.showShareActionSheet}>分享再赚</span>
    )
  }
}

export default ProductShare;
