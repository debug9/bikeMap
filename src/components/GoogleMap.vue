<template>
  <div>
      <span>{{userName}}</span>
      <div class="google-map" id="map" :data-sendRent="sendRent" :data-sendReturn="sendReturn"></div>
  </div>
</template>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZlyYiLlDWqEDg68C5RtsvNUMbTzR4Zp8"></script>
<script>                
import * as axios from 'axios'
import map from './map.json'


export default {
  name: 'google-map',
  props: ['user-name'],
  // props: ['sendRent','sendReturn'],
  data () {
    return {
      map: null,
      lat: 25.0325917,
      lng: 121.5624999,
      bikeSites: []
    };
  },
  mounted () {
    this.test()
    // this.fetchBikeSites();
    // this.initMap()
    // this.setMarker()
  },
  methods: {
    test () {
      console.log(this.sendRent)
      var latlng = { lat: 24.99837514013927, lng: 121.57953117695816 };

      var map = new google.maps.Map(document.getElementById('map'), {
        // 設定地圖的中心點經緯度位置
        center: latlng,
        // 設定地圖縮放比例 0-20
        zoom: 14,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false,
        // icon: 'https://www.seekpng.com/png/detail/11-112804_location-icon-gps-icon-png.png'
      });

      var marker = new google.maps.Marker({
        position: latlng,
        map: map
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        // console.log(position.coords.latitude,position.coords.longitude)
        let bikeRentNumUrl = 'https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?$top=5&$spatialFilter=nearby('+ pos.lat + '%2C' +pos.lng + '%2C1000)&$format=JSON'
        let bikeRentPositionLonUrl = 'https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?$top=5&$spatialFilter=nearby('+ pos.lat + '%2C' +pos.lng + '%2C1000)&$format=JSON'

        // const axios = require('axios');
        // const jsSHA = require('jssha');

        // const getAuthorizationHeader = function() {
        //   var AppID = 'aca28e9cc216448cb81e2254c58c49f0';
        //   var AppKey = '_fM7rOdDDjOhnfw52ALHg_iamUQ';

        //   var GMTString = new Date().toGMTString();
        //   var ShaObj = new jsSHA('SHA-1', 'TEXT');
        //   ShaObj.setHMACKey(AppKey, 'TEXT');
        //   ShaObj.update('x-date: ' + GMTString);
        //   var HMAC = ShaObj.getHMAC('B64');
        //   var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

        //   return { 'Authorization': Authorization, 'X-Date': GMTString};
        // }

        // axios
        //   .get(bikeRentNumUrl,{
        //     headers: getAuthorizationHeader()
        //   })
        //   .then(function (response) {
        //     var numAvailableRentBikes = []
        //     var datalen = response.data.length
        //     var labels = [];
        //     for (let a = 0 ; a< datalen ; a++){
        //       numAvailableRentBikes.push(response.data[a].AvailableRentBikes)
        //       console.log(numAvailableRentBikes)
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })

          var marker = new google.maps.Marker({
            position: pos,
            // icon: icon,
            map: map,
          });
          map.setZoom(15);
          map.setCenter(pos);

          let icon = {
            url: "https://i.imgur.com/aDBwZWm.png", // url
            scaledSize: new google.maps.Size(27, 37.5), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
          };

          let numPositionRentBikes = [
            {lat: 25.06424, lng: 121.54037, index: 0},
            {lat: 25.057985, lng: 121.548982, index: 1},
            {lat: 25.058369, lng: 121.532934, index: 2},
            {lat: 25.059978, lng: 121.533302, index: 3},
            {lat: 25.065031, lng: 121.536775, index: 4},
            {lat: 25.054761, lng: 121.536925, index: 5},
            {lat: 25.064317, lng: 121.533487, index: 6},
            {lat: 25.062344, lng: 121.545138, index: 7},
            {lat: 25.05298, lng: 121.540568, index: 8},
            {lat: 25.055997, lng: 121.542318, index: 9},
          ]
          // alert(this.parentMsg.msg)
          let numAvailableRentBikes = [["5"],["27"],["8"],["0"],["11"],["8"],["14"],["3"],["0"],["4"]]
          let numAvailableReturnBikes = [["24"],["17"],["12"],["20"],["17"],["4"],["14"],["22"],["0"],["53"]]
          numPositionRentBikes.forEach(location => {
              const marker = new google.maps.Marker({
              // 設定為該餐廳的座標
              position: { lat: location.lat, lng: location.lng },
              icon: icon,
              label: numAvailableRentBikes[location.index][0],
              map: map
            });
          });



        });
      } else {
        alert("未允許或遭遇錯誤！");
      }

    },
    fetchBikeSites() {
      this.bikeSites = map.bikeSites;
      this.lat = map.center.lat;
      this.lng = map.center.lng;
    },
    // 建立地圖
    initMap () {
      // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
      this.map = new google.maps.Map(document.getElementById('map'), {
        // 設定地圖的中心點經緯度位置
        center: { lat: this.lat, lng: this.lng },
        // 設定地圖縮放比例 0-20
        zoom: 15,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false
      });
    },
    // 建立地標
        setMarker() {
      // 為每間餐廳都建立地標、訊息視窗、事件監聽
      this.bikeSites.forEach(location => {
        var marker = new google.maps.Marker({
          // 設定為該餐廳的座標
          position: { lat: location.lat, lng: location.lng },
          map: this.map
        });
        // 建立訊息視窗
        const infowindow = new google.maps.InfoWindow({
          content: `
          <div id="content">
            <p id="firstHeading" class="firstHeading">${location.name}</p>
          </div>
        `,
          maxWidth: 200
        });
        // 綁定點擊事件監聽
        marker.addListener("click", () => {
          infowindow.open(this.map, marker);
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#map {
  overflow: inherit!important;
}

.google-map {
  width: 100%;
  height: 600px;
}
span {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
