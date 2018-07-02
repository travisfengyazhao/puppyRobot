<template>
  <div id="smart37bed">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能床
      </div>
      <div class="img_01_02">
        37℃智能床是一款实现无接触、无感感应的智能床。<br/>睡眠质量监测以及多种情境模式选择给用户提供更好的睡眠舒适度和卧室体验。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/bed_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
                <div class="word_sep">
                    <p class="title">无感感应</p>
                    <p class="title_descrip_2">37℃智能床抛弃了传统的穿戴式感应元件，而选择了雷达感应器，从而实现了完全的无感觉的监测。</p>
                </div>
                <div class="word_sep">
                    <p class="title">睡眠报告</p>
                    <p class="title_descrip_2">37℃智能床可将用户睡眠数据制成睡眠报告，让用户及时了解睡眠质量及主要问题。</p>
                </div>
                <div class="word_sep">
                     <p class="title">三种模式</p>
                    <p class="title_descrip_2">37℃智能床提供三种模式：阅读，睡眠，夜灯。它让用户在不同情境下有都最佳体验。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="img_03 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/bed_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word ">
                <p class="title">三种模式</p>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartbedroom/icon_01.png">
                    <p class="title_2">阅读模式</p>
                    <p class="title_descrip_3">当你需要阅读时，灯光会自动进行光线和角度调节。</p>
                </div>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartbedroom/icon_02.png">
                    <p class="title_2">助眠模式</p>
                    <p class="title_descrip_3">舒缓的音乐和适宜的灯光会辅助你进入睡眠状态。</p>
                </div>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartbedroom/icon_03.png">
                     <p class="title_2">夜灯模式</p>
                    <p class="title_descrip_3">你半夜起床时，床底的感应灯会自动亮起。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="img_04 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/bed_03.jpg">
        </div>
        <div class="word_container">
            <div class="img_04_word">
                    <p class="title_descrip_1">睡眠报告</p>
                    <p>借助雷达传感器，我们可以检测用户的睡眠状态和质量，并将睡眠数据发送到手机的应用程序，使用户能够随时掌握睡眠质量和主要问题。<br/>并且，结合健康专业人士的建议，手机APP会每周发送健康报告，以便您可以进行更健康的睡眠调整。<br/>另外，如果家里有许多张智能床，人们也能用智能手机进行调节与检测，以确保你的儿女或者父母也拥有更好的卧室体验。</p>
            </div>
        </div>
    </div>
    <div class="img_05 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/bed_04.jpg">
        </div>
        <div class="word_container">
            <div class="img_05_word">
               <p class="title_05">材质选择</p>
               <img src="./../../../assets/images/smart37/smartbedroom/material_bed.png">
               <div class="word_05">
                   <div class="word_05_sub">挪威羊毛面料</div>
                   <div class="word_05_sub">亲肤亚麻面料</div>
                   <div class="word_05_sub">抗静电雪尼尔面料</div>
                   <div class="word_05_sub">弹性织布</div>
               </div>
            </div>
        </div>
    </div>
    <smart37-dresser/>
    <smart37-wordrobe/>
  </div>
</template>

<script>
import Smart37Dresser from './Smart37Dresser'
import Smart37Wordrobe from './Smart37Wordrobe'
export default {
    name: 'smart37bed',
    components: {
        Smart37Dresser,
        Smart37Wordrobe
    }
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

    .word_sep {
        width: 336px;
        float: left;
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
        font-weight: bold;
    }

    .title_2 {
        font-size: 14pt;
        font-weight: bold;
    }

    .title_descrip_1 {
        font-size: 22pt;
        margin-top: -5px;
    }

    .title_descrip_2 {
        margin-top: -5px;
        padding-left: 45px;
        padding-right: 45px;
        text-align: left;
    }

    .title_descrip_3 {
        margin-top: -5px;
        padding-left: 60px;
        padding-right: 60px;
        text-align: left;
    }

    .img_03 {
        max-width: 1920px;
        min-width: 1010px;
    }

    .img_03_word {
        margin: 0 auto;
        width: 1010px;
        padding-top: 2%;
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
        padding-top: 7%;
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
        color: white;
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
