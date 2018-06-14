<template>
  <div id="PuppyCubeS">
    <div class="video_container">
        <div class="box">
            <img id="bgvideo" width="100%" src="./../../assets/video/cube-mobile.jpg">
            <div class="divMp4Front">
            </div> 
            <div class="divMp4Words">
                <div class="div_txt_btn">
                    <img class="div_words_img" src="./../../assets/images/puppy_cube/focus_title_01.png">
                    <br />
                    <br />
                    <div class="video_btn1">
                        <div class="video_btns" >
                            <div class="video_btn2" @click="PlayVideo()">
                                <img class="imgPlay" src="./../../assets/images/puppy_cube_s/button_wzsp.png">
                                <span class="span_b">完整视频</span>   
                            </div>
                            <div class="video_space"></div>
                            <a href="https://z.jd.com/project/details/101098.html" target="_blank">
                            <div class="video_btn3">
                                <img class="imgPlay" src="./../../assets/images/puppy_cube/button_jdzc.png">
                                <span class="span_b">京东众筹</span>   
                            </div>
                            </a>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    </div>

        <video src="./../../assets/video/cube_final.mp4" v-show="videoPlay" id="fullVideo" controls="controls" width="100%" poster="./../../assets/video/videoload-cube.jpg">
        </video>


    <div class="imageTitle">
        <div class="title">产品形态</div>
        <div class="slogan">触摸未来，定义AI空间</div>
    </div>
    <div class="designImg" style="background-color:#dedede;">
        <img src="./../../assets/images/m_puppy_cube/div_cpxt.jpg"  style="max-width:1440px;">
    </div>
    <div class="imageFooter">
        <div class="description">智能交互不再被屏幕束缚， 生活中的每一处都可能成为你的AI入口， puppy cube s将任意平面变为触摸界面， 提供一个全新的智慧AI空间。</div>
    </div>
    <div class="sperateLine"></div>
    <div class="designImg">
        <Banner :slideLists="designList"></Banner>
    </div>
    <div class="sperateLine"></div>
    <div>
        <Banner :slideLists="smartHomeList"></Banner>
    </div>
    <div class="sperateLine"></div>
    <div>
        <Banner :slideLists="smartOfficeList"></Banner>
    </div>
    <div class="sperateLine"></div>
    <div class="imageTitle">
        <div class="title">AI触控</div>
        <div class="slogan">AnyTouch，激发生活灵感</div>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <!-- <div class="img_aick imgBackCenter"> </div> -->
      <img src="./../../assets/images/m_puppy_cube_s/div_aick.jpg"  style="max-width:1440px;">
    </div>
    <div class="imageFooter">
        <div class="description">AnyTouch空间触控，将多点触控与投影技术完美结合，使空间任意平面变为触摸屏，创造出丰富的交互灵感和奇妙体验。</div>
    </div>
    <div class="sperateLine"></div>
    <div class="designImg" style="background-color:#ff5a32;">
        <img src="./../../assets/images/m_puppy_cube/div_aiyy.jpg" style="max-width:1440px;">
    </div>
    <div class="designImg" style="background-color:#121315;">
        <img src="./../../assets/images/m_puppy_cube/div_cdj.jpg" style="max-width:1440px;">
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <img src="./../../assets/images/m_puppy_cube/div_cpts.jpg" style="max-width:1440px;">

    </div>
    <div class="designImg" style="background-color:#000000;">
        <img src="./../../assets/images/puppy_cube/div_cpcs_01.jpg" style="max-width:1440px;">

    </div>
    <div class="designImg" style="background-color:#000000;">
        <img src="./../../assets/images/puppy_cube/div_cpcs_02.jpg" style="max-width:1440px;">
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
                img: require("./../../assets/images/m_puppy_cube/div_sj_01.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#ffffff",
                title: '设计',
                slogan: '精准的几何美学',
                description: '高亮镜面与金属拉丝，不同的质感一分为二，同样的理性而不失温情。'
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube/div_sj_02.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#ffffff",
                title: '设计',
                slogan: '友好交互设计 — 智慧呼吸灯',
                description: '可视化语音响应，呼吸灯带在不同状态下相应变化人性化设计赋puppy cube s智慧心灵的窗口。'
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/m_puppy_cube/div_sj_03.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#ffffff",
                title: '设计',
                slogan: '背板集线防呆设计',
                description: '立卧姿态轻松转换，即使连线使用，也不会受到线缆的影响，同时起到收纳线缆的美观作用。'
            }
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_01.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——儿童',
                slogan: '触摸成长，让学习成为乐趣',
                description: '独特的可触控智能投影，将AI交互应用于儿童教育与娱乐，化枯燥为神奇。不仅拥有丰富的儿童课程和内容，智慧的家长管理和护眼功能，还保护着孩子的健康成长。'
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_02.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——厨房',
                slogan: '触摸味道，变厨房为美食课堂',
                description: '集合10万+精选食谱，语音交互，手把手教你成为米其林大厨。投墙投台面，有效利用厨房空间，更不用担心油污屏幕，还能边做饭边追剧。puppy让品质生活从厨房开始。'
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_03.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——健身',
                slogan: '触摸活力，把私教请回家',
                description: '丰富的健身课程为您提供定制化训练，投墙大屏和AI语音控制，有如与私教面对面练习，个人训练计划和多账户管理，为全家人合理规划，让生活充满活力。'
            },
            {            
                id: 4,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_04.jpg"),
                 maxWidth: '1440px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——健康',
                slogan: '触摸健康，家庭医生陪伴身边',
                description: '拥有家庭医生不再是未来生活，在家就能与医生视频问诊，预约治疗，建立全家人健康档案。面对老人孩子的突发状况不再紧张，健康生活触手可得。'
            },
            {            
                id: 5,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_05.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——智能家居',
                slogan: '触摸从容，智慧生活尽在掌握',
                description: 'AI赋予“家”更多便利与安全。通过puppy cube语音控制家居和电器，为全家布控安防网络，万物互联的未来生活，有puppy为您保驾护航。'
            }
            ],
            smartOfficeList: [
            {            
                id: 1,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhbg_01.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#FFFFFF",
                 title: '智慧办公',
                slogan: '协同书写，桌面变白板',
                description: 'puppy cube s通过智能触控对投影桌面的文档进行协同处理，包括修改，标注，保存，缩放等多种操作，让您的办公桌变为智能白板。'
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhbg_02.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#FFFFFF",
                 title: '智慧办公',
                slogan: '视频会议，高效便捷',
                description: 'puppy cube内置高清摄像头和麦克风阵列，提供完整的会议系统方案。多方音视频，远程培训，移动会议等功能，节省沟通成本，大幅提升工作效率。'
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhbg_03.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#FFFFFF",
                 title: '智慧办公',
                slogan: '互动投屏，多终端共享',
                description: '具备AirPlay/DLNA/Miracast等多种投屏功能，与电脑，平板，手机各类终端多屏互动，省去有线连接和文件拷贝的繁琐操作。'
            }
            ]
            
        }
    },
    components: {
        Banner
    },
    mounted() {
        document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1440?window.document.body.offsetWidth:1440) * (800 /1440)).toFixed(2) + "px";
        document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1440?window.document.body.offsetWidth:1440) * (800 /1440)).toFixed(2) + "px";
        document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;
        window.onresize = function temp() {
            if(document.querySelector(".divMp4Front")){
                document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1440?window.document.body.offsetWidth:1440) * (800 /1440)).toFixed(2) + "px";
                }
            if(document.querySelector(".divMp4Words")){
                document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1440?window.document.body.offsetWidth:1440) * (800 /1440)).toFixed(2) + "px";
            }
            if(document.querySelector(".div_txt_btn")){document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;}

        };

        document.addEventListener("fullscreenchange", function () { 
            document.fullscreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        
        document.addEventListener("mozfullscreenchange", function () { 
            document.mozFullScreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        
        document.addEventListener("webkitfullscreenchange", function () { 
            document.webkitIsFullScreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        document.addEventListener("msfullscreenchange", function () { 
            document.msFullscreenElement? this.videoPlay =true : this.videoPlay = false;
        }); 

    },
    methods: {

        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
        PlayVideo: function(){
            var mVideo = document.querySelector("#fullVideo");
            if (mVideo) {
                if (mVideo.requestFullscreen) {
                    mVideo.requestFullscreen();
                }
                else if (mVideo.msRequestFullscreen) {
                    mVideo.msRequestFullscreen();
                }
                else if (mVideo.mozRequestFullScreen) {
                    mVideo.mozRequestFullScreen();
                }
                else if (mVideo.webkitRequestFullScreen) {
                    mVideo.webkitRequestFullScreen();
                    /*
                        *Kept here for reference: keyboard support in full screen
                        * marioVideo.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    */
                }
                mVideo.play();
            }
        },
        selectVideo: function(index){
            
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
        // z-index: -100;
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
        width: 100%;
        max-width: 1920px;
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
        // z-index: -99;
    }

    .divVideoPlayer {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        background-color: black;
        text-align: center;
        z-index: 9999;
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
        line-height: 42px;
        color: black;
        white-space: nowrap;
        overflow:hidden;
        margin-right: 15px;
    }

    .div_txt_btn {
        vertical-align: middle; 
        display: table-cell; 
        overflow: hidden; 
        width: 100%;
        .div_words_img {
            width: 70%;
        }
    }

    .video_btn1 {
        text-align:center;
    }
    
    .video_btns {
        width: 260px;
        height: 42px;
        text-align: center;
        margin: 0 auto;
        span:hover {
            color: #929497;
        }
    }

    .video_btn2 {
        width: 120px;
        height: 42px;
        cursor: pointer;
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
        width: 120px;
        height: 42px;
        cursor: pointer;
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
        margin-top: 8px;
        margin-bottom: 8px;
        margin-left: 15px;
        float: left;
    }

    .closeBtnContainer {
        position: absolute;
        top:0px;
        left: 0px;
        width: 100%;
        height: $headerHeight;
        z-index: 99999;
    }

    .closeBtn {
        height: $headerHeight;
        width: $headerHeight;
        background-color: white;;
        opacity: 0.4;
        float: right;
        margin: 1px;
        text-align: center;
        vertical-align: middle;
        line-height: $headerHeight;
        font-size: 25px;
        cursor: pointer;
    }
    .imageTitle {
        height: 100px;
        .title {
            padding-top: 25px;
            font-weight: 300;
        }
        .slogan {
            font-size: 16pt;
            font-weight: 300;
        }
    }


    .designImg {
        text-align: center;
        img {
            width: 100%;
            display: block;  
            margin: 0 auto;
        }
    }

    .imageFooter {
        height: 100px;
        .description {
            text-align: left;
            padding: 20px 15px 20px 15px;
            font-weight: 300;
            font-size: 11pt;
        }
    }

    .sperateLine {
        width: 90%;
        margin: 0 auto;
        height: 1px;
        background-color: #cfd0d1;
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
        // max-width: 1280px;
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .div_cpxt {
        background-image: url('./../../assets/images/puppy_cube/div_cpxt.jpg');
        height:800px;
        max-width:1440px;
    }

    .div_aick{
        background-image: url('./../../assets/images/puppy_cube/div_aick.jpg');
        height:800px;
        max-width:2580px;
    }

    .div_aiyy {
        background-image: url('./../../assets/images/puppy_cube/div_aiyy.jpg');
        height:800px;
        max-width:1440px;
    }

    .div_cdj {
        background-image: url('./../../assets/images/puppy_cube/div_cdj.jpg');
        height:800px;
        max-width:2580px;
    }

    .div_cpts {
        background-image: url('./../../assets/images/puppy_cube/div_cpts.jpg');
        height:800px;
        max-width:2580px;
    }

    .div_cpcs_01 {
        background-image: url('./../../assets/images/puppy_cube/div_cpcs_01.jpg'); 
        height:955px !important;
        max-width:1440px;
    }

    .div_cpcs_02 {
        background-image: url('./../../assets/images/puppy_cube/div_cpcs_02.jpg');
        height:955px !important;
        max-width:1440px;
    }



    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 99991;
        top: 46px;
        left: 0px;
        background-color: white;
        span {
            position: absolute;
            display: block;
            font-size: 50px;
            line-height: 50px;
            top: 50%;
            left: 50%;
            width: 140px;
            height: 110px;
            -webkit-transform: translateY(-50%)  translateX(-50%);
            transform: translateY(-50%)  translateX(-50%);
        }

    }
</style>

