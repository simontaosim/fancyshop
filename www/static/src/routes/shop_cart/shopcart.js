import React from 'react';

import { Flex, Checkbox,Button, Modal, WhiteSpace, List, Stepper, Carousel} from 'antd-mobile';
import styles from './GoodItem.css';
import style from '../product/ProductBottom.css';
import goodImg from '../../assets/img/reward/good.jpg';
import goodsImg from '../../assets/img/reward/good.jpg';
import userImg from '../../assets/img/timg.jpg';


const CheckboxItem = Checkbox.CheckboxItem;

class Shop extends React.Component {
  constructor() {
    super()

    this.state = {
        className: styles['pencil-img'],
        val: 1,
        modal2: false,
    }
  }

  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
    if (this.state.value == 9) {
      // alert("您最多只能购买十件商品！")
      console.log('您最多只能购买十件该商品');
    }
  }


    showModal = key => (e) => {
     e.preventDefault(); // 修复 Android 上点击穿透
     this.setState({
       [key]: true,
     });
   }
   onClose = key => () => {
     this.setState({
       [key]: false,
     });
   }

  render(){
    return (
      < div>
        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
          <Flex>
            <img src = {userImg} style = {{height:'30px',width:'30px',borderRadius:'15px',backgroundColor:'#111',marginRight:'10px'}}/>
            <span>这是店铺的名字</span>
          </Flex>
        </CheckboxItem>
        {/* <CheckboxItem>
          <Flex>
            <img style = {{height:'30px',width:'30px',border:'1px solid #111',borderRadius:'15px',backgroundColor:'#111',marginRight:'10px'}}/>
            <span>商品的描述</span>

          </Flex>
        </CheckboxItem> *}

        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']} className = {styles['all']}>
        <Flex>

          <Flex className = {styles['good-item']}>
            <img src = { goodsImg } className = {styles['good-img']}/>
            <Flex.Item classnam = {styles['decribe-frame']}>
              <span style = {{fontSize:'14px'}}>我是商品的名称1254565占位符</span><br/>
              <span className = {styles['good-type']}>规格:4L蓝喜力</span><br/>
              <span align = "left" className = {styles['good-price']}>￥262.9</span>
              <span align = "right" className = {styles['good-num']}>×1</span>
            </Flex.Item>
          </Flex>
          <img src = {require('../svg/pencil.svg')} className = {styles['pencil-img']} />

        </Flex>
        </CheckboxItem>
          */}

        <CheckboxItem className = {styles['am-list-item']} className = {styles['am-list-thumb']}>
          <Flex>

            <Flex className = {styles['good-item']}>
              <img src = { goodsImg } className = {styles['good-img']} style = {{width:'50px',height:'50px'}}/>
              <Flex.Item classnam = {styles['decribe-frame']}>
                <span style = {{fontSize:'14px',overflow:'hidden',whiteSpace:'hidden',textOverflow:'ellipsis'}}>我是商品的名称1254565占位符哈哈哈哈</span><br/>
                <div style = {{border:'1px solid #aaa',fontSize:'14px',lineHeight:'2em',paddingLeft:'8px',borderRadius:'3px'}} onClick={this.showModal('modal2')}>白色，3L<img src={require('../svg/arrowdown.svg')} style = {{float:'right',width:'15px',height:'15px',margin:'6px 3px 0 0'}}/></div>
                <WhiteSpace />
                <Modal
                 popup
                 visible={this.state.modal2}
                 maskClosable={false}
                 animationType="slide-up"
                >
                 <div>
                   <Flex style = {{margin:'10px'}}>
                     <img src = {goodImg} style = {{width:'70px',height:'70px',border:'8px solid #680000'}}/>
                     <div style = {{paddingLeft:'10px'}}>
                       <span style = {{color:'red',fontSize:'16px'}}>￥269.1</span>
                       <img src = {require('../svg/close_black.svg')} style = {{width:'25px',height:'25px',marginLeft:'8rem'}} onClick = {this.onClose('modal2')}/><br/>
                       {/* <span align = "right" onClick = {this.onClose('modal2')} style = {{border:'1px solid #111',borderRadius:'10px',height:'16px',width:'16px',padding:'0px 4px',justifyContent:'flex-end',marginLeft:'148px'}}>×</span><br/> */}
                       <span style = {{color:'#aaa'}}>请选择类型</span>
                     </div>
                   </Flex>
                     <div className = {style['color-destop']}>
                       <div className = {style['color-div']}>绿色</div>
                       <div className = {style['color-div']}>绿色</div>
                       <div className = {style['color-div']}>蓝色</div>
                       <div className = {style['color-div']}>蓝色</div>
                       <div className = {style['color-div']}>蓝色</div>
                   </div>

                   <div className = { style['color-desbtm'] }>
                     <div className = {style['color-div']}>黄色</div>
                     <div className = {style['color-div']}>白色</div>
                     <div className = {style['color-div']}>紫色</div>
                     <div className = {style['color-div']}>黑色</div>
                  </div>
                     <Flex className = {style['num-padding']}>
                       购买数量：
                       <Stepper
                         style={{ width: '50%', minWidth: '80px'}}
                         showNumber
                         max={10}
                         min={1}
                         value={this.state.val}
                         onChange={this.onChange}
                       />
                     </Flex>
                    <List>
                     <List.Item>
                       <Button type = "warning" onClick = {this.onClose('modal2')}>确定</Button>
                     </List.Item>
                   </List>
                 </div>
                </Modal>



                {/* <span className = {styles['good-type']}>规格:4L蓝喜力</span><br/> */}
                <span align = "left" className = {styles['good-price']}>￥262.9</span>
                {/* <span align = "right" className = {styles['good-num']}>×1</span> */}
                <Stepper className = {styles['am-stepper-handler-down']}
                  style={{ width: '60%', minWidth: '100px',marginLeft:'22px'}}
                  showNumber
                  max={10}
                  min={1}
                  value={this.state.val}
                  onChange={this.onChange}
                />
              </Flex.Item>
            </Flex>
            {/* <img src = {require('../svg/pencil.svg')} className = {styles['pencil-img']} /> */}

          </Flex>
        </CheckboxItem>
      </div>
    )
  }
}

export default Shop;
