<template>
  <div>
      <div class="google-map" id="map"></div>
  </div>
</template>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZlyYiLlDWqEDg68C5RtsvNUMbTzR4Zp8"></script>
<script>
import * as axios from 'axios'
import map from './map.json';

export default {
  name: 'GoogleMap',
  data () {
    return {
      map: null,
      lat: 25.0325917,
      lng: 121.5624999,
      bikeSites: []
    };
  },
  mounted () {
    this.initMap()
    this.fetchBikeSites();
    this.setMarker()
  },
  methods: {
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
      console.log("sadsd"+this.map.center)
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
</style>
