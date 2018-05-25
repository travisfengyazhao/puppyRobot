<template>
    <div class="swiper-container" :style="{height:`${swiperHeight} !important`}">
        <div class="swiper-wrapper">
             <div class="swiper-slide" v-for="slide in slideLists" :key='slide.id'>
                <router-link v-if="slide.router" :to="slide.router">
                    <div class="slideBackground" :style="{backgroundColor:`${slide.backgroundColor}`}">
                        <div class="image_div" :style="{backgroundImage:`url(${slide.img})`, maxWidth: (slide.maxWidth?slide.maxWidth:'1280px' + ` !important`)}" 
                    v-if="!_isMobile()"></div>
                        <img :style="{maxWidth: (slide.maxWidth?slide.maxWidth:'1280px' + ` !important`)}" v-if="_isMobile()" :src="slide.img" />
                    </div>
                </router-link>
                <div class="slideBackground" :style="{backgroundColor:`${slide.backgroundColor}`}">
                     <div v-if="_isMobile()" class="imageTitle">
                        <div class="title">{{slide.title}}</div>
                        <div class="slogan">{{slide.slogan}}</div>
                    </div>
                    <div class="image_div" :style="{backgroundImage:`url(${slide.img})`, maxWidth: (slide.maxWidth?slide.maxWidth:'1010px' + ` !important`)}" 
                    v-if="!_isMobile() && !slide.router && slide.img"></div>
                    <img :style="{maxWidth: (slide.maxWidth?slide.maxWidth:'1010px' + ` !important`)}" v-if="_isMobile() && !slide.router && slide.img && !slide.video" :src="slide.img" />
                    <div class="separateWord" v-if="slide.video && !_isMobile()">
                        <div class="wordscontent">
                            <div class="words">
                                <div class="word_01">设计</div>
                                <div class="word_02">友好交互设计 —— 智慧呼吸灯</div>
                               <div class="word_03">可视化语音相应，呼吸灯带在不同状态下相应变化</div>
                                <div class="word_04">人性化设计赋予puppy cube s智慧心灵的窗口</div>
                            </div>

                        </div>
                    </div>
                    <div :class="!_isMobile()?'separateIamge':'separateIamge_mobile'" v-if="slide.video">
                        <video class="video_class" :src="slide.video" autoplay loop muted="muted"></video>
                    </div>
                    <div v-if="_isMobile()" class="imageFooter">
                        <div class="description">{{slide.description}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="!_isMobile()?'swiper-pagination swiper-pagination-white' : 'swiper-pagination swiper-pagination-black'"></div>
        <!-- <div class="swiper-button-prev swiper-button-black"></div> 
        <div class="swiper-button-next swiper-button-black"></div>  -->
        <!-- <div class="pagination"></div> -->
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name: 'Banner',
        props: ['slideLists', 'swiperHeight', 'isAutoplay'],
        mounted() {
            if(this.isAutoplay) {
                var mySwiper = new Swiper('.swiper-container', {
                    centeredSlides: true,
                    speed: 3000,
                    delay: 8000,
                    autoplay: true,
                    autoplay: {
                        disableOnInteraction: false,
                    },
                    loop: true,
                    observer: true,
                    observeParents: false,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }
                });
            } else {
                var mySwiper = new Swiper('.swiper-container', {
                    centeredSlides: true,
                    speed: 3000,
                    delay: 7000,
                    autoplay: this._isMobile() ? false : true,
                    loop: true,
                    effect: this._isMobile() ? 'slide' : 'fade',
                    observer: true,
                    observeParents: false,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                        // bulletClass: 'my-bullet',
                    },
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }

                });
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

<style scoped lang="scss">
    .swiper-container {
        width: 100%;
        z-index: 1;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
        }

        .my-bullet {
            width: 8vw;
            height: 5px;
            display: inline-block;
            border-radius: 100%;
            background: #f45f45 !important;
            background-color: #f45f45 !important;
            opacity: .2;
            z-index: 10;
        }
    }

    .slideBackground {
        width: 100%;
        text-align: center;
        height: 100%;
        position: relative;

        img {
            width: 100%;
            display: block;
            margin: 0 auto;
            
        }

        .image_div {
            background-repeat: no-repeat;
            background-position:center center;  
            width:100%;
            height: 100%;
            background-size: cover;
            margin: 0 auto;
        }

        .imageTitle {
            height: 100px;
            .title {
                padding-top: 25px;
                font-weight: 300;
            }
            .slogan {
                font-size: 16pt;
                font-weight: 300;
            }
        }

        .imageFooter {
            .description {
                text-align: left;
                padding: 15px 15px 30px 25px;
                font-weight: 300;
                font-size: 11pt;
            }
        }

        .separateIamge {
            max-width: 1280px;
            width: 100%;
            height: 100%;
            position: absolute;
            margin: 0 auto;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            .video_class {
                height: 85%;
                position: absolute;
                max-height: 800px;
                left: 27%;
                z-index: 1;
                top: 70px;
            }
        }

        .separateIamge_mobile {
            max-width: 1280px;
            width: 100%;
            // height: 100%;
            // position: absolute;
            margin: 0 auto;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            display: table;
            .video_class {
                width: 100%;
                // position: absolute;
                max-height: 800px;
                left: 0px;
                z-index: 1;
                display: table-cell;
            }
        }

        .separateWord {
            max-width: 1010px;
            width: 100%;
            height: 100%;
            position: absolute;
            margin: auto;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            display: table;
            z-index: 2;
            .wordscontent {
                display: table-cell;
                height: 30%;
                .words {
                    margin-top: 330px;
                    width: 47.5%;
                    text-align: right;
                    color: white;
                    font-weight: 100;
                    .word_01 {
                        font-size: 18pt;
                    }
                    .word_02 {
                        font-size: 26pt;
                        margin-top: 5px;
                    }
                    .word_03 {
                        margin-top: 15px;
                    }

                }
            }

        }

        .separateWord_mobile {
            max-width: 1010px;
            width: 100%;
            height: 100%;
            position: absolute;
            margin: auto;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            display: table;
            z-index: 2;
            .wordscontent {
                display: table-cell;
                height: 100%;
                .words {
                    height: 100%;
                    width: 100%;
                    text-align: center;
                    color: white;
                    font-weight: 100;
                    .word_01 {
                        font-size: 5vmin;
                    }
                    .word_02 {
                        font-size: 6vmin;
                        margin-top: 15px;
                    }
                    .word_03 {
                        margin-top: 40px;
                        font-size: 3vmin;
                    }
                    .word_04 {
                        font-size: 3vmin;
                    }

                }
            }

        }

    }

    .my-bullet {
        background-color: red;
    }

</style>