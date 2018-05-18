<template>
  <div id="hardware">
      <div class="hardware_search">
          <div class="space"></div>
          <div class="search_bar">
            <div>分类检索：</div>
            <div :class="currSearchedIndex==0?'selected_title':'search_title'" @click="changeSearchIndex(0)"><a herf="#">全部</a></div>
            <div :class="currSearchedIndex==1?'selected_title':'search_title'" @click="changeSearchIndex(1)"><a herf="#">智能网关</a></div>
            <div :class="currSearchedIndex==2?'selected_title':'search_title'" @click="changeSearchIndex(2)"><a herf="#">智能开关</a></div>
            <div :class="currSearchedIndex==3?'selected_title':'search_title'" @click="changeSearchIndex(3)"><a herf="#">灯光控制</a></div>
            <div :class="currSearchedIndex==4?'selected_title':'search_title'" @click="changeSearchIndex(4)"><a herf="#">家电控制</a></div>
            <div :class="currSearchedIndex==5?'selected_title':'search_title'" @click="changeSearchIndex(5)"><a herf="#">窗帘控制</a></div>
            <div :class="currSearchedIndex==6?'selected_title':'search_title'" @click="changeSearchIndex(6)"><a herf="#">情景控制</a></div>
            <div :class="currSearchedIndex==7?'selected_title':'search_title'" @click="changeSearchIndex(7)"><a herf="#">背景音乐</a></div>
            <div :class="currSearchedIndex==8?'selected_title':'search_title'" @click="changeSearchIndex(8)"><a herf="#">环境健康</a></div>
            <div :class="currSearchedIndex==9?'selected_title':'search_title'" @click="changeSearchIndex(9)"><a herf="#">居家安防</a></div>
            <div :class="currSearchedIndex==10?'selected_title':'search_title'" @click="changeSearchIndex(10)"><a herf="#">远程监控</a></div>
            <div :class="currSearchedIndex==11?'selected_title':'search_title'" @click="changeSearchIndex(11)"><a herf="#">语音控制</a></div>
          </div>
      </div>
      <div id="gateway" v-show="currSearchedIndex == 0 || currSearchedIndex == 1" class="product_detail backcolor_gray">
          <div class="hardware_detail">

              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">智能网关</div>
                  <div class="title_word_02">智能家居系统的核心大脑</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_01.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_02.jpg"/>
                </div>
              </div>
          </div>
      </div>  
    <div id="opendoor" v-show="currSearchedIndex == 0 || currSearchedIndex == 2" class="product_detail">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">智能开门</div>
                  <div class="title_word_02">出入安全便捷</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_03.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_04.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_05.jpg"/>
                </div>
              </div>
          </div>
      </div> 
        <div id="lightcontrol" v-show="currSearchedIndex == 0 || currSearchedIndex == 3" class="product_detail backcolor_gray">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">灯光控制</div>
                  <div class="title_word_02">随心所欲变换灯光</div>
              </div>
              <div class="tab_con">
                <div class="tab_container">

                        <div :class="lightcontrolIndex==0?'tab_left active':'tab_left'" @click="changeLightControlIndex(0)">
                                <div>逸致系列</div>  
                                <div :class="lightcontrolIndex==0?'tab_underline tab_underline_active':'tab_underline'"></div>
                        </div>

                        <div :class="lightcontrolIndex==1?'tab_right active':'tab_right'" @click="changeLightControlIndex(1)">
                                <div>莹润系列</div>
                                <div :class="lightcontrolIndex==1?'tab_underline tab_underline_active':'tab_underline'"></div>
                        </div>

                </div>
              </div>
              <div class="detail_image" v-show="lightcontrolIndex==0">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_06.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_07.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_08.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_09.jpg"/>
                </div>
              </div>
              <div class="detail_image" v-show="lightcontrolIndex==1">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_34.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_35.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_36.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_37.jpg"/>
                </div>
              </div>
          </div>
      </div>   
        <div id="appliancescontrol" v-show="currSearchedIndex == 0 || currSearchedIndex == 4" class="product_detail">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">家电控制</div>
                  <div class="title_word_02">无论身在何处，手机就是你的遥控器</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_10.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_11.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_12.jpg"/>
                </div>
              </div>
          </div>
      </div>   
        <div id="curtaincontrol" v-show="currSearchedIndex == 0 || currSearchedIndex == 5" class="product_detail backcolor_gray">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">窗帘控制</div>
                  <div class="title_word_02">阳光为你所控制</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_13.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_14.jpg"/>
                </div>
              </div>
          </div>
      </div>   
        <div id="scenecontrol" v-show="currSearchedIndex == 0 || currSearchedIndex == 6" class="product_detail">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">情景控制</div>
                  <div class="title_word_02">一键开启自定义情景模式，家中的一切都鲜活起来</div>
              </div>
                <div class="tab_con">
                <div class="tab_container">

                        <div :class="scenecontrolIndex==0?'tab_left active':'tab_left'" @click="changeSceneControlIndex(0)">
                                <div>逸致系列</div>  
                                <div :class="scenecontrolIndex==0?'tab_underline tab_underline_active':'tab_underline'"></div>
                        </div>

                        <div :class="scenecontrolIndex==1?'tab_right active':'tab_right'" @click="changeSceneControlIndex(1)">
                                <div>莹润系列</div>
                                <div :class="scenecontrolIndex==1?'tab_underline tab_underline_active':'tab_underline'"></div>
                        </div>

                </div>
              </div>
              <div class="detail_image" v-show="scenecontrolIndex==0">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_15.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_16.jpg"/>
                </div>
              </div>
            <div class="detail_image" v-show="scenecontrolIndex==1">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_38.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_39.jpg"/>
                </div>
              </div>
          </div>
      </div>  
        <div id="bgm" v-show="currSearchedIndex == 0 || currSearchedIndex == 7" class="product_detail backcolor_gray">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">背景音乐</div>
                  <div class="title_word_02">无与伦比的听觉盛宴</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_17.jpg"/>
                </div>
              </div>
          </div>
      </div>  
        <div id="envandhealth" v-show="currSearchedIndex == 0 || currSearchedIndex == 8" class="product_detail">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">环境健康</div>
                  <div class="title_word_02">实时检测环境温湿度和管理家庭成员健康状态</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_18.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_19.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_20.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_21.jpg"/>
                </div>
              </div>
          </div>
      </div>  
        <div id="security" v-show="currSearchedIndex == 0 || currSearchedIndex == 9" class="product_detail backcolor_gray">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">居家安防</div>
                  <div class="title_word_02">时刻检测家中安全</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_22.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_23.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_24.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_25.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_26.jpg"/>
                </div>
              </div>
          </div>
      </div> 
        <div id="remote" v-show="currSearchedIndex == 0 || currSearchedIndex == 10" class="product_detail">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">远程监控</div>
                  <div class="title_word_02">为全家站岗放哨</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_27.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_28.jpg"/>
                </div>
              </div>
          </div>
      </div> 
        <div id="soundcontrol" v-show="currSearchedIndex == 0 || currSearchedIndex == 11" class="product_detail backcolor_gray">
          <div class="hardware_detail">
              <div class="detail_title">
                  <div class="small_line"></div>
                  <div class="title_word_01">语音控制</div>
                  <div class="title_word_02">动嘴说话实现语音操控家中的智能设备</div>
              </div>
              <div class="detail_image">
                <div>
                    <img src="./../../../assets/images/hachi/product/image_29.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_30.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_31.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_32.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_33.jpg"/>
                    <img src="./../../../assets/images/hachi/product/image_40.jpg"/>
                </div>
              </div>
          </div>
      </div> 
      <div class="whitespace"></div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          currSearchedIndex: 0,
          lightcontrolIndex: 0,
          scenecontrolIndex: 0,
      }
  },

  methods: {
      changeSearchIndex: function(index) {
          this.currSearchedIndex = index;
      },
      changeLightControlIndex: function(index) {
          this.lightcontrolIndex = index;
      },
      changeSceneControlIndex: function(index) {
          this.scenecontrolIndex = index;
      }
  }
}
</script>


