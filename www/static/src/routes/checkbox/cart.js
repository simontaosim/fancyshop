import React from 'react';
import { List, InputItem, Switch, Stepper, Range, Button } from 'antd-mobile';

const Item = List.Item;


class CartTest extends React.Component {
    render() {
        return(
             <Item extra={<Stepper style={{ width: '100%', minWidth: '100px' }} showNumber size="small" defaultValue={20} />}>Number of Subscribers</Item>
        )
    }
}

export default CartTest;