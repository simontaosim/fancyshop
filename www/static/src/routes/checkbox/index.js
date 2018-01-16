import React from 'react'
import { asteroid } from '../../config/asteroid.config'

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
          
            datas: 
            [
                {shop_name: '卡哇伊',checked: false,shop_id: 1,
                     source: [
                        { shop_id: 1, value: 0,checked:false,label: '测试1' ,checked: false,status: 1},
                        { shop_id: 1, value: 1,checked:false,label: '测试2' ,checked: false,status: 1},
                        { shop_id: 1, value: 2,checked:false,label: '测试3' ,checked: false,status: 1},
                        { shop_id: 1, value: 3,checked:false,label: '测试4' ,checked: false,status: 1},
                        ]
                },
                {
                    shop_name: '哇哈哈',checked: false,shop_id: 2,
                    source: [
                        { shop_id: 2, value: 0,checked:false,label: 'Ph.D.' ,checked: false,status: 1},
                        { shop_id: 2, value: 1,checked:false,label: 'Bachelor' ,checked: false,status: 1},
                        { shop_id: 2, value: 2,checked:false,label: 'College diploma' ,checked: false,status: 1},
                        { shop_id: 2, value: 3,checked:false, label: 'College diploma' ,checked: false,status: 1},
                    ]
    
                }
            ]
        }

   
    }

    componentDidMount() {
        asteroid.call('user.test',['123'])
    
    }



 


    onChange = (e,val,bel,index,shop_id,index0) => {
        console.log(111);
        console.log(e.target.checked)
        console.log(index);
        console.log(index0);
        console.log('shop_id:'+shop_id)
        this.state.datas[index0].source[index].checked= e.target.checked;
        this.state.datas[index0].checked = e.target.checked;
        for(let i=0;i<this.state.datas[index0].source.length;i++){
            // if(this.state.datas[index0].source[i].checked===e.target.checked){
            //     console.log(1);
            // }else{
            //     console.log(2);
            // }
            
        }
        this.setState({
            datas: this.state.datas
        })
      }
      CheckAll = (e,id,index) => {
          console.log(e);
          console.log(id)
          console.log(index)
          let shop_id = id.shop_id
          console.log(e.target.checked)
         this.state.datas[index].checked = e.target.checked;
        
          for(let i=0; i < this.state.datas[index].source.length; i++){
              if(this.state.datas[index].source[i].shop_id===shop_id){
                    this.state.datas[index].source[i].checked= e.target.checked
              }
            //   this.state.datas[index].checked = !e.checked
              
          }
          this.setState({
              datas: this.state.datas
          })
     
      }

    // CheckAll = (id) => {
    //     console.log(1111);
    //     console.log(id)
    //     // for(var i =0; i < this.state.data.length; i++){
    //     //     if(this.state.data[i].shop_id===id){
    //     //          this.state.data[i].checked=!this.state.CheckAll
    //     //     }
    //     // }
        // this.setState({
        //     CheckAll: !this.state.CheckAll,
        //     data: this.state.data
        // })
    // }
    render() {
     
        // const data = this.state.data
        return(
            <div>
                {this.state.datas.map((i,index0)=> (
                <div key={i.shop_name}>
                    <CheckboxItem key={i} onChange={(e) => this.CheckAll(e,i,index0)}  style={{marginTop: '20px'}} >
                        {/* {i.label} */}
                        {i.shop_name}
                    </CheckboxItem>
                        {i.source.map((i,index)=> (
                        <div>
                            {i.status===1?
                        <CheckboxItem key={i.value} onChange={(e) => this.onChange(e,i.value,i.label,index,i.shop_id,index0)} checked={i.checked}>
                            {i.label}
                            {index0}
                        </CheckboxItem>
                        :
                        null
                            }
                        </div>
                        ))}
                    </div>
                    ))}
               
           
            </div>
        )
    }
}

export default Test;
