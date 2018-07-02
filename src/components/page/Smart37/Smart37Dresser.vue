<template>
  <div id="smart37dresser">
    <div class="img_01 imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/smart37/smartoffice/37_logo.png">
      </div>
      <div class="img_01_01">
        37°C智能梳妆台
      </div>
      <div class="img_01_02">
        这是一款智能梳妆台。它配备有补光灯，帮助用户更好地完善妆容。<br/>而肤质检测功能能让用户随时了解自己的肤质。<br/>另外，除了查看基础天气信息之外，用户还能利用37°C智能梳妆台拍照以及观看视频。
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
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/dresser_01.jpg">
        </div>
    </div>
    <div class="img_03 imgBackCenter">
        <div>
            <img class="img_style" src="./../../../assets/images/smart37/smartbedroom/dresser_02.jpg">
        </div>
        <div class="word_container">
            <div class="img_03_word ">
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartbedroom/icon_01.png">
                    <p class="title_2">肤质检测和补光灯</p>
                    <p class="title_descrip_3">37℃智能梳妆台为用户提供皮肤检测功能，能让用户随时了解到皮肤的弹性、色 素、水分等状况，帮助用户更有针对性地进行护肤。同时，37°C智能梳妆台为用户提供了补光灯。</p>
                </div>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartbedroom/icon_02.png">
                    <p class="title_2">拍照</p>
                    <p class="title_descrip_3">37℃智能梳妆台也为用户提供拍照功能。通过明亮的镜子，用户可以清晰地地看到自己的状态，以便调整自己的姿态和妆容。用户可以直接拍下照片，留住美丽的瞬间。</p>
                </div>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartbedroom/icon_03.png">
                     <p class="title_2">视频播放</p>
                    <p class="title_descrip_3">37℃智能梳妆台在用户不梳妆打扮的时候也不会白白占用空间。我们为用户提供了视频播放功能。当用户无聊时，可以使用梳妆台来看节目或者电影。</p>
                </div>
                <div class="word_sep">
                    <img src="./../../../assets/images/smart37/smartbedroom/icon_03.png">
                     <p class="title_2">夜灯模式</p>
                    <p class="title_descrip_3">37℃智能梳妆台在镜面上提供了天气显示功能，方便用户根据温度、湿度以及其他天气状况来挑选适合的衣物和妆容。</p>
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
               <img src="./../../../assets/images/smart37/smartbedroom/material_dresser.png">
               <div class="word_05">
                   <div class="word_05_sub">贴皮木料</div>
                   <div class="word_05_sub">胡桃木实木</div>
                   <div class="word_05_sub">三聚氰胺板</div>
                   <div class="word_05_sub">橡木</div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'smart37dresser',
    
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
