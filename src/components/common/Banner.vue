<template>
    <div class="swiper-container" :style="{height:`${swiperHeight}px !important`}">
        <div class="swiper-wrapper">
            <!-- <div class="swiper-slide" v-for="slide in slideLists" :key='slide.id'
            :style="{ backgroundImage: 'url(' + slide.img + ')' }"> -->
             <div class="swiper-slide" v-for="slide in slideLists" :key='slide.id'>
                <router-link v-if="slide.router" :to="slide.router">
                    <div class="slideBackground" :style="{backgroundColor:`${slide.backgroundColor}`}">
                        <img :src="slide.img"><img>
                    </div>
                </router-link>
                <div class="slideBackground" :style="{backgroundColor:`${slide.backgroundColor}`}">
                    <img v-if="!slide.router" :src="slide.img"><img>
                </div>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
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
                    },
                });
            } else {
                var mySwiper = new Swiper('.swiper-container', {
                    centeredSlides: true,
                    speed: 3000,
                    delay: 8000,
                    loop: true,
                    observer: true,
                    observeParents: false,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                        // bulletClass: 'my-bullet',
                    },
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .swiper-container {
        width: 100%;
        height: 550px;
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

        img {
            width: 1280px;
            display: block;
            margin: 0 auto;
        }
    }

    .my-bullet {
        background-color: red;
    }

</style>