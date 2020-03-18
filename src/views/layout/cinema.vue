<template>
  <div id="main">
    <Header title="影院"></Header>
    <div id="content">
      <div class="cinema_menu">
				<router-link tag="div" to="/movie/cinema/clyList" class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link tag="div" to="/movie/cinema/brand" class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link tag="div" to="/movie/cinema/feature" class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
			</div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Header from '../../components/header'
export default {
  components: {
    Header
  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="stylus" scoped>

#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
.cinema_menu {
  & > div {
    height 100%
    line-height 45px;
    width 33.33%;
    text-align:center
  }
  .router-link-active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid
  }
}
</style>