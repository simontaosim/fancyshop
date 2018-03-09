import React from 'react';
import MyWallet from './MyWallet';

class Wallet extends React.Component {

  render(){
    return(
      <div>
        <MyWallet history = {this.props.history}/>
      </div>
    )
  }
}

export default Wallet;
