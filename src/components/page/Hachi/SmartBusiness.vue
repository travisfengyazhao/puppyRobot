<template>

<div id="hc_business">
    <div class="designImg" style="background-color:#c7d1d3;">
        <div class="hachi_business_01">
            <div class="hachi_slogan1">哈奇智慧商业解决方案</div>
            <div class="hachi_slogan2">商场和案场专属智慧方案<br/>助力优化商业服务、管理方式、品牌营销和用户体验</div>
        </div>
    </div>
    <div class="designImg">
        <div class="hachi_business_02">
                <div class="hachi_business_02_01">
            </div>
        </div>
    </div>
    <div class="designImg">
        <div class="" style="height:1160px"> 
            <div class="hachi_business_03">
                <div class="business_03_words">
                    <div class="business_01_title">提升商圈价值</div>
                    <div class="business_01_sub">打造各类商业专属智慧方案，不断优化商业服务、<br/>管理方式，提升客户体验</div>
                </div>
                <div class="office_03_picture">
                    <div class="picture_left">
                        <div>
                            <img @click="currBusinessIndexReduce()" src="./../../../assets/images/hachi/business/button_left.png">
                        </div>
                    </div>
                    <div class="picture_mid">

                        <img v-show="currBusinessIndex==1" src="./../../../assets/images/hachi/business/info_01.jpg">
                        <img v-show="currBusinessIndex==2" src="./../../../assets/images/hachi/business/info_02.jpg">
                        <img v-show="currBusinessIndex==3" src="./../../../assets/images/hachi/business/info_03.jpg">
                        <img v-show="currBusinessIndex==4" src="./../../../assets/images/hachi/business/info_04.jpg">
                        <img v-show="currBusinessIndex==5" src="./../../../assets/images/hachi/business/info_05.jpg">
                    </div>
                    <div class="picture_right">
                        <div>
                            <img @click="currBusinessIndexAdd()" src="./../../../assets/images/hachi/business/button_right.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="hachi_office_04">
                <div class="tab_container">
                    <div class="tab_title">
                        <div :class="currBusinessIndex==1?'title_style active':'title_style'">多媒体导购机</div>
                        <div :class="currBusinessIndex==2?'title_style active':'title_style'">多媒体娱乐</div>
                        <div :class="currBusinessIndex==3?'title_style active':'title_style'">多媒体机</div>
                        <div :class="currBusinessIndex==4?'title_style active':'title_style'">VR看房</div>
                        <div :class="currBusinessIndex==5?'title_style active':'title_style'" style="margin-right:0px;">AR沙盘</div>
                    </div>
                    <div class="tab_selector">
                        <div class="tab_block" @click="changeState(1)">
                            <div :class="currBusinessIndex==1 ? 'tab_sel tab_sel_active' :'tab_sel'">
                            </div>
                            <div class="tab_sel_word">
                            <div :class="currBusinessIndex==1 ? 'tab_num tab_num_active':'tab_num'">1</div>
                            <div :class="currBusinessIndex==1 ? 'tab_detail tab_detail_active':'tab_detail'">安装在购物中心的集商<br/>场导购、商家宣传、信<br/>息互动等功能为一体的<br/>高科技互动系统</div>
                            </div>
                        </div>
                        <div class="tab_block" @click="changeState(2)">
                            <div :class="currBusinessIndex==2 ? 'tab_sel tab_sel_active':'tab_sel'">
                            </div>
                            <div class="tab_sel_word">
                            <div :class="currBusinessIndex==2 ? 'tab_num tab_num_active':'tab_num'">2</div>
                            <div :class="currBusinessIndex==2 ? 'tab_detail tab_detail_active':'tab_detail'">互动地面<br/>互动墙面</div>
                            </div>
                        </div>
                        <div class="tab_block" @click="changeState(3)">
                            <div :class="currBusinessIndex==3 ? 'tab_sel tab_sel_active':'tab_sel'">
                            </div>
                            <div class="tab_sel_word">
                            <div :class="currBusinessIndex==3 ? 'tab_num tab_num_active':'tab_num'">3</div>
                            <div :class="currBusinessIndex==3 ? 'tab_detail tab_detail_active':'tab_detail'">优选日常必备信<br/>最新资讯楼盘信息及时发布<br/>更多楼盘推荐，提供更多选择  </div>
                            </div>
                        </div>
                        <div class="tab_block" @click="changeState(4)">
                            <div :class="currBusinessIndex==4 ? 'tab_sel tab_sel_active':'tab_sel'">
                            </div>
                            <div class="tab_sel_word">
                            <div :class="currBusinessIndex==4 ? 'tab_num tab_num_active':'tab_num'">4</div>
                            <div :class="currBusinessIndex==4 ? 'tab_detail tab_detail_active':'tab_detail'">精准的CAD图纸制作立体模型，<br/>还原度突破时空的界限</div>
                            </div>
                        </div>
                        <div class="tab_block" style="margin-right:0px;" @click="changeState(5)">
                            <div :class="currBusinessIndex==5 ? 'tab_sel tab_sel_active':'tab_sel'">
                            </div>
                            <div class="tab_sel_word">
                            <div :class="currBusinessIndex==5 ? 'tab_num tab_num_active':'tab_num'">5</div>
                            <div :class="currBusinessIndex==5 ? 'tab_detail tab_detail_active':'tab_detail'">虚实场景融合，<br/>浮空全息成像，<br/>全新的视觉效果与用户体验</div>
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
    name: 'SmartBusiness',
    data() {
      return {
          currBusinessIndex: 1,
      }
  },

  methods: {
    changeState: function(index) {
        this.currBusinessIndex = index;
    },
    currBusinessIndexAdd: function() {
        if(this.currBusinessIndex != 5) {
            this.currBusinessIndex += 1;
        } else {
            this.currBusinessIndex = 1;
        }
    },
    currBusinessIndexReduce: function() {
         if(this.currBusinessIndex != 1) {
            this.currBusinessIndex -= 1;
        } else {
            this.currBusinessIndex = 5
        }
    }
  }
}
</script>


