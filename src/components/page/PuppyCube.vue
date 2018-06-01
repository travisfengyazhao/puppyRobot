<template>
  <div id="PuppyCubeS">
    <div class="video_container">
        <div class="box">
            <video src="./../../assets/video/cube_30s.mp4" id="bgvideo" autoplay loop width="100%" muted="true" poster="./../../assets/video/videoload-cube.jpg">
            </video>
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
                            <a href="https://trade-z.jd.com/funding/project_details.action?projectId=101098" target="_blank">
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

        <video v-show="videoPlay" src="./../../assets/video/cube_final.mp4" id="fullVideo" controls="controls" width="100%" poster="./../../assets/video/videoload-cube.jpg">
        </video>

    <div class="designImg" style="background-color:#dedede;">
        <div class="div_image_common div_cpxt">
            <div class="img_descrip word_position_cpxt">
                <div class="descrip_title">产品形态</div>
                <div class="descrip_slogan">触摸未来，定义AI空间</div>
                <div class="descrip_content">智能交互不再被屏幕束缚，<br/>生活中的每一处都可能成为你的AI入口，<br/>puppy cube 将任意平面变为触摸界面，<br/>提供一个全新的智慧AI空间。</div>
            </div>
        </div>
    </div>
    <div class="designImg">
        <Banner :slideLists="designList" :swiperHeight="'1010px'"></Banner>
    </div>
    <div>
        <Banner :slideLists="smartHomeList" :swiperHeight="'1010px'"></Banner>
    </div>
    <div>
        <Banner :slideLists="smartOfficeList" :swiperHeight="'1010px'"></Banner>
    </div>
