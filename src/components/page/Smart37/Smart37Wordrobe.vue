<template>
  <div id="smart37wordrobe">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能穿衣柜
      </div>
      <div class="img_01_02">
        这是一款智能衣柜。它是为了更好地服务于客户而设计。<br/>它内设了烘干和抽湿系统，以保证衣柜内部以及衣物的干燥清爽。<br/>另外，它还能根据温度和湿度的变化，为用户提供穿衣建议。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/wordrobe_01.jpg">
        </div>
        <div class="word_container">
            <div class="img_02_word ">
                <p class="title_descrip_1">智能数据提供穿衣建议</p>
            </div>
        </div>
    </div>
    <div class="img_03 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/wordrobe_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word ">
               <div class="img_03_icon">
                   <img src="./../../../assets/images/smart37/smartbedroom/wordrobe_icon.png">
               </div>
               <div class="word_container_sub">
                    <p class="title_descrip_1">衣物发霉</p>
                    <p class="">梅雨天气的时候，空气会十分潮湿，衣柜里干燥的衣物也会因此变得湿润。<br/>如果不进行干燥处理的话，衣服上就可能会长霉菌。</p>
                    <p class="margin_correcting">内设抽湿烘干系统。当遇到潮湿天气时，<br/>用户可以选择烘干或者抽湿功能以保持衣柜内部以及衣物的干燥。</p>
                    <p class="title_descrip_1 margin_20">烘干/除湿功能</p>
               </div>
            </div>
        </div>
    </div>
        <div class="img_03 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/wordrobe_03.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word ">
               <div class="img_03_icon">
                   <img src="./../../../assets/images/smart37/smartbedroom/wordrobe_icon_2.png">
               </div>
               <div class="word_container_sub">
                    <p class="title_descrip_1">衣物选择困难</p>
                    <p class="">衣柜里会存放各种厚度的衣服，根据天气以及温度选择不同的衣服。<br/>可是实际上经常在换好衣服到室外才发现衣服不合适当天的天气。</p>
                    <p class="margin_correcting">智能衣柜可以通过内置感应器感知温度和湿度，<br/>并且会根据得出的数据给用户以穿衣建议。</p>
                    <p class="title_descrip_1 margin_20">穿衣建议</p>
               </div>
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
               <img src="./../../../assets/images/smart37/smartbedroom/material_wordrobe.png">
               <div class="word_05">
                   <div class="word_05_sub">胡桃木贴皮</div>
                   <div class="word_05_sub">光面三聚氰胺板</div>
                   <div class="word_05_sub">胡桃木实木</div>
                   <div class="word_05_sub">麻面三聚氰胺板</div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37wordrobe',
    
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

    .word_container_sub {
        position: absolute;
        width: 1010px;
        top: 24%;
    }

    .img_02_word {
        margin: 0 auto;
        width: 1010px;
        padding-top: 6%;
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
        padding-left: 45px;
        padding-right: 45px;
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

    .img_03_icon {
        margin-top: 50px;
    }

    .margin_correcting {
        margin-top: 13%;
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
