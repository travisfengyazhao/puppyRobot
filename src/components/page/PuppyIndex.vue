<template>
  <div id="PuppyIndex">
    <div>
      <Banner :slideLists="slideLists" :isAutoplay="true" :swiperHeight="'550px'"></Banner>
    </div>
     <div :class="!_isMobile()?'newsCol':'newsCol_mobile'">
      <div :class="!_isMobile()?'newsContainer':'newsContainer_mobile'">
        <div :class="!_isMobile()?'techContainer':'techContainer_mobile'">
          <div class="titleLine"></div>
          <div>
            <div class="mediaTitle">
              技术方案
              <!-- <div class="moreInfo" :style="{marginRight: `${!_isMobile()?40:0}px`}">
                <a herf="">+更多</a>
              </div> -->
            </div>
           
          </div>
          <div>
            <div :class="!_isMobile()? 'newsTabPC' : 'newsTabMobile'">
              <Tech :contents="tech" :techId="'tech'"/>
            </div>
          </div>
        </div>
        <div :class="!_isMobile()?'productContainer':'productContainer_mobile'">
          <div class="titleLine"></div>
          <div class="mediaTitle">
            产品列表
            <!-- <div class="moreInfo">
              <a herf="">+更多</a>
            </div> -->
          </div>
          <div>
            <div :class="!_isMobile()? 'newsTabPC' : 'newsTabMobile'">
              <Tech :contents="productLists" :techId="'product'" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div :class="!_isMobile()? 'mediaReport' : 'mediaReport_mobile'">
      <div :class="!_isMobile()? 'mediaContainer':'mediaContainer_mobile'">
        <div class="titleLine"></div>
        <div class="mediaTitle">
          媒体报道
            <router-link to="/newscenter">
            <div class="moreInfo">
              <a herf="#">+更多</a>
            </div>
            </router-link>
        </div>
        <div>
          <div :class="!_isMobile()? 'mediaMain' : 'mediaMain_mobile'">
            <Media :mediaContent="mediaLists[0]" :mediaHeight="430"/>
          </div>
          <div :class="!_isMobile()? 'mediaSub' : 'mediaSub_mobile'">
            <div :class="!_isMobile()?'mediaSub1':'mediaSub1_mobile'"><Media :mediaContent="mediaLists[1]" :mediaHeight="200"/></div>  
            <div :class="!_isMobile()?'mediaSub2':'mediaSub2_mobile'"><Media :mediaContent="mediaLists[2]" :mediaHeight="200"/></div>
          </div>
        </div>
      </div>
    </div>
   
  </div>

</template>
<script>

import Banner from './../common/Banner'
import News from './../common/News'
import Media from './../common/Media'
import Tech from './../common/Tech'