<div class="designImg" style="background-color:#FFFFFF;">
        <div class="div_image_common div_aick">
            <div class="img_descrip word_position_aick">
                <div class="descrip_title aick_title">AI触控</div>
                <div class="descrip_slogan aick_slogan">AnyTouch，激发生活灵感</div>
                <div class="descrip_content aick_content">AnyTouch空间触控，将多点触控与投影技术完美结合，使空间任意平面变为触摸屏，<br/>创造出丰富的交互灵感和奇妙体验。</div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#ff5a32;">
        <div class="div_image_common div_aiyy">
             <div class="img_descrip word_position_aick">
                <div class="descrip_title aick_title">AI 语音</div>
                <div class="descrip_slogan aick_slogan">唤醒你的智慧伙伴</div>
                <div class="descrip_content aick_content">人工智能语音技术，让puppy cube s成为你家中的智慧新成员。无需遥控远场对话，<br/>多场景语音操控功能，为家人提供无微不至的关怀与服务。</div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#121315;">
        <div class="div_image_common div_cdj">
            <div class="div_word">
                <div class="img_descrip word_position_cdj">
                    <div class="descrip_title cdj_title">超短焦</div>
                    <div class="descrip_slogan cdj_slogan">放在电视柜上的巨幕影院</div>
                    <div class="descrip_content cdj_content">先进的超短焦技术，让你拥有一个巨幕影院成为可能。自动对焦和图像调节功能，<br/>使画面在任何场景都清晰呈现。</div>
                </div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <div class="div_image_common div_cpts">
             <div class="img_descrip word_position_cpts">
                <div class="descrip_title cpts_title">产品图赏</div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#000000;">
        <div class="para_height_width div_image_common">
            <div>
                <div class="paraLeft">
                    <div class="descrip">
                        <div class="productType">puppy&nbsp;&nbsp;cube</div>
                        <div class="para">产品参数</div>
                    </div>
                    <div class="topLine"></div>
                    <img class="puppy_logo" src="./../../assets/images/logo.png">
                    <div class="div_product">
                        <img class="img_product" src="./../../assets/images/puppy_cube/cube.png">
                    </div>
                </div>
                <div class="paraRight">
                    <div>
                        <div class="para_title">基本信息</div>
                        <div class="para_detail">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">名称</div>
                                <div class="detail_value">puppy cube</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">型号</div>
                                <div class="detail_value">puppy cube</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">产品尺寸</div>
                                <div class="detail_value">132 x 86 x 213（mm）</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">产品重量</div>
                                <div class="detail_value">1.6 KG</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">产品颜色</div>
                                <div class="detail_value">星空灰</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">产品材质</div>
                                <div class="detail_value">高透光覆膜玻璃面板+铝合金+PC/ABS</div>
                            </div>
                        </div>    
                        <div class="para_title para_margin_top">系统参数</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">CPU</div>
                                <div class="detail_value">Mstar 6A938</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">RAM</div>
                                <div class="detail_value">4GB</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">内置存储</div>
                                <div class="detail_value">32GB eMMC</div>
                            </div>
                        </div>    
                        <div class="para_title para_margin_top">系统功能</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">OS</div>
                                <div class="detail_value">puppyUI 1.0</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Android系统</div>
                                <div class="detail_value">Android 6.0及以上</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">动态图像</div>
                                <div class="detail_value">HDR</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">多屏互动</div>
                                <div class="detail_value">Airplay/DLNA/Miracast</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">人工智能</div>
                                <div class="detail_value">讯飞AIUI</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key height_50">Wi-Fi</div>
                                <div class="detail_value">Wi-Fi: 2.4G/5GHz 双频<br/>802.11 a/b/g/n/ac<br/>2 x 2 双天线 双发双收</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Bluetooth</div>
                                <div class="detail_value">BT 4.0及以上/BLE 独立天线</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Camera</div>
                                <div class="detail_value">5M camera模组</div>
                            </div>
                        </div>
                        <div class="para_title para_margin_top">投影参数</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">投射比</div>
                                <div class="detail_value">0.39:1</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">画面尺寸</div>
                                <div class="detail_value">20英寸~100英寸</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">推荐尺寸</div>
                                <div class="detail_value">23英寸~40英寸</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">偏轴</div>
                                <div class="detail_value">100%及以上</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">梯形校正</div>
                                <div class="detail_value">支持自动垂直梯形校正</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">投影方式</div>
                                <div class="detail_value">桌面投射，可水平和垂直放置</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">对焦方式</div>
                                <div class="detail_value">自动对焦并可通过遥控器人工调节</div>
                            </div>
                        </div>
                        <div class="para_title para_margin_top">光学参数</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">标准分辨率</div>
                                <div class="detail_value">1280 x 720</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">兼容分辨率</div>
                                <div class="detail_value">1080p/2K/4K</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">显示技术</div>
                                <div class="detail_value">0.3* DMD</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">镜头</div>
                                <div class="detail_value">高透光镀膜镜头</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">中心亮度</div>
                                <div class="detail_value">300ANSI</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">色域</div>
                                <div class="detail_value">>=100%NTSC</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">中心对比度</div>
                                <div class="detail_value">600:1</div>
                            </div>
                        </div>
                        <div class="para_title para_margin_top">音频</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">声道</div>
                                <div class="detail_value">2.0声道</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">喇叭单元</div>
                                <div class="detail_value">全频36mm x 2</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">功率</div>
                                <div class="detail_value">5W x 2</div>
                            </div>
                        </div>  
                        <div class="para_title para_margin_top">端口</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">输入</div>
                                <div class="detail_value">USB 3.0 Host x 1/HDMI 2.0 Input x 1/DC-in</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">输出</div>
                                <div class="detail_value">3.5mm耳机接口 x 1</div>
                            </div>
                        </div> 
                        <div class="para_title para_margin_top">传感器</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">位置感应</div>
                                <div class="detail_value">加速度传感器</div>
                            </div>
                        </div> 
                        <div class="para_title para_margin_top">控制</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">按键</div>
                                <div class="detail_value">电源键、复位键、音量加减</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">遥控器</div>
                                <div class="detail_value">蓝牙遥控器</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">交互式</div>
                                <div class="detail_value">可以通过操作投射平面进行触控，支持10点和手势</div>
                            </div>
                        </div>  
                        <div class="para_title para_margin_top">电气规格</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">噪音</div>
                                <div class="detail_value">&lt; 30db</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">功耗</div>
                                <div class="detail_value">20 ~ 40W</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">内置电池</div>
                                <div class="detail_value">11.1v 5000mAh</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">电源</div>
                                <div class="detail_value">AC100-240V, 50/60Hz</div>
                            </div>                           
                        </div>                                
                    </div>
                </div>
            </div>
        </div>
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
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube/div_sj_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#000000",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube/div_sj_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            }
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube/div_zhjt_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube/div_zhjt_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube/div_zhjt_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            },
            {            
                id: 4,
                img: require("./../../assets/images/puppy_cube/div_zhjt_04.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            },
            {            
                id: 5,
                img: require("./../../assets/images/puppy_cube/div_zhjt_05.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            }
            ],
            smartOfficeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube/div_zhbg_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube/div_zhbg_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube/div_zhbg_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            }
            ]
            
        }
    },
    components: {
        Banner
    },
    mounted() {
        document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
        document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
        document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;
    
        window.onresize = function temp() {
            if(document.querySelector(".divMp4Front")){
                document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
                }
            if(document.querySelector(".divMp4Words")){
                document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
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
            max-width: 580px;
            width: 100%;
        }
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
    .designImg {
        text-align: center;
        img {
            max-width: 1280px;
            width: 100%;
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
        height:1010px;
        max-width:1440px;
    }

    .div_aick{
        background-image: url('./../../assets/images/puppy_cube/div_aick.jpg');
        height:1010px;
        max-width:2580px;
    }

    .img_descrip {
        width: 400px;
        height: 300px;
        margin: 0 auto;
        color: black;
        font-weight: 200;
        text-align: left;
        .descrip_title {
            font-size: 16pt;
            margin-top: 15px;
        }

        .descrip_slogan {
            font-size: 30pt;
            margin-top: 18px;
        }

        .descrip_content {
            margin-top: 35px;
            line-height: 25px;
            font-weight: normal;
        }
    }

    .word_position_cpxt {
        margin-top: 75px;
        margin-left: 760px;
    }

    .img_aick {
        max-width: 2580px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_aick.jpg");
    }

    .word_position_aick {
        margin-top: 80px;
        color: black !important;
        text-align: center;
        font-weight: 300 !important;
        width: 650px;
        .aick_title{
            font-size: 20pt;
        }

        .aick_slogan {
            font-size: 32pt;
        }

        .aick_content {
            font-weight: normal;
        }
    }

    .div_word{
        width: 1440px;
        margin: 0 auto;
    }

    .word_position_cdj {
        margin-top: 310px;
        margin-left: 830px;
        color: white !important;
        text-align: left;
        font-weight: 100 !important;
        width: 650px;
        .cdj_title{
            font-size: 20pt;
        }

        .cdj_slogan {
            font-size: 32pt;
        }

        .cdj_content {
            font-weight: 200;
        }
    }

     .word_position_cpts {
        margin-top: 220px;
        color: black !important;
        text-align: center;
        font-weight: 100 !important;
        width: 650px;
        .cpts_title{
            font-size: 30pt;
        }
    }

    .div_aiyy {
        background-image: url('./../../assets/images/puppy_cube/div_aiyy.jpg');
        height:1010px;
        max-width: 2580px;;
    }

    .div_cdj {
        background-image: url('./../../assets/images/puppy_cube/div_cdj.jpg');
        height:1010px;
        max-width:2580px;
    }

    .div_cpts {
        background-image: url('./../../assets/images/puppy_cube/div_cpts.jpg');
        height:1010px;
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

    .para_height_width {
        width: 1440px;
    }

    .paraLeft{
        width: 530px;
        height: 70px;
        margin-top: 150px;
        color: white;
        font-weight: 100;
        float: left;
        .puppy_logo {
            float: right;
            width: 95px;
        }
        .div_product {
            width: 530px;
            margin-top: 1010px;
            .img_product {
                width: 323px;
                float: right;
            }
        }

        .topLine{
            height: 71px;
            width: 4px;
            background-color: #b3b3b3;
            float: right;
            margin: 0px 25px 0px 25px;
        }
        .descrip {
            width: 165px;
            float: right;
            text-align: left;
        }
        .productType {
            font-size: 18pt;
            margin-top: -8px;
        }

        .para {
            font-size: 31pt;
            margin-left: -3px;
        }
    }

    .paraRight {
        width: 800px;
        // height: 2000px;
        color: white;
        float:left;
        margin-top: 150px;
        margin-bottom: 150px;
        .para_title {
            float: left;
            margin-left: 60px;
            text-align: left;
            font-size: 13pt;
            width: 70px;
            line-height: 26px;
            border-bottom: 2px solid white;
        }

        .para_detail {
            float: left;
            margin-left: 10px;
            .detail_line{
                width: 560px;
                height: 26px;
                border-bottom: 1px solid #808080;
            }

            .detail {
                font-size: 10pt;
                font-weight: 200;
                line-height: 23px;
                .detail_key{
                    float: left;
                    margin-left: 18px;
                    width: 140px;
                    border-bottom: 1px solid #333333;
                }

                .detail_value{
                    float: left;
                    width: 385px;
                    margin-left: 15px;
                    border-bottom: 1px solid #333333;
                }
            }
        }

        .para_margin_top {
            margin-top: 8px;
        }

        .height_50 {
            height: 69px;
            line-height: 69px;
        }
    }
</style>

