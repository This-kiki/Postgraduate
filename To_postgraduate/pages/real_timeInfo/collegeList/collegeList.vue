<template>
	<view>
		<load-refresh ref="loadRefresh" :isRefresh="true" refreshType="hollowDots" color="#04C4C4" heightReduce="0" backgroundCover="#F3F5F5" :currentPage="getAPI.pageNum" :totalPages="getAPI.totalPages" @loadMore="loadMore" @refresh="refresh">
			<view slot="content-list" class="college-list">
				<view class="col-card" v-for="item in collegeList" @click="to_college(item)">
					<card-university :value='item'></card-university>
				</view>
			</view>
		</load-refresh>
	</view>
</template>

<script>
	import cardUniversity from '../../../components/cardUniversity/cardUniversity.vue'
	import loadRefresh from '@/components/load-refresh/load-refresh.vue'
	export default {
		components:{
			cardUniversity,
			loadRefresh
		},
		data() {
			return {
				collegeList: [],
				getAPI: {},
			}
		},
		onLoad:function(option) {
			this.getAPI = {
				pageNum: 1,
				totalPages: 10,
				areaId: option.areaId,
				provinceId: option.provinceId
			}
			this.getMsg()
		},
		methods: {
			getMsg() {
				// item.pageNum = this.currentPage
				this.$api.check_school(this.getAPI).then((res)=> {
					this.getAPI.totalPages = res.data.data.num
					// console.log(res)
					if(res.data.data.university.length!=0){
						for(var i=0;i<res.data.data.university.length;i++){
							this.collegeList.push(res.data.data.university[i])
						}
						this.getAPI.pageNum++;
					}else{
						console.log('没有啦')
					}
					// this.collegeList = res.data.data.university
				}).catch((err)=> {
					console.log((err))
				})
			},
			to_college(item) {
				// console.log('id',id)
				uni.navigateTo({
					url: '../collegesInfo/collegesInfo?id='+item.id+'&name='+item.name+'&img='+item.img
				})
			},
			refresh() {
			  setTimeout(() => {
			    console.log('refersh')
				this.getAPI.pageNum = 1
				this.collegeList = []
				this.getMsg()
			    this.$refs.loadRefresh.completed()
			  }, 1000)
			},
			loadMore() {
			  // setTimeout(() => {
			    console.log('loadMore')
				this.getMsg()
			    this.$refs.loadRefresh.completed()
			  // }, 1000)
			},
		}
	}
</script>

<style>
.college-list {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.col-card {
	width: 100%;
	/* margin: 10rpx 16rpx; */
	
	/* width: 27%; */
	/* height: 300rpx; */
	/* display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center; */
}
/* .col-img {
	height: 160rpx;
	width: 80%;
	border-radius: 100rpx;
}
.col-name {
	width: 80%;
	text-align: center;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	white-space: normal;
} */
</style>
