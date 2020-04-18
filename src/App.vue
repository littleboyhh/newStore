<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
    <barmine></barmine>
  </div>
</template>

<script>

import barmine from '@/components/content/barmine/BarMine'
export default {
  name: 'App',
  components: {
    barmine
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
