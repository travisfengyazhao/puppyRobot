
<template>
  <div id="cooperate">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              COOPERATE
            </div>
            <div class="solutionName">商务合作</div>
          </div>

          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="content">
        <div class="img_container">
            <div class="img_01 imgBackCenter">
                <img class="img_style" src="./../../assets/images/cooperate/div_01.jpg">
            </div>
            <div class="center_01">
                <div class="center_01_01">
                    商 务 合 作
                </div>
                <img class="explore" src="./../../assets/images/cooperate/EXPLORE.png">
                <br/>
                <img src="./../../assets/images/down_arrow.png">
            </div>
        </div>

        <div class="img_02 imgBackCenter">
            <div class="top_descrip">渠道合作</div>
            <div class="btm_descrip">
                <div class="btm_left">20年前<br/>10年前<br/>现在</div>
                <div class="btm_mid"><img src="./../../assets/images/cooperate/elements.png"></div>
                <div class="btm_right">PC开启了互联网时代大幕，<br/>手机揭开了移动互联网的篇章，<br/>人工智能时代，AI将无处不在，puppy诚邀您一起筑造AI智慧空间的服务新生态！</div>
              
            </div>
        </div>

        <div class="img_03 imgBackCenter">
            <div class="right_word">
                <div class="right_top">puppy优势</div>
                <div class="right_btm">
                    <div class="right_btm_01">资本背景：国内知名VC投资、百度前部总裁李明远联合创立<br/>智慧生态：AIoT、机器人、智能视觉、智慧人居四大业务生态布局<br/>解决方案：puppy Hachi智能化系统解决方案已在多个一线城市成功部署运营专利技术<br/>专利技术：国际领先的专利核心技术，拥有专注AI人工智能方向豪华研发团队
                    </div>
                </div>
            </div>
        </div>
        <div class="img_04 imgBackCenter">
            <div class="top">合作流程</div>
            <div class="btm">
                <div class="img_container">
                    <img src="./../../assets/images/cooperate/1_4.png">
                    <div class="img_des des_01">提交申请</div>
                </div>
                <div class="img_container">
                    <img src="./../../assets/images/cooperate/2_4.png">
                    <div class="img_des des_02">商务洽谈</div>
                </div>
                <div class="img_container" style="margin-right: 10px;">
                    <img src="./../../assets/images/cooperate/3_4.png">
                    <div class="img_des">合同签署</div>
                </div>
                <div class="img_container">
                    <img src="./../../assets/images/cooperate/4_4.png">
                    <div class="img_des">伙伴支持</div>
                </div>
            </div>
        </div>
        <div class="img_05 imgBackCenter">
            <div class="img_05_top">联系方式</div>
            <div class="img_05_btm">
               合作热线：<img class="phone" src="./../../assets/images/cooperate/phone.png"> 400-000-1320
              
            </div>

        </div>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return { 
        }
    },
    mounted() {
        if(window.document.body.offsetWidth>=1920) {
            document.querySelector(".center_01").style.top = "480px";
        } else {
            document.querySelector(".center_01").style.top = "20vw";
        }

        window.onresize = function temp() {
            if(window.document.body.offsetWidth>=1920) {
                document.querySelector(".center_01").style.top = "480px";
            } else {
                document.querySelector(".center_01").style.top = "20vw";
            }
        };
    },
    components: {
    },
    methods: {

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
        max-width: 1280px;
        min-width: 1010px;
        margin: 0 auto;
    }

    #divNews {
        float: left;
        height: $hachiSMB;
        line-height: $hachiSMB;
        margin-right: 10px;
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

    .titleLine {
    width: 70px;
    height: 4px;
    background-color: black;
    margin: 24px 0px 0px 0px; 
    }
    .content {
        width: 100%;
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

    .img_container {
        width: 100%;
        position: relative;
        display: table;
    }

    .img_01 {
        width: 100%;
        max-width: 1920px;
        min-width: 1010px;
    }

    .img_style {
        width: 100%;
        max-width: 1920px;
        min-width: 1010px;
    }

    .center_01 {
        position: absolute;
        top: 25vw;
        width: 100%;
        display: table-cell;
        vertical-align: middle;
    }

    .center_01_01 {
        width: 360px;
        height: 130px;
        border: 2px solid #ffffff;
        color: white;
        line-height: 130px;
        font-size: 36pt;
        margin: 0 auto;
    }

    .explore {
        margin-top: 60px;
    }

    .img_02 {
        max-width: 1920px;
        min-width: 1010px;
        height: 600px;
        margin-top: -5px;
        background-color: black;
        color: white;
    }

    .center_02 {
        width: 100%;
        margin-top: 190px;
    }

    .center_02_01 {
        width: 1010px;
        margin: 0 auto;
        text-align: left;
    }

    .top_descrip{
        font-size: 26pt;
        margin-top: 90px;
    }

    .btm_descrip {
        padding-top: 30px;
        margin: 0 auto;
        width: 1010px;
        height: 260px;
        .btm_left {
            width: 270px;
            margin-top: 8px;
            text-align: right;
            line-height: 80px;
            float: left;
        }

        .btm_mid {
            float: left;
            width: 75px;
        }

        .btm_right {
            margin-top: 8px;
            text-align: left;
            line-height: 80px;
        }
    }

    .img_03 {
        max-width: 1920px;
        min-width: 1010px;
        height: 450px;
        background-color: #fafafa;
        position: relative;
        background-image: url("./../../assets/images/cooperate/div_02.jpg");
        .left_img {
            float: left;
        }

        .right_word{            
            width: 650px;
            margin: 0 auto;
            text-align: left;
            padding-left: 125px;
            .right_top {
                margin-top: 100px;
                font-size: 26pt;
            }

            .right_btm{
                margin-top: 30px;
                line-height: 45px;
                .right_btm_01 {
                    float: left;
                }
            }
        }
    }

    .img_04 {
        max-width: 1920px;
        min-width: 1010px;
        height: 660px;
        .top {
            margin-top: 165px;
            font-size: 26pt;
        }

        .btm {
            padding-top: 15px;
            margin: 0 auto;
            width: 1010px;

            .img_container {
                position: relative;
                float: left;
                width: 248px;
                height: 251px;
            }

            .img_des {
                position: absolute;
                top: 0px;
                width: 248px;
                font-size: 16pt;
                line-height: 251px;
            }

            .des_01 {
                margin-left: -15px;
            }

            .des_02 {
                margin-left: -13px;
            }
        }
    }

    .img_05 {
        max-width: 1920px;
        min-width: 1010px;
        height: 500px;
        background-color: black;
        color: white;
    }

    .img_05_top {
        margin-top: 160px;
        font-size: 26pt;
    }

    .img_05_btm {
        margin-top: 20px;
        font-size: 16pt;
        .phone {
            width: 20px;
        }
    }
</style>
