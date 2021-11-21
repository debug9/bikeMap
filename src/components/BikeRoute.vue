<template>
  <div>
    <router-view/>
    <div>
      <p>尚未選擇任何縣市</p>
      <div>
        <a href="/bike-route-map">
          <p></p>
          <p></p>
          <p><img src="" alt=""><span></span></p>
        </a>
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
