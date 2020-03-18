<template>
  <div id="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabar />
  </div>
</template>
<script>
import Tabar from '../components/tabar'
export default {
  components: {
    Tabar
  }
}
</script>