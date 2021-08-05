<template>
	<view>
		<view v-for="item in categorysList" class="area">
			<view class="area-name">
				{{item.label}}
			</view>
			<view class="pro-list">
				<view v-for="item1 in item.children" class="pro-name" @click="confirmPike({areaId:item.value,provinceId:item1.value})">
					<image class="pro-img" src="../../static/arrows/arrow-blue.png" mode=""></image>
					{{item1.label}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categorysList: []
			}
		},
		created() {
			this.getAreaList();
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
				})
			},
			confirmPike(item) {
				// console.log(item)
				uni.navigateTo({
					url: '../../pages/real_timeInfo/collegeList/collegeList?areaId='+item.areaId+'&provinceId='+item.provinceId
				})
			}
		}
	}
</script>

<style>
.area {
	width: 100vw;
	padding: 10rpx;
	margin: 20rpx 0;
}
.area-name {
	font-size: 35rpx;
	font-weight: 600;
	margin: 20rpx;
}
.pro-list {
	display: flex;
	flex-direction: row;
	flex-wrap:  wrap;
}
.pro-name {
	width: 40vw;
	height: 80rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10rpx 3vw;
	padding-left: 4vw;
	border-bottom: 1rpx solid rgb(223, 223, 223);
	background-image: linear-gradient(to right,rgb(216, 240, 241),rgb(215, 250, 250));
}
.pro-img {
	width: 20rpx;
	height: 20rpx;
	margin-right: 20rpx;
}
</style>
