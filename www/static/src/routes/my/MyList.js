import React from 'react';
import { List, Button, WhiteSpace, Modal} from 'antd-mobile';
import{ loginOut } from '../../reducers/user.redux'
import { connect } from 'react-redux'

const Item = List.Item;
const Brief = Item.Brief;

const alert = Modal.alert;
class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.ConfirmWindow = this.ConfirmWindow.bind(this);
        // this.register = this.register.bind(this);
    }

 

    ConfirmWindow() {
       alert('123','321',[
        { text: '确定', onPress: () => {
            // console.log(this.props)
            // this.props.history.push('/tablogin') 
            this.props.loginOut()
        }},
        { text: '取消', onPress: () => console.log('取消了') },
      ])
    }
    
    render() {
        
        return(
            <div>
                <List renderHeader={() => 'Basic Style'} className="my-list">
                <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
              >分享奖励</Item>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                >
                我的卡券包
                </Item>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                >
                我的预约
                </Item>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                >
                我的保单
                </Item>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                >
                我的订单
                </Item>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                >
                我的邀请会员
                </Item>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                >
                    My Cost Ratio
                </Item>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <Button type="warning" onClick={this.ConfirmWindow}>退出当前账户</Button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
  
  
export default connect(mapStateToProps,{loginOut})(MyList);