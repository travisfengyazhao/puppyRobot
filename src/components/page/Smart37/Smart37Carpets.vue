<template>
  <div id="smart37carpets">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能地毯
      </div>
      <div class="img_01_02">
        在床边铺上一块Lummi，起夜时就不用在黑暗里抓瞎，只要踩上这块地毯，就会有充满梦幻感的柔和亮光在脚下亮起。<br/>Lummi的设计思路并不复杂，Lummi共分为四层，最下面一层是防水层，可以防止漏电；<br/>接着是电路层，再往上是LED层，最后由接触感柔软的织物层覆盖。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/carpets_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
               <p class="title_descrip_1">无 线 充 电 地 毯</p>
               <p class="title_2">整合所有智能家居充电模块</p>
            </div>
            <div class="img_03_word ">
                <div class="img_container">
                    <img src="./../../../assets/images/smart37/smartlivingroom/elements.png">
                    <div class="img_03_absolute">
                        <span class="days_num">&nbsp;90</span>
                        <span>Days</span>
                        <p class="num_bottom">超长续航</p>
                    </div>
                </div>
               <br/>
               <img src="./../../../assets/images/smart37/smartlivingroom/Vector Smart Object.png">
            </div>
        </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/carpets_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word ">
               <p class="title_descrip_1">金属杆为轴心</p>
               <p class="title_2 margin_reduce10">旋转地毯更便于收纳</p>
               <div class="line_container">
                    <div class="line_container_sub">
                        <img src="./../../../assets/images/smart37/smartlivingroom/line.png">
                        <div class="sub_absolute">
                            <div>USB<br/>充电</div>
                         </div>
                    </div>
                    <div class="line_spe">
                    </div>
                    <div class="line_container_sub">
                        <img src="./../../../assets/images/smart37/smartlivingroom/line.png">
                         <div class="sub_absolute">
                            <div>防水<br/>胶套</div>
                         </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/carpets_03.jpg">
        </div>
        <div class="word_container">
            <div class="img_04_word margin_20 font_color_white">
                <p class="title_descrip_1">地毯+夜间感应照明 </p>
                <p class="title_3">Lummi智能地毯使用了压力传感器和延时电路，<br/>用来控制LED开关，同时为了节能还使用了光敏电阻，<br/>使Lummi在白天即使被踩到也不会亮起。</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37carpets',
    
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
        padding-top: 3%;
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
        margin-top: -10px;
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
        padding-top: 14%;
    }

    .img_container{
        position: relative;
    }

    .img_03_absolute {
        width: 100%;
        position: absolute;
        text-align: center;
        top: 45px;

        .days_num{
            font-size: 70pt;
        }

        .num_bottom{
            margin-top: -20px;
            font-size: 16pt;
        }
    }

    .img_04_word {
        margin: 0 auto;
        width: 1010px;
        padding-top: 22%;
    }

    .title_3 {
        margin-top: 40px;
        line-height: 30px;
    }

    .font_color_white {
        color: white;
    }

</style>
