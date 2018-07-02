<template>
  <div id="smart37plant">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能植物架
      </div>
      <div class="img_01_02">
        智能植物架照明设备具有定时开关功能，预先设置开启和关闭的时间，即可实现自动开关光照。<br/>采用LED照明灯作为光源，满足植物生长所需的全波段光照。<br/>内置温度感应器，获取土壤和水分的比例，当水分低于一定的阈值时会发出浇水指令。<br/>通过光触媒、负离子发生器，吸附、分解室内空气污染物。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/plants_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
               <div class="title_descrip_1">智能恒温&nbsp;&nbsp;空气检测<br/>自动灌溉&nbsp;&nbsp;远程监控</div>
            </div>
        </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/plants_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word ">
               <p class="title_2">内置温度感应器，检测温度、二氧化碳含量</p>
               <p class="title">自动通风和调节内部温度、空气，保持在最佳的生长温度。 </p>
            </div>
        </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/plants_03.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word margin_20">

                <p class="title">通过APP上传植物生长状态，植物生长日记等，好友圈交流培养心得。 </p>
                <p class="title_3">内置温度感应器，检测温度、二氧化碳含量，自动通风和调节内部温度、空气，保持在最佳的生长温度。<br/>内APP具有遥控开关功能，直接在APP上对植物设备进行操控并获取生长数据。</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37plant',
    
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
        padding-top: 9%;
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
        font-size: 22pt;
        margin-top: -5px;
    }

    .img_03 {
        max-width: 1920px;
        min-width: 1010px;
    }

    .img_03_word {
        margin: 0 auto;
        width: 1010px;
        padding-top: 7%;
    }

     .img_04 {
        max-width: 1920px;
        min-width: 1010px;
    }

    .margin_20 {
        margin-top: 30px !important;
    }

    .title_3 {
        margin-top: 40px;
        font-size: 11pt;
        line-height: 30px;
    }

</style>
