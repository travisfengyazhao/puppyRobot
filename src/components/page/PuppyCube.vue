<template>
  <div id="PuppyCubeS">
    <div class="video_container">
        <div class="box">
            <video src="./../../assets/puppy_demo.mp4" id="bgvideo" autoplay loop width="100%" muted="true">
            </video>
            <div class="divMp4Front">
            </div> 
            <div class="divMp4Words">
                <div class="div_txt_btn">
                    
                    <img src="./../../assets/images/puppy_cube/focus_title_01.png">
                    <br />
                    <br />
                    <div class="video_btn1">
                        <div class="video_btns" >
                            <div class="video_btn2" @click="PlayVideo()">
                                <img class="imgPlay" src="./../../assets/images/puppy_cube_s/button_wzsp.png">
                                <span class="span_b">观看完整视频</span>   
                            </div>
                            <div class="video_space"></div>
                            <div class="video_btn3">
                                <img class="imgPlay" src="./../../assets/images/puppy_cube/button_jdzc.png">
                                <span class="span_b">京东众筹</span>   
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    </div>
    <div class="divVideoPlayer" v-show="videoPlay" @click="displayVideoSelecter()">
        <div class="closeBtn" @click="PlayVideo()">
            X
        </div>
        <video src="./../../assets/video/puppy_demo_1.mp4" id="fullVideo" preload="true" loop controls="controls" width="100%">
        </video>
        <div class="videoSelect">
            <img class="videoImage1" src="./../../assets/images/puppy_cube_s/video1.jpg" @click="selectVideo(1)">
            <img class="videoImage2" src="./../../assets/images/puppy_cube_s/video2.jpg" @click="selectVideo(2)">
        </div>
    </div>
    <div class="designImg" style="background-color:black; margin-top:-6px;">
        <img src="./../../assets/images/puppy_cube_s/div_cpxt.jpg">
        <!-- <div class="div_image_common" style="background-image: url('./../../assets/images/puppy_cube_s/div_cpxt.jpg');">
        </div> -->
    </div>
    <div class="designImg"><Banner :slideLists="designList" :swiperHeight="'680px'"></Banner></div>
    <div><Banner :slideLists="smartHomeList" :swiperHeight="'680px'"></Banner></div>
    <div><Banner :slideLists="smartOfficeList" :swiperHeight="'680px'"></Banner></div>
<div class="designImg" style="background-color:#FFFFFF;">
        <img src="./../../assets/images/puppy_cube_s/div_aick.jpg">
        <!-- <div class="div_image_common" style="background-image: url('./../../assets/images/puppy_cube_s/div_aick.jpg');">
        </div> -->
    </div>
    <div class="designImg" style="background-color:#f65b23;">
        <img src="./../../assets/images/puppy_cube_s/div_aiyy.jpg">
        <!-- <div class="div_image_common" style="background-image: url('./../../assets/images/puppy_cube_s/div_aiyy.jpg');">
        </div> -->
    </div>
    <div class="designImg" style="background-color:#121315;">
        <img src="./../../assets/images/puppy_cube_s/div_cdj.jpg">
        <!-- <div class="div_image_common" style="background-image: url('./../../assets/images/puppy_cube_s/div_cdj.jpg');">
        </div> -->
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <img src="./../../assets/images/puppy_cube_s/div_cpts.jpg">
        <!-- <div class="div_image_common" style="background-image: url('./../../assets/images/puppy_cube/div_cpts.jpg');">
        </div> -->
    </div>
    <div class="designImg" style="background-color:#000000;">
        <img src="./../../assets/images/puppy_cube_s/div_cpcs_01.jpg">
        <!-- <div class="div_image_common" style="background-image: url('./../../assets/images/puppy_cube/div_cpcs_01.jpg'); height：860px !important;">
        </div> -->
    </div>
    <div class="designImg" style="background-color:#000000;">
        <img src="./../../assets/images/puppy_cube_s/div_cpcs_02.jpg">
        <!-- <div class="div_image_common" style="background-image: url('./../../assets/images/puppy_cube/div_cpcs_02.jpg'); height：910px !important;">
        </div> -->
    </div>
  </div>

</template>

<script>
import Banner from './../common/Banner'

