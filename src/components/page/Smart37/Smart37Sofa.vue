<template>
  <div id="smart37sofa">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能沙发
      </div>
      <div class="img_01_02">
        这是一款智能沙发，它是为了提升人们的客厅休闲体验而设计。<br/>沙发，作为客厅中重要的成分，我们认为它不仅仅只是一个用具，它也是一个环境 —— 一个让人觉得方便、舒适、放松的环境。<br/>另外，科学表明，长期久坐会给身体带来损害，<br/>我们希望这款智能沙发能在给用户舒适体验的同时能够帮助用户摆脱这个伤害身体的坏习惯。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/sofa_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word ">
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartlivingroom/sofa_icon_01.jpg">
                    <p class="title_2">智能温度调节</p>
                    <p class="title_descrip_3">当用户坐在沙发上时，沙发内 置的智能温度调节系统会开始 工作，根据收集的环境温度数 据调节出舒适的温度。</p>
                </div>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartlivingroom/sofa_icon_02.jpg">
                    <p class="title_2">久坐提醒</p>
                    <p class="title_descrip_3">久坐不动会对人的腰椎、脊椎产生造成伤害。这款智能沙发设置有多点压力传感器，能够随时监测用户的坐卧的时间。</p>
                </div>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartlivingroom/sofa_icon_03.jpg">
                     <p class="title_2">智能感应灯</p>
                    <p class="title_descrip_3">与沙发一体化设计的人体、 光线双智能感应灯，能在人 走近时自动开启，而在人离 开后自动关闭。</p>
                </div>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartlivingroom/sofa_icon_04.jpg">
                     <p class="title_2">无线充电架</p>
                    <p class="title_descrip_3">沙发侧边的无线充电架， 满足用户随时为手机充电 的要求。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="img_05 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/sofa_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_05_word">
               <p class="title_05">材质选择</p>
               <img src="./../../../assets/images/smart37/smartlivingroom/material_sofa.jpg">
               <div class="word_05">
                   <div class="word_05_sub">高级纯色亚麻布料</div>
                   <div class="word_05_sub">进口格纹绒面布料</div>
                   <div class="word_05_sub">高级格纹亚麻布料</div>
                   <div class="word_05_sub">纯色冰花植绒布料</div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37sofa',
    
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
        width: 252.5px;
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
        padding-left: 40px;
        padding-right: 40px;
        text-align: left;
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
