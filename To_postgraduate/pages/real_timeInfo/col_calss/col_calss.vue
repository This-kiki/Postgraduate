<template>
	<view class="body">
		<load-refresh ref="loadRefresh" :isRefresh="true" refreshType="hollowDots" color="#04C4C4" heightReduce="0" backgroundCover="#F3F5F5" :currentPage="getAPI.pageNum" :totalPages="getAPI.totalPages" @loadMore="loadMore" @refresh="refresh">
			<view slot="content-list" class="art-list">
				<cardInfo2 :value='artList' :getAPI='getAPI'></cardInfo2>
			</view>
		</load-refresh>
	</view>
</template>

<script>
	import cardInfo2 from '../../../components/cardInfo_2/cardInfo_2.vue'
	import loadRefresh from '@/components/load-refresh/load-refresh.vue'
	export default {
		components: {
			cardInfo2,
			loadRefresh,
		},
		data() {
			return {
				getAPI: {},
				artList: []
			}
		},
		onLoad:function(option) {
			this.getAPI = {
				id:option.schoolId,
				pageNum: 1,
				totalPages: 10,
				classify:option.classify
			}
			this.getCatelog()
		},
		methods: {
			getCatelog() {
				this.$api.getCatelog(this.getAPI).then((res)=> {
					this.getAPI.totalPages = res.data.data.total
					if(res.data.data.list.length!=0){
						for(var i=0;i<res.data.data.list.length;i++){
							this.artList.push(res.data.data.list[i])
						}
						this.getAPI.pageNum++;
					}else{
						console.log('没有啦')
					}
					// console.log(res.data.data.list)
					// this.artList = res.data.data.list
				})
			},
			refresh() {
			  setTimeout(() => {
			    console.log('refersh')
				this.getAPI.pageNum = 1
				this.artList = []
				this.getCatelog()
			    this.$refs.loadRefresh.completed()
			  }, 1000)
			},
			loadMore() {
			  // setTimeout(() => {
			    console.log('loadMore')
				this.getCatelog()
			    this.$refs.loadRefresh.completed()
			  // }, 1000)
			},
		}
	}
</script>

<style>
.body {
	min-height: 100vh;
	background-color: rgb(255, 255, 255);
}
</style>