export default {
    data() {
        return {
            videoPlay: false,
            designList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube/div_sj_01.jpg"),
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube/div_sj_02.png"),
                backgroundColor: "#000000",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube/div_sj_03.png"),
                backgroundColor: "#F5F5F5",
            },
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube/div_zhjt_01.png"),
                backgroundColor: "#F5F5F5",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube/div_zhjt_02.png"),
                backgroundColor: "#F5F5F5",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube/div_zhjt_03.png"),
                backgroundColor: "#e5e4ea",
            },
            {            
                id: 4,
                img: require("./../../assets/images/puppy_cube/div_zhjt_04.png"),
                backgroundColor: "#000000",
            },
            {            
                id: 5,
                img: require("./../../assets/images/puppy_cube/div_zhjt_05.png"),
                backgroundColor: "#000000",
            },
            ],
            smartOfficeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_01.png"),
                backgroundColor: "#262a30",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_02.png"),
                backgroundColor: "#262a30",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_03.png"),
                backgroundColor: "#262a30",
            },
            ],
            
        }
    },
    components: {
        Banner
    },
    mounted() {
        document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
        document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
        document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;
        document.querySelector(".videoSelect").style.width = (window.document.body.offsetWidth / 1920 * 192 * 2).toFixed(2) + "px";
        document.querySelector(".videoSelect").style.height = ((window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920) * 2).toFixed(2) + "px"; 
        document.querySelector(".videoSelect").style.top = (window.document.body.offsetWidth * (1080 /1920) - 
                                                        (window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920) * 2 -30) + "px" ;
        document.querySelector(".videoSelect").style.left = (window.document.body.offsetWidth - (window.document.body.offsetWidth / 1920 * 192 * 2) - 2) + "px" ;
        document.querySelector(".videoImage1").style.width = (window.document.body.offsetWidth / 1920 * 192 * 2).toFixed(2) + "px";
        document.querySelector(".videoImage1").style.height = ((window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920)).toFixed(2) + "px"; 
        document.querySelector(".videoImage2").style.width = (window.document.body.offsetWidth / 1920 * 192 * 2).toFixed(2) + "px";
        document.querySelector(".videoImage2").style.height = ((window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920)).toFixed(2) + "px"; 
        window.onresize = function temp() {
            if(document.querySelector(".divMp4Front")){
                document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
                }
            if(document.querySelector(".divMp4Words")){
                document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
            }
            if(document.querySelector(".div_txt_btn")){document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;}
            if(document.querySelector(".videoSelect")){
                document.querySelector(".videoSelect").style.width = (window.document.body.offsetWidth / 1920 * 192 * 2).toFixed(2) + "px";
                document.querySelector(".videoSelect").style.height = ((window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920) * 2).toFixed(2) + "px"; 
                document.querySelector(".videoSelect").style.top = (window.document.body.offsetWidth * (1080 /1920) - 
                                                                (window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920) * 2 - 30) + "px" ;
                document.querySelector(".videoSelect").style.left = (window.document.body.offsetWidth - (window.document.body.offsetWidth / 1920 * 192 * 2) - 2) + "px" ;
            }
            if(document.querySelector(".videoImage1") && document.querySelector(".videoImage2")) {
                document.querySelector(".videoImage1").style.width = (window.document.body.offsetWidth / 1920 * 192 * 2).toFixed(2) + "px";
                document.querySelector(".videoImage1").style.height = ((window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920)).toFixed(2) + "px"; 
                document.querySelector(".videoImage2").style.width = (window.document.body.offsetWidth / 1920 * 192 * 2).toFixed(2) + "px";
                document.querySelector(".videoImage2").style.height = ((window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920)).toFixed(2) + "px";
            }

        };
    },
    methods: {

        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
        PlayVideo: function(){
            this.videoPlay = !this.videoPlay;
            if(this.videoPlay) {
                document.querySelector(".videoSelect").style.opacity = 1;
                // document.querySelector("#fullVideo").play();
            } else {
                document.querySelector("#fullVideo").pause();
            }
        },
        selectVideo: function(index){
            if(index == 1) {
                document.querySelector("#fullVideo").pause();
                document.querySelector("#fullVideo").style.src = "./../../assets/video/puppy_demo_1.mp4";
                document.querySelector("#fullVideo").play();
            } else {
                document.querySelector("#fullVideo").pause();
                document.querySelector("#fullVideo").style.src = "./../../assets/video/puppy_demo_1.mp4";
                document.querySelector("#fullVideo").play();
            }
            
            this.videoSelecterFadeOut();
            
        },
        displayVideoSelecter: function(){
            document.querySelector(".videoSelect").style.opacity = 1;
        },

        btnMouseOver: function(className){
            document.querySelector(className).style.backgroundColor = "#0078fa";
        },

        btnMouseOut: function(className){
            document.querySelector(className).style.backgroundColor = "#f2f2f2";
        },

        videoSelecterFadeOut: function(){
            var timer,timer2,a=1,t=true;
            timer = setInterval(function(){              
                a -= 0.2;
                t = false;
                if( a <= 0){
                    a=0;
                    clearInterval(timer);
                }
                document.querySelector(".videoSelect").style.opacity = a;                            
            },100)   
        }

    }
}
</script>

