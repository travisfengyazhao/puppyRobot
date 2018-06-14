<template>
  <div id='pageheader'>
    <div :class="this._isMobile()? 'pageheaderMid_mobile' : 'pageheaderMid'">
        <div id='divLogo'>
            <router-link :to="!this._isMobile()? '/' :''">
            <img id='pageheaderlogo' src="./../../assets/images/header/puppy_logo.svg">
            </router-link>
        </div>
        <div id='divPCNav' v-show="!_isMobile()">
            <ul>
                <li @mouseover="cubeSecMenuDisplay()" @mouseout="cubeSecMenuHide()">
                    <a herf="">puppy cube</a>
                    <div class="divCubeSecMenu">
                        <ul>
                            <router-link to="/puppycubes">
                            <li>
                                <img src="./../../assets/images/icon_cube_s.png">
                                <a herf="">puppy cube s</a>
                            </li>    
                            </router-link>
                            <router-link to="/puppycube">
                            <li>
                                <img src="./../../assets/images/icon_cube.png">
                                <a herf="">puppy cube</a>
                            </li>    
                            </router-link>
                        </ul>
                    </div>
                </li>
                <!-- <li>
                    <a herf="">AI机器人</a>
                    <ul>
                    <router-link to="/puppyrobot">
                        <li>
                            <a herf="">家用机器人</a>
                        </li>    
                    </router-link>
                    <router-link to="/puppycubes">
                        <li>
                            <a herf="">送货机器人</a>
                        </li>    
                    </router-link>
                    </ul>    
                </li> -->
                <li>
                    <a herf="">Hachi哈奇智能</a>
                    <ul>
                        <router-link to="/hachisolution">
                        <li>
                            <a herf="">解决方案</a>
                        </li>    
                        </router-link>
                        <router-link to="/hachiproduct">
                        <li>
                            <a herf="">产品中心</a>
                        </li>    
                        </router-link>
                        <router-link to="/hachicases">
                        <li>
                            <a herf="">应用案例</a>
                        </li>    
                        </router-link>
                    </ul>
                </li>
                <li>
                    <a herf="">AI技术方案</a>
                    <ul>
                        <!-- <router-link to="">
                        <li>
                            <a herf="">AI交互技术</a>
                        </li>  
                        </router-link> -->
                        <router-link to="/robottech">
                        <li>
                            <a herf="">机器人技术</a>
                        </li>    
                        </router-link>
                        <router-link to="/aisighttech">
                        <li>
                            <a herf="">智能视觉技术</a>
                        </li>    
                        </router-link>
                    </ul>
                </li>
                <li>
                    <a herf="">关于puppy</a>
                    <ul>
                        <!-- <router-link to="">
                        <li>
                            <a herf="">品牌理念</a>
                        </li>  
                        </router-link> -->
                        <router-link to="/aboutus">
                        <li>
                            <a herf="">公司介绍</a>
                        </li>    
                        </router-link>
                        <!-- <router-link to="">
                        <li>
                            <a herf="">品牌历程</a>
                        </li>    
                        </router-link> -->
                        <!-- <router-link to="">
                        <li>
                            <a herf="">团队介绍</a>
                        </li>    
                        </router-link> -->
                        <router-link to="/contactus">
                        <li>
                            <a herf="">联系我们</a>
                        </li>    
                        </router-link>
                    </ul>
                </li>
                <li>
                    <a herf="">资讯中心</a>
                    <ul>
                        <router-link to="/newscenter">
                        <li>
                            <a herf="">媒体报道</a>
                        </li>  
                        </router-link>
                        <router-link to="/videocenter">
                        <li>
                            <a herf="">产品视频</a>
                        </li>    
                        </router-link>
                        <!-- <router-link to="">
                        <li>
                            <a herf="">产品评测</a>
                        </li>    
                        </router-link>
                        <router-link to="">
                        <li>
                            <a herf="">产品图鉴</a>
                        </li>    
                        </router-link> -->
                    </ul>
                </li>
                <li>
                    <a href="http://bbs.puppyrobot.com/" target="_blank">puppy社区</a>
                </li>
            </ul>
        </div>

        <div id='divMobileNav' v-show="_isMobile()">
            <div class="headerMobileMenu" @click="mobileMenuDisplay()">
                <div class="mobileMenu"> 
                    <span class="line-t">
                        <span class="mobileMenuLine"> </span>
                    </span>
                    <span class="line-m">
                        <span class="mobileMenuLine"> </span>
                    </span>
                    <span class="line-b">
                        <span class="mobileMenuLine"> </span>
                    </span>
                </div>
            </div>
        </div>
        <div v-show="isDisplay" @touchmove.prevent>
            <ul id="mobileMenuList">    
                <router-link to="/m_puppycubes">
                <li @click="mobileMenuDisplay()">
                    <a herf="">puppy cube s</a>
                </li>    
                </router-link>
                <router-link to="/m_puppycube">
                <li @click="mobileMenuDisplay()">
                    <a herf="">puppy cube</a>
                </li>    
                </router-link>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'PageHeader',
        data () {
            return {
                isDisplay: false,
                cubeSecMenuDisp: false
            }
        },

        methods: {
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                return flag;
            },
            mobileMenuDisplay: function() {
                this.isDisplay = !this.isDisplay;
                if(this.isDisplay) {
                    document.querySelector("#mobileMenuList").style.height = 
                    window.innerHeight - document.querySelector("#pageheader").style.height + 'px';
                    document.querySelector(".line-t").style.transform = 'rotate(45deg)';
                    document.querySelector(".line-b").style.transform = 'rotate(135deg)';
                    document.querySelector(".line-t .mobileMenuLine").style.transform = 'translateY(0px)';
                    document.querySelector(".line-b .mobileMenuLine").style.transform = 'translateY(0px)';
                    document.querySelector(".line-m .mobileMenuLine").style.opacity = '0';
                } else {
                    document.querySelector(".line-t").style.transform = 'rotate(180deg)';
                    document.querySelector(".line-b").style.transform = 'rotate(180deg)';
                    document.querySelector(".line-t .mobileMenuLine").style.transform = 'translateY(-8px)';
                    document.querySelector(".line-b .mobileMenuLine").style.transform = 'translateY(8px)';
                    document.querySelector(".line-m .mobileMenuLine").style.opacity = '1';
                }
            },

            cubeSecMenuDisplay: function() {
                this.cubeSecMenuDisp = true;
            },

            cubeSecMenuHide: function() {
                this.cubeSecMenuDisp = false;
            }
        }
    }
