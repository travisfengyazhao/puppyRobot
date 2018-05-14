<template>
  <div :id="newsCenterId" class="newsClass">
      <!-- <div id="newsTop">

      </div> -->
      <div id="newsBtm" :style="{height:`${newsHeight}px !important`}">
        <div class="newsImageContainer" :style="{height:`${newsHeight-50}px !important`}">
            <div id="newsBtmImage" :style="{backgroundImage:`url(${newsContent?newsContent.img:''})`,height:`${newsHeight-50}px !important`}">
            </div>
        </div>
        <div class="newsTitle">
            <div class="space" v-if="isTitleTwoLine"></div>
            <div :class="isTitleTwoLine ? 'title title_two_line' : 'title'">
                {{newsContent? newsContent.title : ''}}
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCenterTop',
  props: ['newsCenterId', 'newsContent', 'newsHeight', 'newsWidth', 'isTitleTwoLine'],
}

</script>


<style scoped>
    #newsClass {
        width: 100%;
        height: 200px;
    }

    .newsImageContainer {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    #newsBtm {
        width: 100%;
        height: 100%;
        overflow: hidden;  
        position: relative;
    }

    #newsBtmImage {
        width: 100%;
        height: 200px;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 1s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        cursor: pointer;
    }

    #newsBtmImage:hover {
        width: 100%;
        height: 200px;
        transform: scale(1.1);  
    }

    .newsTitle {
        width: 100%;
        line-height: 50px;
        text-align: left;
        height: 50px;
        background-color: black;
        color: white;
        margin-bottom: 0px;
        margin-top: 0px;
    }

    .newsTitleWord {
        width: 100%;
        line-height: 50px;
        text-align: center;
        height: 50px;
        color: white;
        margin-bottom: 0px;
    }

    span{
        opacity: 1;
    }

    .title {
        font-size: 11pt;
        line-height: 50px;
        text-align: left;
        margin: 0px 15px 0px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .space {
        width: 100%;
        height: 5px;
    }

    .title_two_line {
        line-height: 20px;
    }

</style>
