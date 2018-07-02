<template>
  <div id="smart37office">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能办公桌-
        <img src="./../../../assets/images/smart37/smartoffice/M1.png">
      </div>
      <div class="img_01_02">
        37℃智能办公桌是一款具有新功能的智能办公桌，它可以根据人们的工作姿势和状态的变化进行适当的高度调整。<br/>37℃智能办公桌的高度调整完全由手势控制。配备智能灯系统的37°C智能办公桌可为不同的工作条件提供适当的照明。<br/>桌面控制模块利用红外线感测用户的坐姿，防止用户由于坐姿不良而导致身体疼痛。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/div_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word">
                <div class="word_left">
                    <p class="title">整体外观</p>
                    <p class="title_descrip_1">办公桌中的魔术师</p>
                </div>
                <div class="word_right">
                    <p class="title">手势控制</p>
                    <p class="title_descrip_2">37℃智能办公桌的高度调节完全由手势控制，<br/>不需要任何额外的按键，<br/>完全符合人们自然的操作习惯。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="img_03 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/div_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word">
               <p class="title">联动台灯</p>
               <p class="title_descrip_2">37℃智能办公桌还带有联动的智能台灯系统，通过智能感应器为不同工作状态提供适宜的灯光。人体联动台灯，人来开灯，人走灯灭。书写模式，联动灯光，智能坐姿提醒。</p>
               <p class="title_descrip_1">人来开灯，人走灯灭</p>
            </div>
        </div>
    </div>
    <div class="img_04 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/div_03.jpg">
        </div>
        <div class="word_container">
            <div class="img_04_word">
                <div class="word_04_left">
                    <p class="title">自动感应</p>
                    <p class="title_descrip_2">如果你购买了同系列的智能办公椅，<br/>那么它也可以自动感应37℃智能办公桌实现无线充电。</p>
                    <p class="title_descrip_1">椅子归位后，自动感应充电</p>
                </div>
                <div class="word_04_right">
                    <p class="title">桌面控制模块</p>
                    <p class="title_descrip_2">37℃智能办公桌的桌面控制模块可利用红外感应用户的坐姿， 防止用户因为不良坐姿而遭受身体疼痛。</p>
                    <p class="title_descrip_2">37℃智能办公桌的桌面控制模块可随你的心意进行自由挪动，并且还为你的智能手机提供无限充电服务。</p>
                </div>
            </div>
        </div>
    </div>
     <div class="img_05 imgBackCenter">
                <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartoffice/div_04.jpg">
        </div>
        <div class="word_container">
            <div class="img_05_word">
               <p class="title_05">材质选择</p>
               <img src="./../../../assets/images/smart37/smartoffice/material.png">
               <div class="title_descrip_2 word_05">
                   <div class="word_05_sub">钢琴烤漆面板</div>
                   <div class="word_05_sub">胡桃木贴面</div>
                   <div class="word_05_sub">实木颗粒板材</div>
                   <div class="word_05_sub">马鞍皮革面</div>
               </div>
            </div>
        </div>
    </div>
    <Smart37officeChair />
  </div>
</template>

<script>
import Smart37officeChair from './Smart37OfficeChair'
export default {
    name: 'smart37office',
    components: {
        Smart37officeChair
    },
    mounted() {
        if(window.document.body.offsetWidth > 1920){
            document.querySelector(".img_02_word").style.paddingTop = '180px';
            document.querySelector(".word_left").style.width = '32%';
            document.querySelector(".word_left").style.paddingLeft = '18%';
            document.querySelector(".word_right").style.width = '30%';
            document.querySelector(".word_right").style.paddingLeft = '20%';
        } else {
            document.querySelector(".img_02_word").style.paddingTop = '8vw';
            document.querySelector(".word_left").style.width = '25%';
            document.querySelector(".word_left").style.paddingLeft = '25%';
            document.querySelector(".word_right").style.width = '42%';
            document.querySelector(".word_right").style.paddingLeft = '8%';
        }

        window.onresize = function temp() {
            if(window.document.body.offsetWidth > 1920){
                document.querySelector(".img_02_word").style.paddingTop = '180px';
                document.querySelector(".word_left").style.width = '32%';
                document.querySelector(".word_left").style.paddingLeft = '18%';
                document.querySelector(".word_right").style.width = '30%';
                document.querySelector(".word_right").style.paddingLeft = '20%';

            } else {
                document.querySelector(".img_02_word").style.paddingTop = '8vw';
                document.querySelector(".word_left").style.width = '25%';
                document.querySelector(".word_left").style.paddingLeft = '25%';
                document.querySelector(".word_right").style.width = '42%';
                document.querySelector(".word_right").style.paddingLeft = '8%';
            }
        }; 
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
        width: 1280px;
        padding-top: 180px;
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
        margin-left: 15%;
        margin-top: 18%;
        width: 27%;
    }

     .img_04 {
        max-width: 1920px;
        min-width: 1010px;
    }

    .img_04_word {
        margin: 0 auto;
        padding-top: 12%;
    }

    .word_04_left {
        width: 30%;
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
