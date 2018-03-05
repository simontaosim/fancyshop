import React from 'react'
import { connect } from 'react-redux';
import{ loadLoginedUserInfo } from '../actions/users.js';
class Preload extends React.Component{
    constructor(props){
        super(props);
        const {AppState, dispatch} = this.props;
        dispatch(loadLoginedUserInfo(''))
    }
    render(){
        const {AppState, dispatch} = this.props;
        console.log(AppState);
        return(
            <div></div>
        )
    }

}
function mapStateToProps(state) {
    return {
      AppState: state
    }
  }
export default connect(mapStateToProps)(Preload);