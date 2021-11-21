<template>
  <div>
    <div class="slogan">
      <div class="logo_bike">
        <img src="../assets/logo_bike.png" alt="logo_bike">
      </div>
      <div class="title_en">
        <img src="../assets/title_index.png" alt="where's you Bike">
      </div>
      <div class="title_ch">
        <p>微笑單車．暢遊城市</p>
      </div>
    </div>
    <div v-for="(linksItem) in links" :key="linksItem.key" class="btn">
      <router-link :to="linksItem.link">{{linksItem.text}}</router-link>
    </div>
    <p class="copyright">Where’s YouBike  © Code: Sunny  /  Design: KT</p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      links: [
        {link: '/rent-bike', text: '尋找  Youbike', key: 'links1'},
        {link: '/bike-route', text: '查詢自行車道', key: 'links2'},
        {link: '/viewpoint-food', text: '附近景點、美食', key: 'links3'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slogan {
  text-align: center;
}

.logo_bike {
  width: 8.5%;
  margin: 0 auto;
  margin-top: 16%;
  margin-left: 41%;
}

.title_en {
  width: 18%;
  margin: 0 auto;
}

.title_ch {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.92em;
}

.btn {
  border: 2px solid #000000;
  border-radius: 10px;
  color: #000;
  width: 18%;
  text-align: center;
  margin: 0% auto 2% auto;
}

.btn:nth-child(2){
  margin-top: 6%;
}

a, a:active {
  color: #000;
  padding: 10px;
  display: block;
}

.copyright {
  position: absolute;
  right: 1%;
  bottom: 7%;
}

</style>
