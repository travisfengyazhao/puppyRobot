
<template>
  <div id="NewsCenter">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              NEWS
            </div>
            <div class="solutionName">媒体报道</div>
          </div>

          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="newscontent">
      <div :class="pcMode? 'mediaReport' : 'mediaReport_mobile'">
        <div :class="pcMode? 'mediaContainer':'mediaContainer_mobile'">
          <div :class="pcMode? 'mediaMain' : 'mediaMain_mobile'">
            <NewsCenterTop :newsCenterId="mediaLists[0].id" :newsContent="mediaLists[0]" :newsHeight="480" />
          </div>
          <div :class="pcMode? 'mediaSub' : 'mediaSub_mobile'">
            <div :class="pcMode?'mediaSub1':'mediaSub1_mobile'">
              <NewsCenterTop :newsCenterId="mediaLists[1].id" :newsContent="mediaLists[1]" :newsHeight="235" :isTitleTwoLine="true"/>
            </div>
            <div :class="pcMode?'mediaSub2':'mediaSub2_mobile'">
              <NewsCenterTop :newsCenterId="mediaLists[2].id" :newsContent="mediaLists[2]" :newsHeight="235" :isTitleTwoLine="true"/>
            </div>
          </div>
        </div>
      </div>
      <div :class="pcMode?'newsCol':'newsCol_mobile'">
        <div :class="pcMode?'newsContainer':'newsContainer_mobile'">
          <div :class="pcMode?'productContainer':'productContainer_mobile'">
            <div v-for="(news, index) in newsContents" :key="news.id">
              <div :class="pcMode? 'newsTabPC' : 'newsTabMobile'">
                <News :newsContent="news" :newsImageHeight="185" :newsBtnHide="true" />
              </div>
              <div class="newsSpace" v-if="pcMode && (index < 3)">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="pcMode?'newsCol':'newsCol_mobile'">
        <div :class="pcMode?'newsContainer':'newsContainer_mobile'">
          <div :class="pcMode?'productContainer':'productContainer_mobile'">
            <div v-for="(product, index) in productLists" :key="product.id">
              <div :class="pcMode? 'newsTabPC' : 'newsTabMobile'">
                <News :newsContent="product" :newsImageHeight="185" :newsBtnHide="true" />
              </div>
              <div class="newsSpace" v-if="pcMode && (index < 3)">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="loadmore">
          <div class="loadmore_btn">
              + 点击加载更多
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import News from './../common/News'
import NewsCenterTop from './../common/NewsCenterTop'

export default {
  data() {
      return {
        pcMode: window.innerWidth >= 1280,
        newsContents: [
            {
                id: 1,
                title: 'puppy亮相AI无人车技术，不只是无人车这么简单',
                img: require("./../../assets/images/newscenter/div_04.jpg"),
            },
            {
                id: 2,
                title: '小狗机器人技术，未来人工智能机器人的数量真的会超过人类？',
                img: require("./../../assets/images/newscenter/div_05.jpg"),
            },
            {
                id: 3,
                title: 'puppy亮相AI无人车技术，不只是无人车这么简单',
                img: require("./../../assets/images/newscenter/div_06.jpg"),
            },
            {
                id: 4,
                title: '小狗机器人技术，未来人工智能机器人的数量真的会超过人类？',
                img: require("./../../assets/images/newscenter/div_07.jpg"),
            }
        ],
        productLists: [
            {
                id: 1,
                title: '无论身在何处，哈奇智家APP都可掌控家中一切',
                img: require("./../../assets/images/newscenter/div_08.jpg"),
            },
            {
                id: 2,
                title: '哈奇智能让生活更智慧',
                img: require("./../../assets/images/newscenter/div_09.jpg"),
            },
            {
                id: 3,
                title: '无论身在何处，哈奇智家APP都可掌控家中一切',
                img: require("./../../assets/images/newscenter/div_10.jpg"),
            },
            {
                id: 4,
                title: '哈奇智能让生活更智慧',
                img: require("./../../assets/images/newscenter/div_11.jpg"),
            }
        ],
        mediaLists: [
            {
                id: 1,
                title: '小狗机器人真黑科技产品魔幻上市: puppy cube s 光影魔屏触手可及',
                img: require("./../../assets/images/newscenter/div_01.jpg"),
            },
            {
                id: 2,
                title: '大疆已“孤独”了太久 究竟谁能成为 挑战者？',
                img: require("./../../assets/images/newscenter/div_02.jpg"),
            },
            {
                id: 3,
                title: '智能家居操作系统之争，安卓9.0 将全面超远IOS',
                img: require("./../../assets/images/newscenter/div_03.jpg"),
            }
        ]    
      }
  },
    components: {
        News,
        NewsCenterTop
    },
  methods: {

  }
}
</script>




