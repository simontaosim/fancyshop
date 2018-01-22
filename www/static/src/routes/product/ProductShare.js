import React from 'react';

import { ActionSheet, Toast,Flex } from 'antd-mobile';

class ProductShare extends React.Component {
  constructor() {
    super()
  }

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      // title: 'title',
      message: '分享',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('100ms 后关闭');
        setTimeout(resolve, 100);
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
      // <span onClick = {this.showShareActionSheet}>分享再赚</span>
      <Flex onClick = {this.showShareActionSheet}><img src = {require('../svg/share.svg')} style = {{paddingRight:'6px',width:'28px',height:'28px'}}/>分享再赚</Flex>

    )
  }
}

export default ProductShare;
