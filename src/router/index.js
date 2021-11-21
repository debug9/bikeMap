import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Index from '@/components/Index'
import RentBike from '@/components/RentBike'
import ReturnBike from '@/components/ReturnBike'
import BikeRouteMap from '@/components/BikeRouteMap'
import FindFood from '@/components/FindFood'
import FindViewpoint from '@/components/FindViewpoint'
import Details from '@/components/Details'
import GoogleMap from '@/components/GoogleMap'

Vue.use(Router, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/test',
      name: 'GoogleMap',
      component: GoogleMap
    },
    {
      path: '/rent-bike',
      name: 'RentBike',
      component: RentBike
    },
    {
      path: '/return-bike',
      name: 'ReturnBike',
      component: ReturnBike
    },
    {
      path: '/bike-route-map',
      name: 'BikeRouteMap',
      component: BikeRouteMap
    },
    {
      path: '/find-food',
      name: 'FindFood',
      component: FindFood
    },
    {
      path: '/find-viewpoint',
      name: 'FindViewpoint',
      component: FindViewpoint
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    }
  ]
})
