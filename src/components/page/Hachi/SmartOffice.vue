<template>

  <div id="hc_office">
    <div class="designImg" style="background-color:#38424b;">
      <div class="hachi_office_01">
        <div class="office_01_words">
          <div class="office_01_title">哈奇智慧办公解决方案</div>
          <div class="office_01_sub">提升员工办公及企业节能和管理效率的同时，营造科技调性的办公氛围</div>
        </div>
      </div>
    </div>
    <div class="designImg">
      <div class="hachi_office_02">
        <div class="hachi_office_02_01">
        </div>
      </div>
    </div>
    <div class="designImg">
      <div class="" style="height:1160px">
        <div class="hachi_office_03">
          <div class="office_03_words">
            <div class="office_title">新时代智慧办公场景</div>
            <div class="office_title_sub">高效节能，打造科技调性的办公氛围</div>
          </div>
          <div class="office_03_picture">
            <div class="picture_left">
              <div>
                <img @click="currOfficeIndexReduce()" src="./../../../assets/images/hachi/office/button_left.png">
              </div>
            </div>
            <div class="picture_mid">
              <img v-show="currOfficeIndex==1" src="./../../../assets/images/hachi/office/info_01.jpg">
              <img v-show="currOfficeIndex==2" src="./../../../assets/images/hachi/office/info_02.jpg">
              <img v-show="currOfficeIndex==3" src="./../../../assets/images/hachi/office/info_03.jpg">
              <img v-show="currOfficeIndex==4" src="./../../../assets/images/hachi/office/info_04.jpg">
              <img v-show="currOfficeIndex==5" src="./../../../assets/images/hachi/office/info_05.jpg">
              <img v-show="currOfficeIndex==6" src="./../../../assets/images/hachi/office/info_06.jpg">
              <img v-show="currOfficeIndex==7" src="./../../../assets/images/hachi/office/info_07.jpg">
            </div>
            <div class="picture_right">
              <div>
                <img @click="currOfficeIndexAdd()" src="./../../../assets/images/hachi/office/button_right.png">
              </div>
            </div>
          </div>
        </div>
        <div class="hachi_office_04">
          <div class="tab_container">
            <div class="tab_title">
              <div :class="currOfficeIndex==1?'title_style active':'title_style'">入口</div>
              <div :class="currOfficeIndex==2?'title_style active':'title_style'">前台</div>
              <div :class="currOfficeIndex==3?'title_style active':'title_style'">私人办公</div>
              <div :class="currOfficeIndex==4?'title_style active':'title_style'">会议室</div>
              <div :class="currOfficeIndex==5?'title_style active':'title_style'">茶水间&活动空间 </div>
              <div :class="currOfficeIndex==6?'title_style active':'title_style'">环境</div>
              <div :class="currOfficeIndex==7?'title_style active':'title_style'" style="margin-right:0px !important;">APP控制&PC管理 </div>
            </div>
            <div class="tab_selector">
              <div class="tab_block" @click="changeState(1)">
                <div :class="currOfficeIndex==1 ? 'tab_sel tab_sel_active' :'tab_sel'">
                </div>
                <div class="tab_sel_word">
                  <div :class="currOfficeIndex==1 ? 'tab_num tab_num_active':'tab_num'">1</div>
                  <div :class="currOfficeIndex==1 ? 'tab_detail tab_detail_active':'tab_detail'">脸部识别门禁&考勤
                    <br/>过道大屏
                    <br/>（广告/环境数据显示）</div>
                </div>
              </div>
              <div class="tab_block" @click="changeState(2)">
                <div :class="currOfficeIndex==2 ? 'tab_sel tab_sel_active':'tab_sel'">
                </div>
                <div class="tab_sel_word">
                  <div :class="currOfficeIndex==2 ? 'tab_num tab_num_active':'tab_num'">2</div>
                  <div :class="currOfficeIndex==2 ? 'tab_detail tab_detail_active':'tab_detail'">机器人管家/助手服务
                    <br/>自助访客登记系统</div>
                </div>
              </div>
              <div class="tab_block" @click="changeState(3)">
                <div :class="currOfficeIndex==3 ? 'tab_sel tab_sel_active':'tab_sel'">
                </div>
                <div class="tab_sel_word">
                  <div :class="currOfficeIndex==3 ? 'tab_num tab_num_active':'tab_num'">3</div>
                  <div :class="currOfficeIndex==3 ? 'tab_detail tab_detail_active':'tab_detail'">指纹/蓝牙门锁
                    <br/>智能瞳孔感应灯
                    <br/>气压式工作台 </div>
                </div>
              </div>
              <div class="tab_block" @click="changeState(4)">
                <div :class="currOfficeIndex==4 ? 'tab_sel tab_sel_active':'tab_sel'">
                </div>
                <div class="tab_sel_word">
                  <div :class="currOfficeIndex==4 ? 'tab_num tab_num_active':'tab_num'">4</div>
                  <div :class="currOfficeIndex==4 ? 'tab_detail tab_detail_active':'tab_detail'">情景模式智能控制
                    <br>智能电子白板</div>
                </div>
              </div>
              <div class="tab_block" @click="changeState(5)">
                <div :class="currOfficeIndex==5 ? 'tab_sel tab_sel_active':'tab_sel'">
                </div>
                <div class="tab_sel_word">
                  <div :class="currOfficeIndex==5 ? 'tab_num tab_num_active':'tab_num'">5</div>
                  <div :class="currOfficeIndex==5 ? 'tab_detail tab_detail_active':'tab_detail'">无人货架
                    <br/>交互式媒体机
                    <br/>能浏览招聘和活动信息
                    <br/>互动桌面
                    <br/>背景音乐
                    <br/>智能冰箱</div>
                </div>
              </div>
              <div class="tab_block" @click="changeState(6)">
                <div :class="currOfficeIndex==6 ? 'tab_sel tab_sel_active':'tab_sel'">
                </div>
                <div class="tab_sel_word">
                  <div :class="currOfficeIndex==6 ? 'tab_num tab_num_active':'tab_num'">6</div>
                  <div :class="currOfficeIndex==6 ? 'tab_detail tab_detail_active':'tab_detail'">新风系统
                    <br/>空气检测
                    <br/>安防监控
                    <br/>智能灯光控制
                    <br/>智能情景控制
                    <br/>空调智能控制
                    <br/>无线WIFI
                    <br/>智能插座（各区域统计）
                    <br/>智能玻璃隔断 </div>
                </div>
              </div>
              <div class="tab_block" @click="changeState(7)" style="margin-right:0px;">
                <div :class="currOfficeIndex==7 ? 'tab_sel tab_sel_active':'tab_sel'">
                </div>
                <div class="tab_sel_word">
                  <div :class="currOfficeIndex==7 ? 'tab_num tab_num_active':'tab_num'">7</div>
                  <div :class="currOfficeIndex==7 ? 'tab_detail tab_detail_active':'tab_detail'">灯光控制
                    <br/>云打印
                    <br/>一键上网
                    <br/>考勤打卡
                    <br/>预约参观
                    <br/>预约会议室
                    <br/>智能硬件管理
                    <br/>招商&经营管理
                    <br/>运营管理
                    <br/>财务管理</div>
                </div>
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
          currOfficeIndex: 1,
      }
    },
    methods: {
        changeState: function(index) {
            this.currOfficeIndex = index;
        },
        currOfficeIndexAdd: function() {
            if(this.currOfficeIndex != 7) {
                this.currOfficeIndex += 1;
            } else {
                this.currOfficeIndex = 1;
            }
        },
        currOfficeIndexReduce: function() {
            if(this.currOfficeIndex != 1) {
                this.currOfficeIndex -= 1;
            } else {
                this.currOfficeIndex = 7
            }
        }
    }
}
</script>


