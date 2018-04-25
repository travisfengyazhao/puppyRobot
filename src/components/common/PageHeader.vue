<template>
  <div id='pageheader'>
    <div id='divLogo'>
        <img id='pageheaderlogo' src="./../../assets/puppyheaderlogo.svg">
    </div>
    <div id='divPCNav' v-show="pcMode">
        <ul>
            <li>
                <a herf="">puppy cube</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">puppy cube s</a>
                    </li>    
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">puppy cube</a>
                    </li>    
                    </router-link>
                </ul>
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
                <a herf="">哈奇智能</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">智能家居</a>
                    </li>  
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">解决方案</a>
                    </li>    
                    </router-link>
                     <router-link to="/puppycube">
                    <li>
                        <a herf="">成功案例</a>
                    </li>    
                    </router-link>
                     <router-link to="/puppycube">
                    <li>
                        <a herf="">关于哈奇</a>
                    </li>    
                    </router-link>
                </ul>
            </li>
            <li>
                <a herf="">AI技术方案</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">AI交互技术</a>
                    </li>  
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">机器人技术</a>
                    </li>    
                    </router-link>
                     <router-link to="/puppycubes">
                    <li>
                        <a herf="">智能视觉</a>
                    </li>    
                    </router-link>
                </ul>
            </li>
            <li>
                <a herf="">关于puppy</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">品牌理念</a>
                    </li>  
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">公司介绍</a>
                    </li>    
                    </router-link>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">品牌历程</a>
                    </li>    
                    </router-link>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">团队介绍</a>
                    </li>    
                    </router-link>
                </ul>
            </li>
            <li>
                <a herf="">联系我们</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">招商合作</a>
                    </li>  
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">销售渠道</a>
                    </li>    
                    </router-link>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">加入我们</a>
                    </li>    
                    </router-link>
                    <!-- <router-link to="/puppycubes">
                    <li>
                        <a herf="">客户服务</a>
                    </li>    
                    </router-link> -->
                </ul>
            </li>
            <li>
                <a herf="">媒体中心</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">新闻中心</a>
                    </li>  
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">视频</a>
                    </li>    
                    </router-link>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">行业评测</a>
                    </li>    
                    </router-link>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">产品图鉴</a>
                    </li>    
                    </router-link>
                </ul>
            </li>
        </ul>
    </div>
    <div id='divMobileNav' v-show="!pcMode">
        <div class="mobileMenu" @click="mobileMenuDisplay()"> 
            <div class="mobileMenuLine menuLine1"> </div>
            <div class="mobileMenuLine"> </div>
            <div class="mobileMenuLine menuLine3"> </div>
        </div>
        <!-- <ul :class="'mobileMenuDisplay', isDisplay"> -->
    </div>
    <div v-show="isDisplay" @touchmove.prevent>
        <ul id="mobileMenuList">    
            <router-link to="/puppycubes">
            <li @click="mobileMenuDisplay()">
                <a herf="">puppy cube s</a>
            </li>    
            </router-link>
            <router-link to="/puppycube">
            <li @click="mobileMenuDisplay()">
                <a herf="">puppy cube</a>
            </li>    
            </router-link>
            <router-link to="/puppycube">
            <li @click="mobileMenuDisplay()">
                <a herf="">puppy cube ssss</a>
            </li>    
            </router-link>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'PageHeader',
        data () {
            return {
                pcMode: window.innerWidth >= 1000,
                isDisplay: false
            }
        },

        mounted() {
            const that = this;
            window.onresize = function temp() {
                that.pcMode = window.innerWidth >= 1000;
            };
        },

        methods: {
            mobileMenuDisplay: function() {
                this.isDisplay = !this.isDisplay;
                if(this.isDisplay) {
                    document.querySelector("#mobileMenuList").style.height = 
                    window.innerHeight - document.querySelector("#pageheader").style.height + 'px';
                }
            }
        }
    }
</script>

<style scoped>
    #pageheader {
        background-color: gray;
        opacity: 0.8;
        width: 100%;
        height: 45px;
    }

    #divLogo {
        float: left;
        margin-left: 30px;
    }

    #pageheaderlogo {
        height: 40px;
    }

    #divPCNav {
        float: right;
        margin-right: 80px;
    }

    li { 
        display: inline-block;
        cursor: pointer;
        line-height: 45px;
        padding-left: 15px;
        padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        list-style-type: none;
    } 

    li:hover {
        background-color:black;
        opacity: 0.8;
    }

    ul li:hover>a{
        color: orange;
    }

    ul li {
        position: relative;
    }

    ul {
        margin: 0px;
    }

    ul ul {
        position: absolute;
        top: 45px;
        margin-left: -15px;
        padding: 0px;
        text-align: left;
        display: none;
    }

    ul li:hover > ul {
        display: block;
    }

    ul ul li {
        width: 120px;
        position: relative;
        margin: 0px;
        background-color: gray;
        opacity: 0.9;
    }

    a {
        color: black;
    }

    #divMobileNav {
        float: right;
        margin-right: 12px;
    }

    .mobileMenu {
        height: 30px;
        width: 30px;
        margin: 7.5px 0px 7.5px 0px;
        float: right;
    }

    .mobileMenuLine {
        height: 2.5px;
        width: 22px;
        top: 21.25px;
        right: 16.8px;
        position: absolute;
        background-color: #000;
        border-radius: 2px;
        -webkit-transition: -webkit-transform .2s;
        transition: transform .2s;
    }

    .menuLine1 {
        top: 13px;
    }

    .menuLine3 {
        top: 29px;
    }

    #mobileMenuList {
        position: absolute;
        top: 45px;
        margin-right: 0px;
        padding: 0px;
        text-align: left;
        width:100%;
        background-color: gray;
        opacity: 0.8;
    }

    #mobileMenuList li{
        width: 100%;
        position: relative;
        margin: 0px;

    }
</style>

