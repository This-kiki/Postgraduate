<template>
	<view>
		<view class="info-head">
			<image @click="show_piker" class="info-select" src="../../static/icon/select.png" mode=""></image>
		</view>
		<view class="recommend-list">
			<keep-alive>
				<card-info v-for="(item,index) in recommendList" :value='item' :index='index'></card-info>
			</keep-alive>
		</view>
		<view class="info-piker">
			<pxingPicker ref='info_picker' :deepLength='2' :chooseList='categorysList' :defaultChooseList='[0,0]' @confirm='confirmPike'>
			</pxingPicker>
		</view>
	</view>
</template>

<script>
	import pxingPicker from '@/components/pxing-picker/pxing-picker.vue';
	import cardInfo from '../../components/cardInfo/cardInfo.vue';
	export default {
		components: {
			pxingPicker,
			cardInfo
		},
		data() {
			return {
				categorysList: [],
				recommendList: []
			}
		},
		methods: {
			getAreaList() {
				this.$api.getAreaList().then((res)=> {
					let arr=[]
					for(var i=0;i<res.data.data.length;i++) {
						arr[i] = {}
						arr[i].label = res.data.data[i].areaName
						arr[i].value = res.data.data[i].areaId
						arr[i].children = []
						for(var j=0;j<res.data.data[i].province.length;j++) {
							arr[i].children[j] = {}
							arr[i].children[j].label = res.data.data[i].province[j].name
							arr[i].children[j].value = res.data.data[i].province[j].provinceId
						}
					}
					this.categorysList = arr
					// console.log(arr)
				})
			},
			getRecommend() {
				this.$api.getRecommend().then((res)=> {
					this.recommendList = res.data.data
				})
			},
			show_piker() {
				this.$refs.info_picker.show();
			},
			confirmPike(item) {
				// console.log(item)
				uni.navigateTo({
					url: '../../pages/real_timeInfo/collegeList/collegeList?areaId='+item[0].value+'&provinceId='+item[1].value
				})
			}
		},
		created() {
			this.getAreaList();
			this.getRecommend()
		}
	}
</script>

<style>
.info-head {
	position: fixed;
	top: 0rpx;
	width: 100%;
	height: 60rpx;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
}
.info-select {
	height: 40rpx;
	width: 40rpx;
	margin-right: 25rpx;
}
.recommend-list {
	padding: 20rpx 0 100rpx 0;
}
</style>
