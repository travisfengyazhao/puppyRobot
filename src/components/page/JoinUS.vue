<template>
  <div id="joinus">
    <div class="joinTop">
        <h2>为你准备的职位</h2>
        <p>
            puppy是一家人工智能公司。我们相信，在PC和移动互联网时代之后，人类一定会进入崭新的人工智能时代。
            <br />   
            <br /> 
            为了这个共同的理念，我们鼓励每个人都积极创新，随时提出自己的创意和想法，在努力务实和轻松快乐的工作环境中不断积累，让每个人都能感受到人工智能给生活带来的美好改变。
            <br /> 
            <br /> 
            puppy有一流的人才队伍，创业团队成员来自三星、诺基亚、摩托罗拉等世界500强企业和国内一线的互联网公司。在这里，你会遇到很多优秀的同事，与优秀的人一起做事，让我们一起从优秀到卓越，让世界变得更美好。
            <br /> 
            <br /> 
            如无特别说明，工作地点均位于北京。
        </p>
        <p class="red_text">
            简历请投递至：recruiting@puppyrobot.com
        </p>
       <div :class="!_isMobile()?'anchor':'anchor_mobile'">
			 <ul>
			 	<li>
			 		<a href="#anchor_slam"></a>
			 		<p>SLAM算法工程师</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor_highperformance"></a>
			 		<p>高性能计算工程师</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor_autodrivecalc"></a>
			 		<p>自动驾驶系统算法工程师</p>
			 		<i></i>
			 	</li>
			    <li>
			 		<a href="#anchor_android_dev"></a>
			 		<p>Android系统开发工程师</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor_cplus_senior"></a>
			 		<p>C++高级工程师</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor_tech_director"></a>
			 		<p>技术总监</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor_java_dev"></a>
			 		<p>JAVA研发工程师</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor_industrial_designer"></a>
			 		<p>工业设计师</p>
			 		<i></i>
			 	</li>
			 	<!--<li>
			 		<a href="#anchor-zhizuo"></a>
			 		<p>视频节目制作人</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor-shangwuhezuo"></a>
			 		<p>商务合作</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor-xinjingji"></a>
			 		<p>新经济编辑</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor-xinjishu"></a>
			 		<p>新技术编辑</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor-xinwenyu"></a>
			 		<p>新文娱编辑</p>
			 		<i></i>
			 	</li>

			 	<li>
			 		<a href="#anchor-haiwai"></a>
			 		<p>海外运营经理</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor-renli"></a>
			 		<p>高级人力资源经理</p>
			 		<i></i>
			 	</li>
			 	<li>
			 		<a href="#anchor-zhubi"></a>
			 		<p>主笔</p>
			 		<i></i>
			 	</li> -->
			 </ul>
		 </div>
    </div>
    <div id="anchor_slam" :class="!_isMobile()? 'anchorClass anchor_background':'anchorClass_mobile anchor_background'">
        <div class="anchor_left">
            <div class="left_1">
                <div class="anchor_title">SLAM算法工程师</div>
                <div>机器人事业部</div>
            </div>
            <div class="left_2"> 
                <div class="speratLine">
                    
                </div>
            </div>
        </div>
        <div class="anchor_right">
            <div class="anchor_description">
                •	负责研究SLAM；用相机、激光雷达、里程计、IMU等传感器数据融合识别和理解复杂环境，实现各种复杂场景下的高精度融合定位能力，为无人驾驶系统在定位方面提供强有力的支撑
                <br />
                •	负责算法在嵌入式平台的实现、优化以及产品化

            </div>
            <div class="anchor_ability">任职条件：</div>
            <div>
                •	熟悉EKF、粒子滤波、g2o、BA等算法
                <br />
                •	扎实的数学功底，精通线性代数、概率论、微积分
                <br />
                •	具有良好的英文听说读写沟通能力，学习能力强，求知欲强烈
                <br />
                •	具有良好的团队合作意识、沟通能力、协调能力，能够承担工作压力
                <br />
                •	精通C++、Matlab或者Python
            </div>
            <div class="anchor_ability">优先考虑:</div>
            <div class="anchor_detail">
                •	熟悉开源机器人操作系统ROS，有相关开发经验者
            </div>
            <div class="anchor_return_top">
                <a href="#joinus">返回顶部</a>
            </div>
        </div>
	</div>
    <div id="anchor_highperformance" :class="!_isMobile()? 'anchorClass':'anchorClass_mobile'">
        <div class="anchor_left">
            <div class="left_1">
                <div class="anchor_title">高性能计算工程师</div>
                <div>机器人事业部</div>
            </div>
            <div class="left_2"> 
                <div class="speratLine">
                    
                </div>
            </div>
        </div>
        <div class="anchor_right">
            <div class="anchor_description">
                •	通过GPU和CPU多核加速等一切方式, 实现人工智能算法的极致加速
                <br />
                •	在Nvidia Jetson等嵌入式平台开发高效实用的自动驾驶应用程序
                <br />
                •	接触和熟悉最前沿的人工智能算法
                <br />
                •	与AI算法工程师合作, 完成最高效能低成本的自动驾驶落地产品
            </div>
            <div class="anchor_ability">任职条件：</div>
            <div>
                •	熟练掌握GPU并行算法设计
                <br />
                •	熟练掌握GPU体系结构和CUDA代码调试与优化技术
                <br />
                •	三年以上相关工作经验
                <br />
                •	有TX1/TX2开发经验和算法移植与优化经验
            </div>
            <div class="anchor_ability">优先考虑:</div>
            <div class="anchor_detail">
                •	熟悉常用的计算机视觉、深度学习算法者
            </div>
            <div class="anchor_return_top">
                <a href="#joinus">返回顶部</a>
            </div>
        </div>
	</div>
    <div id="anchor_autodrivecalc" :class="!_isMobile()? 'anchorClass anchor_background':'anchorClass_mobile anchor_background'">
        <div class="anchor_left">
            <div class="left_1">
                <div class="anchor_title">自动驾驶系统<br/>算法工程师</div>
                <div>机器人事业部</div>
            </div>
            <div class="left_2"> 
                <div class="speratLine">
                    
                </div>
            </div>
        </div>
        <div class="anchor_right">
            <div class="anchor_description">
                •	负责开发自动驾驶产品功能需求和技术规范
                <br/>
                •	设计汽车电子系统架构，负责自动驾驶车辆系统拓扑设计
                <br/>
                •	开发对应自动驾驶系统实现算法
                <br/>
                •	实现汽车电子设备在车辆上的匹配，负责多传感器融合的开发
                <br/>
                •	调查先进的自动驾驶技术、市场发展趋势，竞争对手产品分析，以及主流产品技术方案调查
                <br/>
                •	跨团队、跨部门沟通合作解决产品相关问题
                <br/>
                •	整车集成测试、标定等


            </div>
            <div class="anchor_ability">任职条件：</div>
            <div>
                •	了解汽车电子系统架构设计，了解车辆电器匹配方法，掌握汽车底盘控制原理
                <br />
                •	掌握matlab／simulink建模能力，具有软件编程能力（c/c++优先）
                <br />
                •	熟悉整车网络架构，熟练掌握CAN通信协议，能够熟练地对乘用车的CAN协议进行解析，获取必要的车身状态信息

            </div>
            <div class="anchor_ability">优先考虑:</div>
            <div class="anchor_detail">
               •	熟练掌握MATLAB和Dspace等整车系统仿真工作，具有基于模型开发经验者
            </div>
            <div class="anchor_return_top">
                <a href="#joinus">返回顶部</a>
            </div>
        </div>
	</div>
    <div id="anchor_android_dev" :class="!_isMobile()? 'anchorClass':'anchorClass_mobile'">
        <div class="anchor_left">
            <div class="left_1">
                <div class="anchor_title">Android系统<br/>开发工程师</div>
                <div>AIoT事业部</div>
            </div>
            <div class="left_2"> 
                <div class="speratLine">
                    
                </div>
            </div>
        </div>
        <div class="anchor_right">
            <div class="anchor_description">
                •	进行Android智能硬件项目的Android ROM定制和修改
                <br/>
                •	配合方案厂商及产品团队，进行新功能设计中服务的框架架构设计和实现
                <br/>
                •	对Android系统原生应用，如Launcher、Setting、Music等进行维护并根据产品定义进行修改
                <br/>
                •	配合BSP团队和后台服务团队，进行新功能构架和设计，并未HAL的设计提供接口和方案设计
                <br/>
                •	在Android 4.4及以上版本的Framework新功能构建时，进行良好的可移植性和松耦合的代码架构设计，保证产品及软件方案的良好平台兼容性和快速部署

            </div>
            <div class="anchor_ability">任职条件：</div>
            <div>
                •	三年及以上Android系统开发经验
                <br/>
                •	熟悉Android中Audio、Surface、Power Manager、Input Manager、Activity Manager等相关服务的设计流程、具体实现及架构分析
                <br/>
                •	熟悉Android框架及各服务在不同平台的启动流程
                <br/>
                •	熟悉JNI的接口设计架构，精通Android的框架要素、Binder及进程通讯等相关机制
                <br/>
                •	25~35岁，电子工程、计算机或通讯相关专业毕业
            </div>
            <div class="anchor_ability">优先考虑:</div>
            <div class="anchor_detail">
                •	熟练掌握C，C++者
                •	有手机、TV、投影或其他Android系统智能硬件厂商开发经验者
                •	三年以上框架团队领导经验者

            </div>
            <div class="anchor_return_top">
                <a href="#joinus">返回顶部</a>
            </div>
        </div>
	</div>
    <div id="anchor_cplus_senior" :class="!_isMobile()? 'anchorClass anchor_background':'anchorClass_mobile anchor_background'">
        <div class="anchor_left">
            <div class="left_1">
                <div class="anchor_title">C++高级工程师</div>
                <div>机器人事业部</div>
            </div>
            <div class="left_2"> 
                <div class="speratLine">
                    
                </div>
            </div>
        </div>
        <div class="anchor_right">
            <div class="anchor_description">
                •	负责自动驾驶算法的系统集成设计、开发和调试
                <br/>
                •	负责自动驾驶算法在嵌入式车载平台上的移植优化
            </div>
            <div class="anchor_ability">任职条件：</div>
            <div>
                 •	计算机、电子、自动化、汽车等相关专业，本科及以上学历
                 <br/>
                 •	3年以上Linux软件开发或系统集成工作经验
                 <br/>
                 •	有强烈的上进心和求知欲，自我驱动学习能力，充满激情
                 <br/>
                 •	具有嵌入式操作系统和实时操作系统的经验，精通C/C++编程语言

            </div>
            <div class="anchor_ability">优先考虑:</div>
            <div class="anchor_detail">
                •	具有自动驾驶相关算法研发经验者
                <br/>
                •	2年以上ROS开发经验
            </div>
            <div class="anchor_return_top">
                <a href="#joinus">返回顶部</a>
            </div>
        </div>
	</div>
    <div id="anchor_tech_director" :class="!_isMobile()? 'anchorClass':'anchorClass_mobile'">
        <div class="anchor_left">
            <div class="left_1">
                <div class="anchor_title">技术总监</div>
                <div>智能视觉产品事业部</div>
            </div>
            <div class="left_2"> 
                <div class="speratLine">
                    
                </div>
            </div>
        </div>
        <div class="anchor_right">
            <div class="anchor_description">
                •	打造核心业务的基础服务模块，封装算法搭建AI计算引擎，服务上层产品及业务。  
                <br/>
                •	领导基础架构团队，基于产品和业务，设计、实现并不断优化基础架构的各个模块 。
                <br/>
                •	培养团队，使团队成员不断提高技术技能。
            </div>
            <div class="anchor_ability">任职条件：</div>
            <div>
                •	本科及以上学历，计算机等相关专业。
                <br/>
                •	5年及以上前后端技术开发经验，2年及以上技术团队管理经验。
                <br/>
                •	作为主要技术，参与过基础架构的设计、实现及优化，在其中关键环节起重要作用。
                <br/>
                •	对软件工程有较深理解，有较强的系统架构设计能力，有丰富服务器端开发经验，熟悉常用的开发框架。
                <br/>
                •	有高并发，分布式计算及存储实战经验，熟悉数据库、缓存、消息队列等中间件的原理及使用，熟悉常用的开源框架及项目。
                <br/>
                •	开朗上进，积极沟通，善于团队协作。
            </div>
            <div class="anchor_ability">优先考虑:</div>
            <div class="anchor_detail">
                •	有云服务开发经验，熟悉云端项目的部署和维护，有开发云服务API，对接外部客户和平台的经验。
                <br/>
                •	有机器学习／图像处理／计算机视觉／数据挖掘任一领域相关项目经验。
            </div>
            <div class="anchor_return_top">
                <a href="#joinus">返回顶部</a>
            </div>
        </div>
	</div>
    <div id="anchor_java_dev" :class="!_isMobile()? 'anchorClass anchor_background':'anchorClass_mobile anchor_background'">
        <div class="anchor_left">
            <div class="left_1">
                <div class="anchor_title">JAVA研发工程师</div>
                <div>AIoT事业部</div>
            </div>
            <div class="left_2"> 
                <div class="speratLine">
                    
                </div>
            </div>
        </div>
        <div class="anchor_right">
            <div class="anchor_description">
                •	本科及以上学历，计算机、软件工程、信息技术、或其他相关专业
                <br />
                •	根据业务需求进行需求分析和软件概要设计
                <br />
                •	进行软件详细设计和编码实现
                <br />
                •	模块单元测试确保质量和性能； 维护和升级现有软件项目，快速定位并修复现有软件缺陷。
            </div>
            <div class="anchor_ability">任职条件：</div>
            <div>
                •	3年以上web 项目开发经验,了解软件过程
                <br />
                •	了解设计模式，具备面向对象分析与设计能力
                <br />
                •	熟悉Spring、Struts2、myBatis 等主流框架；熟悉Java编程：集合框架、多线程并发、IO/NIO、网络通信等 
                <br />
                •	熟练掌握SQL，熟悉mySql、Oracle关系型数据库
                <br />
                •	熟悉Linux，有Linux系统开发
            </div>
            <!-- <div class="anchor_ability">优先考虑:</div> -->
            <div class="anchor_detail">
            </div>
            <div class="anchor_return_top">
                <a href="#joinus">返回顶部</a>
            </div>
        </div>
	</div>
    <div id="anchor_industrial_designer" :class="!_isMobile()? 'anchorClass':'anchorClass_mobile'">
        <div class="anchor_left">
            <div class="left_1">
                <div class="anchor_title">工业设计师</div>
                <div>AIoT事业部
                </div>
            </div>
            <div class="left_2"> 
                <div class="speratLine">
                </div>
            </div>
        </div>
        <div class="anchor_right">
            <div class="anchor_description">
                •	完成量产级别机器人产品开发和设计工作
                <br />
                •	了解完整的设计流程，可独立完成设计工作
                <br />
                •	参与产品定义以及前期调研工作，参与系统方案设计，进行产品工业设计及独立提案
                <br />
                •	负责产品创意、效果图、建模、配合产品特点把握设计方向和设计元素
                <br />
                •	负责产品外观配色及确认，协同结构工程师负责产品材料、工艺、成本规划 
                <br />
                •	协助解决生产中存在的各种产品外观问题及产品后续跟踪改善。

            </div>
            <div class="anchor_ability">任职条件：</div>
            <div>
                •	至少具有3年以上的量产产品设计开发经验
                <br />
                •	按照团队的实际需求，可高效的完成产品设计工作
                <br />
                •	对金属和塑胶件有深刻的理解及运用能力，了解各种材料加工工艺及表面处理工艺
                <br />
                •	具备良好的手绘设计表达能力
                <br />
                •	精通2D及3D等建模软件，能进行复杂曲面的造型，有A级曲面设计能力
            </div>
            <!-- <div class="anchor_ability">优先考虑:</div> -->
            <div class="anchor_detail">
            </div>
            <div class="anchor_return_top">
                <a href="#joinus">返回顶部</a>
            </div>
        </div>
	</div>
  </div>
