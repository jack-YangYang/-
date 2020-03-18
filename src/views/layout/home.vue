<template>
  <div id="main">
    <Header title="华谊电影">
      <!-- <h1 slot="home"></h1> -->
    </Header>
    <div id="content">
      <div class="movie_menu">
				<router-link tag="div" to="/movie/home/city" class="city_name">
					<span>{{city}}</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<div class="hot_swtich">
					<router-link tag="div" to="/movie/home/nowplaying" class="hot_item active">正在热映</router-link>
					<router-link tag="div" to="/movie/home/commingplay" class="hot_item">即将上映</router-link>
				</div>
				<router-link tag="div" to="/movie/home/search" class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
		  </div>
      <keep-alive>
        <router-view
        @handeToCityName="handeToCityName"
         />
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
      city: '大连'
    }
  },
  methods: {
    handeToCityName (city) {
      this.city = city
    }
  },
  mounted() {
    console.log(this.$children)
  },
}
</script>
<style lang="stylus" scoped> 
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>