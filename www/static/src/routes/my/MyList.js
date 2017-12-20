import React from 'react';
import { List, Button, WhiteSpace} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


class MyList extends React.Component {
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
                <Button type="warning">退出当前账户</Button>

            </div>
        )
    }
}

export default MyList;