<template>
  <div id="smart37table">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能餐桌
      </div>
      <div class="img_01_02">
        光亮入境的陶瓷上泛起层层涟漪，给人优雅，纯粹而富有诗意的动态之美。<br/>全球首款完全一体式整合电陶炉功能的餐桌。超薄一体化造型，极具识别度的水波纹功能区域和鹅卵石状的可移动操作方式设计。<br/>体验和功能的完美结合！
      </div>
      <div class="img_01_03">
        了解更多
      </div>
      <div class="img_01_04">
        <img src="./../../../assets/images/smart37/arrow.png">
      </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/table_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
               <p class="title_descrip_1">“坎坎伐檀兮，置之河之干兮，河水清且涟漪。”</p>
               <p class="title_2">《诗经·魏国·伐檀》</p>
            </div>
        </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/table_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
               <p class="title_descrip_1">水纹造型标识出锅具的放置位置</p>
               <p class="title_3 margin_reduce10">磁悬浮模块+电陶炉+氛围灯+智能音箱</p>
            </div>
        </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/table_03.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word">
               <p class="title_descrip_1">点击按键切换温度档位</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37table',
    
}
</script>

<style lang="scss" scoped>
    .img_01 {
      max-width: 1920px;
      min-width: 1010px;
      height: 700px;
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

    .hachi_logo {
      margin-top: 90px;
    }

    .img_01_01 {
      margin-top: 15px;
      font-size: 26pt;
    }

    .img_01_02 {
      font-size: 12pt;
      margin-top: 30px;
      line-height: 25px;
    }

    .img_01_03 {
      font-size: 14pt;
      margin-top: 80px;
      line-height: 25px;
    }

    .img_01_04 {
        margin-top: 10px;
    }

    .img_02 {
      max-width: 1920px;
      min-width: 1010px;
    }

    .img_style {
        width: 100%;
        display: block;
    }

    .word_container {
        width: 100%;
        position: absolute;
        top: 0px;
    }

    .img_02_word {
        margin: 0 auto;
        width: 1010px;
        padding-top: 7%;
    }

    .title {
        font-size: 16pt;
        font-weight: bold;
        margin-top: -10px;
    }

    .title_2 {
        font-size: 14pt;
    }

    .title_descrip_1 {
        font-size: 24pt;
        margin-top: -5px;
    }

    .margin_reduce10 {
        margin-top: -10px !important;
    }

    .line_container {
        width: 380px;
        margin: 0 auto;
        padding-top: 70px;
    }

    .line_container_sub {
        width: 160px;
        height: 160px;
        float: left;
        position: relative;

        .sub_absolute {
            position: absolute;
            top: 35px;
            width: 160px;
            font-size: 24pt;
            font-weight:100;
        }
    }

    .line_spe {
        width: 60px;
        height: 160px;
        float: left;
    }


    .img_03 {
        max-width: 1920px;
        min-width: 1010px;
    }

    .img_03_word {
        margin: 0 auto;
        width: 1010px;
        padding-top: 5%;
    }

    .title_3 {
        margin-top: 20px;
        line-height: 30px;
    }

    .font_color_white {
        color: white;
    }

</style>