<style lang="scss" scoped>
.designImg {
    text-align: center;
    width: 100%;
}

    .hachi_business_01 {
        // min-width: 1280px;
        max-width: 2580px;
        height: 781px;
        background-image: url("./../../../assets/images/hachi/business/div_01.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
    }

    .business_01_words {
        margin-top: 430px;
        color: white;
    }

    .business_01_title {
        font-size: 26pt;
    }

    .business_01_sub {
        margin-top: 40px;
        font-size: 15pt;
        line-height: 30px;
    }

    .hachi_business_02 {
        background-image:url('./../../../assets/images/hachi/business/div_03.jpg'); 
        background-repeat: repeat-y;
        background-size: 100% 100%;
        height: 679px;
        position: relative;
        overflow: hidden;
    }

    .hachi_business_02_01 {
        min-width: 1280px;
        max-width: 1280px;
        height: 679px;
        background-image: url("./../../../assets/images/hachi/business/div_02.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .hachi_business_03 {
        max-width: 1280px;
        height: 745px;
        background-image: url("./../../../assets/images/hachi/business/div_04.jpg");
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .business_03_words {
        margin-top: 130px;
        color: black;
        margin-bottom: 75px;
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
                width: 250px;
                height: 65px;
                line-height: 65px;
                text-align: center;
                margin-right:7.5px;
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
                width: 250px;
                margin-right: 7.5px;
                height: 360px;
                float: left;
                cursor: pointer;
            }
            .tab_sel {
                height: 230px;
                width:250px;
                background-image: url('./../../../assets/images/hachi/business/default_tab.png');

            }

            .tab_sel_active {
                    background-image: url('./../../../assets/images/hachi/business/active_tab.png') !important;
            }

            .tab_sel_word {
                position: absolute;
                top: 37px;
                width: 250px;
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

.hachi_slogan1 {
    width: 100%;
    text-align: center;
    font-size: 34pt;
    font-weight:lighter;
    margin-top: 180px;
}

.hachi_slogan2 {
    width: 100%;
    text-align: center;
    font-size: 17pt;
    line-height: 35px;
    margin-top: 15px;
}
</style>
