
<template>
  <div id="contactus">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              CONTACT
            </div>
            <div class="solutionName">联系我们</div>
          </div>

          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="content">
        <div class="img_01_back">
            <div class="img_01 imgBackCenter">
            </div>
        </div>
        <div class="img_02_back">
              <div class="img_02 imgBackCenter">
            </div>
        </div>
        <div class="img_03_back">
            <div class="img_03">
                <img class="logo" src=".\..\..\assets\images\header\puppy_logo.svg"/>
                <div class="info">
                    <div class="info_left">广州小狗机器人技术有限公司北京分公司</div>
                    <div class="info_right">
                        <div class="right_top">
                            <img class="phone" src="./../../assets/images/contact//phone.png"/>
                            <div class="whitespace"></div>
                            <div>010-59037583</div>
                        </div>
                        <div class="right_bottom">
                            <img class="address" src="./../../assets/images/contact//address.png"/>
                            <div class="whitespace"></div>
                            <div>北京市朝阳区东三环中路63号富力中心709室</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="img_03_back border_none">
            <div class="img_03">
                <img class="hachi" src=".\..\..\assets\images\hachi\logo_Hachi.png"/>
                <div class="info">
                    <div class="info_left">广州哈奇智能科技有限公司北京分公司</div>
                    <div class="info_right">
                        <div class="right_top">
                            <img class="phone" src="./../../assets/images/contact//phone.png"/>
                            <div class="whitespace"></div>
                            <div>010-59220690</div>
                        </div>
                        <div class="right_bottom">
                            <img class="address" src="./../../assets/images/contact//address.png"/>
                            <div class="whitespace"></div>
                            <div>北京市朝阳区东三环中路63号富力中心16层</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>

export default {
  data() {
      return { 
      }
  },
    components: {
    },
  methods: {

  }
}
</script>




<style lang="scss" scoped>
$hachiSMB: 46px;

    .hachiheader {
        width: 100%;
        text-align: center;
    }

    .headerContent {
        width: 1280px;
        margin: 0 auto;
    }

    #divNews {
        float: left;
        height: $hachiSMB;
        line-height: $hachiSMB;
        margin-right: 10px;
    }

    .hachiThridMenu {
        height: $hachiSMB;
    }

    .solutionName {
        float: left;
        font-size: 13pt;
        height: $hachiSMB;
        line-height: $hachiSMB;
    }

    .hachiHT {
        width: 100%;
        height: $hachiSMB;
    }


    .headerLine {
        width: 100%;
        height: 1px;
        background-image: url('./../../assets/images/hachi/solution/nav_top_Hachi_line.png');
    }

    .titleLine {
    width: 70px;
    height: 4px;
    background-color: black;
    margin: 24px 0px 0px 0px; 
    }
    .content {
        width: 100%;
    }

    .imgBackCenter {
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .img_01 {
        max-width: 2580px;
        height: 780px;
        background-image: url("./../../assets/images/contact/div_01.jpg");
    }

    .img_01_back {
        background-color: black;
    }

    .img_02 {
        max-width: 2580px;
        height: 91px;
        background-image: url("./../../assets/images/contact/div_02.jpg");
    }

    .img_02_back {
        height: 91px;
        background-image:url('./../../assets/images/contact//div_03.jpg'); 
        background-repeat: repeat-y;
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
    }

    .img_03_back {
        height: 394px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid #d0d2d3;
    }

    .border_none {
        border: none;
    }

    .img_03 {
        max-width: 1010px;
        height: 394px;
        margin: 0 auto;
        .logo {
            height: 48px;
            margin-top: 105px;
        }

        .hachi {
            height: 43px;
            margin-top: 105px;
        }

        .info{
            margin-top: 40px;
            .info_left {
                width: 470px;
                float: left;
                text-align: right;
            }

            .info_right {
                width: 540px;
                float: left;
                text-align: left;

                .phone {
                    margin-left: 100px;
                    width: 20px;
                    height: 21px;
                    margin-left: 55px;
                    float: left;
                }

                .address {
                    margin-left: 100px;
                    width: 17px;
                    height: 24px;
                    margin-left: 55px;
                    float: left;
                }

                span{
                    line-height: 25px;
                }

                .right_bottom {
                    margin-top: 20px;
                    line-height: 28px;
                }


                .whitespace {
                    width: 10px;
                    height: 20px;
                    float: left;
                }



            }


        }
        
    }



</style>
