<template>
  <div class="header_rent">
    <HeaderFindBike></HeaderFindBike>
    <div>
      <div class="filter">
        <input type="text" placeholder="尋找站點">
        <button>
          <img src="../assets/icon_search.png" alt="搜尋">
        </button>
      </div>
      <GoogleMap></GoogleMap>
      <div><img src="" alt="">附近ww</div>
    </div>
  </div>
</template>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZlyYiLlDWqEDg68C5RtsvNUMbTzR4Zp8"></script>
<script>
import GoogleMap from './GoogleMap'
import HeaderFindBike from './HeaderFindBike'

export default {
  components: {
    HeaderFindBike,GoogleMap
  },
  name: 'RentBike',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_rent /deep/ .btn_menu li span{
  display: block;
  background-repeat: no-repeat;
  background-size: 21%;
  background-position: 14% 38%;
  padding: 14px 10px;
  position: relative;
  left: 13%;
}

.header_rent /deep/ .btn_menu li:last-child {
  background-color: #fff;
  }
.header_rent /deep/ .btn_menu li:first-child {
  background-color: #000;
}

.header_rent /deep/ .btn_menu li:first-child span{
  background-image: url('../assets/icon_rent_active.png');
  color: #FED801;
}

.header_rent /deep/ .btn_menu li:last-child span{
  background-image: url('../assets/icon_return.png');
  color: #000;
  
}

.filter {
  width: 100%;
  text-align: center;
  margin-top: 1.5%;
  margin-bottom: 5%;
}
.filter input{
  padding: 16px;
  background-color: #fff;
  width: 32%;
  border: 0;
  border-radius: 8px;
}

::placeholder { /* CSS 3 標準 */
  color: #D2D2D2;
}

::-webkit-input-placeholder { /* Chrome, Safari */
  color: #D2D2D2;
}

:-ms-input-placeholder { /* IE 10+ */
  color: #D2D2D2;
}

::-moz-placeholder { /* Firefox 19+ */
  color: #D2D2D2;
  opacity: 1;
}

button {
  background-color: #000;
  border-radius: 8px;
  vertical-align: middle;
  width: 4%;
  padding: 10px 3px;
}

button img {
  width: 50%;
}

</style>
