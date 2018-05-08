<template>
  <div :id="newsId" class="newsClass">
      <div id="newsBtm">
        <div class="newsImageContainer">
            <div id="newsBtmImage" :style="{backgroundImage:`url(${newsContent?newsContent.img:''})` }">
            </div>
        </div>
        <div class="imageBtn">
            <img src="./../../assets/images/index/button_01.png">
        </div>
        <div class="newsTitle">
            <div class="title">
                {{newsContent? newsContent.title : ''}}
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: ['newsId', 'newsContent', 'newsWidth'],
}

</script>

<style scoped>
    #newsClass {
        width: 100%;
        height: 220px;
    }

    .newsImageContainer {
        width: 100%;
        height: 163px;
        overflow: hidden;
    }

    #newsBtm {
        width: 100%;
        height: 220px;
        overflow: hidden;  
        position: relative;
    }

    #newsBtmImage {
        width: 100%;
        height: 163px;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 1s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        cursor: pointer;
    }

    #newsBtmImage:hover {
        width: 100%;
        height: 163px;
        transform: scale(1.1);  
    }

    .newsTitle {
        width: 100%;
        line-height: 57px;
        text-align: center;
        height: 57px;
        background-color: white;
        color: black;
    }

    .title {
        font-size: 10pt;
        line-height: 20px;
        text-align: left;
        margin: 8px 15px 8px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .imageBtn {
        position: absolute;
        top: 105px;
        left: 20px;
        cursor: pointer;
    }
    

</style>
