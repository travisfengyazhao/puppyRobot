<template>
  <div id="pagefooter">
      <div class="pagefooterTop">
        <div :class="_isMobile() ? 'pagefooterMid_mobile' : 'pagefooterMid'">
            <div :class="!_isMobile()?'footerInfo':'footerInfo-mobile'">
                <div :class="!_isMobile()?'footerLeft':'footerLeft-mobile'">
                    <div class="footerLeft_div">
                        <span>售后服务</span>
                        <div>
                            <router-link to="">
                                <a herf="#">客服邮箱</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="footerLeft_div">
                        <span>在线购买</span>
                        <div>
                            <router-link to="">
                                <a herf="#">京东旗舰店</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="footerLeft_div">
                        <span>站点地图</span>
                        <div>
                            <router-link to="">
                                <a herf="#">友情链接</a>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="">
                                <a herf="#">法律声明</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="footerLeft_div">
                        <span>关于我们</span>
                        <div>
                        <router-link to="">
                            <a herf="#">公司介绍</a>
                        </router-link>
                        </div>
                        <div>
                        <router-link to="/joinus">
                            <a herf="#">加入我们</a>
                        </router-link>
                        </div>
                    </div>
                </div>
                <div :class="!_isMobile()?'footerMid':'footerMid-mobile'">
                    <div class="footerMid_1">
                        <div class="footerMid_img">
                            <div class="footerMid_left">
                                <img src="./../../assets/images/footer/QR-code_WeChat.png">
                                <br/>
                                <span>官方微信</span>
                            </div>
                        </div>
                        <div class="footerMid_img">
                            <div class="footerMid_right">
                                <img src="./../../assets/images/footer/QR-code_Weibo.png">
                                <br/>
                                <span>官方微博</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="!_isMobile()?'footerRight':'footerRight-mobile'">
                    <div>
                        <a herf="#">全国统一服务热线：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <span class="serviceNum">400-0008-360&nbsp;</span>
                        <br/>
                        <a herf="#">工作时间：周一至周日 9:00-18:00（仅收市话费）</a>
                    </div>

                </div>

            </div>
        </div>
      </div>
        <div class="recordInfo">
            <p v-if="!_isMobile()">Copyright © 2018 Puppy Robot  |  京公网络备案号 | 网络文化经营许可证备案号</p>
            <p v-else>Copyright © 2018 Puppy Robot  <br />  京公网络备案号 | 网络文化经营许可证备案号</p>
        </div>
  </div>
</template>
<script>
export default {
    methods: {
            _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
    }
}
</script>


<style lang="scss" scoped>
    $footerHeight: 150px;
    $footerColor: #f1f1f1;

    #pagefooter {
        width: 100%;
        z-index: -1;
        // margin-top: 20px;
        
    }

    .pagefooterTop {
        width: 100%;
        text-align: center;
        background-color: $footerColor;
    }

    .pagefooterMid {
        width: 1280px;
        margin: 0 auto;
    }

    .pagefooterMid_mobile {
        width: 100%;
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
        background-color: white;
        width: 100%;
        font-size: 10pt;
    }

    .footerLeft {
        height: $footerHeight;
        float: left;
        width: 35%;
        .footerLeft_div {
            width: 20%;
            margin-top: 20px;
            height: 140px;
            float: left;
            text-align: center;
        }

        span {
            font-size: 12pt;
            font-weight: bold;
        }
    }

    .footerMid {
        height: $footerHeight;
        float: left;
        width: 30%;


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

        span {
            font-size: 12pt;
        }
    }

    .footerRight {
        height: $footerHeight;
        float: right;
        width: 35%;
        div {
            width: 100%;
            margin-top: 20px;
            height: 140px;
            float: right;
            text-align: right;

            span {
                font-size: 16pt;
                font-weight:bold;
            }

            a {
                font-size: 11pt;
            }
        }
        
    }

    .footerLeft-mobile {
        height: $footerHeight;
        width: 100%;
        .footerLeft_div {
            width: 25%;
            margin-top: 20px;
            height: 140px;
            float: left;
            text-align: center;
        }

        span {
            font-size: 12pt;
            font-weight: bold;
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
        div {
            width: 100%;
            margin-top: 20px;
            // height: 140px;
            padding-bottom: 20px;

            span {
                font-size: 16pt;
                font-weight:bold;
            }
        }
        
    }

    a {
        text-decoration-line: none;
        color: black;
        :hover {
            color: #929497;
        }
    }
</style>
