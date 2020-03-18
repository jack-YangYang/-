<template>
  <div>
    <Header title="我的华谊">
      <!-- <h1 slot="home"></h1> -->
    </Header>
    <div id="content">
      <Login />
    </div>
  </div>
</template>
<script>
import Header from '../../components/header'
import Login from '../login.vue'
export default {
  components: {
    Header,
    Login
  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="stylus" scoped>
  #content 
    width 100%
    display flex
    align-items center
</style>