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
          <div id='divHachiPCNav'>
            <ul>
              <li @click="currDispaly(1)">
                <div class="hoverbackground">
                  <a herf="">智慧家庭</a>
                </div>
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
        <div class="headerLine">
        </div>
      </div>
    </div>
    <div class="pageConent">
      <div class="conentMain">
        <div id="hachiMain" v-show="currDisIndex==0">
            <div class="designImg">
                <div class="hachi_jjfa_01">
                    <img src="./../../assets/images/hachi/Hachi_jjfa_01.jpg">
                </div>
            </div>
            <div class="designImg" style="background-color: #060b11;">
                <div class="hachi_jjfa_02">
                </div>
            </div>
        </div>
        <div id="hachiSmartHome" v-show="currDisIndex==1">
            <div class="designImg">
                <div class="hachi_smarthome_01">
                    <img src="./../../assets/images/hachi/smarthome/div_01.jpg">
                </div>
            </div>
           <div class="designImg" style="background-color:#c6251d;"><img src="./../../assets/images/hachi/smarthome/div_02.jpg"></div>
           <div class="designImg" style="background-color:#FFFFFF;"><img src="./../../assets/images/hachi/smarthome/div_03.jpg"></div>
           <div class="designImg" style="background-color:#FFFFFF;"><img src="./../../assets/images/hachi/smarthome/div_04.jpg"></div>
           <div class="designImg" style="background-color:#FFFFFF;"><img src="./../../assets/images/hachi/smarthome/div_05.jpg"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
export default {
  name: 'HachiSolution',
  data() {
      return {
          currDisIndex: 0,
      }
  },
  components: {
  },

  methods: {
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
        cursor: pointer;
    }

    .solutionName {
        float: left;
        font-size: 13pt;
        height: $hachiSMB;
        line-height: $hachiSMB;
    }

    #divHachiPCNav {
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
                background-image: url('./../../assets/images/hachi/button_bg_Hachi.png');
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

    .headerLine {
        width: 100%;
        height: 1px;
        background-image: url('./../../assets/images/hachi/nav_top_Hachi_line.png');
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
        min-width: 1280px;
        max-width: 2580px;
        min-height: 800px;
        background-image: url("./../../assets/images/hachi/Hachi_jjfa_02.jpg");
        background-size: cover;
        background-position: 50% 50%;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
    }

    .hachi_jjfa_01 {
        background-image:url('./../../assets/images/hachi/div_bg_01.png'); 
        background-repeat: repeat-y;
        background-size: 100% 100%;
        height: 810px;
        position: relative;
        overflow: hidden;
        
    }

    .hachi_smarthome_01 {
        background-image:url('./../../assets/images/hachi/smarthome/div_06.png'); 
        background-repeat: repeat-y;
        background-size: 100% 100%;
        height: 810px;
        position: relative;
        overflow: hidden;
        
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