</script>

<style scoped lang="scss" type="text/css">
    $headerHeight: 46px;
    $menuSec: 44px;
    $headerColor: #f1f1f1;

    #pageheader {
        background-color: $headerColor;
        // opacity: 0.9;
        width: 100%;
        height: $headerHeight;
        z-index: 9999;
        text-align: center;
    }

    .pageheaderMid {
        width: 1280px;
        margin: 0 auto;
    }

    .pageheaderMid_mobile {
        width: 100%;
    }

    #divLogo {
        float: left;
        // margin-left: 30px;
        height: $headerHeight;
    }

    #pageheaderlogo {
        height: 30px;
        margin-top: $headerHeight/2 - 30px/2; 
    }

    #divPCNav {
        float: right;
        // margin-right: 30px;
    }

    li { 
        display: inline-block;
        cursor: pointer;
        line-height: $headerHeight;
        // padding-left: 15px;
        // padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        width: 130px;
        font-size: 11pt;
        list-style-type: none;
    } 

    li:hover {
        background-color:white;
        // width: 110px;
        // box-shadow: 1px 1px 1px #e6e6e6;
        // opacity: 1;
    }

    ul li:hover>a{
        color: #929497;
    }

    ul li {
        position: relative;
    }

    ul {
        margin: 0px;
    }

    ul ul {
        position: absolute;
        top: $headerHeight;
        padding: 0px;
        text-align: center;
        line-height: 44px !important;
        display: none;
        z-index: 9999;
        background-color: white;
        box-shadow: 2px 2px 2px #e6e6e6;
    }

    .divCubeSecMenu {
        position: fixed;
        top: $headerHeight;
        margin-top: -1px;
        border-top: none;
        left: 0px;
        padding: 0px;
        text-align: center;
        width: 100%;
        // height: 200px;
        z-index: 9999;
        display: none;
        // box-shadow: 1px 1px 1px #e6e6e6;

        img {
            margin: 30px 10px -30px 0px;
        }
        ul li {
            width: 120px !important;
        }
    }

    ul li:hover > ul {
        display: block;
    }

    ul li:hover .divCubeSecMenu{
        display: block;
    }

    ul ul li {
        width: 130px;
        height: $menuSec;
        position: relative;
        margin: 0px;
        background-color: white;
        display: inline-block;
        line-height: $menuSec !important;
        right: 0;
        top: 0px;
        bottom: 0px;
        list-style-type: none;
        // opacity: 0.9;
        z-index: 9999;
    }

    .divCubeSecMenu ul {
        width: 100%;
        height: 180px;
        position: absolute;
        margin: 0px;
        background-color: white;
        display: inline-block;
        line-height: $menuSec !important;
        padding-left: 15px;
        padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        list-style-type: none;
        // opacity: 0.9;
        z-index: 9999;
    }

    .divCubeSecMenu ul li {
        width: 100%;
        height: $menuSec;
        position: relative;
        margin: 0px;
        background-color: white;
        display: inline-block;
        line-height: $menuSec !important;
        padding-left: 15px;
        padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        list-style-type: none;
        // opacity: 0.9;
        z-index: 9999;
    }

    a {
        font-size: 12pt;
        color: black;
        text-decoration: none;
        font-family: 'Pingfang SC','Microsoft YaHei',Arial,Helvetica,sans-serif; 
    }

    #divMobileNav {
        float: right;
        width: $headerHeight;
    }

    .headerMobileMenu {
        position:absolute;
        height: $headerHeight;
        width: $headerHeight;
        float: right;
    }

    .mobileMenu {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $headerColor;
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 200ms;
        transition-duration: 200ms;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .mobileMenu>span {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: -webkit-transform .25s,opacity .25s;
        transition: transform .25s,opacity .25s;
        -webkit-transition-timing-function: cubic-bezier(0.4,.01,.165,.99);
        transition-timing-function: cubic-bezier(0.4,.01,.165,.99);
    }

    .mobileMenuLine {
        height: 2.5px;
        width: 24px;
        top: $headerHeight/2 - 2.5px/2;
        right: $headerHeight/2 - 24px/2;
        position: absolute;
        background-color: #000;
        border-radius: 2px;
        transition: transform .2s;

    }

    #mobileMenuList {
        position: absolute;
        top: $headerHeight;
        margin-right: 0px;
        padding: 0px;
        text-align: left;
        width:100%;
        background-color: $headerColor;
        a {
            margin-left: 5px;
        }
    }

    #mobileMenuList li{
        width: 100%;
        position: relative;
        margin: 0px;
    }

    .line-t {
        position: absolute;
        top: $headerHeight;
        margin-right: 0px;
        padding: 0px;
        text-align: center;
        width:100%;
    }

    .line-b {
        position: absolute;
        top: $headerHeight;
        margin-right: 0px;
        padding: 0px;
        text-align: center;
        width:100%;
    }

    .line-t .mobileMenuLine {
        -webkit-transform: translateY(-8px); 
        transform: translateY(-8px); 
    }

    .line-b .mobileMenuLine {
        -webkit-transform: translateY(8px); 
        transform: translateY(8px); 
    }

</style>

