import React from 'react';
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { resetPWd } from '../../reducers/user.redux'
import { connect } from 'react-redux'
import {getStore} from '../../config/mUtils'



class ResetPassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pwd: ''
        }
        this.handleRest = this.handleRest.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.authenticated){
            nextProps.history.push('/');
        }
    }


    handleChange(key,value){
        this.setState({
          [key]:value
        })
      }

    handleRest() {
        let user = getStore('userId');
        this.props.resetPWd(user,this.state.pwd)
    }

   

    render() {
        return(
            <div>
            <WingBlank>
            <List renderHeader={() => '重置密码'}>
              <InputItem
                type="password"
                placeholder="输入您的新密码"
                onChange={v=>this.handleChange('pwd',v)}
                
            >密码
            </InputItem>
            </List>
            <WhiteSpace />
              <Button type='primary' onClick={this.handleRest}>确认</Button>
            </WingBlank>
      
          </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
  
export default connect(mapStateToProps,{resetPWd})(ResetPassword);