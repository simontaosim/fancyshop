// import React from 'react';
import axios from 'axios';
import {setStore} from '../../../config/mUtils'

function  initMap(){
    let amap = new window.AMap.Map('', {
        resizeEnable: true
    });
    return amap;
}

export function getAddress() {
    let amap = initMap();
    let geolocation; 
    amap.plugin('AMap.Geolocation', function() {
        geolocation = new window.AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
    })
    geolocation.getCurrentPosition()
    window.AMap.event.addListener(geolocation, 'complete', onComplete)
    window.AMap.event.addListener(geolocation, 'error', onError);
}

function onComplete(data) {
    getDetailAddress(data.position.getLng(),data.position.getLat())
    
}

function onError(data){
    console.log(data);
}


function getDetailAddress(lng,lat) {
    var address;
    let url = `http://restapi.amap.com/v3/geocode/regeo?output=json&location=${lng},${lat}&key=75827486bc30d2cdaa8ed3410b61606e&radius=1&extensions=all`
    axios.get(url).then(function(data){
        
            address =  data.data.regeocode
            setStore('address',address)
    })
}
