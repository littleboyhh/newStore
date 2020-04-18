<template>
  <div class="navbar">
    <div class="left"><slot name="leftbtn"></slot></div>
    <div class="center"><slot name="centerbtn"></slot></div>
    <div class="right"><slot name="rightbtn"></slot></div>
  </div>
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style>
  .navbar {
    position: relative;
    top: 0;
    z-index: 9;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, .4);
  }
  .left, 
  .right {
    height: 44px;
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>