export default {
  name: "PuppyIndex",
  components: {
    Banner,
    News,
    Media,
    Tech,
  },
  data() {
    return {
       slideLists: [
         {
            id: 1,
            img: require("./../../assets/images/index/focus-image_01.jpg"),
            backgroundColor: "#cac9ce",
            maxWidth: '2580px',
            router: "/puppycubes"
         },
          {
            id: 2,
            img: require("./../../assets/images/index/focus-image_02.jpg"),
            backgroundColor: "#000000",
            maxWidth: '2580px',
            router: "/puppycube"
         }
       ],
       tech: [
          {
            id: 1,
            title: '人工智能技术吸引了无数巨头，投资者，和满怀梦想的创业者',
            subtitle: '机器人技术',
            img: require("./../../assets/images/index/jsfa_01.jpg"),
            path: '/robottech'
          },
          {
            id: 2,
            title: '智能视觉技术在复杂的场景中，快速、精确的定位人脸、人体等目标位置',
            subtitle: '智能视觉技术',
            img: require("./../../assets/images/index/jsfa_02.jpg"),
            path: '/aisighttech'
          }
       ],
       productLists: [
         {
            id: 1,
            title: '智慧生活 触手可及',
            subtitle: 'puppy cube s',
            img: require("./../../assets/images/index/cplb_01.jpg"),
            path: '/puppycubes'
          },
          {
            id: 2,
            title: 'Live Your Way 智能由你',
            subtitle: 'Hachi哈奇智能',
            img: require("./../../assets/images/index/cplb_02.jpg"),
            path: '/hachiproduct'
          }
       ],
       mediaLists: [
                         {
                    id: '1',
                    date: 'May 25, 2018, 20:14',
                    title: '小狗机器人发布人工智能终端puppy cube s',
                    auth: '人民网-IT频道',
                    source_path: 'http://it.people.com.cn/GB/n1/2018/0525/c1009-30015073.html',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/newscenter/news1_760x430.jpg"),
                    article: '<p style="text-indent: 2em">5月24日，小狗机器人正式推出首款新产品puppy cube s光影魔屏，以创新的产品形态，改变人们对空间的认知，成为智慧生活的AI终端。</p>'
                            + '<p style="text-indent: 2em">puppy cube s采用欧洲顶级设计公司designaffairs的方案，精准的几何美学外观，整体色调为星空灰。投射部分和硬件部分通过“智能交互灯带”区隔，开机状态下呈现流光溢彩的动态效果，成为一大特色。</p>'
                            + '<div style="width:100%;"><div style="width:500px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/puppycubes.jpg") + '"/></div></div>'
                            + '<div style="width:100%;  text-align: center;font-size:11pt;">puppy cube s正面产品图</div>'
                            + '<p style="text-indent: 2em">硬件方面，puppy cube s搭载Mstar智能处理芯片，4GB运行内存，64GB闪存空间，保证智能程序的流畅运行，也能存储海量应用和内容。投影部分采用DLP TRP超短焦光机行业领导者广景视睿的解决方案，结合FFO自由光学曲面专利技术和德州仪器的DLP芯片，提供400流明亮度，对比度600∶1，有效降低环境光干扰，确保使用过程更聚焦、更专注。</p>'
                            + '<p style="text-indent: 2em">puppy cube s拥有“Anytouch”空间触控技术，支持十点触控，精准定位触控坐标，适用于任意房间的桌面、地面、墙面。立投状态下可显示23吋画面，全面超越所有市售安卓智能平板；卧投状态下则可作为100吋的智慧家庭影院；最高兼容4K分辨率，支持2K/4K硬解，轻松输出未来高清片源。内置自动对焦系统和梯形自动矫正功能，让投射屏幕始终保持标准直角，确保画面不会失真。</p>'
                            + '<p style="text-indent: 2em">puppy cube s后续还会加入手势识别功能，卧投状态下，内置智能高清摄像头可识别用户的手势动作，隔空对画面进行缩放、移动和点击等操作。</p>'
                            + '<div style="width:100%;"><div style="width:550px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/homeofpuppycube.jpg") + '"/></div></div>'
                            + '<div style="width:100%;  text-align: center;font-size:11pt;">puppy cube s室内应用场景</div>'

                            + '<p style="text-indent: 2em">其他配置方面，puppy cube s支持2.4G/5G双频Wi-Fi连接，最高1Gbps全高清传输率。蓝牙4.0传输支持无损音源播放，双立体声扬声器带来更好的高/中/低频表现。内置高能锂电池，支持近3小时续航时间，可完整观看一场球赛或一场高清电影。</p>'
                            + '<p style="text-indent: 2em">puppy cube s重量仅1.7kg，即拿即走，开创了全新Room to Room、Office to Office智慧空间概念。配备3.5mm音频、USB 3.0、HDMI 2.0 输入和电源线接口，后背板进行了特别设计，无论立投还是卧投，线缆都不妨碍使用。附赠的遥控器充满金属质感，考虑到了用户的多种使用习惯，整体风格也更家电化。</p>'
                            + '<p style="text-indent: 2em">除了触控交互，小狗机器人和科大讯飞合作，为puppy cube s配备智能语音助手“巴迪”，支持语音交互。此外还提供智能护眼模式，产品在移动状态下投射光源会自动关闭，放置好后会重新亮起。（孟哲）</p>'
                            + '<div style="width:100%; text-align: right;">(责编：初梓瑞、庄红韬)</div>'

                },{
                    id: '2',
                    date: 'May 30, 2018, 15：43',
                    title: 'puppy cube七天完成京东众筹目标 远超索尼Xperia Touch',
                    auth: '新浪VR',
                    source_path: 'http://vr.sina.com.cn/news/hz/2018-05-30/doc-ihcffhsv6940296.shtml',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/newscenter/news2_480x200.jpg"),
                    article: '<p style="text-indent: 2em">5月30日，小狗机器人旗下最新发布的AI终端puppy cube光影魔屏在京东众筹已达成目标，此次众筹目标金额20万元，仅用七天就全部实现。小狗机器人已和京东达成协议，扩大puppy cube的供应，以回馈支持者。目前众筹订单数量还在持续上涨。</p>'
                            + '<div style="width:100%;"><div style="width:550px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/news2_1.jpg") + '"/></div></div>'
                            + '<p style="text-indent: 2em">京东智能设备的众筹项目中，不乏puppy cube这样高价值、高客单价的产品。但从完成预订目标的用时来看，puppy cube是最短的，七天即完成115%，而在京东上，同类产品索尼Xperia Touch用时一个月才完成了众筹目标的112%。puppy cube京东众筹的受欢迎程度在预期之内，但参与预订的用户数量、对产品的需求，都远远超出想象。</p>'
                            + '<p style="text-indent: 2em">5月24日的puppy品牌暨新品发布会上，puppy cube光影魔屏凭借炫酷的外观、全新的触控交互特性，引发了现场参会人士的围观，众筹限量供应的puppy cube s开启预订当天即告售罄，puppy cube的订单量只维持了七天。说明消费者对这款新型AI终端的期待度很高。</p>'
                            + '<div style="width:100%;"><div style="width:530px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/news2_2.jpg") + '"/></div></div>'
                            + '<p style="text-indent: 2em">puppy cube光影魔屏是小狗机器人推出的首款AI终端，拥有独特的“Anytouch”技术，将任意平面投影为触摸屏，同时屏幕支持触控操作，可以从单一屏幕拓展到任意房间的桌面、地面、墙面，打造随时随地交互并获取信息的智慧空间。</p>'
                            + '<p style="text-indent: 2em">声控方面，puppy cube拥有智能语音助手，还有深度定制的交互系统puppyUI，可以在线控制家电和家居设备；第三方合作伙伴还提供超过10万种精选食谱、5万个儿童教育资源、1500万首版权曲目、1200万小时有声内容，以及丰富的健身训练课程，推动puppy的功能和家庭智慧生活空间紧密结合。</p>'
                            
                },
                {
                    id: '3',
                    date: 'May 28, 2018, 16：22',
                    title: '王者荣耀与puppy品牌合作 游戏巨头看中AI终端入口潜力',
                    auth: '中华网',
                    source_path: 'http://tech.china.com/article/20180528/kejiyuan0326143791.html',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/newscenter/mtbd_03.jpg"),
                    article: '<p style="text-indent: 2em">5月26日、27日，小狗机器人技术有限公司刚刚发布的全新AI终端puppy cube光影魔屏在成都新都区第五届《王者荣耀》“王者城市赛西区分站赛”上亮相，吸引了大批观众现场体验。赛事专设的“科技开黑区”也成了比赛场地内除主战区之外，人气最高的区域。</p>'
                            + '<div style="width:100%;"><div style="width:557px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/news3_1.jpg") + '"/></div></div>'
                            + '<p style="text-indent: 2em">作为第五届《王者荣耀》“王者城市赛西区分站赛”现场唯一展示的高科技智能终端新品，puppy cube光影魔屏拥有精准的触控操作，亲和度良好的智能人机交互界面，在大屏游戏的震撼效果之外，还提供了儿歌、故事、绘本、学科启蒙等优质音频视频应用，以及第三方应用合作伙伴带来的丰富儿童教育资源，让现场体验者耳目一新。</p>'
                            + '<div style="width:100%;"><div style="width:556px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/news3_2.jpg") + '"/></div></div>'
                            + '<div style="width:100%;"><div style="width:555px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/news3_3.jpg") + '"/></div></div>'
                            + '<div style="width:100%;"><div style="width:557px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/news3_4.jpg") + '"/></div></div>'
                            + '<p style="text-indent: 2em">在两天的开放时段里，展区始终挤满了人群。他们不仅对游戏感兴趣，对新型高科技智能终端也有着很好的接受度和了解欲望。</p>'
                            + '<div style="width:100%;"><div style="width:459px;margin:0 auto;"><img src="' + require("./../../assets/images/newscenter/news3_5.jpg") + '"/></div></div>'
                            + '<p style="text-indent: 2em">puppy cube拥有独特的“Anytouch”技术，将任意平面投影为触摸屏，同时屏幕支持触控操作。通过深度感知技术，可以识别手指的指向并作出快速准确的反应。得益于“Anytouch”技术，puppy cube可以从单一屏幕拓展到任意房间的桌面、地面、墙面，打造随时随地交互并获取信息的智慧空间。</p>'
                            + '<p style="text-indent: 2em">《王者荣耀》和puppy品牌此次合作并非偶然。除了传统PC、智能手机和平板电脑，游戏厂商一直试图寻找更多的入口，puppy cube的出现刚好提供了全新的思路。此次合作无疑是看中puppy cube作为智慧生活新入口的潜力，希望共同携手，深耕C端用户。</p>'
                            + '<p style="text-indent: 2em">据小狗机器人内部人士透露，puppy 品牌已经和新零售的代表企业黑口袋达成合作，不久之后，puppy cube将登陆黑口袋在各大城市的线下智能体验店。</p>'
                },
       ]
    }
  },

  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  }

}

