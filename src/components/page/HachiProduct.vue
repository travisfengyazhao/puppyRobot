<template>
  <div id="HachiCases">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu"  >
            <div class="logoNav" @click="currDispaly(0)">
                <div id='divHachiLogo'>
                <img id='hachiheaderlogo' src="./../../assets/images/hachi/logo_Hachi.svg">
                </div>
                <div class="solutionName">产品中心</div>
            </div>
            <div class="divHachiPCNav">
                <ul>
                <li @click="currDispaly(1)">
                    <a herf="">硬件</a>
                </li>
                <li @click="currDispaly(2)">
                    <a herf="">哈奇智家App</a>
                </li>
                <li @click="currDispaly(3)">
                    <a herf="">哈奇社区App</a>
                </li>
                </ul>
            </div>
        </div>
          <div class="headerLine">
          </div>
        </div>
      </div>
      <div class="pageConent">
        
        <div class="contentMain imgBackCenter" v-show="currDisIndex==0">
            <div class="hachi_logo">
                <img src="./../../assets/images/hachi/product/logo_Hachi.png">
            </div>
            <div class="product_title">
                让生活更智慧
            </div>
            <div class="product_sub_title">
                安全 便捷 舒适 艺术
            </div>
            <div class="product_tab">
                <div class="tab_container">
                    <div class="product_tab_btn" @click="currDispaly(1)"><a herf="#">硬件</a></div>
                    <div class="product_tab_btn" @click="currDispaly(2)"><a herf="#">哈奇智家App</a></div>
                    <div class="product_tab_btn" @click="currDispaly(3)"><a herf="#">哈奇社区App</a></div>
                </div>
            </div>
        </div>

        <div class="" v-show="currDisIndex==1">
            <Hardware />
        </div>
        <div class="" v-show="currDisIndex==2">
            <SmartHomeApp />
        </div>
        <div class="" v-show="currDisIndex==3">
            <HachiApp />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hardware from './Hachi/Hardware';
import SmartHomeApp from './Hachi/SmartHomeApp';
import HachiApp from './Hachi/HachiApp';

export default {
  name: 'HachiProduct',
  data() {
      return {
          currDisIndex: 0,
      }
  },
  components: {
      Hardware,
      SmartHomeApp,
      HachiApp
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

    #divHachiLogo {
        float: left;
        height: $hachiSMB;
    }

    #hachiheaderlogo {
        height: $hachiSMB;
    }

    .hachiThridMenu {
        height: $hachiSMB;
    }

    .logoNav {
        cursor: pointer;
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
                width: 130px;
                color: white;
                list-style-type: none;
                cursor: pointer;
                background-image: url('./../../assets/images/hachi/product/button_bg_Hachi2.png');
                background-position:50% 50%;              /*图片上下左右居中*/  
                background-size:contain;                  /*保持图像本身的宽高比例，将图片缩放到宽度或高度正好适应定义背景的区域*/  
                background-repeat:no-repeat;              /*图像不重复显示*/  
                -moz-background-size:100% 100%;

            }
        }
    }

    .headerLine {
        width: 100%;
        height: 1px;

        background-image: url('./../../assets/images/hachi/solution/nav_top_Hachi_line.png');
    }

    .pageConent {
        width: 100%;
        text-align: center;
      
    }

    .contentMain {
        max-width: 2580px;
        height: 968px;
        background-image: url("./../../assets/images/hachi/product/div_01.jpg");
       
    }

    .contentHardware {
        max-width: 2580px;
        height: 968px;
        background-image: url("./../../assets/images/hachi/product/div_01.jpg");
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
    }

    .product_sub_title {
        font-size: 16pt;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .product_tab {
        width: 100%;
        text-align: center;
        height: 30px;
    }

    .tab_container {
        width: 381px;
        text-align: center;
        margin: 0 auto;
    }

    .product_tab_btn {
        width: 110px;
        height: 30px;
        line-height: 30px;
        border: 1px solid white;
        background-color: rgba(255,255,255,0.3);;
        float:left;
        margin-right: 15px;
        font-size: 10pt;
        cursor: pointer;
        a:hover {
            color: #929497;
        }
    }

</style>