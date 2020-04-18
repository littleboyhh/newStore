<template>
  <div class="goodslistitem" @click="itemClick">
    <img :src="goodsitem.show.img" alt="" @load="imageLoad">
    <p class="itemp">{{goodsitem.title}}</p>
    <div class="itemdiv">
      <span class="itemp1">￥{{goodsitem.price}}</span>
      <span class="itemp2">❤ {{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: Object
  },
  methods: {
    // 发射图片加载完事件
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/details/' + this.goodsitem.iid)
    }
  }
}
</script>

<style>
  .goodslistitem {
    width: 48%;
    border-radius: 18px;
    overflow: hidden;
  }
  .goodslistitem img{
    width: 100%;
  }
  .itemp{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    color: brown;
    font-size: 12px;
    margin: 3px 0;
  }
  .itemdiv {
    text-align: center;
  }
  .itemp1 {
    color: crimson;
    margin-right: 20px;
  }
  
</style>