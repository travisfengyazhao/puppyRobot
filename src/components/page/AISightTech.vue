
<template>
  <div id="robottech">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              智 能 视 觉 技 术
            </div>
            <!-- <div class="solutionName">机器人技术</div> -->
          </div>

          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="content">
        <div class="img_01_back">
            <div class="img_01 imgBackCenter">
            </div>
        </div>
        <div class="img_02_back">
            <div class="img_02 imgBackCenter">
                <div class="content_02">
                        目标检测
                </div>
                <div class="content_03">
                        在复杂的场景中，快速、精确的定位人脸、人体等目标位置。 
                </div>
            </div>
        </div>
        <div class="img_03_back">
            <div class="img_03 imgBackCenter">
            </div>
        </div>
        <div class="img_04_back">
            <div class="img_04 imgBackCenter">
                <div class="content_04">
                        身份识别
                </div>
                <div class="content_05">
                        通过人脸、人体特征，可在千万级库的场景下，准确识别人员身份， 并支持1比1认证和1比N识别的多种场景。 
                </div>
            </div>
        </div>
        <div class="img_05_back">
            <div class="img_05 imgBackCenter">
                <div class="content_06">
                    <img src="./../../assets/images/aisight/A.gif"/>
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
        width: 1280px;
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

    .img_01 {
        max-width: 2580px;
        height: 800px;
        background-image: url("./../../assets/images/aisight/div_01.jpg");
    }

    .img_01_back {
        background-color: black;
    }

    .img_02 {
        max-width: 1440px;
        height: 950px;
        background-image: url("./../../assets/images/aisight/div_02.jpg");
    }

    .img_02_back {
        height: 950px;
        background-image:url('./../../assets/images/aisight//div_03.jpg'); 
        background-repeat: repeat;
        position: relative;
        overflow: hidden;
    }

    .img_03_back {
        background-color: #eeeeee;    
    }

    .img_03 {
        max-width: 1010px;
        height: 880px;
        background-image: url("./../../assets/images/aisight/div_04.jpg");
    }

    .img_04_back {
        background-color: black;    
    }

    .img_04 {
        max-width: 1010px;
        height: 880px;
        background-image: url("./../../assets/images/aisight/div_05.jpg");
    }
    .img_05_back {
        background-color: white;    
    }

    .img_05 {
        max-width: 1010px;
        height: 837px;
        background-image: url("./../../assets/images/aisight/div_06.jpg");
    }


    .content_02 {
        margin-top: 160px;
        font-size: 32pt;
        font-weight: lighter;
    }
    .content_03 {
        margin-top: 20px;
        font-size: 18pt;
        font-weight: lighter;
    }

    .content_04 {
        color: white;
        margin-top: 65px;
        font-size: 32pt;
        font-weight: lighter;
    }
    .content_05 {
        color: white;
        margin-top: 20px;
        font-size: 18pt;
        font-weight: lighter;
    }

    .content_06 {
        margin-top: 350px;
        img{
            margin-left: -500px;
        }
    }

   

</style>
