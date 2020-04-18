<template>
  <div id="btnbar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#btnbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    background-color: rgb(231, 231, 231);
    box-shadow: 0px -1px 2px rgba(0, 0, 0, .2);
  }
</style>