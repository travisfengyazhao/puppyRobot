<template>
  <div id="PuppyIndex">
    <div>
      <Banner :slideLists="slideLists" :isAutoplay="true" :swiperHeight="'550px'"></Banner>
    </div>
     <div :class="!_isMobile()?'newsCol':'newsCol_mobile'">
      <div :class="!_isMobile()?'newsContainer':'newsContainer_mobile'">
        <div :class="!_isMobile()?'techContainer':'techContainer_mobile'">
          <div class="titleLine"></div>
          <div>
            <div class="mediaTitle">
              技术方案
              <!-- <div class="moreInfo" :style="{marginRight: `${!_isMobile()?40:0}px`}">
                <a herf="">+更多</a>
              </div> -->
            </div>
           
          </div>
          <div>
            <div :class="!_isMobile()? 'newsTabPC' : 'newsTabMobile'">
              <Tech :contents="tech" :techId="'tech'"/>
            </div>
          </div>
        </div>
        <div :class="!_isMobile()?'productContainer':'productContainer_mobile'">
          <div class="titleLine"></div>
          <div class="mediaTitle">
            产品列表
            <!-- <div class="moreInfo">
              <a herf="">+更多</a>
            </div> -->
          </div>
          <div>
            <div :class="!_isMobile()? 'newsTabPC' : 'newsTabMobile'">
              <Tech :contents="productLists" :techId="'product'" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div :class="!_isMobile()? 'mediaReport' : 'mediaReport_mobile'">
      <div :class="!_isMobile()? 'mediaContainer':'mediaContainer_mobile'">
        <div class="titleLine"></div>
        <div class="mediaTitle">
          媒体报道
            <router-link to="/newscenter">
            <div class="moreInfo">
              <a herf="#">+更多</a>
            </div>
            </router-link>
        </div>
        <div>
          <div :class="!_isMobile()? 'mediaMain' : 'mediaMain_mobile'">
            <Media :mediaContent="mainTopNews[0]" :mediaHeight="430" :isIndex="true" v-if="mainTopNews && mainTopNews[0]"/>
          </div>
          <div :class="!_isMobile()? 'mediaSub' : 'mediaSub_mobile'">
            <div :class="!_isMobile()?'mediaSub1':'mediaSub1_mobile'"><Media :mediaContent="otherTopNews[0]" :mediaHeight="200" :isIndex="true" v-if="otherTopNews && otherTopNews[0]"/></div>  
            <div :class="!_isMobile()?'mediaSub2':'mediaSub2_mobile'"><Media :mediaContent="otherTopNews[1]" :mediaHeight="200" :isIndex="true" v-if="otherTopNews && otherTopNews[1]"/></div>
          </div>
        </div>
      </div>
    </div>
   
  </div>

</template>
<script>

import Banner from './../common/Banner'
import News from './../common/News'
import Media from './../common/Media'
import Tech from './../common/Tech'
import {store} from './../../store/index';

