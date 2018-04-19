<template>
  <div id="app" ref="viewBox">
    <div id="navBar" :class="{isFixed:istabBar}">
      <PageHeader/>
    </div>
    <div id="mainPart">
      <!-- <img src="./assets/logo.png"> -->
      <div v-show="navIndex === '1'"> 
        <PuppyCubeS />
      </div>
      <div v-show="navIndex === '2'"> 
        <PuppyRobot />
      </div>
    </div>
    <div id='footer'>
      <PageFooter/>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script type="text/ecmascript-6">
import PageHeader from './components/common/pageheader'
import PageFooter from './components/common/pagefooter'
import PuppyIndex from './components/page/puppyindex'
import PuppyCubeS from './components/page/puppycubes'
import PuppyCube from './components/page/puppycube'
import PuppyRobot from './components/page/puppyrobot'
import bus from './lib/bus';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    PuppyIndex,
    PuppyCubeS,
    PuppyCube,
    PuppyRobot
  },
    data(){
        return {
            navIndex: "1",
            istabBar: false
        }
    },
    mounted(){
      var curRouter =  this.$route.path.slice(1);
      this.navIndex = getCurDisplayIndex(curRouter);
      console.log(222);
      // 通过$refs获取dom元素
      this.box = this.$refs.viewBox;
      // 监听这个dom的scroll事件
      this.box.addEventListener('scorll', this.handleScroll); // Dom树加载完毕
      console.log(333);
    },
    destroyed () {
      this.box = this.$refs.viewBox;
      this.box.removeEventListener('scroll', this.handleScroll); // 销毁页面时清除
    },

    watch:{
        '$route': 'fetchData',
    },
    methods:{
         fetchData:function(){
            var curRouter =  this.$route.path.slice(1);
            this.navIndex = getCurDisplayIndex(curRouter);
        }
    }

    
}

function handleScroll() {
  console.log(1111);
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          
  // 固定导航栏
  let navBar = document.querySelector("#navBar");
  let mainPart = document.querySelector("#mainPart");
  if (scrollTop > nvaBar.offsetHeight){
      this.istabBar = true
      mainPart.style.paddingTop = navBar.offsetHeight + "px";
  } else {
      this.istabBar = false
      mainPart.style.paddingTop = "0px";
  }     
}

function getCurDisplayIndex(curRouter) {
  switch(curRouter) {
    case 'puppycubes':
      return '1';
      break;
    case 'puppycube':
      return '2';
      break;
    case 'hqintell':
      return '3';
      break;
    case 'aitech':
      return '4';
      break;
    case 'about':
      return '5';
      break;
    default:
      return '1';
      break;
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    text-align: center;
    vertical-align: middle;
    color: #2c3e50;
    /* margin-top: 60px; */
  }

  .isFixed {
    position: fixed;
    top: 0;
    z-index: 10;
  }
</style>
