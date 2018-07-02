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
              <div class="hachi_slogan1">哈奇致力于成为国内领先的智慧空间解决方案提供商</div>
              <div class="hachi_slogan2">用<span class="slogan_red">智慧住宅</span>科技缔造<span class="slogan_red">智慧人居</span>生活</div>
              <div class="hachi_solu1">
                <div class="mid">
                  <div class="mid_1" @click="currDispaly(1)">
                    <img src="./../../assets/images/hachi/solution/icon_01.png">
                    <div class="title_home">智慧家庭</div>
                    <div class="content">居家安防系统<br/>语音控制<br/>移动端开锁<br/>智能灯光控制<br/>红外感应</div>
                  </div>
                  <div class="mid_1" @click="currDispaly(2)">
                    <img src="./../../assets/images/hachi/solution/icon_02.png">
                    <div class="title_community">智慧社区</div>
                    <div class="content">动态人脸识别系统<br/>Smart ID 手环系统<br/>社区Wi-Fi<br/>连接社群<br/>楼宇呼叫系统</div>
                  </div>
                  <div class="mid_1" @click="currDispaly(3)">
                    <img src="./../../assets/images/hachi/solution/icon_03.png">
                    <div class="title_hotel">智慧酒店</div>
                    <div class="content">智能门锁<br/>智能窗帘<br/>智能家电控制<br/>智能魔镜<br/>智能灯光控制</div>
                  </div>
                  <div class="mid_1" @click="currDispaly(4)">
                    <img src="./../../assets/images/hachi/solution/icon_04.png">
                    <div class="title_office">智慧办公</div>
                    <div class="content margin_correcting">智能灯光<br/>智能Wi-Fi<br/>人脸考勤<br/>智能访客<br/>办公APP</div>
                  </div>
                  <div class="mid_1" @click="currDispaly(5)">
                    <img src="./../../assets/images/hachi/solution/icon_05.png">
                    <div class="title_business">智慧商业</div>
                    <div class="content margin_correcting">媒体机<br/>声光电技术<br/>商场电子导购系统<br/>VR看房<br/>AR沙盘</div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          <div class="designImg" style="background-color: #060b11;">
            <div class="hachi_jjfa_02">
              <div class="hachi_slogan3">全新价值</div>
              <div class="hachi_slogan4">采用现代化网络技术和信息集成技术，通过互联互通平台实现资源共享， <br/>为客户打造<span class="slogan_normal">智慧人居体验</span>，为<span class="slogan_normal">地产增值</span>。</div>
              <div class= "btm_word">
                <div class="btm_word_center">
                    <div class="word_1">
                      <div class="title">统一经营管理</div>
                      <div class="content">依托云平台互联互通，资源共享，促进地产集团化运营管理</div>
                    </div>
                     <div class="word_1">
                      <div class="title">彰显品牌实力</div>
                      <div class="content">技术结合运营，打造差异化 高品质地产项目，助力销售</div>
                    </div>
                    <div class="word_1">
                      <div class="title">实现资产增值</div>
                      <div class="content">智能家居、生活消费、教育、 医疗等各类资源对接，实现 地产及物业增值</div>
                    </div>
                    <div class="word_1">
                      <div class="title">提升人居体验</div>
                      <div class="content">智慧系统形成各种形式的 信息交互，以达到更加快 捷和舒适的生活体验</div>
                    </div>
                </div>
              </div>
            
            
            </div>
          </div>
        </div>
        <div id="hachiSmartHome" v-show="currDisIndex==1">
          <SmartHome/>
        </div>
        <div id="hachiCommunity" v-show="currDisIndex==2">
          <SmartCommunity/>
        </div>
        <div id="hachiHotel" v-show="currDisIndex==3">
          <SmartHotel/>
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
import SmartCommunity from './Hachi/SmartCommunity'
import SmartHotel from './Hachi/SmartHotel'

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
      SmartCommunity,
      SmartHotel
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
        height: 880px;
        background-image: url("./../../assets/images/hachi/solution/Hachi_jjfa_02.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;

        .hachi_slogan3 {
          width: 100%;
          text-align: center;
          font-size: 32pt;
          font-weight:lighter;
          margin-top: 190px;
          color: white;
        }

        .hachi_slogan4 {
          width: 100%;
          text-align: center;
          font-size: 19pt;
          font-weight: lighter;
          line-height: 45px;
          margin-top: 30px;
          color: white;
          .slogan_normal {
            font-weight: normal;
          }
        }

        .btm_word{
          color: white;
          width: 100%;
          margin-top: 200px;
          .btm_word_center {
            width: 840px;
            margin: 0 auto;

            .word_1 {
              width: 210px;
              font-weight: lighter;
              float: left;
              .title {
                font-size: 18pt;
              }

              .content {
                margin-top: 20px;
                margin-left: 35px;
                margin-right: 35px;
                font-size: 11pt;
                line-height: 16px;
              }

            }

            }
        }
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
        height: 740px;
        position: relative;
        overflow: hidden;
        width: 100%;
        .hachi_slogan1 {
          width: 100%;
          text-align: center;
          font-size: 32pt;
          font-weight:lighter;
          position: absolute;
          top: 182px;
        }

        .hachi_slogan2 {
          width: 100%;
          text-align: center;
          font-size: 20pt;
          position: absolute;
          top: 250px;

          .slogan_red {
          color: #d7202d;
          }
        }

        .hachi_solu1 {
          width: 100%;
          text-align: center;
          font-size: 20pt;
          position: absolute;
          top: 340px;
          .mid {
            width: 743px;
            margin: 0 auto;
            .mid_1{
              width: 148px;
              cursor: pointer;
              float:left;
              .title_home {
                margin-top: 3px;
                margin-left: -8px;
                color: #d7202d;
                font-size: 16pt;
              }

              .content {
                font-size: 10pt;
                line-height: 29px;
                margin-top: 19px;
              }

              .title_community {
                margin-top: 3px;
                margin-left: -7px;
                color: #d7202d;
                font-size: 16pt;
              }

              .title_hotel {
                margin-top: 3px;
                margin-left: 3px;
                color: #d7202d;
                font-size: 16pt;
              }

              .title_office {
                margin-top: 3px;
                margin-left: 12px;
                color: #d7202d;
                font-size: 16pt;
              }

              .title_business {
                margin-top: 3px;
                margin-left: 20px;
                color: #d7202d;
                font-size: 16pt;
              }

              .margin_correcting {
                margin-left: 11px;
              }
              
            }
          }
        }
        
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

