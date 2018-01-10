import React from 'react'

// import { saveAs } from 'file-saver';

// const FileSaver = require('file-saver');
// FileSaver.saveAs(blob, "hello world.txt");
import { List, Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Test extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            CheckAll: false,
            isCheck: false,
            data: [
                { value: 0, label: 'Ph.D.',checked: false },
                { value: 1, label: 'Bachelor',checked: false  },
                { value: 2, label: 'College diploma',checked: false  },
              ]
        }
    }



    onChange = (e,val,bel,index) => {
        this.state.data[index].checked = !this.state.data[index].checked
        this.setState({
            data: this.state.data
        })
      }
    CheckAll = () => {
        for(var i =0; i < this.state.data.length; i++){
           this.state.data[i].checked=!this.state.CheckAll
        }
        this.setState({
            CheckAll: !this.state.CheckAll,
            data: this.state.data
        })


    }
    render() {

        const data = this.state.data
        return(
            <div>
                <CheckboxItem onChange={()=>this.CheckAll()} checked={this.state.CheckAll}>全选</CheckboxItem>
                 <List renderHeader={() => 'CheckboxItem demo'}>
                    {data.map((i,index)=> (
                    <CheckboxItem key={i.value} onChange={(e) => this.onChange(e,i.value,i.label,i.value)} checked={i.checked}>
                        {i.label}
                        {index}
                    </CheckboxItem>
                    ))}
                    <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
                    Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
                    </CheckboxItem>
                </List>
            </div>
        )
    }
}

export default Test;
