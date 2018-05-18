
<template>
  <div id="robottech">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              ROBOT
            </div>
            <div class="solutionName">机器人技术</div>
          </div>

          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="content">
        <div class="img_01_back">
            <div class="img_01 imgBackCenter">
                <div class="content_01">
                        无人驾驶是最近两年的最热的热点
                </div>
            </div>
        </div>
        <div class="img_02_back">
            <div class="img_02 imgBackCenter">
                <div class="content_02">
                        随着AI技术的快速发展
                </div>
                <div class="content_03">
                        无人驾驶作为一个会改变未来世界的科技吸引了无数巨头，投资，<br/>和满怀梦想的创业者投身到这个领域中来。  
                </div>
                <div class="content_04">
                    <div class="content_04_1">
                        <div class="content_04_left">
                         </div>   
                         <div class="content_04_right">
                             <div>无人驾驶的落地场景主要包括：城市开放道路的无人驾驶，代表有美国Google 公司的Waymo 出租车，美国Tesla 的自自动驾驶模式，国内的Apollo 打造的开放道路无人驾驶业态。</div>
                         </div>   
                        
                    </div>
                </div>
                <div class="content_05">
                        无人驾驶的落地另外一个重要场景
                </div>
                <div class="content_06">
                        是一些重复劳动的劳动密集型行业，卡车，送货：
                </div>
            </div>
        </div>
        <div class="img_03_back">
            <div class="img_03 imgBackCenter">
                 <div class="content_07">
                        最适合无人驾驶大规模商用的场景
                </div>
                <div class="content_08">
                        是封闭社区或者景区的
                        <span>摆渡车</span>
                </div>
                <div class="content_09">
                    <div class="content_09_1">
                        <div class="content_09_left">
                         </div>   
                         <div class="content_09_right">
                             <div>puppy 技术团队正在和国内，国外的技术领先公司在一起研发适合于实地地产，富力地产以及旗下景区的无人摆渡车，来给业主以及景区的会员提供更高品质的生活体验和使用便利性。年底会推出符合量产要求的养车，明年3月份，量产100台。9月份量产1000台无人车。</div>
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
        max-width: 1280px;
        height: 800px;
        background-image: url("./../../assets/images/robot/div_01.jpg");
    }

    .img_01_back {
        background-color: black;
    }

    .img_02 {
        max-width: 2580px;
        height: 1540px;
        background-image: url("./../../assets/images/robot/div_02.jpg");
    }

    .img_02_back {
        background-color: black;
    }

    .img_03_back {
        background-color: black;    
    }

    .img_03 {
        max-width: 2580px;
        height: 1170px;
        background-image: url("./../../assets/images/robot/div_03.jpg");
    }

    .content_01 {
        color: white;
        margin-top: 350px;
        font-size: 28pt;
        font-weight: lighter;
    }
    .content_02 {
        color: white;
        margin-top: 80px;
        font-size: 28pt;
        font-weight: lighter;
    }
    .content_03 {
        color: white;
        margin-top: 60px;
        font-size: 18pt;
        font-weight: lighter;
    }

    .content_04 {
        margin-top: 440px;
        font-size: 14pt;
        height: 200px;

        .content_04_1 {
            width: 1010px;
            margin: 0 auto;

            .content_04_left {
                width: 50%;
                float: left;
                height: 200px;
            }

            .content_04_right {
                width: 50%;
                float: left;
                height: 200px;
                div {
                    margin-right: 80px;
                    margin-left: 85px;
                    text-align: left;
                    line-height: 30px;
                    letter-spacing:2px;
                }
            }

        }
    }

    .content_05 {
        margin-top: 195px;
        font-size: 28pt;
        font-weight: lighter;
    }

     .content_06 {
        margin-top: 60px;
        font-size: 18pt;
        font-weight: lighter;
    }

    .content_07 {
        margin-top: 215px;
        font-size: 28pt;
        font-weight: lighter;
    }

    .content_08 {
        margin-top: 54px;
        font-size: 17pt;
        font-weight: lighter;
        letter-spacing:4px;
        span {
            padding-left: 2px;
            color: white;
            margin-left: -10px;
            background-color: #249cce;
        }
    }

    .content_09 {
        margin-top: 440px;
        font-size: 14pt;
        height: 200px;

        .content_09_1 {
            width: 1010px;
            margin: 0 auto;

            .content_09_left {
                width: 50%;
                float: left;
                height: 200px;
            }

            .content_09_right {
                width: 50%;
                float: left;
                height: 200px;
                div {
                    margin-right: 25px;
                    margin-left: 40px;
                    text-align: left;
                    line-height: 30px;
                    letter-spacing:1px;
                }
            }

        }
    }

</style>