</script>

<style lang="scss" scoped>

.titleLine {
  width: 70px;
  height: 4px;
  background-color: black;
  margin: 24px 0px 0px 0px; 
}

.mediaTitle {
  font-size: 18pt;
  text-align: left;
  float: left;
  line-height: 40px;
  /* margin-bottom: 5px; */
  width: 100%;
}

.moreInfo {
  float: right;
  font-size: 10pt;
  text-align: right;
  line-height: 40px;
  color: black;
  a:hover {
    color: #929497;
  }
}

.mediaReport {
  height: 480px;
  width: 100%;
  text-align: center;
}

.mediaReport_mobile {
  height: 675px;
  width: 100%;
  text-align: center;
}

.mediaContainer {
  width: 1280px;
  height: 430px;
  margin: 0 auto;
}

.mediaContainer_mobile {
  width: 100%;
  height: 430px;
  margin: 0 auto;
}

.mediaMain {
  height: 430px;
  width: 760px;
  margin-right: 40px;
  float: left;

}

.mediaMain_mobile {
  height: 470px;
  width: 100%;
}

.mediaSub {
  width: 480px;
  float: left;
}

.mediaSub_mobile {
  width: 100%;
  float: left;
}

.mediaSub1 {
  width: 100%;
  height: 200px;
}

.mediaSub1_mobile {
  width: 50%;
  height: 200px;
  float: left;
}

.mediaSub2 {
  width: 100%;
  height: 200px;
  margin-top: 30px;
}

.mediaSub2_mobile {
  width: 50%;
  height: 200px;
  float:left;
}

.newsCol {
  width: 100%;
  height: 290px;
  text-align: center;
}

.newsCol_mobile {
  width: 100%;
  height: 576px;
  text-align: center;
}

.newsContainer {
  width: 1280px;
  height: 290px;
  margin:0 auto;
}

.newsContainer_mobile {
  width: 100%;
  height: 576px;
  margin:0 auto;
}

.techContainer {
  float: left;
  width: 660px;
}

.techContainer_mobile {
  float: left;
  width: 100%;
}

.productContainer {
  float: left;
  width: 620px;
}

.productContainer_mobile {
  float: left;
  width: 100%;
}


.newColMobile {
  width: 100%;
  height: 480px;
  text-align: center;
}

.newsTabPC {
  float: left;
  width: 620px;

}

.newsTabMobile {
  width: 50%;
  float: left;
}

</style>


