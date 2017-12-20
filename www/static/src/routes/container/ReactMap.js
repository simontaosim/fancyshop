import React from 'react';
import { Map } from 'react-amap';
import Geolocation from 'react-amap-plugin-geolocation';



class ReactMap extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            "lng": '',
            "lgn": ''

        }
    }
    componentDidMount() {
        let self = this;
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            self.setState({
                "lng": position.coords.latitude,
                "lgn": position.coords.longitude,
                "abc": '123'
            })
          console.log(self.state)
            
            
          });
    }

    getlocationSuccess(position){
        this.setState({
            "lng": '123'
        })
    }
    

    render() {
        if ("geolocation" in navigator) {
            console.log('可用')
          } else {
            console.log('不可用')
          }
          
        const pluginProps = {
            enableHighAccuracy:true,
            timeout: 10000,
            showButton: true
          }
        return (
           <div>
               {this.state.lng}
            <Map amapkey={"5bcf3eb556c8816b891236349dd7f96a"}>
                <Geolocation {...pluginProps} />
            </Map>
            </div>
        )
    }
}

export default ReactMap;