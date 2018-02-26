import React from 'react';
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class Personal extends React.Component {
    render() {
        <List renderHeader={() => 'Not editable / Disabled'}>
        <InputItem
          value="not editable"
          editable={false}
        >姓名</InputItem>
        <InputItem
          value="style of disabled `InputItem`"
          disabled
        >姓名</InputItem>
      </List>
    }
}