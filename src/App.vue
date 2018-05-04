<template>
  <div id="app">
    <div id="navBar" :class="{isFixed:istabBar}">
      <PageHeader/>
    </div>
    <div id="mainPart">
      <router-view/>
    </div>
    <div id='footer'>
      <PageFooter/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PageHeader from './components/common/pageheader'
import PageFooter from './components/common/pagefooter'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  },
    data(){
        return {
            istabBar: false
        }
    },
    mounted(){
      // 监听这个dom的scroll事件
      const _this = this;
      window.addEventListener('scroll', _this.handleScroll); // Dom树加载完毕
    },

    destroyed () {
      const _this = this;
      window.removeEventListener('scroll', _this.handleScroll); // 销毁页面时清除
    },

    methods: {
      handleScroll : function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // 固定导航栏
        let navBar = document.querySelector("#navBar");
        let mainPart = document.querySelector("#mainPart");
        if (scrollTop > navBar.offsetHeight){
            this.istabBar = true
            mainPart.style.paddingTop = navBar.offsetHeight + "px";
        } else {
            this.istabBar = false
            mainPart.style.paddingTop = "0px";
        }     
      }
    }
    
}


</script>

<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    text-align: center;
    vertical-align: middle;
    /* margin-top: 60px; */
  }

  #navBar {
    z-index: 9999;
    position: relative;
  }

  .isFixed {
    position: fixed !important;
    top: 0;
    width: 100%;
  }
</style>
