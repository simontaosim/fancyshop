import React from 'react';


class Count extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // disabled: props.disabled
            status: props.status,
            countdown:'发送验证码',
            nums: props.nums,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          status:nextProps.status
           });
      }
      componentWillUnmount() {
          clearInterval(this.clock);
      }
    handleSend=(event)=>{
        console.log(`计时器获取父状态${this.state.status}`)
        switch(this.state.status){
            // 按钮处于可发送状态发送并倒计时
            case 'able':
              // 倒计时开启
              this.clock = setInterval(
                      () => this.doLoop(), 
                      1000
              );
              // 状态改变
              this.setState({
                status:'sending',
                countdown:'重新发送(' + this.state.nums + 's)',
              });
              this.props.sendCode()
           
              break;
            // 按钮处于不可点击状态，点击后提示
            case 'disable':
           
              // 通知父组件
              this.props.callback('',false);
              break;
            // 按钮处发送状态，点击后提示
            case 'sending':
              break;
            default:
              break;
        }	  
    }

     // 倒计时实现
  doLoop(){
    var nums = this.state.nums;
    nums--;
    this.setState({
        nums:nums
    });
    if(nums > 0){
      this.setState({
        countdown:'重新发送(' + nums + 's)'
      });
    }
    else{
      this.resetButton();
    }
}
// 按钮重置
resetButton(){
    clearInterval(this.clock);	// 清除js定时器
    this.setState({
      countdown:'发送验证码',
      status:'able',
      nums:this.props.nums,	// 重置时间
    });
    // 通知父组件
    this.props.callback(false,'able');
}
        
    render() {
        return(
          <div>
            <button   onClick={this.handleSend} style={{
                fontSize: "15px",
                position: "absolute",
                top: 0,
                right: 0,
                padding: "0 0 7px 0",
                lineHeight: "42px",
                border: "none",
                background: "#fff"
    }} >{this.state.countdown}</button>
         </div>
        )
    }
}

export default Count;