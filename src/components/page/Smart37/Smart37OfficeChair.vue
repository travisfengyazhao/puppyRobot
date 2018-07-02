<template>
  <div id="smart37officechair">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C人体工程学椅-
        <img src="./../../../assets/images/smart37/smartoffice/R1.png">
      </div>
      <div class="img_01_02">
        许多人的工作时间都很长，长此以往，腰背和颈椎就会出现不同程度的疼痛。<br/>因此，一把好的办公椅显得十分重要。<br/>我们希望制作一把符合人体工程学的椅子，它能完全贴合人体脊柱的生理弯曲，可以让你自由活动，消除不适感同时集中人的注意力。<br/>同时，它也能帮助你脱离不良坐姿的坏习惯。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/chair_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
                <p class="title">黑胡桃木的弯曲木工艺</p>
                <p class="title_descrip_1">重现经典流线</p>
            </div>
        </div>
    </div>
    <div class="img_03 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/chair_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word">
               <p class="title">中央减震弹簧系统，确保移动时的平稳</p>
               <p class="title_descrip_2">许多人因为不良坐姿而导致身体损伤。而37℃人体工程学办公椅设置多<br/>点压力传感器，随时监测用户坐姿，随时提示人们保持正确的坐姿。</p>
               <p class="title_descrip_1 margin_20">中央弹簧减震调节</p>
            </div>
        </div>
    </div>
    <div class="img_04 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/chair_03.jpg">
        </div>
        <div class="word_container">
            <div class="img_04_word">
                <div class="word_04_left">
                    <p class="title">静音轮毂</p>
                    <p class="title_descrip_2">米其林静音轮毂，确保移动时的舒适与安静。</p>
                    <p class="title_descrip_1">全铝合金脚，米其林静音轮毂</p>
                </div>
            </div>
        </div>
    </div>
     <div class="img_05 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/chair_04.jpg">
        </div>
        <div class="word_container">
            <div class="img_04_word">
                <div class="word_04_left">
                    <p class="title">感温记忆棉</p>
                    <p class="title_descrip_2">37℃人体工程学办公椅的椅面采用了感温记忆棉填充，<br/>保证人们在使用不同姿势时都得到舒适体验。</p>
                    <p class="title_descrip_1">多点压力传感，监测人体坐姿</p>
                </div>
            </div>
        </div>
    </div>
    <div class="img_05 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/chair_05.jpg">
        </div>
        <div class="word_container">
            <div class="img_05_word">
               <p class="title_05">材质选择</p>
               <img src="./../../../assets/images/smart37/smartoffice/material_chair.png">
               <div class="title_descrip_2 word_05">
                   <div class="word_05_sub">舒适亲肤棉麻</div>
                   <div class="word_05_sub">高级透气牛皮</div>
                   <div class="word_05_sub">弹性织布</div>
                   <div class="word_05_sub">挪威羊毛面料</div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37officechair',
    
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
      margin-top: 50px;
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

    .word_left {
        width: 32%;
        float: left;
        text-align: left;
        padding-left: 18%;
    }

    .word_right {
        width: 30%;
        float: left;
        text-align: left;
        padding-left: 20%;
        
    }

    .title {
        font-size: 16pt;
    }

    .title_descrip_1 {
        font-size: 22pt;
        margin-top: -5px;
    }

    .title_descrip_2 {
        margin-top: -5px;
    }

    .img_03 {
        max-width: 1920px;
        min-width: 1010px;
    }

    .img_03_word {
        text-align: left;
        margin-left: 55%;
        margin-top: 13.5%;
        width: 50%;
    }

     .img_04 {
        max-width: 1920px;
        min-width: 1010px;
    }

    .margin_20 {
        margin-top: 30px !important;
    }

    .img_04_word {
        margin: 0 auto;
        padding-top: 10%;
    }

    .word_04_left {
        width: 50%;
        float: left;
        text-align: left;
        padding-left: 14%;
    }

    .word_04_right {
        width: 28%;
        float: left;
        text-align: left;
        padding-left: 15%;
        
    }

    .img_05 {
        max-width: 1920px;
        min-width: 1010px;
    }

    .img_05_word {
    }

    .title_05 {
        font-size: 18pt;
        margin-top: 17%;
    }

    .word_05 {
        width: 880px;
        margin: 0 auto;
        padding-top: 20px;
    }

    .word_05_sub {
        width: 220px;
        float: left;
    }

</style>
