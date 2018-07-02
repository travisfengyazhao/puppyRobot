
<template>
  <div id="smart37">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
        <div class="hachiThridMenu" @click="currDispaly(0)">
        <div id='divNews'>
            37°C
        </div>
        <div class="solutionName">SMARTHOME</div>
        </div>
        <div class="divHachiPCNav">
            <ul>
                <li @click="currDispaly(1)">
                <a herf="">智慧办公</a>
                </li>
                <li @click="currDispaly(2)">
                <a herf="">智慧卧室</a>
                </li>
                <li @click="currDispaly(3)">
                <a herf="">智慧客厅</a>
                </li>
            </ul>
        </div>
        </div>
         <div class="headerLine">
        </div>
      </div>
    </div>

    <div class="content" v-if="currDisIndex==0">
        <div>
            <Banner :slideLists="slideLists" :swiperHeight="'1200px'"></Banner>
        </div>
        <div class="img_01 imgBackCenter">
            <div class="img_con">
                <div class="con_01">
                    产品线
                </div>
                <div class="con_02">
                    <div class="con_sub" @click="currDispaly(1)">
                        智能办公
                    </div>
                    <div class="con_sub" @click="currDispaly(2)">
                        智能卧室
                    </div>
                    <div class="con_sub" @click="currDispaly(3)">
                        智能客厅
                    </div>
                </div>
                <div class="con_03">37°C SMARTHOME 内置一系列强大App，工作、娱乐、生活样样顺手。</div>
                <div class="con_04">37℃智能家居，以实地地产智慧人居战略为依托，融合科技与美学，贴心打造智能化家居产品，创造舒适、健康、美好、智慧的人居生活。我们相信优质的家居产品，首要的是拥有美观的外表。在产品的造型设计、色彩搭配、材质选择上，我们都进行了精心的考量，最终呈现出简洁优雅的37℃智能产品，为你的家增添格调。Home, sweet home. 家的美好在于它是你最放松、最私密的空间。每一个家都有它的光线、气味、形状、温度，每一个家都是独一无二的。家之美，或热情活力，或恬静沉稳，找到最舒适的家居生活状态，便是我们希望为你实现的小确幸。</div>
            </div>
        </div>
    </div>
    <div v-if="currDisIndex==1">
        <Smart37Office />
    </div>
    <div v-if="currDisIndex==2">
        <Smart37BedRoom />
    </div>
    <div v-if="currDisIndex==3">
        <Smart37Sofa />
        <Smart37Plant />
        <Smart37Carpets />
        <Smart37Flower />
        <Smart37TeaTable />
        <Smart37ShoeCabiner />
        <Smart37Table />
    </div>
  </div>
</template>

<script>
import Banner from './../../common/Banner'
import Smart37Office from './Smart37Office'
import Smart37BedRoom from './Smart37Bed'
import Smart37Sofa from './Smart37Sofa'
import Smart37Plant from './Smart37Plant'
import Smart37Carpets from './Smart37Carpets'
import Smart37Flower from './Smart37Flower'
import Smart37TeaTable from './Smart37TeaTable'
import Smart37ShoeCabiner from './Smart37ShoeCabiner'
import Smart37Table from './Smart37Table'
export default {
    data() {
        return { 
            currDisIndex: 0,
            slideLists: [
                {
                    id: 1,
                    img: require("./../../../assets/images/smart37/div_01.jpg"),
                    backgroundColor: "#FFFFFF",
                    maxWidth: '1920px',
                },
                {
                    id: 2,
                    img: require("./../../../assets/images/smart37/div_02.jpg"),
                    backgroundColor: "#FFFFFF",
                    maxWidth: '1920px',
                },
                {
                    id: 3,
                    img: require("./../../../assets/images/smart37/div_03.jpg"),
                    backgroundColor: "#FFFFFF",
                    maxWidth: '1920px',
                }
            ],
        }
    },
    components: {
        Banner,
        Smart37Office,
        Smart37BedRoom,
        Smart37Sofa,
        Smart37Plant,
        Smart37Carpets,
        Smart37Flower,
        Smart37TeaTable,
        Smart37ShoeCabiner,
        Smart37Table
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

    #divNews {
        float: left;
        height: $hachiSMB;
        line-height: $hachiSMB;
        margin-right: 10px;
    }

    .hachiThridMenu {
        height: $hachiSMB;
        cursor: pointer;
        float: left;
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
                width: 100px;
                color: white;
                list-style-type: none;
                cursor: pointer;
                background-image: url('./../../../assets/images/smart37/button_bg.png');
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
        background-image: url('./../../../assets/images/hachi/solution/nav_top_Hachi_line.png');
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
        width: 100%;
    }

    .img_01 {
        max-width: 1920px;
        min-width: 1010px;
        height: 1090px;
        background-image: url("./../../../assets/images/smart37/div_04.jpg");
    }

    .img_con {
        width: 1010px;
        margin: 0 auto;

    }

    .con_01 {
        margin-top: 80px;
        font-size: 18pt;
    }

    .con_02 {
        margin: 0 auto;
        height: 250px;
        width: 750px;
        .con_sub {
            width: 160px;
            height: 160px;
            margin: 45px;
            float: left;
            line-height: 220px;
            cursor: pointer;
        }
    }

    .con_03 {
        margin-top: 20px;
        font-size: 20pt;
    }

    .con_04 {
        width: 900px;
        margin: 0 auto;
        padding-top: 430px;
        text-indent:2em;
        text-align: left;
    }

</style>
