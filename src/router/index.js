import Vue from 'vue'
import Router from 'vue-router'
import PuppyCube from './../components/page/PuppyCube'
import PuppyCubeS from './../components/page/PuppyCubeS'
import PuppyIndex from './../components/page/PuppyIndex'
import PuppyRobot from './../components/page/PuppyRobot'
import HachiSolution from './../components/page/HachiSolution'
import JoinUS from './../components/page/JoinUS'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    { path: '/', name: 'PuppyIndex', component: PuppyIndex },
    { path: '/puppycube', name: 'PuppyCube', component: PuppyCube },
    { path: '/puppycubes', name: 'PuppyCubeS', component: PuppyCubeS },
    { path: '/puppyrobot', name: 'PuppyRobot', component: PuppyRobot },
    { path: '/hachisolution', name: 'HachiSolution', component: HachiSolution },
    { path: '/joinus', name: 'JoinUS', component: JoinUS },
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
