import React from 'react';
import { List, InputItem, Switch, Stepper, Range, Button } from 'antd-mobile';

const Item = List.Item;


class CartTest extends React.Component {
    handle(i) {
        console.log(i)
    }
    render() {
        let showArry = ['hello1', 'hello2', 'hello3'];
        var newArry=[];
        for(var i=0;i<showArry.length;i++){
            var item=showArry[i];
             newArry.push(<li onClick={this.handle.bind(this,i)}>{item}</li>)
        }
        return(
            <div id="result">
            <ul className="am-list">
                {newArry}
            </ul>
        </div>

            )
    }
}

export default CartTest;