<style lang="scss" scoped>
$hachiSMB: 46px;

    .hachiheader {
        width: 100%;
        text-align: center;
    }

    .headerContent {
        width: 1280px;
        margin: 0 auto;
    }

    #divNews {
        float: left;
        height: $hachiSMB;
        line-height: $hachiSMB;
        width: 73.17px;
    }

    .hachiThridMenu {
        height: $hachiSMB;
    }

    .solutionName {
        float: left;
        font-size: 13pt;
        height: $hachiSMB;
        line-height: $hachiSMB;
    }

    .hachiHT {
        width: 100%;
        height: $hachiSMB;
    }


    .headerLine {
        width: 100%;
        height: 1px;
        background-image: url('./../../assets/images/hachi/solution/nav_top_Hachi_line.png');
    }

    .newscontent {
        margin-top: 30px;
        width: 100%;
    }

    
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
  height: 675px;
  width: 100%;
  text-align: center;
}

.mediaContainer {
  width: 1010px;
  height: 480px;
  margin: 0 auto;
}

.mediaContainer_mobile {
  width: 100%;
  height: 480px;
  margin: 0 auto;
}

.mediaMain {
  height: 430px;
  width: 755px;
  margin-right: 10px;
  float: left;

}

.mediaMain_mobile {
  height: 470px;
  width: 100%;
}

.mediaSub {
  width: 245px;
  float: left;
}

.mediaSub_mobile {
  width: 100%;
  float: left;
}

.mediaSub1 {
  width: 100%;
  height: 235px;
}

.mediaSub1_mobile {
  width: 50%;
  height: 235px;
  float: left;
}

.mediaSub2 {
  width: 100%;
  height: 235px;
  margin-top: 10px;
}

.mediaSub2_mobile {
  width: 50%;
  height: 235px;
  float:left;
}

.newsCol {
  width: 100%;
  height: 248px;
  text-align: center;
  margin-top: 28px;
}

.newsCol_mobile {
  width: 100%;
  height: 576px;
  text-align: center;
  margin-top: 28px;
}

.newsContainer {
  width: 1010px;
  height: 248px;
  margin:0 auto;
}

.newsContainer_mobile {
  width: 100%;
  height: 576px;
  margin:0 auto;
}

.techContainer {
  float: left;
  width: 1010px;
}

.techContainer_mobile {
  float: left;
  width: 100%;
}

.productContainer {
  float: left;
  width: 1010px;
}

.productContainer_mobile {
  float: left;
  width: 100%;
}

.newsSpace {
  width: 10px;
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
  width: 245px;
  box-shadow: 1px 1px 2px #e6e6e6;
}

.newsTabMobile {
  width: 50%;
  float: left;
}

.loadmore {
    width: 100%;
    margin-top: 20px;
    position: relative;
}

.loadmore_btn {
    height: 36px;
    line-height: 36px;
    width: 500px;
    margin: 0 auto;
    border: 1px solid #e6e7e8;
    background-color: #f1f1f1;
    margin-bottom: 70px;
    cursor: pointer;
}

</style>
