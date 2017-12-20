import React from 'react';


class Count extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: props.disabled
        }
    }
}