</template>

<script>
export default {
    methods: {
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
    }
}
</script>

<style lang="scss" scoped>

    .joinTop {
        padding: 30px 50px;
        text-align: left;
        h2 {
            font-weight: bold;
            font-size: 35px;
            margin-bottom: 50px;
            color: #000;
            
        }
        p {
            color: #000;
            font-size: 16px;
            margin-bottom: 15px;
            line-height: 1.5;
           
        }
    }

     .red_text {
        color: #fc5630 !important;
    }

    .anchor {
        position: relative;
        margin-top: 30px;

        ul {
            overflow: hidden;
            margin-right: -5%;  
            list-style: none;
        }

        li {
            position: relative;
            width: 45%;
            float: left;
            border-bottom: 1px solid #e2e2e2;
            margin-right: 5%;

            a{
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                left: 0;
                display: block;
                transition: all .5s;
            }

            p {
                color: #000;
                font-weight: bold;
                font-size: 16px;
                line-height: 70px;
            }

            i {
                position: absolute;
                right: 0;
                top: 50%;
                display: block;
                background: url(./../../assets/images/arrow.png) no-repeat center;
                background-size: 50%;
                width: 14px;
                height: 24px;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
            }
        }
    }

    .anchor_mobile {
        position: relative;
        margin-top: 30px;

        ul {
            overflow: hidden;
            margin-right: -5%;  
            list-style: none;
        }

        li {
            position: relative;
            width: 95%;
            float: left;
            border-bottom: 1px solid #e2e2e2;
            margin-right: 5%;

            a{
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                left: 0;
                display: block;
                transition: all .5s;
            }

            p {
                color: #000;
                font-weight: bold;
                font-size: 16px;
                line-height: 70px;
            }

            i {
                position: absolute;
                right: 0;
                top: 50%;
                display: block;
                background: url(./../../assets/images/arrow.png) no-repeat center;
                background-size: 50%;
                width: 14px;
                height: 24px;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
            }
        }
    }

    .anchorClass {
        height: 100%;
        width: 100%;
        min-height: 450px;
        position: relative;
        border-top: 1px solid #f2f2f2;

        .anchor_left {
            min-height: 450px;
            width: 340px;
            height: 100%;
            overflow: hidden;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            background-position: center center;
            background-size: cover;
            overflow: hidden;
            background-repeat: no-repeat;

            .left_1 {
                width: 280px;
                text-align: right;
                float:left;
            }

            .left_2 {
                width: 60px;
                text-align: left;
                float:left;
                .speratLine {
                    height: 60px;
                    width: 5px;
                    background-color: black;
                    margin-top: 85px;
                    margin-left: 20px;
                }
            }

            /* background-attachment: fixed; */
            .anchor_title {
                font-size: 20pt;
                padding-top: 80px;
            }
        }

        .anchor_right {
            height: 100%;
            position: relative;
            margin-left: 400px;
            min-height: 450px;
            margin-right: 30px;
            text-align: left;

            .anchor_description {
                padding-top: 80px;
            }

            .anchor_ability {
                padding-top: 40px;
                font-size: 14pt;
                padding-bottom: 20px;
            }

            .anchor_detail {
                margin-bottom: 40px;
            }

            .anchor_return_top {
                height: 15px;
                line-height: 15px;
                text-align: right;
                margin-bottom: 25px;
                a {
                    text-decoration-line: none;
                    color: black;

                    :hover {
                        color: #929497;
                    }
                }
            }

        }
    }
    
    .anchorClass_mobile {
        height: 100%;
        width: 100%;
        min-height: 450px;
        position: relative;
        border-top: 1px solid #f2f2f2;

        .anchor_left {
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin-bottom: 40px;
            // position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            background-position: center center;
            background-size: cover;
            overflow: hidden;
            background-repeat: no-repeat;

            .left_1 {
                width: 100%;
                text-align: center;

            }

            .left_2 {
                display: none;
            }

            /* background-attachment: fixed; */
            .anchor_title {
                font-size: 20pt;
                padding-top: 80px;
            }
        }

        .anchor_right {
            height: 100%;
            position: relative;
            margin-left: 20px;
            min-height: 450px;
            margin-right: 20px;
            text-align: left;

            .anchor_description {
                padding-top: 0px;
            }

            .anchor_ability {
                padding-top: 40px;
                font-size: 14pt;
                padding-bottom: 20px;
            }

            .anchor_detail {
                margin-bottom: 40px;
            }

            .anchor_return_top {
                height: 15px;
                line-height: 15px;
                text-align: right;
                margin-bottom: 25px;
                a {
                    text-decoration-line: none;
                    color: black;

                    :hover {
                        color: #929497;
                    }
                }
            }

        }
    }


    .anchor_background {
        background-color: #fefefe;
    }

</style>


