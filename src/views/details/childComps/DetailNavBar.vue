<template>
  <div class="detailnavbar">
    <navbar>
      <div slot="leftbtn" class="leftbar" @click="imgbackClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="centerbtn" class="centerbar">
        <div v-for="(item, index) in titles" 
        :key="item.index" 
        class="items" 
        :class="{itemcolor: currentIndex == index}"
        @click="itemClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/Navbar'
export default {
  components: {
    navbar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    },
    imgbackClick() {
      this.$router.back()
    }
  }
}
</script>

<style>
  .detailnavbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background: #fff;
  }
  .centerbar {
    display: flex;
  }
  .items {
    flex: 1;
    font-size: 14px;
  }
  .itemcolor {
    color: brown;
  }
  .leftbar img {
    vertical-align: middle;
  }
</style>