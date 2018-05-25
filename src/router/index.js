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
import VideoDetail from './../components/page/VideoDetail'
import NewsDetail from './../components/page/NewsDetail'
import ContactUS from './../components/page/ContactUS'
import AboutUS from './../components/page/AboutUS'
import RobotTech from './../components/page/RobotTech'
import AISightTech from './../components/page/AISightTech'
import LegalNotices from './../components/page/LegalNotices'
import PrivacyProtection from './../components/page/PrivacyProtection'

import M_PuppyCube from './../components/page/M_PuppyCube'
import M_PuppyCubeS from './../components/page/M_PuppyCubeS'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    { path: '/', name: 'PuppyIndex', component: PuppyIndex },
    { path: '/puppycube', name: 'PuppyCube', component: PuppyCube },
    { path: '/puppycubes', name: 'PuppyCubeS', component: PuppyCubeS },
    { path: '/m_puppycube', name: 'M_PuppyCube', component: M_PuppyCube },
    { path: '/m_puppycubes', name: 'M_PuppyCubeS', component: M_PuppyCubeS },
    { path: '/puppyrobot', name: 'PuppyRobot', component: PuppyRobot },
    { path: '/hachisolution', name: 'HachiSolution', component: HachiSolution },
    { path: '/hachicases', name: 'HachiCases', component: HachiCases },
    { path: '/hachiproduct', name: 'HachiProduct', component: HachiProduct },
    { path: '/joinus', name: 'JoinUS', component: JoinUS },
    { path: '/newscenter', name: 'NewsCenter', component: NewsCenter },
    { path: '/videocenter', name: 'VideoCenter', component: VideoCenter },
    { path: '/videodetail', name: 'VideoDetail', component: VideoDetail},
    { path: '/newsdetail', name: 'NewsDetail', component: NewsDetail},
    { path: '/contactus', name: 'ContactUS', component: ContactUS},
    { path: '/aboutus', name: 'AboutUS', component: AboutUS},
    { path: '/robottech', name: 'RobotTech', component: RobotTech},
    { path: '/aisighttech', name: 'AISightTech', component: AISightTech},
    { path: '/legalnotices', name: 'LegalNotices', component: LegalNotices},
    { path: '/privacyprotection', name: 'PrivacyProtection', component: PrivacyProtection}
  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
  
})
