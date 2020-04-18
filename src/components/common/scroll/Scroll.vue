<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullupload: {
      type: Boolean,
      default: false
    } 
  },
  methods: {
    scrollTo(x, y, time){
      this.scroll.scrollTo(x, y, time)
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      probeType:this.probeType,
      pullUpLoad: this.pullupload,
    })
    //监听滚动事件
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position);
    }),
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  }
}
</script>

<style>

</style>