<template>
<!--本周流行下面的导航栏-->
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" :key="item.index" 
        class="tabcontrolitem" 
        :class="{active:index == indexes}"
        @click="controlitemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: Array
  },
  data() {
    return {
      indexes : 0
    }
  },
  methods: {
    controlitemClick(index) {
      this.indexes = index;
      this.$emit('itemClick',index)
    },
  }
}
</script>

<style scoped>
   .tabcontrol {
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .tabcontrolitem {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tabcontrolitem span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 2px solid pink;
  }
</style>