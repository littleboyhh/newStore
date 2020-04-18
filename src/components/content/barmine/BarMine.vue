<template>
  <tab>
    <bar path="/home">
    <img slot="bar-active" src="@/assets/img/tabbar/home_active.svg" alt="">
    <img slot="bar-img" src="@/assets/img/tabbar/home.svg" alt="">
    <div slot="bar-text">首页</div>
    </bar>
    <bar path="/category">
      <img slot="bar-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      <img slot="bar-img" src="@/assets/img/tabbar/category.svg" alt="">
      <div slot="bar-text">分类</div>
    </bar>
    <bar path="/shopcart">
      <img slot="bar-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      <img slot="bar-img" src="@/assets/img/tabbar/shopcart.svg" alt="">
      <div slot="bar-text">购物车</div>
    </bar>
    <bar path="/profile">
      <img slot="bar-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      <img slot="bar-img" src="@/assets/img/tabbar/profile.svg" alt="">
      <div slot="bar-text">个人中心</div>
    </bar>
  </tab>
</template>

<script>
import tab from '@/components/common/tabbar/Tab'
import bar from '@/components/common/tabbar/Bar'
export default {
  components: {
    tab,
    bar,
  }
}
</script>

<style>

</style>