<template>
<!--轮播图-->
  <swiper> 
    <swiperItem v-for="item in banner" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" class="swiperimg" alt="" @load="imageLoad">
      </a>
    </swiperItem>
  </swiper>
</template>

<script>
import {swiper, swiperItem} from "@/components/common/swiper/index"
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperItem
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoadTop')
    }
  }
}
</script>

<style scoped>
  .swiperimg {
    width: 100%;
  }
</style>