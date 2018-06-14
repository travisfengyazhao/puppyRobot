<template>
  <div id="hachiapp">
    <div class="contentMain imgBackCenter">
      <div class="hachi_logo">
        <img src="./../../../assets/images/hachi/product/logo_Hachi.png">
      </div>
      <div class="product_title">
        哈奇社区APP
      </div>
      <div class="product_sub_title">
        连接一个，即连接所有
      </div>
      <div class="product_produce">
        哈奇产品研发团队不断收集用户反馈进行产品更新迭代，提升APP使用体验，无论是简约易用的UI，
        <br/>还是体贴入微的功能改进，都让它无比贴合用户使用习惯。
      </div>
      <div class="product_download">
        下载方式：登录App Store搜索“Hachi哈奇”或扫描二维码下载哈奇社区APP
      </div>
    </div>
    <div class="whitespace">
    </div>
  </div>
</template>

<script>
export default {
    name: 'hachiApp'
}
</script>

<style lang="scss" scoped>
    .contentMain {
      max-width: 2580px;
      height: 820px;
      background-image: url("./../../../assets/images/hachi/product/hachiAPP/div_01.jpg");
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
      margin-top: 100px;
    }

    .product_title {
      margin-top: 45px;
      font-size: 30pt;
      font-weight: lighter;
    }

    .product_sub_title {
      font-size: 16pt;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .product_produce {
      font-size: 12pt;
      margin-top: 30px;
      line-height: 25px;
    }

    .product_download {
      font-size: 12pt;
      margin-top: 365px;
      line-height: 25px;
    }

    .whitespace {
      width: 100%;
      height: 155px;
    }


</style>
