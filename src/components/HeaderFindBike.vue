<template>
  <div class="flex">
    <div class="title_logo">
      <img src="../assets/title_index.png" alt="logo_bike"><div>{{parentMsg}}</div>
    </div>
    <div class="btn_menu">
      <ul>
        <li><router-link to="/rent-bike"><span>租車</span></router-link></li>
        <li><router-link to="/return-bike"><span>還車</span></router-link> </li>
      </ul>
    </div>
    <div class="show_bike_way">
      <span>顯示車道</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderFindBike',
  props: ['parentMsg'],
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
.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2% 0;
}

.flex div {
  margin-right: 17%;
}

.flex div:last-child {
  margin-right: 0;
}

.title_logo {
  width: 16%;
  margin-right: 14%;
}
.btn_menu {
  width: 20%;
}

.btn_menu ul {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 50px;
}

.btn_menu li{
  width: 50%;
  border-radius: 50px;
  text-align: center;
  color: #000;
}

.btn_menu li:first-child {
  background: #000;
  color: #fff;
}

.btn_menu span {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
}

.btn_menu li:first-child span {
  color: #FED801;
}

.btn_menu img {
  width: 24%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 11px;
}
.show_bike_way{
  background-color: #000;
  color: #fff;
  border-radius: 50px;
  width: 8%;
  padding: 6.5px 8px;
  text-align: center;
  position: relative;
}
.show_bike_way span::after{
  content: '';
  width: 23px;
  height: 23px;
  border-radius: 50px;
  background-color: #fff;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  right: 3%;
  top: 7%;
}


a, a:active{
  color: #000;
}

</style>
