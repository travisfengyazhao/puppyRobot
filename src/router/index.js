import Vue from 'vue'
import Router from 'vue-router'
import PuppyCube from './../components/page/PuppyCube'
import PuppyCubeS from './../components/page/PuppyCubeS'
import PuppyIndex from './../components/page/PuppyIndex'
import PuppyRobot from './../components/page/PuppyRobot'
import HachiSolution from './../components/page/HachiSolution'
import HachiCases from './../components/page/HachiCases'
import HachiProduct from './../components/page/HachiProduct'
import JoinUS from './../components/page/JoinUS'
import NewsCenter from './../components/page/NewsCenter'
import VideoCenter from './../components/page/VideoCenter'

Vue.use(Router)

export default new Router({
  mode: 'history',  

  routes: [
    { path: '/', name: 'PuppyIndex', component: PuppyIndex },
    { path: '/puppycube', name: 'PuppyCube', component: PuppyCube },
    { path: '/puppycubes', name: 'PuppyCubeS', component: PuppyCubeS },
    { path: '/puppyrobot', name: 'PuppyRobot', component: PuppyRobot },
    { path: '/hachisolution', name: 'HachiSolution', component: HachiSolution },
    { path: '/hachicases', name: 'HachiCases', component: HachiCases },
    { path: '/hachiproduct', name: 'HachiProduct', component: HachiProduct },
    { path: '/joinus', name: 'JoinUS', component: JoinUS },
    { path: '/newscenter', name: 'NewsCenter', component: NewsCenter },
    { path: '/videocenter', name: 'VideoCenter', component: VideoCenter },
  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
