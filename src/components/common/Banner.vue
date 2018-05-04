<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :key='str' :style="{ backgroundImage: 'url(' + str + ')' }"></div>
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
        props: ['listImg'],
        mounted() {
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
                    clickable: true
                },
                // pagination: {
                //     el: '.pagination',
                //     type: 'custom',
                //     renderCustom: function (swiper, current, total) {
                //         var _html = '';
                //         for (var i = 1; i <= total; i++) {
                //             if (current == i) {
                //                 _html += '<span class="swiper-pagination-custom active"></span>';
                //             } else {
                //                 _html += '<span class="swiper-pagination-custom"></span>';
                //             }
                //         }
                //         return _html;//返回所有的页码html
                //     }
                // }  
            });
        }
    }
</script>

<style scoped lang="scss">
    .swiper-container {
        width: 100%;
        height: 680px;
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
            img {
                width: 100%;
                height: 100%;
            }
        }

        .swiper-pagination-bullet {
            width: 8vw;
            height: 5px;
            display: inline-block;
            // border-radius: 100%;
            background: #000;
            opacity: .2;
        }
        // .swiper-pagination-custom {
        //     bottom: 10px;
        //     left: 0;
        //     width: 100%;
        //     position: absolute;
        //     z-index: 10;
             
        //     .swiper-pagination-custom {
        //         margin-bottom: 10px;
        //         width: 8vw;
        //         height: 5px;
        //         display: inline-block;
        //         background: white;
        //         z-index: 10;
        //     }
        //     .active {
        //         opacity: 1;
        //     }
        // }
        
       


    }


</style>