<template>
  <div class="goodslist">
    <goodslistitem v-for="item in goods" :key="item.index" :goodsitem="item"/>
  </div>
</template>

<script>
import goodslistitem from './GoodsListItem'
export default {
  components: {
    goodslistitem
  },
  props:{
    goods: Array
  }
}
</script>

<style>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
  }
</style>