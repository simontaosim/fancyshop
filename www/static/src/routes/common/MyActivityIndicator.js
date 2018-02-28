import React from 'react';
import { ActivityIndicator } from 'antd-mobile';


class MyActivityIndicator extends React.Component {
    render() {
        let {isFetching} = this.props
        return(
            <div>
                <ActivityIndicator
                toast
                text="加载中..."
                animating={isFetching}
                />
          </div>
        )
    }
}


export default MyActivityIndicator;
