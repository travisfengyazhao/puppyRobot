
<template>
  <div id="aiot">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              AIoT
            </div>
            <div class="solutionName"></div>
          </div>

          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="content">
        <div class="img_container">
            <div class="img_01 imgBackCenter">
                <img class="img_style" src="./../../assets/images/aiot/div_01.jpg">
            </div>
            <div class="center_01">
                <div class="center_01_01">
                    AIoT技术
                </div>
                <div class="center_01_02">AIoT</div>
                <img src="./../../assets/images/down_arrow.png">
                <!-- <div class="center_01_03">AIoT具备深度学习能力的万物互联的人工智能产品<br/>智慧生活的中枢神经系统<br/>未来技术的实践</div> -->
            </div>
        </div>

        <div class="img_02 imgBackCenter">
            <div class="left_word">
                <div class="top">
                    puppy cube s
                </div>
                <div class="btm">
                    <div class="btm_01">通过深度感知技术和分析算法，完成捕捉与互动<br/>基于智能视觉与深度学习，让生活融入未来
                    </div>
                    <div class="btm_02">家庭级大数据平台，AI家庭入口<br/>IoT万物互联网的神经元，智慧人居的核心组成
                    </div>
                </div>
            </div>
        </div>

        <div class="img_03 imgBackCenter">
            <div class="right_word">
                <!-- <div class="top"><img src="./../../assets/images/aiot/02.png"></div> -->
                <div class="btm margin_top_80">
                    <div class="btm_01">AI技术衍生的高端触控影像设备
                    </div>
                    <div class="btm_02">未来的多场景应用设备，例如：计算机视觉应用、球形智能设备
                    </div>
                </div>
            </div>
        </div>

        <div class="img_04 imgBackCenter">
        </div>
        <div class="img_05 imgBackCenter">
            <div class="img_05_01">AIoT技术愿景和服务</div>
            <div class="img_05_02">
                <div class="img_container">
                    <img src="./../../assets/images/aiot/circle.png">
                    <div class="img_des">未来生活的赋能</div>
                </div>
                 <div class="img_container">
                    <img src="./../../assets/images/aiot/circle.png">
                    <div class="img_des">未来方向的引领</div>
                </div>
                <div class="img_container">
                    <img src="./../../assets/images/aiot/circle.png">
                    <div class="img_des">未来城市的缔造</div>
                </div>
            </div>
            <div class="img_05_03">
                <div class="container">
                    <div class="img_con">
                        <img src="./../../assets/images/aiot/shape1.png">
                    </div>
                    <div class="word">语音识别</div>
                </div>
                 <div class="container">
                     <div class="img_con">
                        <img src="./../../assets/images/aiot/shape2.png">
                    </div>
                    <div class="word">深度学习</div>
                </div>
                 <div class="container">
                     <div class="img_con">
                        <img src="./../../assets/images/aiot/shape3.png">
                    </div>
                    <div class="word">人机交互</div>
                </div>
                 <div class="container">
                     <div class="img_con">
                        <img src="./../../assets/images/aiot/shape4.png">
                    </div>
                    <div class="word">大数据</div>
                </div>
                 <div class="container">
                     <div class="img_con">
                        <img src="./../../assets/images/aiot/shape5.png">
                    </div>
                    <div class="word">计算机视觉</div>
                </div>
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
            document.querySelector(".center_01").style.top = "530px";
            // document.querySelector(".center_01_03").style.paddingTop = "80px";
        } else {
            document.querySelector(".center_01").style.top = "25vw";
            // document.querySelector(".center_01_03").style.paddingTop = "10px";
        }

        window.onresize = function temp() {
            if(window.document.body.offsetWidth>=1920) {
                document.querySelector(".center_01").style.top = "530px";
                // document.querySelector(".center_01_03").style.paddingTop = "80px";
            } else {
                document.querySelector(".center_01").style.top = "25vw";
                // document.querySelector(".center_01_03").style.paddingTop = "10px";
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
        color: white;
    }

    .center_01_01 {
        width: 360px;
        height: 130px;
        line-height: 130px;
        font-size: 36pt;
        margin: 0 auto;
        letter-spacing: 3px;
    }

    .center_01_02 {
        padding-top: 150px;
        font-size: 22pt;
        font-weight: bold;
        margin: 0 auto;
    }

    .center_01_03{
        padding-top: 80px;
        line-height: 50px;
        font-size: 14pt;
    }

    .img_02 {
        max-width: 1920px;
        min-width: 1010px;
        background-image: url('./../../assets/images/aiot/div_02.jpg');
        height: 499px;
    }

    .left_word {
        width: 1010px;
        margin: 0 auto;
        text-align: left;
        padding-top: 114px; 

        .top {
            font-size: 24pt;
        }       
    }

    .btm {
        margin-top: 30px;

        .btm_01 {
            font-size: 16pt;
        }

        .btm_02 {
            margin-top: 30px;
        }
    }

    .margin_top_80 {
        margin-top: 80px;
    }

    .img_03 {
        max-width: 1920px;
        min-width: 1010px;
        height: 500px;
        background-image: url("./../../assets/images/aiot/div_03.jpg");
    }

    .right_word {
        width: 1010px;
        margin: 0 auto;
        text-align: right;
        padding-top: 114px;
    }

    .img_04 {
        max-width: 1920px;
        min-width: 1010px;
        height: 660px;
        background-image: url("./../../assets/images/aiot/div_04.jpg");
    }

    .img_05 {
        max-width: 1920px;
        min-width: 1010px;
        height: 755px;
    }

    .img_05_01 {
        margin-top: 150px;
        font-size: 16pt;
    }

    .img_05_02 {
        padding-top: 70px;
        margin: 0 auto;
        width: 760px;
        height: 200px;
        .img_container {
            position: relative;
            float: left;
            width: 252px;
            height: 202px;

            img {
                margin-left: 25px;
                margin-right: 25px;
            }
        }

        .img_des {
            position: absolute;
            top: 0px;
            width: 252px;
            font-size: 14pt;
            line-height: 202px;
        }
    }

    .img_05_03 {
        padding-top: 70px;
        margin: 0 auto;
        width: 756px;

        .container {
            float: left;
            .img_con {
                width: 70px;
                height: 70px;
                margin-left: 40px;
                margin-right: 40px;
            }
            .word {
                font-size: 14pt;
            }
        }

    }


</style>
