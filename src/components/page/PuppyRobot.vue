<template>
  <div id="puppyrobot">智能家居
    <div class="newsblock">
      <News />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import News from './../common/news'

export default {
  name: 'PuppyRobot',
  components: {
    News
  },
}
</script>

<style scoped>
  .newsblock {
    width: 33%;
  }
</style>

