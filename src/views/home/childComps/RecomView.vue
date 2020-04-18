<template>
<!--轮播图下面的-->
  <div class="recommend">
    <div v-for="item in recommend" :key="item.index" class="recommenditem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    recommend: Array
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 20px;
    border-bottom:6px solid #ccc;
  }
  .recommenditem {
    flex: 1;
  }
  .recommenditem img {
    width: 85px;
    height: 85px;
    margin-bottom: 10px;
  }
</style>