import Vue from 'vue'
import Router from 'vue-router'
import PuppyCube from './../components/page/PuppyCube'
import PuppyCubeS from './../components/page/PuppyCubeS'
import PuppyIndex from './../components/page/PuppyIndex'
import PuppyRobot from './../components/page/PuppyRobot'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'PuppyIndex', component: PuppyIndex },
    { path: '/puppycube', name: 'PuppyCube', component: PuppyCube },
    { path: '/puppycubes', name: 'PuppyCubeS', component: PuppyCubeS },
    { path: '/puppyrobot', name: 'PuppyRobot', component: PuppyRobot },
  ]
})
