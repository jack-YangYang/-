<template>
  <div class="cinema_body">
				<ul>
					<li v-for="item in cinema" :key="item.id">
						<div>
							<span>{{item.nm}}</span>
							<span class="q"><span class="price">22.9</span> 元起</span>
						</div>
						<div class="address">
							<span>{{item.addr}}</span>
							<span>{{item.distance}}</span>
						</div>
						<div class="card">
                			<div v-for="(itemCard, key) in item.tag" :key="key" v-if="itemCard===1" :class="key | classCard">{{key | formartCard}}</div>
       					</div>
					</li>
				</ul>
			</div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'cityList',
  computed: {
	  ...mapState({
		  cinema: state => state.cinema.cinemaList
	  }),
	//   ...mapGetters({
	// 	  'filtersCinemaList': 'cinema/filtersCinemaList'
	//   })
  },
  methods: {
	  ...mapActions(['cinema/getCinemaList'])
  },
  filters: {
	  	formartCard (key) {
		  let card = [
			  	{key: 'allowRefund', value: '改签'},
				{key: 'endorse', value: '退票'},
				{key: 'sell', value: '折扣卡'},
				{key: 'snack', value: '小吃'}
		  ]
		  for (let item of card) {
			  if (item.key === key) {
				  return item.value
			  }
		  }
		  return ''
		  },
		  classCard (key) {
		  let card = [
			  	{key: 'allowRefund', value: 'bl'},
				{key: 'endorse', value: 'bl'},
				{key: 'sell', value: 'or'},
				{key: 'snack', value: 'or'}
		  ]
		  for (let item of card) {
			  if (item.key === key) {
				  return item.value
			  }
		  }
		  return ''
	  	}
  },
  mounted() {
	  this['cinema/getCinemaList']()
  },
}
</script>
<style lang="stylus" scoped>
  .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px; overflow:hidden;}
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