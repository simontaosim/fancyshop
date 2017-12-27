import React from 'react'
import { List, InputItem, Toast ,WingBlank, Button, WhiteSpace} from 'antd-mobile';
import { register,getLocation } from '../../reducers/user.redux.js'
import { connect } from 'react-redux'
import { getAddress } from '../../service/amap/api/getCurrentLocationByIP'


class Register extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: '',
      pwd: '',
      mobile: ''
    }

    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    console.log('history')
    this.props.history.goBack()
  }

  

  register(){
    let self = this;
    getAddress()
    console.log(this.state)
    // this.props.getAddress()
     this.props.register(this.state.user,this.state.pwd,this.state.mobile)
  }

  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }

  render() {
    return (
      <div>
        <WingBlank>
        <List renderHeader={() => '进入万车汇'}>
          <InputItem
            type="text"
            placeholder="输入您的账户"
            onChange={v=>this.handleChange('user',v)}
          >账户</InputItem>
          
          <InputItem
            type="number"
            placeholder="输入您的手机"
            onChange={v=>this.handleChange('mobile',v)}
          >手机</InputItem>
          
          <InputItem
            type="password"
            placeholder="输入您的密码"
            onChange={v=>this.handleChange('pwd',v)}
            
        >密码
        </InputItem>
        </List>

        <WhiteSpace />
         <Button onClick={this.register} type='primary' >登录</Button>
         <WhiteSpace />
         <Button onClick={this.goBack} type='primary' >返回</Button>
          
        </WingBlank>
      </div> 
    );
  }
}



function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,{register})(Register);