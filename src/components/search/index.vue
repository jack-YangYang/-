<template>
 <div class="search_body">
				<div class="search_input">
					<div class="search_input_wrapper">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" v-model="value">
					</div>					
				</div>
				<div class="search_result">
					<h3>电影/电视剧/综艺</h3>
					<ul>
						<li v-for="item in movieList" :key="item.id">
							<div class="img"><img :src="item.img | setWH('120.180')" alt=""></div>
							<div class="info">
								<p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
								<p>{{item.enm}}</p>
								<p>{{item.cat}}</p>
								<p>{{item.rt}}</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="cinema_body">
					<ul>
						<li v-for="item in cinemas" :key="item.id">
							<div>
								<span>{{item.nm}}</span>
								<span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
							</div>
							<div class="address">
								<span>{{item.addr}}</span>
								<span>{{item.distance}}</span>
							</div>
							<div class="card">
								<div>小吃</div>
								<div>折扣卡</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
</template>
<script>
import {  mapState } from 'vuex'
let timeout = null;
const debounce = (fn, wait) => {
  if (timeout !== null) clearTimeout(timeout);
  timeout = setTimeout(fn, wait);
};
export default {
	computed: {
		...mapState({
			movieList: state => state.search.getSearchMovieList,
			cinemas: state => state.search.cinemas
		}),
		// value: {
		// 	get
		// }
		value: {
			get () {
				return this.$store.state.search.searchValue
			},
			set (v) {
				debounce(() => {
					this.$store.dispatch('search/search', v)
				}, 1000)			
				console.log(this.movieList)
			}
		}
	},
	// watch: {
	// 	value (newValue) {
	// 		console.log(newValue)
	// 	}
	// },
  	data () {
		return {
			// searchValue: ''
		}
  	}
}
</script>
<style lang="stylus" scoped>
  .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
.search_body .search_result{}
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.search_body .search_result ul{}
.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 16px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
// .cinema_body .addressul{ padding:20px; overflow:hidden;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>