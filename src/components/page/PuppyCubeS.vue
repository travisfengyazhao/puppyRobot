<template>
  <div id="PuppyCubeS">
    <div class="video_container">
      <div class="box">
        <video src="./../../assets/puppy_demo.mp4" id="bgvideo" autoplay="autoplay" loop="loop" width="100%" muted="true">
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
                  <span class="span_b">观看完整视频</span>
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
      <img src="./../../assets/images/puppy_cube_s/div_cpxt.jpg">
    </div>
    <div class="designImg">
      <Banner :slideLists="designList" :swiperHeight="'680px'"></Banner>
    </div>
    <div>
      <Banner :slideLists="smartHomeList" :swiperHeight="'680px'"></Banner>
    </div>
    <div>
      <Banner :slideLists="smartOfficeList" :swiperHeight="'680px'"></Banner>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
      <img src="./../../assets/images/puppy_cube_s/div_aick.jpg">
    </div>
    <div class="designImg" style="background-color:#f65b23;">
      <img src="./../../assets/images/puppy_cube_s/div_aiyy.jpg">
    </div>
    <div class="designImg" style="background-color:#121315;">
      <img src="./../../assets/images/puppy_cube_s/div_cdj.jpg">
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
      <img src="./../../assets/images/puppy_cube_s/div_cpts.jpg">
    </div>
    <div class="designImg" style="background-color:#000000;">
      <img src="./../../assets/images/puppy_cube_s/div_cpcs_01.jpg">
    </div>
    <div class="designImg" style="background-color:#000000;">
      <img src="./../../assets/images/puppy_cube_s/div_cpcs_02.jpg">
    </div>

    <div class="loading">
        <span><img src="./../../../static/loading_a.gif"/></span>
    </div>



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
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_sj_02.png"),
                backgroundColor: "#000000",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_sj_03.png"),
                backgroundColor: "#F5F5F5",
            },
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_01.png"),
                backgroundColor: "#F5F5F5",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_02.png"),
                backgroundColor: "#F5F5F5",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_03.png"),
                backgroundColor: "#e5e4ea",
            },
            {            
                id: 4,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_04.png"),
                backgroundColor: "#000000",
            },
            {            
                id: 5,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_05.png"),
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
                                                        (window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920) * 2 - 30) + "px" ;
        document.querySelector(".videoSelect").style.left = (window.document.body.offsetWidth - (window.document.body.offsetWidth / 1920 * 192 * 2) - 2) + "px" ;
        document.querySelector(".videoImage1").style.width = (window.document.body.offsetWidth / 1920 * 192 * 2).toFixed(2) + "px";
        document.querySelector(".videoImage1").style.height = ((window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920)).toFixed(2) + "px"; 
        document.querySelector(".videoImage2").style.width = (window.document.body.offsetWidth / 1920 * 192 * 2).toFixed(2) + "px";
        document.querySelector(".videoImage2").style.height = ((window.document.body.offsetWidth / 1920 * 192 * 2) * (1080 /1920)).toFixed(2) + "px"; 
        window.onresize = function temp() {
            //根据视频高宽比计算div的高度
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

        document.querySelector("#bgvideo").addEventListener("canplay", function()
        {
            document.querySelector(".loading").style.display = "none";
        });
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
        },
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
            orderProduct(this.orderUser.name,this.orderUser.phone,this.orderUser.mail).then(res=>{
                if(res.status == 200) {
                    if(res.data.status == 1) {
                        this.orderUser.name = '';
                        this.orderUser.phone = '';
                        this.orderUser.mail = '';
                        this.errMsg = "预约成功,可继续预约或点击[X]按钮关闭窗口。";
                    } else if (res.data.status == 2){
                        this.errMsg = "该手机号码已经预约过，请勿重复预约。";
                        document.getElementById('orderPhone').focus();
                    } else {
                        this.errMsg = res.data.error;
                    }
                } else {
                     this.errMsg = "未知错误";
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
        line-height: 40px;
        color: black;
        white-space: nowrap;
        overflow:hidden;
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
        }

    }

</style>

