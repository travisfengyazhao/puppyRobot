
<template>
  <div id="newsdetail">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              NEWS
            </div>
            <div class="solutionName">媒体报道</div>
          </div>
          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="videocontent">
        <div class="container">
            <div class="container_detail">
            <div class="detail">
                <div class="detail_mid">
                    <div class="article_title">
                        {{newsArticle.title}}
                    </div>

                    <div class="article_auth_date">
                        <div class="auth_img"><img :src='newsArticle.auth_img'/></div>
                        <div class="auth">来源：<a :href='newsArticle.source_path' target="_blank">{{newsArticle.auth}}</a></div>
                        <div class="date">{{newsArticle.date}}</div>
                        <!-- <div class="shareDiv">
                            <img src="./../../assets/images/videocenter/share.png">
                        </div>
                        <div class="shareDiv">
                            分享到：
                        </div> -->
                    </div>

                    <div class="speratLine"></div>
                    <div class="article" v-html="newsArticle.article"></div>
                    <div class="end">THE END</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import router from "./../../router/index"
export default {
    data() {
        return {
            newsArticle: null,
            //fake data;
            newsLists: [
                {
                    id: '1',
                    date: 'May 25, 2018, 20:14',
                    title: '小狗机器人发布人工智能终端puppy cube s',
                    auth: '人民网-IT频道',
                    source_path: 'http://it.people.com.cn/GB/n1/2018/0525/c1009-30015073.html',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/newscenter/mtbd_01.jpg"),
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
                    img: require("./../../assets/images/newscenter/mtbd_02.jpg"),
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
                {
                    id: '4',
                    date: 'May 10, 2018, 13：59',
                    title: '传小狗机器人研发全新AI终端 目标直指智慧物联',
                    auth: '来源：凤凰网',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/newscenter/mtbd_03.jpg"),
                    article: '<p style="text-indent: 2em">近日有消息称，广州小狗机器人技术有限公司(下文简称“小狗机器人”)正在研发新型AI终端，这款产品将对现有物联网服务进行全面升级，成为智慧生活的全新生态入口。</p>'
                            + '<img style="width: 100%;" src="' + require("./../../assets/images/newscenter/mtbd_03.jpg") + '"/>'
                            + '<p style="text-indent: 2em">小狗机器人自2017年成立以来，一直行事低调，资料显示，这家公司致力于机器人技术研究和技术开发，网络技术研究/开发，电子、通信与自动控制技术研究/开发。而“研发新型AI终端产品”的消息还是首次披露。</p>'
                            + '<p style="text-indent: 2em">目前国内研发人工智能设备的公司普遍将AI终端看作未来智慧生活的入口，小米、京东、阿里等行业巨头纷纷试水智能音箱，希望通过全新的交互控制方式，建立“AI+行业”的触角，深入到社区、学校、银行、医院、公共交通等场景应用当中，为用户提供更丰富的服务体验。</p>'
                            + '<p style="text-indent: 2em">随着专用语音芯片、语音技术提供商、产品方案供应商的涌现，产业链供给能力的提升，智能音箱的市场规模不断扩大，产品同质化现象开始显现。越来越多的新兴技术企业转向可视化交互操作，在智能手机、智能平板和智能音箱之外，探索更为多元化的终端形式。</p>'
                            + '<p style="text-indent: 2em">有业内人士猜测，智能音箱的交互能力不足，操作模式化比较明显，而且服务内容有限;相比之下，可视化交互的准确度更高、多人参与信息处理的可能性更强，可拓展空间更大，在智能机器人领域尤其前景广阔。小狗机器人的最新产品可能会在智能机器人方向上落地，提升智慧生活的人机交互体验。</p>'
                            + '<p style="text-indent: 2em">另一方面，眼下新能源汽车发展迅速，而车联网领域并没有出现具备强大技术说服力的可视化交互终端，解决人车交互的智慧服务需求，小狗机器人的“新型AI终端”也有可能在这一维度尝试突破。</p>'

                }
                // {
                //     id: '5',
                //     date: 'May 23, 2018, 15：52',
                //     title: '科大讯飞与小狗机器人合作 看中AI终端的应用前景',
                //     auth: '来源：小狗机器人',
                //     auth_img: require("./../../assets/images/videocenter/user.png"),
                //     img: require("./../../assets/images/newscenter/div_03.jpg"),
                //     article: '<p style="text-indent: 2em">上周有消息称，科大讯飞已和小狗机器人技术有限公司（下文简称“小狗机器人”）在AI产品开发层面进行合作，随后的5月17日，科大讯飞在深圳发布全新AIUI 3.0人机交互解决方案。而近期小狗机器人即将推出新型AI终端的消息也在业内流传，双方的合作内容和方式很有看点。</p>'
                //             + '<p style="text-indent: 2em">AIUI 3.0是科大讯飞最新的人机交互解决方案，融合了远场识别、全双工交互、语音合成、语义理解、私有语义等特性。重要的是，AIUI属于讯飞开放平台，提供第三方自定义技能，方便应用扩展。科大讯飞执行总裁胡郁在上周四的发言中有一句很关键，“讯飞开放平台让开发者可以更好地接入平台，更快地开发智能产品”。</p>'
                //             + '<p style="text-indent: 2em">这说明，科大讯飞需要更多的合作者，带来形态更丰富的智能设备，而且要求合作者自身具有更快的迭代能力，从技术到产品为科大讯飞的解决方案提供反向支持。</p>'
                //             + '<img style="width: 100%;" src="' + require("./../../assets/images/newscenter/div_01.jpg") + '"/>'
                //             + '<p style="text-indent: 2em">AIUI 3.0的三大技术特色当中，开放式对话尤其重要。对于各种热门说法以及相关回复，AIUI 3.0允许开发者有多种处理方式，包括自定义业务回答内容。这一特性对小狗机器人正在研发的“集可视化、语音交互于一身的全新AI终端”有很大的应用和体验增益。</p>'
                //             + '<p style="text-indent: 2em">有分析人士认为，小狗机器人的新产品要提供全新的智慧生活场景体验，在人机交互层面，势必需要更宽泛的语音、语义逻辑和内容范围，通过改善语音交互的易用性，提升核心功能的使用效率。有了AIUI 3.0的支持，小狗机器人的新产品在交互过程上更贴近自然，自主学习和自适应能力也更强。携手科大讯飞可以快速解决上述技术难题，推动产品落地。</p>'
                //             + '<p style="text-indent: 2em">据小狗机器人内部人士确认，“全新AI终端无论整体定位、交互效果、应用前景，都高于市面上的现有产品”，在产品和功能上差异化明显，也得到了科大讯飞的认可。</p>'

                // }
            ]
        }
    },

    beforeMount() {
        let newsId = this.GetQueryString('id');
        this.newsArticle=_.filter(this.newsLists, ['id', newsId])[0];
    },

    methods: {
        GetQueryString: function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
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
        width: 73.17px;
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

    .videocontent {
        width: 100%;
        background-color: #efefef;
        position: relative;
    }

    .container {
        // margin-top: 70px;
        margin-bottom: 70px;
    }

    .container_detail {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .detail {
        margin: 0 auto;
        width: 1010px;
        background-color: white;
    }

    .detail_mid {
        padding: 75px 85px 105px 75px;
        text-align: left;
    }

    .article_title {
        font-size: 20pt;
    }

    .article_auth_date {
        margin-top: 70px;
        height: 50px;
    }

    .auth_img {
        float: left;
    }

    .auth {
        float: left;
        margin-left: 5px;
        line-height: 43px;
    }

    .date {
        float: left;
        margin-left: 15px;
        color:  #919294;
        line-height: 43px;
    }

    .shareDiv {
        float: right;
        line-height: 43px;
        color: #919294;
        line-height: 43px;
    }

    .speratLine {
        width: 100%;
        height: 1px;
        background-color: #a6a8ab;
        margin-top: 30px;

    }

    .article {
        margin-top: 40px;
    }

    .video {
        margin-top: 40px;
    }

    .end {
        margin-top: 100px;
        text-align: center;
    }
   

</style>