export default {
  name: "PuppyIndex",
  components: {
    Banner,
    News,
    Media,
    Tech,
  },
  data() {
    return {
       slideLists: [
         {
            id: 1,
            img: require("./../../assets/images/index/focus-image_01.jpg"),
            backgroundColor: "#cac9ce",
            maxWidth: '2580px',
            router: "/puppycubes"
         },
          {
            id: 2,
            img: require("./../../assets/images/index/focus-image_02.jpg"),
            backgroundColor: "#000000",
            maxWidth: '2580px',
            router: "/puppycube"
         }
       ],
       tech: [
          {
            id: 1,
            title: '人工智能技术吸引了无数巨头，投资者，和满怀梦想的创业者',
            subtitle: '机器人技术',
            img: require("./../../assets/images/index/jsfa_01.jpg"),
            path: '/robottech'
          },
          {
            id: 2,
            title: '智能视觉技术在复杂的场景中，快速、精确的定位人脸、人体等目标位置',
            subtitle: '智能视觉技术',
            img: require("./../../assets/images/index/jsfa_02.jpg"),
            path: '/aisighttech'
          }
       ],
       productLists: [
         {
            id: 1,
            title: '智慧生活 触手可及',
            subtitle: 'puppy cube s',
            img: require("./../../assets/images/index/cplb_01.jpg"),
            path: '/puppycubes'
          },
          {
            id: 2,
            title: 'Live Your Way 智能由你',
            subtitle: 'Hachi哈奇智能',
            img: require("./../../assets/images/index/cplb_02.jpg"),
            path: '/hachiproduct'
          }
       ],
       mediaLists: [],
       mainTopNews: null,
       otherTopNews: null,
    }
  },
  mounted() {
    let _this = this;
    this.$store.dispatch('getTopNewsInfo').then((result)=> { 
      _this.mediaLists = result;
      _this.mainTopNews = _.filter(_this.mediaLists, ['is_main_promote', "1"]);
      _this.otherTopNews = _.filter(_this.mediaLists, ['is_main_promote', "0"]);
    });
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    // getTopNewsInfo: function() {
    //   getTopNews().then(res=>{
    //       if(res.status == 200) {
    //         console.log(res.data);
    //         this.mediaLists = res.data;
    //       } else {
    //             console.log('错误...');
    //       }
    //   }).catch(err=>{
    //       console.log(err, '失败');
    //   })
    // },
  }

}

</script>

<style lang="scss" scoped>

.titleLine {
  width: 70px;
  height: 4px;
  background-color: black;
  margin: 24px 0px 0px 0px; 
}

.mediaTitle {
  font-size: 18pt;
  text-align: left;
  float: left;
  line-height: 40px;
  /* margin-bottom: 5px; */
  width: 100%;
}

.moreInfo {
  float: right;
  font-size: 10pt;
  text-align: right;
  line-height: 40px;
  color: black;
  a:hover {
    color: #929497;
  }
}

.mediaReport {
  height: 480px;
  width: 100%;
  text-align: center;
}

.mediaReport_mobile {
  height: 675px;
  width: 100%;
  text-align: center;
}

.mediaContainer {
  width: 1280px;
  height: 430px;
  margin: 0 auto;
}

.mediaContainer_mobile {
  width: 100%;
  height: 430px;
  margin: 0 auto;
}

.mediaMain {
  height: 430px;
  width: 760px;
  margin-right: 40px;
  float: left;

}

.mediaMain_mobile {
  height: 470px;
  width: 100%;
}

.mediaSub {
  width: 480px;
  float: left;
}

.mediaSub_mobile {
  width: 100%;
  float: left;
}

.mediaSub1 {
  width: 100%;
  height: 200px;
}

.mediaSub1_mobile {
  width: 50%;
  height: 200px;
  float: left;
}

.mediaSub2 {
  width: 100%;
  height: 200px;
  margin-top: 30px;
}

.mediaSub2_mobile {
  width: 50%;
  height: 200px;
  float:left;
}

.newsCol {
  width: 100%;
  height: 290px;
  text-align: center;
}

.newsCol_mobile {
  width: 100%;
  height: 576px;
  text-align: center;
}

.newsContainer {
  width: 1280px;
  height: 290px;
  margin:0 auto;
}

.newsContainer_mobile {
  width: 100%;
  height: 576px;
  margin:0 auto;
}

.techContainer {
  float: left;
  width: 660px;
}

.techContainer_mobile {
  float: left;
  width: 100%;
}

.productContainer {
  float: left;
  width: 620px;
}

.productContainer_mobile {
  float: left;
  width: 100%;
}


.newColMobile {
  width: 100%;
  height: 480px;
  text-align: center;
}

.newsTabPC {
  float: left;
  width: 620px;

}

.newsTabMobile {
  width: 50%;
  float: left;
}

</style>