<style lang="scss" scoped>
    #hardware {
        width: 100%;
        text-align: center;
    }

    .hardware_search {
        height: 80px;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #838487;
    }

    .search_title {
        cursor: pointer;
    }

    .selected_title {
        background-color: #ce2425;
        color: white;
        a:hover {
            color: white !important;
        }
    }

    .space{
        height: 50px;
    }

    .search_bar {
        width: 1280px;
        margin: 0 auto;
        div {
            float: left;

            a{
                padding: 2px 5px 2px 5px;
            }

            a:hover {
                color: #929497;
            }

        }
    }

    .hardware_detail {
        width: 1010px;
        margin: 0 auto;
    }

    .detail_title {
        margin-top: 53px;
    }

    .small_line {
        height: 18px;
        width: 2px;
        background-color: black;
        float: left;
        margin-top: 5px;
    }

    .title_word_01 {
        margin-left: 8px;
        margin-right: 12px;
        text-align: left;
        font-weight: bold;
        float: left;
        line-height: 25px;
    }

    .title_word_02 {
        text-align: left;
        line-height: 25px;
    }

    .detail_image {
        margin-top: 15px;
        margin-bottom: 15px;

        div {
            text-align: left;
        }
    }

    .backcolor_gray {
        background-color: #eeeeee;
    }

    .product_detail {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 55px;
    }

    .whitespace {
        width: 100%;
        height: 100px;
    }
    .tab_con {
        width: 100%;
        height: 30px;
        margin-top: 20px;
        .tab_container {
            width: 220px;
            margin: 0 auto;
            text-align: center;

            .tab_underline {
                height: 4px;
                width: 100px;
                background-color: #bbbdbf;
            }

            .tab_underline_active {
                background-color: black !important;
            }
            
            .tab_left {
                width: 100px;
                margin-right: 5px;
                float: left;
                color: #bbbdbf;
                cursor: pointer;
            }

            .tab_right {
                width: 100px;
                float:left;
                color: #bbbdbf;
                cursor: pointer;
            }

            .active {
                color: black;
            }


        }
    }

</style>
