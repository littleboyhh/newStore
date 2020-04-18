<template>
  <div class="bar" @click="barClick">
    <div v-if="isActive"><slot name="bar-active"></slot></div>
    <div v-else><slot name="bar-img"></slot></div>
    <div :style="activeColor"><slot name="bar-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    textcolor: {
      type: String,
      default: "crimson"
    }
  },
  methods: {
    barClick() {
      this.$router.replace(this.path).catch(()=>{})
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeColor() {
      return this.isActive ? {color: this.textcolor}: {}
    }
  }
}
</script>

<style>
  .bar {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .bar img {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }
</style>