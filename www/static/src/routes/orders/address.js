import React from 'react';

class Address extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        <Flex>
          <div>
            <img src = {require(./svg/home.svg)} />
            店铺名：这是一个店铺名
          </div>
        </Flex>
      </div>
    )
  }
}
