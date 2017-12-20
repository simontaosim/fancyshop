import React from 'react';


class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "lng":'',
            "lat": ''
        }
    }
    componentDidMount() {
        var geolocation;
        let amap  = this.initMap();
        //加载地图，调用浏览器定位服务
        // console.log(amap);
        let self = this;
        amap.plugin('AMap.Geolocation', function() {
            geolocation = new window.AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition:'RB'
            });
        amap.addControl(geolocation);
        geolocation.getCurrentPosition()
        window.AMap.event.addListener(geolocation, 'complete', self.onComplete)
        window.AMap.event.addListener(geolocation, 'error', self.onError);
    })

    

    }
    onComplete(data) {
            console.log(data.position.getLng());
            console.log(data.position.getLat());
    }  
    
    onError(data) {
        console.log(data)
    }
       
    initMap(){
        let amap = new window.AMap.Map('', {
            resizeEnable: true
        });
        // console.log(amap)
        return amap;
    }
    render() {
        return (
            <div>{this.state.lng}</div>
        )
    }
}

export default Map;