<style lang="scss" scoped>

    .hachi_office_01 {
        // min-width: 1280px;
        max-width: 2580px;
        height: 785px;
        background-image: url("./../../../assets/images/hachi/office/div_01.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
    }

    .office_01_words {
        margin-top: 380px;
        color: white;
    }

    .office_01_title {
        font-size: 32pt;
        font-weight: lighter;
    }

    .office_01_sub {
        margin-top: 20px;
        font-size: 15pt;
        font-weight: lighter;
    }

    .office_title {
        font-size: 26pt;
    }

    .office_title_sub {
        margin-top: 20px;
        font-size: 15pt;
    }

    .hachi_office_02 {
        background-image:url('./../../../assets/images/hachi/office/div_03.jpg'); 
        background-repeat: repeat-y;
        background-size: 100% 100%;
        height: 925px;
        position: relative;
        overflow: hidden;
    }

    .hachi_office_02_01 {
        min-width: 1280px;
        max-width: 1280px;
        height: 925px;
        background-image: url("./../../../assets/images/hachi/office/div_02.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .hachi_office_03 {
        max-width: 1280px;
        height: 635px;
        background-image: url("./../../../assets/images/hachi/office/div_04.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .office_03_words {
        margin-top: 120px;
        color: black;
    }

    .office_03_picture {
        height: 395px;
        width: 100%;
        margin-top: 30px;
        .picture_left,.picture_right {
            width: 115px;
            float: left;
            height: 395px;
            position: relative;
            display:table;
            div {
                display:table-cell;
                vertical-align: middle;

                img {
                    cursor: pointer;
                }
            }

        }

        .picture_mid{
            width: 1050px;
            float: left;
        }
    }

    .hachi_office_04 {
        max-width: 1280px;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
    }

    .tab_container {
        height: 415px;
        width: 100%;
        position: relative;
        .tab_title {
            height: 65px;
            width: 100%;
            background-color: black;

            .title_style {
                width: 180px;
                height: 65px;
                line-height: 65px;
                text-align: center;
                margin-right:3px;
                color:  #929497;
                float: left;
            }

            .active {
                color: #ffffff  !important;
            }
        }

        .tab_selector {
            position: absolute;
            top: 55px;
            width: 1280px;
            .tab_block {
                width: 180px;
                margin-right: 3.3px;
                height: 360px;
                float: left;
                cursor: pointer;
            }
            .tab_sel {
                height: 360px;
                width:180px;
                background-image: url('./../../../assets/images/hachi/office/default_tab.png');

            }

            .tab_sel_active {
                    background-image: url('./../../../assets/images/hachi/office/active_tab.png') !important;
            }

            .tab_sel_word {
                position: absolute;
                top: 37px;
                width: 180px;
                text-align: center;
                .tab_num {
                    font-size:16pt;
                    color:#929497;

                }

                .tab_num_active {
                    color: black !important;
                }

                .tab_detail {
                    margin-top: 20px;
                    font-size: 10pt;
                    color:black;
                    line-height: 25px;

                }

                .tab_detail_active {
                    color: white !important;
                }

            }
        }

    }
</style>
