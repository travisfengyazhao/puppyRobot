<template>
  <div id="news">
      <div id="newsTop">

      </div>
      <div id="newsBtm">
        <div id="newsBtmLeft">
            111
        </div>

        <div id="newsBtmRight">
            222
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'news',

  data() {
      return {
        topMO: false,
        btmLeftMO: false,
        btmRightMO: false
      }
  },

  methods:{
    },

  mounted(){

  }

}

</script>


<style scoped>
    #news {
        width: 100%;
        height: 300px;
    }

    #newsTop {
        width: 100%;
        height: 145px;
        margin-bottom: 5px;
        background-color: red;
        opacity: 0.5;
    }

    #newsTop:hover {
        height: 300px;
        margin-bottom: 0px;
    }

    #newsTop:hover ~div {
        display: none;
    }

    #newsBtm {
        width: 100%;
        height: 150px;
    }

    #newsBtmLeft {
        float:left;
        width: 50%;
        height: 150px;
        background-color: gray;
        opacity: 0.5;
    }

    #newsBtmLeft:hover {
        width: 100%;
    }

    #newsBtmLeft:hover ~div{
        display: none;
    }

    #newsBtmRight {
        float:left;
        width: 50%;
        height: 150px;
        background-color: green;
        opacity: 0.5;
    }

    #newsBtmRight:hover {
        width: 100%;
    }

    

</style>
