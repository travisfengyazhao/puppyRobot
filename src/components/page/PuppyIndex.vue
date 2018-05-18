<template>
  <div id="PuppyIndex">
    <div>
      <Banner :slideLists="slideLists" :isAutoplay="true"></Banner>
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
            <Media :mediaContent="mediaLists[0]" :mediaHeight="430"/>
          </div>
          <div :class="!_isMobile()? 'mediaSub' : 'mediaSub_mobile'">
            <div :class="!_isMobile()?'mediaSub1':'mediaSub1_mobile'"><Media :mediaContent="mediaLists[1]" :mediaHeight="200"/></div>  
            <div :class="!_isMobile()?'mediaSub2':'mediaSub2_mobile'"><Media :mediaContent="mediaLists[2]" :mediaHeight="200"/></div>
          </div>
        </div>
      </div>
    </div>
   
  </div>

</template>
<script type="text/ecmascript-6">

import Banner from './../common/Banner'
import News from './../common/News'
import Media from './../common/Media'
import Tech from './../common/Tech'

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
            img: require("./../../assets/images/index/focus-image_01.png"),
            backgroundColor: "#C7C7C7",
            router: "/puppycubes"
         },
          {
            id: 2,
            img: require("./../../assets/images/index/focus-image_02.png"),
            backgroundColor: "#231f20",
            router: "/puppycube"
         },
       ],
       tech: [
          {
            id: 1,
            title: 'puppy亮相AI无人车技术，不只是无人车这么简单',
            subtitle: '新款小狗机器人1已发布',
            img: require("./../../assets/images/index/jsfa_01.png"),
            path: '/robottech',
          },
          {
            id: 2,
            title: '小狗机器人技术，未来人工智能机器人的数量真的会超过人类？',
            subtitle: '新款小狗机器人2已发布',
            img: require("./../../assets/images/index/jsfa_02.png"),
            path: '/aisighttech',
          }
       ],
       productLists: [
         {
            id: 1,
            title: '无论身在何处，哈奇智家APP都可掌控家中一切',
            subtitle: '新款小狗机器人3已发布',
            img: require("./../../assets/images/index/cplb_01.png"),
            path: '/puppycubes',
          },
          {
            id: 2,
            title: '哈奇智能让生活更智慧',
            subtitle: '新款小狗机器人2已发布',
            img: require("./../../assets/images/index/cplb_02.png"),
            path: '/hachiproduct',
          }
       ],
       mediaLists: [
         {
            id: 1,
            title: '小狗机器人创新模式让智慧家居走进社区，企业参与热情高涨',
            subtitle: '新款小狗机器人3已发布',
            img: require("./../../assets/images/index/mtbd_01.png"),
          },
          {
            id: 2,
            title: 'puppy cube 智能投影仪上市，最有料的深度测评',
            subtitle: '新款小狗机器人2已发布',
            img: require("./../../assets/images/index/mtbd_02.png"),
          },
          {
            id: 3,
            title: 'puppy cube s 发布会倒计时',
            subtitle: '新款小狗机器人1已发布',
            img: require("./../../assets/images/index/mtbd_03.png"),
          }
       ]
    }
  },

  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
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


