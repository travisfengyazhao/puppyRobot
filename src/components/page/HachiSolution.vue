<template>
  <div id="HachiSolution">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu" @click="currDispaly(0)">
            <div id='divHachiLogo'>
              <img id='hachiheaderlogo' src="./../../assets/images/hachi/logo_Hachi.svg">
            </div>
            <div class="solutionName">解决方案</div>
          </div>
          <div class="divHachiPCNav">

            <ul>
              <li @click="currDispaly(1)">
                <a herf="">智慧家庭</a>
              </li>
              <li @click="currDispaly(2)">
                <a herf="">智慧社区</a>
              </li>
              <li @click="currDispaly(3)">
                <a herf="">智慧酒店</a>
              </li>
              <li @click="currDispaly(4)">
                <a herf="">智慧办公</a>
              </li>
              <li @click="currDispaly(5)">
                <a herf="">智慧商业</a>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="!_isMobile()" class="headerLine">
        </div>
      </div>
    </div>
    <div class="pageConent">
      <div class="conentMain">
        <div id="hachiMain" v-show="currDisIndex==0">
          <div class="designImg">
            <div class="hachi_jjfa_01">
              <img src="./../../assets/images/hachi/solution/Hachi_jjfa_01.jpg">
            </div>
          </div>
          <div class="designImg" style="background-color: #060b11;">
            <div class="hachi_jjfa_02">
            </div>
          </div>
        </div>
        <div id="hachiSmartHome" v-show="currDisIndex==1">
          <SmartHome/>
        </div>
        <div id="hachiCommunity" v-show="currDisIndex==2">
          <div class="designImg">
            <div class="hachi_community_01">
              <div class="hachi_community_01_01">
              </div>
            </div>
          </div>
          <div class="designImg" style="background-color:#FFFFFF;">
            <img src="./../../assets/images/hachi/community/div_03.jpg">
          </div>
          <div class="designImg" style="background-color:#FFFFFF;">
            <img src="./../../assets/images/hachi/community/div_04.jpg">
          </div>
          <div class="designImg" style="background-color:#FFFFFF;">
            <img src="./../../assets/images/hachi/community/div_05.jpg">
          </div>
        </div>
        <div id="hachiHotel" v-show="currDisIndex==3">
          <div class="designImg" style="background-color:#93a3ba;">
            <div class="hachi_hotel_01">
            </div>
          </div>
          <div class="designImg" style="background-color:#FFFFFF;">
            <img src="./../../assets/images/hachi/hotel/div_02.jpg">
          </div>
          <div class="designImg" style="background-color:#f2f2f2;">
            <img src="./../../assets/images/hachi/hotel/div_03.jpg">
          </div>
          <div class="designImg" style="background-color:#FFFFFF;">
            <img src="./../../assets/images/hachi/hotel/div_04.jpg">
          </div>
        </div>
        <div id="hachioffice" v-show="currDisIndex==4">
          <SmartOffice />
        </div>
        <div id="hachibusiness" v-if="currDisIndex==5">
          <SmartBusiness />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import SmartBusiness from './Hachi/SmartBusiness'
import SmartOffice from './Hachi/SmartOffice'
import SmartHome from './Hachi/SmartHome'

export default {
  name: 'HachiSolution',
  data() {
      return {
          currDisIndex: 0,
      }
  },
  components: {
      SmartBusiness,
      SmartOffice,
      SmartHome,
  },

  methods: {
    _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
    },
    currDispaly: function(index) {
    this.currDisIndex = index;
    }
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

    .headerContentMobile {
        width: 100%;
    }

    #divHachiLogo {
        float: left;
        height: $hachiSMB;
    }

    #hachiheaderlogo {
        height: $hachiSMB;
    }

    .hachiThridMenu {
        cursor: pointer;
    }

    .solutionName {
        float: left;
        font-size: 13pt;
        height: $hachiSMB;
        line-height: $hachiSMB;
    }

    .solutionName_mobile {
        font-size: 13pt;
        height: $hachiSMB;
        line-height: $hachiSMB;
    }

    .divHachiPCNav {
        float: right;
        height: $hachiSMB;
        line-height: $hachiSMB;
        ul {
            margin: 0px;
        }
        li {
            display: inline-block;
            line-height: $hachiSMB;
            // padding-left: 15px;
            // padding-right: 15px;
            // font-size: 11pt;
            width: 140px;
            list-style-type: none;
            :hover {
                display: inline-block;
                line-height: $hachiSMB;
                // padding-left: 15px;
                // padding-right: 15px;
                width: 100px;
                color: white;
                list-style-type: none;
                cursor: pointer;
                background-image: url('./../../assets/images/hachi/solution/button_bg_Hachi.png');
                background-position:50% 50%;              /*图片上下左右居中*/  
                background-size:contain;                  /*保持图像本身的宽高比例，将图片缩放到宽度或高度正好适应定义背景的区域*/  
                background-repeat:no-repeat;              /*图像不重复显示*/  
                -moz-background-size:100% 100%;

            }
        }
    }

    .divHachiMobileNav {
        float: right;
        height: $hachiSMB;
        line-height: $hachiSMB;
        ul {
            margin: 0px;
        }
        li {
            display: inline-block;
            line-height: $hachiSMB;
            // padding-left: 15px;
            // padding-right: 15px;
            width: 100%;
            :hover {
                display: inline-block;
                line-height: $hachiSMB;
                // padding-left: 15px;
                // padding-right: 15px;
                width: 100px;
                color: white;
                cursor: pointer;
                background-image: url('./../../assets/images/hachi/solution/button_bg_Hachi.png');
                background-position:50% 50%;              /*图片上下左右居中*/  
                background-size:contain;                  /*保持图像本身的宽高比例，将图片缩放到宽度或高度正好适应定义背景的区域*/  
                background-repeat:no-repeat;              /*图像不重复显示*/  
                -moz-background-size:100% 100%;

            }
        }
    }

    .hachiHT {
        width: 100%;
        height: $hachiSMB;
    }

    .hachiHT_mobile {
        width: 100%;
    }

    .headerLine {
        width: 100%;
        height: 1px;
        background-image: url('./../../assets/images/hachi/solution/nav_top_Hachi_line.png');
    }

    .designImg {
        text-align: center;
        width: 100%;
        img {
            display: block;  
            margin: 0 auto;

        }
    }

    .hachi_jjfa_02 {
        // min-width: 1280px;
        max-width: 2580px;
        height: 800px;
        background-image: url("./../../assets/images/hachi/solution/Hachi_jjfa_02.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .background_image_common {
        // min-width: 1280px;
        max-width: 2580px;
        height: 800px;
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .hachi_jjfa_01 {
        background-image:url('./../../assets/images/hachi/solution/div_bg_01.png'); 
        background-repeat: repeat-y;
        background-size: 100% 100%;
        height: 810px;
        position: relative;
        overflow: hidden;
        width: 100%;
        
    }

    .hachi_community_01 {
        background-image:url('./../../assets/images/hachi/community/div_01.png'); 
        background-repeat: repeat-y;
        background-size: 100% 100%;
        height: 1070px;
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    .hachi_community_01_01 {
        min-width: 1280px;
        max-width: 1800px;
        height: 1070px;
        background-image: url("./../../assets/images/hachi/community/div_02.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .hachi_hotel_01 {
        min-width: 1280px;
        max-width: 2580px;
        height: 1000px;
        background-image: url("./../../assets/images/hachi/hotel/div_01.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
    }



    .pageConent {
        width: 100%;
        text-align: center;
    }

    .conentMain {
        width: 100%;
        // margin: 0 auto;
    }

</style>

