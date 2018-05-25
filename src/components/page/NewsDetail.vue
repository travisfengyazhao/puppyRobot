
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
                        <div class="auth">{{newsArticle.auth}}</div>
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
                    date: 'May 19, 2018, 09:38',
                    title: '人工智能新力量puppy进军机器人市场',
                    auth: '来源：中华网',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/newscenter/mtbd_01.jpg"),
                    article: '<p style="text-indent: 2em">5月17日，小狗机器人技术有限公司(下文简称“小狗机器人”)品牌暨新品发布会邀请函曝光后，引发了业内的好奇。2016年，谷歌旗下DeepMind公司AI系统“阿尔法狗”和世界围棋冠军李世乭的“划时代大战”，让从业者看到了人工智能、机器人领域的光明前景。大批企业踊跃投身于这个行业，“小狗机器人”就是其中之一。</p>'
                            + '<img style="width: 100%;" src="' + require("./../../assets/images/newscenter/mtbd_01.jpg") + '"/>'
                            + '<p style="text-indent: 2em">大背景是，近两年云计算、大数据等互联网技术发展越来越快，在此基础上，视/听觉语义理解、处理和反馈，自然语言理解和处理，神经网络、情感识别算法等技术获得了长足进步。人工智能得到多重技术的共同作用，在人机交互层面带来了颠覆性的应用改进。未来机器人与人工智能结合是大趋势，具备良好的人机交互应用体验之后，“智能机器人”才算真正落地。</p>'
                            + '<p style="text-indent: 2em">随着感应技术的成熟，更丰富、更新型的传感器得到集成，不仅仅在音频(声)，还通过视频(光)、震动(触摸)等方式，将人机交互迅速深化，智能机器人的功能和应用也会提上一个台阶。</p>'
                            + '<p style="text-indent: 2em">目前互联网巨头推出的多款智能音箱，基于移动互联网、语音语义识别等技术，具备了智能机器人“初代机”的雏形。当然，从功能和人机交互的应用覆盖面上看，更应该归类为“面向家庭应用场景的AI终端”。</p>'
                            + '<p style="text-indent: 2em">之前有消息显示，小狗机器人“正在研发集可视化、语音交互于一身的全新AI终端，计划从用户真实场景切入，提供全新生态入口，打造全新的智慧生活场景体验”。这说明小狗机器人的研发大方向和国内多数新兴企业相似，从AI终端切入，积累用户和应用的大数据，为机器人研发筑底。</p>'
                            + '<p style="text-indent: 2em">成立于2016年的“小狗机器人”定位于人工智能领域的创业企业，从事机器人技术研究、技术开发;人工智能算法软件的技术开发与技术服务;机器人制造、销售和修理。产品将覆盖公共、商业、文化教育、商务办公、家庭娱乐等多个范围。目前正在开发的“集可视化、语音交互于一身的全新AI终端”既可以应用于B端，也可以应用于C端，说明小狗机器人的远期产品规划不会局限于个人用户。</p>'
                            + '<p style="text-indent: 2em">相关统计数据显示，2012年至2017年，全球机器人市场平均增长率约为17%，而我国机器人市场平均增长率达到28%，庞大的市场机会已经出现。工信部给出的数据显示，我国涉及机器人生产的企业超过800家，其中有200家是机器人本体制造企业。小狗机器人无疑是其中的新兴力量。</p>'
                },{
                    id: '2',
                    date: 'May 23, 2018, 09：30',
                    title: '科大讯飞与小狗机器人合作 看中AI终端的应用前景',
                    auth: '来源：小狗机器人',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/newscenter/mtbd_02.jpg"),
                    article: '<p style="text-indent: 2em">上周有消息称，科大讯飞已和小狗机器人技术有限公司（下文简称“小狗机器人”）在AI产品开发层面进行合作，随后的5月17日，科大讯飞在深圳发布全新AIUI 3.0人机交互解决方案。而近期小狗机器人即将推出新型AI终端的消息也在业内流传，双方的合作内容和方式很有看点。</p>'
                            + '<p style="text-indent: 2em">AIUI 3.0是科大讯飞最新的人机交互解决方案，融合了远场识别、全双工交互、语音合成、语义理解、私有语义等特性。重要的是，AIUI属于讯飞开放平台，提供第三方自定义技能，方便应用扩展。科大讯飞执行总裁胡郁在上周四的发言中有一句很关键，“讯飞开放平台让开发者可以更好地接入平台，更快地开发智能产品”。</p>'
                            + '<p style="text-indent: 2em">这说明，科大讯飞需要更多的合作者，带来形态更丰富的智能设备，而且要求合作者自身具有更快的迭代能力，从技术到产品为科大讯飞的解决方案提供反向支持。</p>'
                            + '<img style="width: 100%;" src="' + require("./../../assets/images/newscenter/mtbd_02.jpg") + '"/>'
                            + '<p style="text-indent: 2em">AIUI 3.0的三大技术特色当中，开放式对话尤其重要。对于各种热门说法以及相关回复，AIUI 3.0允许开发者有多种处理方式，包括自定义业务回答内容。这一特性对小狗机器人正在研发的“集可视化、语音交互于一身的全新AI终端”有很大的应用和体验增益。</p>'
                            + '<p style="text-indent: 2em">有分析人士认为，小狗机器人的新产品要提供全新的智慧生活场景体验，在人机交互层面，势必需要更宽泛的语音、语义逻辑和内容范围，通过改善语音交互的易用性，提升核心功能的使用效率。有了AIUI 3.0的支持，小狗机器人的新产品在交互过程上更贴近自然，自主学习和自适应能力也更强。携手科大讯飞可以快速解决上述技术难题，推动产品落地。</p>'
                            + '<p style="text-indent: 2em">据小狗机器人内部人士确认，“全新AI终端无论整体定位、交互效果、应用前景，都高于市面上的现有产品”，在产品和功能上差异化明显，也得到了科大讯飞的认可。</p>'

                },
                {
                    id: '3',
                    date: 'May 08, 2018, 12：02',
                    title: '从信息入口到服务入口 探索AI终端未来新方向',
                    auth: '来源：小狗机器人',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/images/newscenter/mtbd_03.jpg"),
                    article: '<p style="text-indent: 2em">上周有消息称，科大讯飞已和小狗机器人技术有限公司（下文简称“小狗机器人”）在AI产品开发层面进行合作，随后的5月17日，科大讯飞在深圳发布全新AIUI 3.上周五，媒体曝出的2018年度全球AI芯片企业排行榜，凸显了当下人工智能产业前景无限，AI终端产品却始终没有巨大突破的尴尬。</p>'
                            + '<p style="text-indent: 2em">市场研究和咨询公司Compass Intelligence在调查研究全球100多家企业后，发布了这份榜单，Top 24中，英伟达排名第一，英特尔、IBM、Google、苹果、AMD、ARM、高通、三星、恩智浦等公司分列2～10名。有7家中国公司入围，华为（海思）列第12位，联发科（MediaTek）排名第14。</p>'
                            + '<p style="text-indent: 2em">除了内置Siri的iPhone和iPad，以及Google Glass，AI终端产品贫瘠才是最大的痛点。很多人对下一个AI终端的形态，依然没有头绪，仿佛只有往智能手机、Pad里塞进更多配件和App，才能解决所有需求。</p>'
                            + '<img style="width: 100%;" src="' + require("./../../assets/images/newscenter/mtbd_03.jpg") + '"/>'
                            + '<br/><p style="font-weight:bold">智慧家庭市场体量惊人</p>'
                            + '<p style="text-indent: 2em">随着IT、家电、安防等行业的融合速度加快，AI终端在产品方面的新缺口已经出现。相关数据显示，仅智能门锁领域，2018年中国智能锁需求量保守估计为1300万套，市场规模接近200亿。</p>'
                            + '<p style="text-indent: 2em">智能门锁肯定不是最接地气的产品，最红的莫过于智能音箱。小爱音箱、叮咚音箱、天猫精灵、小度在家……如雨后春笋一样面世，立足于成熟的声控技术，从单一产品进化为智能家居的控制枢纽。</p>'
                            + '<p style="text-indent: 2em">智能音箱除了性价比，有着更便利的语音交互控制，可以唤醒激活更多设备，背后则是音乐、阅读等流量和内容的海量应用。这体现了厂商以应用和服务教育市场的思路。全新的交互方式、庞大的付费服务规模，能提升供应链的强壮度，迅速拉低单品价格，加速AI终端的普及。</p>'
                            + '<br/><p style="font-weight:bold">AI终端进化，为应用赋能</p>'
                            + '<p style="text-indent: 2em">智能音箱只是小米、京东、阿里等行业巨头的一次试水，就让智慧家庭看上去有模有样。这说明AI终端的最终形态，决定了智慧家庭的生态特点。毫无疑问，声音控制和交互是未来智能家庭的主流操作，但AI终端绝不可能只有这一种操作。</p>'
                            + '<p style="text-indent: 2em">例如“刷脸支付”，属于人脸识别技术，国内新兴独角兽创业公司旷视、商汤都在计算机视觉领域，将人脸识别做到了行业领先。随着“AI+行业”的触角不断深入到社区、学校、银行、医院、公共交通等场景，深度结合具体应用，对应用终端的需求也在不断提升。不少业内人士表示，人脸识别方面，C端目前最广泛的应用终端还是智能手机，B端则是安防摄像头，产品区隔比较明显。真正可以为这一应用赋能、同时打通C端和B端、将应用不断深化的AI终端，还没有出现。</p>'
                            + '<br/><p style="font-weight:bold">小狗机器人发力AI终端</p>'
                            + '<p style="text-indent: 2em">智慧家庭的产业瓶颈已不是技术和硬件，而是生态体系的建构与融合。AI终端能否快速迭代，在形态和易用性上迅速模糊B端和C端，推动智慧家庭从互联智能走向场景智能，最终成为整个生态的入口，是大方向。其中AI终端的交互效率，是用户体验的直接体现，可以真正让用户成为产品、应用和服务的中心。</p>'
                            + '<p style="text-indent: 2em">作为人工智能领域的新兴厂商，小狗机器人技术有限公司目前正在研发集可视化、语音交互于一身的新型AI终端，希望从这一应用维度入手，提供全新的生态入口，为智慧家庭、智慧办公、智慧社区、智慧酒店、智慧商业等领域带来更好的服务、更高效的交互应用体验，让智慧生活触手可及。</p>'
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
        margin-left: 5px;
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
