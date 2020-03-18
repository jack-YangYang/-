<template>
  <!-- <header id="header">
    <slot name="home">华谊影院</slot>
  </header> -->
  <mt-header :title="title">
    <!-- <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link> -->
    <!-- <mt-button icon="more" slot="right"></mt-button> -->
  </mt-header>
</template>
<script>
import { Header, Button } from 'mint-ui';
export default {
  props: {
    title:{
      type: String,
      default: 'Home'
    }
  },
  components: {
    MtHeader: Header,
    MtButton: Button
  },
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
.mint-header {
  width 100%;
  height 50px;
  color #000;
  background-color #FFD700;
  border-bottom 1px solid  #FFD700;
  position relative;
  display flex;
  justify-content center;
  align-items center;
  .mint-header-title {
    font-size: 16px;
    font-weight: 600 !important;
  }
}
  
//   i 
//     position absolute
//     left 5px;
//     top 50%;
//     margin-top -13px;
//     font-size 26px 
// .mint-header-title 
    
// // #header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
// #header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
// #header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
<style scoped>
  
</style>