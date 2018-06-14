
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
            <NewsCenterTop :newsCenterId="mainTopNews[0].nid" :newsContent="mainTopNews[0]" :newsHeight="480" v-if="mainTopNews && mainTopNews[0]"/>
          </div>
          <div :class="pcMode? 'mediaSub' : 'mediaSub_mobile'">
            <div :class="pcMode?'mediaSub1':'mediaSub1_mobile'">
            <NewsCenterTop :newsCenterId="otherTopNews[0].nid" :newsContent="otherTopNews[0]" :newsHeight="235" :isTitleTwoLine="true" v-if="otherTopNews && otherTopNews[0]"/>
            </div>
            <div :class="pcMode?'mediaSub2':'mediaSub2_mobile'">
              <NewsCenterTop :newsCenterId="otherTopNews[1].nid" :newsContent="otherTopNews[1]" :newsHeight="235" :isTitleTwoLine="true" v-if="otherTopNews && otherTopNews[1]"/>
            </div>
          </div>
        </div>
      </div>
      <div :class="pcMode?'newsCol':'newsCol_mobile'" v-if="normalNews">
        <div :class="pcMode?'newsContainer':'newsContainer_mobile'">
          <div :class="pcMode?'productContainer':'productContainer_mobile'">
            <div v-for="(news, index) in normalNews" :key="news.nid">
              <div :class="pcMode? 'newsTabPC' : 'newsTabMobile'">
                <News :newsContent="news" :newsImageHeight="185" :newsBtnHide="true" />
              </div>
              <div class="newsSpace" v-if="(index+1)%4 != 0">
              </div>
              <div class="newsColSpace" v-if="index!=0 && (index+1)%4 == 0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="loadmore">
          <div class="loadmore_btn" @click="getMoreInfo()" v-show="!moreInfo">
              + 点击加载更多
          </div>
          <!-- <div class="loadmore_nomore" v-show="moreInfo">
              
          </div> -->
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
        moreInfo: false,
        pcMode: window.innerWidth >= 1280,
        normalNews: null,
        mediaLists: null,
        mainTopNews: null,
        otherTopNews: null,
        currentPage: 1,
      }
  },
    components: {
        News,
        NewsCenterTop
    },
    mounted() {
      let _this = this;
      this.$store.dispatch('getTopNewsInfo').then((result)=> { 
        _this.mediaLists = result;
        _this.mainTopNews = _.filter(_this.mediaLists, ['is_main_promote', "1"]);
        _this.otherTopNews = _.filter(_this.mediaLists, ['is_main_promote', "0"]); 
      });
      this.$store.state.pages = 1;
      this.$store.dispatch('getNormalNewsInfo').then((result)=> { 
        _this.normalNews = result;

      });
    },

    methods: {
      getMoreInfo: function() {
        let _this = this;
        if(_this.normalNews.length > 4 && _this.normalNews.length < 9) {
          document.querySelector(".newsCol").style.height = '506px';
        } else if(_this.normalNews.length <= 4) {
          document.querySelector(".newsCol").style.height = '248px';
        }
        this.currentPage++;
        this.$store.state.pages = this.currentPage;
        this.$store.dispatch('getNormalNewsInfo').then((result)=> { 
          if(result) {
            _this.normalNews = _this.normalNews.concat(result);
            let newColHeight = document.querySelector(".newsCol").style.height;
            newColHeight = newColHeight.replace('px',"");
            if(result.length> 4){
              document.querySelector(".newsCol").style.height = (parseInt(newColHeight) + 516) + 'px'; 
            }else {
              document.querySelector(".newsCol").style.height = (parseInt(newColHeight) + 258) + 'px'; 
            }
            if(result.length!=8){
              _this.moreInfo = !_this.moreInfo;
            }
          } else {
            _this.moreInfo = !_this.moreInfo;
          }
        });
      },

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
  height: 506px;
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

.newsColSpace {
  width: 100%;
  height: 10px;
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

.loadmore_nomore {
    height: 36px;
    line-height: 36px;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 70px;
}

</style>
