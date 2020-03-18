<template>
  <div class="city_body">
				<div class="city_list">
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for="item in hotCityList" :key="item.id" @touchstart="handeToCityName(item.nm)">{{item.nm}}</li>
						</ul>
					</div>
					<div class="city_sort" ref="city_sort">
						<div v-for="(item, index) in cityList" :key="index">
							<h2>{{item.index}}</h2>
							<ul>
								<li v-for="city in item.list" :key="city.id" @touchstart="handeToCityName(city.name)">{{city.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="city_index">
					<ul>
						<li  v-for="(item, index) in cityList" :key="index" @touchstart="handeToCity(index)">{{item.index}}</li>
					</ul>
				</div>
			</div>
</template>
<script>
import { Indicator } from 'mint-ui';
import { mapActions, mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			'cityList': 'city/cityList',
			'hotCityList': 'city/hotCityList'
		})
	},
	name: 'City',
	data () {
		return {
		}
	},
	methods: {
		...mapActions(['city/getCityList']),
			handeToCity (index) {
				// 由于右边索引和城市的标题索引相同，可以可以根据索引来做
				let h2 = this.$refs.city_sort.getElementsByTagName('h2')
				this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop // 当前父元素的滚动条高度等于当前标题的top值
			},
			handeToCityName (cityName) {
				this.$emit('handeToCityName', cityName)
			}
	},
	mounted() {
		this['city/getCityList']()
	},
}
</script>
<style lang="stylus" scoped>
  .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>