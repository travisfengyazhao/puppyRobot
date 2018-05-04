<template>
  <div id="pagefooter">
        <div :class="pcMode?'footerInfo':'footerInfo-mobile'" :v-if="pcMode">
            <div :class="pcMode?'footerLeft':'footerLeft-mobile'">
                <div class="footerLeft_div">
                    <span>售后服务</span>
                    <div>
                        <a herf="#">客服邮箱</a>
                    </div>
                </div>
                <div class="footerLeft_div">
                    <span>在线购买</span>
                    <div>
                    <a herf="#">京东旗舰店</a>
                    </div>
                </div>
                <div class="footerLeft_div">
                    <span>站点地图</span>
                    <div>
                    <a herf="#">友情链接</a>
                    </div>
                    <div>
                    <a herf="#">法律声明</a>
                    </div>
                </div>
            </div>
            <div :class="pcMode?'footerMid':'footerMid-mobile'">
                <div class="footerMid_1">
                    <div class="footerMid_img">
                        <div class="footerMid_left">
                            <img src="./../../assets/images/footer/Wechat.jpeg">
                            <br/>
                            <span>官方微信</span>
                        </div>
                    </div>
                    <div class="footerMid_img">
                        <div class="footerMid_right">
                            <img src="./../../assets/images/footer/WeiBo.png">
                            <br/>
                            <span>官方微博</span>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="pcMode?'footerRight':'footerRight-mobile'">
                <div>
                    <a herf="#">全国统一服务热线：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <span class="serviceNum">400-0008-360&nbsp;</span>
                    <br/>
                    <a herf="#">工作时间：周一至周日 9:00-18:00（仅收市话费）</a>
                </div>

            </div>

        </div>
        <div class="recordInfo">
            <p v-if="pcMode">Copyright © 2018 Puppy Robot  |  京公网络备案号 | 网络文化经营许可证备案号</p>
            <p v-else>Copyright © 2018 Puppy Robot  <br />  京公网络备案号 | 网络文化经营许可证备案号</p>
        </div>
  </div>
</template>
<script>
export default {
        data () {
            return {
                pcMode: window.innerWidth >= 1280
            }
        },

        mounted() {
            const that = this;
            window.onresize = function temp() {
                // console.log(window.innerWidth);
                that.pcMode = window.innerWidth >= 1280;
            };
        },
}
</script>


<style lang="scss" scoped>
    $footerHeight: 150px;
    $footerColor: #f1f1f1;

    #pagefooter {
        width: 100%;
        z-index: -1;
    }

    .footerInfo {
        height: $footerHeight;
        width: 100%;
        background-color: $footerColor;
    }

    .footerInfo-mobile {
        width: 100%;
        background-color: $footerColor;
    }

    .recordInfo {
        width: 100%;
        font-size: 8pt;
    }

    .footerLeft {
        height: $footerHeight;
        float: left;
        width: 30%;
        margin-left: 3%;
        .footerLeft_div {
            width: 30%;
            margin-top: 20px;
            height: 140px;
            float: left;
            text-align: center;
        }

        a {
            font-family: 'PingFangSC-Regular', 'PingFang SC';
            font-weight: 400;
            font-style: normal;
            color: #169BD5;
            font-size: 15px;
        }
    }

    .footerMid {
        height: $footerHeight;
        float: left;
        width: 34%;


        .footerMid_1 {
            width: 100%;

            .footerMid_img {
            width: 50%;
            margin-top: 20px;
            height:140px;
            float: left;
            text-align: center;
            }
        }

        img {
            width: 90px;
            height: 90px;
        }
        .footerMid_left {
            float: right;
            margin: 0px 5px 0px 5px
        }
        .footerMid_right {
            float: left;
            margin: 0px 5px 0px 5px
        }
    }

    .footerRight {
        height: $footerHeight;
        float: right;
        width: 30%;
        margin-right: 3%;
        div {
            width: 100%;
            margin-top: 20px;
            height: 140px;
            float: right;
            text-align: right;

            span {
                font-size: 14pt;
                font-weight:bold;
            }

            a {
                font-size: 10pt;
            }
        }
        
    }

    .footerLeft-mobile {
        height: $footerHeight;
        width: 100%;
        margin-left: 3%;

        .footerLeft_div {
            width: 30%;
            margin-top: 20px;
            height: 140px;
            float: left;
            text-align: center;
        }

        a {
            font-family: 'PingFangSC-Regular', 'PingFang SC';
            font-weight: 400;
            font-style: normal;
            color: #169BD5;
            font-size: 15px;
        }
    }

    .footerMid-mobile {
        width: 100%;
        .footerMid_1 {
            width: 100%;

            .footerMid_img {
            width: 100%;
            margin-top: 20px;
            height:140px;

            text-align: center;
            }
        }

        img {
            width: 90px;
            height: 90px;
        }
    }

    .footerRight-mobile {
        width: 100%;
        margin-right: 3%;
        div {
            width: 100%;
            margin-top: 20px;
            height: 140px;

            span {
                font-size: 14pt;
                font-weight:bold;
            }
        }
        
    }
</style>