<style lang="scss" scoped>
    $headerHeight: 46px;
    $headerColor: #f2f2f2;

    #bgvideo {
        position: relative;
        top: 0px; 
        left: 0px;
        min-width: 100%;
        width: 100%; 
        height: auto; 
        z-index: -100;
        //background: url(polina.jpg) no-repeat;
        background-size: cover; 
    }

    #fullVideo {
        margin-bottom: -8px;
    }
    .video_container {
        background-color: black;
    }
    .box {
        display: inline-block;
        background-color: black;
    }

    .videoImage1, .videoImage2 {
        cursor: pointer;
    }

    .divmp4 {
        width: 100%;
        text-align: center;
        background-color: black;
    }

    .divMp4Front {
        position: absolute;
        top: 46px;
        left: 0px;
        width: 100%;
        //height: 100%;
        background-color: black;
        opacity: 0.6;
        text-align: center;
        vertical-align: middle;
        z-index: -99;
    }

    .divVideoPlayer {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        background-color: black;
        text-align: center;
        z-index: 99999;
    }

    .videoSelect {
        width: 15vw;
        height: 20vh;
        background-color: red;
        position: absolute;
        opacity: 0.8;
        
    }

    .divMp4Words {
        position: absolute;
        top: 46px;
        width: 100%;
        text-align: center;
        vertical-align: middle;
        color: white;
        display: table;
        left: 0px;
    }

    .puppy_txt1{
        font-family: 'PingFangSC-Medium', 'PingFang SC Medium', 'PingFang SC';
        font-weight: 500;
        font-style: normal;
        //font-size: 25px;
        color: #FFFFFF;
        text-align: center;
        line-height: normal;
    }
    span {
        display:inline-block;
    }

    .span_b {
        font-size: 11pt;
        line-height: 40px;
        color: black;
        white-space: nowrap;
        overflow:hidden;
    }

    .div_txt_btn {
        vertical-align: middle; 
        display: table-cell; 
        overflow: hidden; 
    }

    .video_btn1 {
        text-align:center;
    }
    
    .video_btns {
        width: 300px;
        height: 40px;
        text-align: center;
        margin: 0 auto;
        span:hover {
            color: #929497;
        }
    }

    .video_btn2 {
        width: 140px;
        height: 40px;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
        float: left;
        margin: 0 auto;
        background-color: #f2f2f2;
    }

    .video_space {
        width: 20px;
        height: 40px;
        float: left;
        margin: 0 auto;
    }

    .video_btn3 {
        width: 140px;
        height: 40px;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
        float: left;
        margin: 0 auto;
        background-color: #f2f2f2;
    }

    .imgPlay {
        -webkit-filter: grayscale(100%);  
       -webkit-filter: grayscale(1);  
       filter: grayscale(100%);  
       filter: gray;  
       margin-bottom: 7px;
    }

    .closeBtn {
        height: $headerHeight;
        width: $headerHeight;
        background-color: gray;
        float: right;
        margin: 1px;
        text-align: center;
        vertical-align: middle;
        line-height: $headerHeight;
        font-size: 25px;
    }
    .designImg {
        text-align: center;
        img {
            width: 1280px;
            display: block;  
            margin: 0 auto;
        }
    }

    .designImg_mobile {
        text-align: center;
        img {
            width: 100%;
            display: block;  
            margin: 0 auto;
        }
    }

    .div_image_common {
        // min-width: 1280px;
        max-width: 1280px;
        height: 680px;
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }
</style>

