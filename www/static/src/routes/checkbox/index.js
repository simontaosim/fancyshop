import React from 'react'
import XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
import { saveAs } from 'file-saver';
// const FileSaver = require('file-saver');
// FileSaver.saveAs(blob, "hello world.txt");
// import { List, Checkbox, Flex } from 'antd-mobile';

// const CheckboxItem = Checkbox.CheckboxItem;
// const AgreeItem = Checkbox.AgreeItem;

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
        this.Check = this.Check.bind(this)
    }


    Check() {

        // console.log(111)
        const title =  {
            cols: [{ name: "A", key: 0 }, { name: "B", key: 1 }, { name: "C", key: 2 }],
            data: [
              [ "id",    "name", "value" ],
              [    1, "sheetjs",    7262 ],
              [    2, "js-xlsx",    6969 ]
            ]
          }
          console.log(title.data)
        var worksheet = XLSX.utils.aoa_to_sheet(title.data);
        // console.log(worksheet);
        var new_workbook = XLSX.utils.book_new();
        // console.log(new_workbook)
       XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");
       const wbout = XLSX.write(new_workbook, {type:"array", bookType:"xlsx"});
        // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
        // FileSaver.saveAs(new Blob([wbout],{type:"application/octet-stream"}), "sheetjs.xlsx");
    //    console.log(wbout);
	// 	/* send to client */
		saveAs(new Blob([wbout],{type:"application/octet-stream"}), "sheetjs.xlsx");
    }
    // onChange = (e,val,bel,index) => {
    //     this.state.data[index].checked = !this.state.data[index].checked
    //     this.setState({
    //         data: this.state.data
    //     })
    //   }
    // CheckAll = () => {
    //     for(var i =0; i < this.state.data.length; i++){
    //        this.state.data[i].checked=!this.state.CheckAll
    //     }
    //     this.setState({
    //         CheckAll: !this.state.CheckAll,
    //         data: this.state.data
    //     })
       
    
    // }
    render() {
    
        // const data = this.state.data
        return(
            <div>
                <button onClick={this.Check}>111</button>
                {/* <CheckboxItem onChange={()=>this.CheckAll()} checked={this.state.CheckAll}>全选</CheckboxItem>
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
                </List> */}
            </div>
        )
    }
}

export default Test;