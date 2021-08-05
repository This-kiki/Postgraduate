<template>
	<view class="body">
		<view class="col-head" @click="to_college_info()">
			<image class="col-logo" :src="schoolInfo.img" mode="aspectFit"></image>
			<!-- <view class="col-name">
				{{schoolInfo.name}}
			</view> -->
			<image class="col-toicon" src="../../../static/icon/notest.png" mode=""></image>
		</view>
		<view class="col-middle">
			<view class="col-tag" v-for="item in col_tags" @click="to_class(item.id)">
				<view class="col-tset">
					<image class="col-tagiconh" src="../../../static/icon/headImg.png" mode=""></image>
					{{item.label}}
				</view>
				<image class="col-tagicon" src="../../../static/icon/notest.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				col_tags: [
					{
						label:'招生简章',
						id: 0
					},
					{
						label:'专业目录',
						id: 1
					},
					{
						label:'考试大纲',
						id: 2
					},
					{
						label:'成绩查询',
						id: 3
					},
					{
						label:'分数线',
						id: 4
					},
					{
						label:'考研录取',
						id: 5
					},
					{
						label:'考研真题',
						id: 6
					},
					{
						label:'报录比',
						id: 7
					},
					{
						label:'在职硕士',
						id: 8
					},{
						label:'联系方式',
						id: 9
					},{
						label:'专业介绍',
						id: 10
					}
				],
				schoolId: '',
				schoolInfo: {}
			}
		},
		onLoad:function(option) {
			// this.schoolId = option.id
			this.schoolId = option.id
			this.schoolInfo = {
					name: option.name,
					img: option.img
			}
		},
		methods: {
			to_college_info() {
				uni.navigateTo({
					url: '../college_introduction/college_introduction?id='+this.schoolId
				})
			},
			to_class(classify) {
				uni.navigateTo({
					url: '../col_calss/col_calss?schoolId='+this.schoolId+'&classify='+classify
				})
			}
		}
	}
</script>

<style>
.body {
	min-height: 100vh;
	background-color: rgb(220, 220, 220);
}
.col-head {
	position: fixed;
	top: 0;
	z-index: 1;
	width: 100vw;
	height: 300rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items:center;
	background-color: rgb(255, 255, 255);
	box-shadow: 0px 0px 3px 1rpx #acacac;
}
.col-logo {
	height: 115rpx;
	/* width: 115rpx; */
	margin: 0 25rpx 0 50rpx;
	/* border-radius: 80rpx; */
}
.col-toicon {
	height: 35rpx;
	width: 35rpx;
	margin-right: 30rpx;
}
.col-name {
	width: 60%;
	font-size: 40rpx;
	font-weight: 600;
	font-family: YouYuan;
	color: rgb(99, 99, 99);
}
.col-middle {
	padding: 315rpx 0 50rpx ;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.col-tag {
	width: 88%;
	margin: 10rpx 0rpx;
	padding: 15rpx 30rpx;
	border-radius: 15rpx;
	background-color: rgb(255, 255, 255);
	border:  1rpx solid #c5c5c5;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.col-tset {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.col-tagiconh {
	margin: 0 20rpx 0 5rpx;
	width: 10rpx;
	height: 10rpx;
}
.col-tagicon {
	width: 20rpx;
	height: 20rpx;
}
</style>
