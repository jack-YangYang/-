<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- <img :src="img" alt=""> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
}
</script>
<style lang="stylus" scoped>
  #app 
    width: 100%;
    height 100%;
</style>