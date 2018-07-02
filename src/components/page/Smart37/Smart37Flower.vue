<template>
  <div id="smart37flower">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能花架
      </div>
      <div class="img_01_02">
        37°C智能花架通过外观设计的模块化，实现多样化种植，并且利用模块化造型的灵活性，实现最佳的观赏性。<br/>还通过堆肥技术，实现种植系统自消化。并利用智能补光系统，解放使用空间的局限性。<br/>在外观设计上，使产品与家具环境更融合，去除化工感。帮助人们生活在钢筋混泥土之间，能更靠近绿色。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/flower_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
               <p class="title_descrip_1">如果你在钢筋混泥土之间有个农场</p>
               <p class="title_3">我们每天都生活在钢筋混泥土之间，人们希望能更靠近绿色。 </p>
            </div>
        </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/flower_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
               <p class="title_descrip_1">一个属于城市的农场</p>
               <p class="title_3">正六边形具有高度对称性，且可以无空隙地填满整个平面。<br/>正六边形也是自然界最多见的形态之一，犹如填满蜂蜜的蜂巢，寓意丰收。</p>
            </div>
        </div>
    </div>
    <div class="img_02 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartlivingroom/flower_03.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word font_color_white">
               <p class="title_descrip_1">智能家居农场</p>
               <p class="title_2">种菜、种花、种草、养鱼</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37flower',
    
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
        padding-top: 22%;
    }

    .title_3 {
        margin-top: 20px;
        line-height: 30px;
    }

    .font_color_white {
        color: white;
    }

</style>
