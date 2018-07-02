<template>
  <div id="smart37teatable">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能茶几+智能音响
      </div>
      <div class="img_01_02">
        提供无线充电功能，可同时给多个设备充电。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/teatable_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
               <p class="title_descrip_1">手指敲击即可启动音响</p>
               <p class="title_3">是茶几也是音响</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37teatable',
    
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
        padding-top: 5%;
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


</style>
