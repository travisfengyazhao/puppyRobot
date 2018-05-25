<template>
  <div id="PuppyCubeS">
    <div class="video_container">
      <div class="box">
        <video src="./../../assets/video/cube_s_17.mp4" id="bgvideo" autoplay="autoplay" loop="loop" width="100%" muted="true" poster="./../../assets/video/videoload-cube-s-17s.jpg">
        </video>
        <div class="divMp4Front">
        </div>
        <div class="divMp4Words">
          <div class="div_txt_btn">
            <img class="div_words_img" src="./../../assets/images/puppy_cube_s/focus_title_01.png">
            <br />
            <br />
            <div class="video_btn1">
              <div class="video_btns">
                <div class="video_btn2" @click="PlayVideo()">
                  <img class="imgPlay" src="./../../assets/images/puppy_cube_s/button_wzsp.png">
                  <span class="span_b">完整视频</span>
                </div>
                <div class="video_space"></div>
                <div class="video_btn3" @click="OrderCubeS()">
                  <img class="imgPlay" src="./../../assets/images/puppy_cube_s/button_kqyy.png">
                  <span class="span_b">开启预约</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <video id="fullVideo" v-show="videoPlay" src="./../../assets/video/cube_s_17.mp4" controls="controls" width="100%" poster="./../../assets/video/videoload-cube-s-17s.jpg">
      </video>

    <div :class="!_isMobile()?'div_order':'div_order_mobile'" v-show="orderCubeS" @touchmove.prevent>
      <div class="div_order_01">
        <div class="order_content">
          <div class="img_container">
            <img src="./../../assets/images/header/puppyheaderlogo.svg" />
          </div>
          <div class="close_order" @click="OrderCubeS()">
            <span>X</span>
          </div>
          <div class="order_title">预约puppy cube s</div>

          <div class="order_info">
            <div>
              <span>姓名：</span>
              <input id='orderName' v-model="orderUser.name" type="text" />
            </div>

            <div>
              <span>手机号码：</span>
              <input id="orderPhone" type="text" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"
                v-model="orderUser.phone" @blur="validataPhone()" />
            </div>

            <div>
              <span>邮箱：</span>
              <input id="orderMail" type="email" v-model="orderUser.mail" />
            </div>
          </div>

          <div class="err_msg">{{errMsg}}</div>
          <div class="order_confirm">
            <input id="orderBtn" type="button" class="confirm_btn" @click="orderCube()" value="确定预约" />
          </div>
        </div>
      </div>
    </div>

    <div class="designImg" style="background-color:black; margin-top:-6px;">
        <div class="img_cpxt imgBackCenter"> </div>
        <!-- <img src="./../../assets/images/puppy_cube_s/div_cpxt.jpg" style="max-width:1440px;"> -->
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
        <div class="img_aick imgBackCenter"> </div>
      <!-- <img src="./../../assets/images/puppy_cube_s/div_aick.jpg"  style="max-width:2580px;"> -->
    </div>
    <div class="designImg" style="background-color:#ff5a32;">
      <div class="img_aiyy imgBackCenter"> </div>
      <!-- <img src="./../../assets/images/puppy_cube_s/div_aiyy.jpg"  style="max-width:1440px;"> -->
    </div>
    <div class="designImg" style="background-color:#101010;">
        <div class="img_cdj imgBackCenter"> </div>
        <!-- <img src="./../../assets/images/puppy_cube_s/div_cdj.png"  style="max-width:2580px;"> -->
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <div class="img_cpts imgBackCenter"> </div>
        <!-- <img src="./../../assets/images/puppy_cube_s/div_cpts.jpg"  style="max-width:2580px;"> -->
    </div>
    <div class="designImg" style="background-color:#000000;">
        <div class="img_cpcs_01 imgBackCenter"> </div>
        <!-- <img src="./../../assets/images/puppy_cube_s/div_cpcs_01.jpg" style="max-width:1440px;"> -->
    </div>
    <div class="designImg" style="background-color:#000000;">
        <div class="img_cpcs_02 imgBackCenter"> </div>
        <!-- <img src="./../../assets/images/puppy_cube_s/div_cpcs_02.jpg" style="max-width:1440px;"> -->
    </div>

    <!-- <div class="loading">
        <span><img src="./../../../static/loading_a.gif"/>
        </span>
    </div> -->



  </div>

</template>


