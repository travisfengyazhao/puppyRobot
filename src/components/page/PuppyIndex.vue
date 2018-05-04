<template>
  <div id="PuppyIndex">
    <div>
      <Banner :listImg="imageList"></Banner>
    </div>
    <div :class="pcMode? 'mediaReport' : 'mediaReport_mobile'">
      <div :class="pcMode? 'mediaContainer':'mediaContainer_mobile'">
        <div class="titleLine"></div>
        <div class="mediaTitle">
          媒体报道
            <div class="moreInfo">
              <a herf="">+更多</a>
            </div>
        </div>
        <div>
          <div :class="pcMode? 'mediaMain' : 'mediaMain_mobile'">
            <Media :mediaContent="mediaLists[0]" :mediaHeight="430"/>
          </div>
          <div :class="pcMode? 'mediaSub' : 'mediaSub_mobile'">
            <div class="mediaSub1"><Media :mediaContent="mediaLists[1]" :mediaHeight="200"/></div>  
            <div :class="pcMode?'mediaSub2':'mediaSub2_mobile'"><Media :mediaContent="mediaLists[2]" :mediaHeight="200"/></div>
          </div>
        </div>
      </div>
    </div>
    <div :class="pcMode?'newsCol':'newsCol_mobile'">
      <div :class="pcMode?'newsContainer':'newsContainer_mobile'">
        <div :class="pcMode?'techContainer':'techContainer_mobile'">
          <div class="titleLine"></div>
          <div>
            <div class="mediaTitle">
              技术方案
              <div class="moreInfo" :style="{marginRight: `${pcMode?40:0}px`}">
                <a herf="">+更多</a>
              </div>
            </div>
           
          </div>
          <div v-for="(newsContent) in newsContents" :key="newsContent.id">
            <div :class="pcMode? 'newsTabPC' : 'newTabMobile'">
              <News :newsContent="newsContent" />
            </div>
            <div class="newsSpace" v-if="pcMode"> 
            </div>
          </div>
        </div>
        <div :class="pcMode?'productContainer':'productContainer_mobile'">
          <div class="titleLine"></div>
          <div class="mediaTitle">
            产品列表
            <div class="moreInfo">
              <a herf="">+更多</a>
            </div>
          </div>
          <div v-for="(product, index) in productLists" :key="product.id">
            <div :class="pcMode? 'newsTabPC' : 'newTabMobile'">
              <News :newsContent="product"/>
            </div>
            <div class="newsSpace" v-if="pcMode && (index < 1)"> 
            </div>
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

export default {
  name: "PuppyIndex",
  data() {
    return {
       imageList: [
         require("./../../assets/1.jpg"),
         require("./../../assets/2.jpg"),
         require("./../../assets/3.jpg"),
       ],
       pcMode: window.innerWidth >= 1280,
       newsContents: [
          {
            id: 1,
            title: '小狗机器人1发布111111111111111111111111111111111111111111111111111111111',
            subtitle: '新款小狗机器人1已发布',
            img: require("./../../assets/1.jpg"),
          },
          {
            id: 2,
            title: '小狗机器人2发布小狗机器人2发布小狗机器人2发布小狗机器人2发布小狗机器人2发布小狗机器人2发布小狗机器人2发布小狗机器人2发布小狗机器人2发布小狗机器人2发布',
            subtitle: '新款小狗机器人2已发布',
            img: require("./../../assets/2.jpg"),
          }
       ],
       productLists: [
         {
            id: 1,
            title: '小狗机器人3发布',
            subtitle: '新款小狗机器人3已发布',
            img: require("./../../assets/3.jpg"),
          },
          {
            id: 2,
            title: '小狗机器人2发布',
            subtitle: '新款小狗机器人2已发布',
            img: require("./../../assets/2.jpg"),
          }
       ],
       mediaLists: [
         {
            id: 1,
            title: '小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布小狗机器人3发布',
            subtitle: '新款小狗机器人3已发布',
            img: require("./../../assets/3.jpg"),
          },
          {
            id: 2,
            title: '小狗机器人2发布',
            subtitle: '新款小狗机器人2已发布',
            img: require("./../../assets/2.jpg"),
          },
          {
            id: 3,
            title: '小狗机器人1发布',
            subtitle: '新款小狗机器人1已发布',
            img: require("./../../assets/1.jpg"),
          }
       ]
    }
  },
  mounted() {
    const that = this;
    window.onresize = function temp() {
        that.pcMode = window.innerWidth >= 1280;
    };
    // console.log(this.newsConent);
  },
  components: {
    Banner,
    News,
    Media
  },

}

</script>

<style scoped>

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
}

.mediaReport {
  height: 480px;
  width: 100%;
  text-align: center;
}

.mediaReport_mobile {
  height: 890px;
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

.mediaSub2 {
  width: 100%;
  height: 200px;
  margin-top: 30px;
}

.mediaSub2_mobile {
  width: 100%;
  height: 200px;
}

.newsCol {
  margin-top: 10px;
  width: 100%;
  height: 320px;
  text-align: center;
}

.newsCol_mobile {
  margin-top: 10px;
  width: 100%;
  height: 1050px;
  text-align: center;
}

.newsContainer {
  width: 1280px;
  height: 220px;
  margin:0 auto;
}

.newsContainer_mobile {
  width: 100%;
  height: 220px;
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

.newsSpace {
  width: 40px;
  height: 220px;
  float: left;
}

.newColMobile {
  width: 100%;
  height: 480px;
  text-align: center;
}

.newsTabPC {
  float: left;
  width: 290px;
  box-shadow: 1px 1px 2px #e6e6e6;
}

.newsTabMobile {
  width: 100%;
  float: left;
}

</style>


