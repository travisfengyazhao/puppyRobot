
<template>
  <div id="videodetail">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              VIDEO
            </div>
            <div class="solutionName">产品视频</div>
          </div>

          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="videocontent">
        <div class="container">
            <div class="container_detail">
            <div class="detail">
                <div class="detail_mid">
                    <div class="article_title">
                        {{videoArticle.title}}
                    </div>

                    <div class="article_auth_date">
                        <div class="auth_img"><img :src='videoArticle.auth_img'/></div>
                        <div class="auth">{{videoArticle.auth}}</div>
                        <div class="date">{{videoArticle.date}}</div>
                        <!-- <div class="shareDiv">
                            <img src="./../../assets/images/videocenter/share.png">
                        </div>
                        <div class="shareDiv">
                            分享到：
                        </div> -->
                    </div>

                    <div class="speratLine"></div>
                    <div class="article" v-html="videoArticle.article"></div>
                    <div class="video">
                        <video :src="videoArticle.video" id="article_video" preload="true" controls="controls" width="100%"></video>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import router from "./../../router/index"
export default {
    data() {
        return {
            videoArticle: null,
            //fake data;
            videoLists: [
                {
                    id: '1',
                    date: 'May 24, 2018, 09:10',
                    title: '小狗机器人真黑科技产品魔幻 上市: puppy cube s 光影魔屏 触手可及',
                    auth: 'puppy cube',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/videocenter/div_01.jpg"),
                    article: '<p>&nbsp;&nbsp;&nbsp;&nbsp;小狗机器人黑科技产品光影魔屏puppy cube s上市，未来触手可及。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;于5月24日发布的小狗机器人puppy cube s智能化设备。</p>',
                    video: require('./../../assets/video/puppy_demo_1.mp4'),
                },
                {
                    id: '2',
                    date: 'May 24, 2018',
                    title: '智慧办公黑科技puppy cube s 协同书写，墙面秒变白板，视 频会议高效便捷',
                    img: require("./../../assets/images/videocenter/div_02.jpg"),
                }
            ],
        }
    },

    beforeMount() {
        let videoId = this.GetQueryString('id');
        this.videoArticle=_.filter(this.videoLists, ['id', videoId])[0];
    },

    methods: {
        GetQueryString: function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
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

    .videocontent {
        width: 100%;
        background-color: #efefef;
        position: relative;
    }

    .container {
        // margin-top: 70px;
        margin-bottom: 70px;
    }

    .container_detail {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .detail {
        margin: 0 auto;
        width: 1010px;
        background-color: white;
    }

    .detail_mid {
        padding: 75px 85px 105px 75px;
        text-align: left;
    }

    .article_title {
        font-size: 20pt;
    }

    .article_auth_date {
        margin-top: 70px;
        height: 50px;
    }

    .auth_img {
        float: left;
    }

    .auth {
        float: left;
        margin-left: 5px;
        line-height: 43px;
    }

    .date {
        float: left;
        margin-left: 5px;
        color:  #919294;
        line-height: 43px;
    }

    .shareDiv {
        float: right;
        line-height: 43px;
        color: #919294;
        line-height: 43px;
    }

    .speratLine {
        width: 100%;
        height: 1px;
        background-color: #a6a8ab;
        margin-top: 30px;

    }

    .article {
        margin-top: 40px;
    }

    .video {
        margin-top: 40px;
    }


   

</style>