<script>
import Banner from './../common/Banner'
import {validPhone, orderProduct} from './../axios/api';
export default {
    data() {
        return {
            videoPlay: false,
            orderCubeS: false,
            loadProgress: 0,
            errMsg: '',
            orderUser: {
                phone: '',
                name: '',
                mail: '',
            },
            designList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube_s/div_sj_01.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_sj_02.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#252427",
                video: require("./../../assets/video/puppy_cube_s/light_breath.mp4")
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_sj_03.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#ffffff",
            }
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            },
            {            
                id: 4,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_04.jpg"),
                 maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            },
            {            
                id: 5,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_05.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            }
            ],
            smartOfficeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
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
            //根据视频高宽比计算div的高度
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
        OrderCubeS: function() {
            this.orderCubeS = !this.orderCubeS;
            if(this.orderCubeS) {
                document.getElementById('orderName').focus();
            } else {
                this.errMsg = "";
                this.orderUser.phone = "";
                this.orderUser.name = "";
                this.orderUser.mail = "";
            }
        },
        // selectVideo: function(index){
        //     if(index == 1) {
        //         document.querySelector("#fullVideo").pause();
        //         document.querySelector("#fullVideo").src = require("./../../assets/video/cube_s_17.mp4");
        //         document.querySelector("#fullVideo").play();
        //     } else {
        //         document.querySelector("#fullVideo").pause();
        //         document.querySelector("#fullVideo").src = require("./../../assets/video/cube_s_100.mp4");
        //         document.querySelector("#fullVideo").play();
        //     }
            
        //     this.videoSelecterFadeOut();
            
        // },
        // displayVideoSelecter: function(){
        //     if(document.querySelector(".videoSelect").style.opacity == 1){
        //         this.videoSelecterFadeOut();
        //     } else {
        //         document.querySelector(".videoSelect").style.opacity = 1;
        //     }
        // },

        // videoSelecterFadeOut: function(){
        //     var timer,timer2,a=1,t=true;
        //     timer = setInterval(function(){              
        //         a -= 0.2;
        //         t = false;
        //         if( a <= 0){
        //             a=0;
        //             clearInterval(timer);
        //         }
        //         document.querySelector(".videoSelect").style.opacity = a;                            
        //     },100)   
        // },
        validataPhone: function() {
            if (!this.orderUser.phone) {
                this.errMsg = "手机号码不能为空。";
                document.getElementById('orderPhone').focus();
                return;
            } else if(!this.fChkPhone(this.orderUser.phone)) {
                this.errMsg = "手机号码格式有误。";
                document.getElementById('orderPhone').focus();
                return;
            }

            validPhone(this.orderUser.phone).then(res=>{
                if(res.status == 200) {
                    if(res.data.status == 1) {
                        document.getElementById('orderBtn').disabled = false;
                        this.errMsg = "";
                    } else if (res.data.status == 2) {
                        this.errMsg = "该手机号码已经预约过，请勿重复预约。";
                        document.getElementById('orderBtn').disabled = true;
                        document.getElementById('orderPhone').focus();
                    } else {
                        this.errMsg = res.data.error;
                    }
                } else {
                     this.errMsg = "未知错误";
                     document.getElementById('orderPhone').focus();
                    return;
                }
                
            }).catch(err=>{
                console.log(err, '失败')
            })
        },
        orderCube: function() {
            this.errMsg = '';
            if(!this.orderUser.name) {
                 this.errMsg = "姓名不能为空。";
                 document.getElementById('orderName').focus();
                return;
            }

            if(!this.orderUser.phone) {
                 this.errMsg = "手机号码不能为空。";
                 document.getElementById('orderBtn').disabled = true;
                 document.getElementById('orderPhone').focus();
                return;
            } else {
                if(this.orderUser.phone.length !== 11) {
                     this.errMsg = "手机号码格式有误。";
                     document.getElementById('orderPhone').focus();
                    return;
                }
            }

            if(!this.orderUser.mail) {
                 this.errMsg = "邮箱不能为空。";
                 document.getElementById('orderMail').focus();
                return;
            } else {
                if(!this.fChkMail(this.orderUser.mail)){
                   this.errMsg = "邮箱格式有误。";
                    document.getElementById('orderMail').focus();
                   return;
                }
            }

            document.getElementById('orderBtn').disabled = true;
            var that = this;
            console.log('开始预约...');
            orderProduct(this.orderUser.name,this.orderUser.phone,this.orderUser.mail).then(res=>{
                if(res.status == 200) {
                    if(res.data.status == 1) {
                        this.orderUser.name = '';
                        this.orderUser.phone = '';
                        this.orderUser.mail = '';
                        this.errMsg = "预约成功,可继续预约或点击[X]按钮关闭窗口。";
                        console.log('预约成功...');
                    } else if (res.data.status == 2){
                        this.errMsg = "该手机号码已经预约过，请勿重复预约。";
                        document.getElementById('orderPhone').focus();
                    } else {
                        this.errMsg = res.data.error;
                    }
                } else {
                     this.errMsg = "未知错误";
                     console.log('错误...');
                }
                document.getElementById('orderBtn').disabled = false;
                
            }).catch(err=>{
                console.log(err, '失败');
                document.getElementById('orderBtn').disabled = false;
            })
        },

        fChkMail: function(szMail){ 
            var szReg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; 
            var bChk=szReg.test(szMail); 
            return bChk; 
        },

        fChkPhone: function(szPhone) {
            var szReg =/^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
            var bChk=szReg.test(szPhone); 
            return bChk; 
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
        margin-bottom: 10%;
        // z-index: -100;
        //background: url(polina.jpg) no-repeat;
        background-size: cover; 
        object-fit:fill;
    }

    #fullVideo {
        margin-bottom: -8px;
    }
    .video_container {
        background-color: black;
    }

    .box {
        display: inline-block;
        width: 100%;
        max-width: 1920px;
    }

    .videoSelect_container_1{
        display: table;
    }

    .playbutton{
        position: absolute;
        margin: 0 auto;
        display: table-cell;
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
        z-index: 99999;
    }

    .videoSelect {
        width: 15vw;
        height: 20vh;
        background-color: white;
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

    .div_order {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 10;
            
            .div_order_01 {
            padding-top: 120px;
            width: 100%;
            .order_content {
                width: 500px;
                height: 600px;;
                background-color: white;
                margin: 0 auto;
                text-align: left;
                position: relative;

                img {
                    height: 50px;
                    margin-top: 20px;
                    margin-left: 20px;
                }

                .close_order {
                    height: 35px;
                    width: 35px;
                    cursor: pointer;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    line-height: 35px;
                    text-align: center;
                    font-size: 15pt;
                    span:hover {
                        color: #929497;
                    }
                }

                .order_title {
                    text-align: center;
                    margin-top: 60px;
                    font-size: 20pt;
                }

                .order_info {
                    margin-top: 50px;
                    margin-left: 50px;
                    div{
                        height: 80px;

                        span{
                            width: 120px;
                            text-align: right;
                        }

                        input {
                            height: 25px;
                            width: 220px;
                        }
                    }
                }

                .err_msg {
                    margin-top: -20px;
                    margin-left: 50px;
                    margin-right: 50px;
                    color: red;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                }

                .order_confirm {
                    margin-top: 20px;
                    text-align: center;
                    .confirm_btn {
                        width: 140px;
                        height: 40px;
                        line-height: 40px;
                        cursor: pointer;
                        border-radius: 5px;
                        text-align: center;
                        margin: 0 auto;
                        background-color: #f2f2f2;
                        border: none;
                        font-size: 12pt;
                    }
                }

            }
        }
    }


    .div_order_mobile {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 99999;
            
            .div_order_01 {
            width: 100%;
            height: 100%;
            .order_content {
                width: 100%;
                height: 100%;
                background-color: white;
                margin: 0 auto;
                text-align: left;
                position: relative;

                img {
                    height: 50px;
                    margin-top: 20px;
                    margin-left: 20px;
                }

                .close_order {
                    height: 35px;
                    width: 35px;
                    cursor: pointer;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    line-height: 35px;
                    text-align: center;
                    font-size: 15pt;
                    span:hover {
                        color: #929497;
                    }
                }

                .order_title {
                    text-align: center;
                    margin-top: 60px;
                    font-size: 20pt;
                }

                .order_info {
                    margin-top: 50px;
                    margin-left: 50px;
                    div{
                        height: 80px;

                        span{
                            width: 80px;
                            text-align: right;
                        }

                        input {
                            height: 25px;
                            width: 150px;
                        }
                    }
                }

                .err_msg {
                    margin-top: -20px;
                    margin-left: 50px;
                    margin-right: 50px;
                    color: red;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                }

                .order_confirm {
                    margin-top: 20px;
                    text-align: center;
                    .confirm_btn {
                        width: 140px;
                        height: 40px;
                        line-height: 40px;
                        cursor: pointer;
                        border-radius: 5px;
                        text-align: center;
                        margin: 0 auto;
                        background-color: #f2f2f2;
                        border: none;
                        font-size: 12pt;
                    }
                }

            }
        }
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
        max-width:1920px;
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
        z-index: 9990;
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
            width: 100%;
            display: block;  
            margin: 0 auto;
        }
    }

    .imgBackCenter {
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
    }

    .img_cpxt {
        max-width: 1440px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cpxt.jpg");
    }

    .img_aick {
        max-width: 2580px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_aick.jpg");
    }

    .img_aiyy {
        max-width: 1440px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_aiyy.jpg");
    }

    .img_cdj {
        max-width: 2580px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cdj.jpg");
    }

    .img_cpts {
         max-width: 2580px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cpts.jpg");
    }

    .img_cpcs_01 {
        max-width: 1440px;
        height: 955px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cpcs_01.jpg");
    }

    .img_cpcs_02 {
        max-width: 1440px;
        height: 955px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cpcs_02.jpg");
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
        min-width: 1280px;
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

    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 99999;
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

            div{
                margin-top: -20px;
                font-size: 18pt;
            }
        }



    }

</style>

