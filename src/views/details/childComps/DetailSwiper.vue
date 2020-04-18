<template>
  <swiper  class="swiper-item">
      <swiperItem v-for="item in topimages" :key="item">
        <img :src="item" alt="">
      </swiperItem>
    </swiper>
</template>

<script>
import {swiper, swiperItem} from "@/components/common/swiper/index"
export default {
  components: {
    swiper,
    swiperItem
  },
  props:{
    topimages:Array
  }
}
</script>

<style>
  .swiper-item {
    margin-top: 44px;
    height: 300px;
    overflow: hidden;
  }
</style>