<template>
  <div>
    <router-view/>
    <div>
      <img src="" alt="">
      <div>
        <div>
          <p><img src="" alt=""></p>
        </div>
        <div>
          <p><img src="" alt=""><a href="">地圖</a></p>
        </div>
        <p></p>
      </div>
    </div>
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

</style>
