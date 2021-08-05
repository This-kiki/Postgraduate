<template>
	<view class="card">
		<view class="h_m">
			<image class="head-img" src="../../static/logo.png" mode=""></image>
			<view class="middle">
				<view class="name">
					张张张立辛
				</view>
				<view class="college">
					武汉科技大学
				</view>
			</view>
		</view>
		<view class="tile" v-if="isfllow">
			<image class="fllow-icon" src="../../static/icon/fllow.png" mode=""></image>
			已关注
		</view>
		<view class="tile-n" v-if="!isfllow">
			<image class="fllow-icon-n" src="../../static/icon/unfllow.png" mode=""></image>
			关注
		</view>
	</view>
</template>

<script>
	export default {
		props:["value"],
		data() {
			return {
				isfllow: false
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.card {
	font-family: YouYuan;
	width: 100%;
	height: 120rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.1rpx inset rgb(233,233,233);
}
.h_m {
	display: flex;
}
.head-img {
	margin: 0 20rpx;
	height: 90rpx;
	width: 90rpx;
	border-radius: 50rpx;
}
.middle {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.name {
	font-size: 25rpx;
	font-weight: 600;
	color: rgb(224,103,30);
}
.college {
	color: rgb(150, 150, 150);
	font-size: 20rpx;
	margin-top: 15rpx;
}
.tile {
	display: flex;
	align-items: center;
	border-radius: 40rpx;
	padding: 5rpx 12rpx;
	border: 1px solid rgb(213, 213, 213);
	font-size: 22rpx;
	margin-right: 20rpx;
	color: rgb(110,110,110);
}
.tile-n {
	display: flex;
	align-items: center;
	border-radius: 40rpx;
	padding: 10rpx 15rpx;
	border: 1px solid rgb(224,103,30);
	font-size: 22rpx;
	margin-right: 20rpx;
	color: rgb(224,103,30);
}
.fllow-icon {
	height: 32rpx;
	width: 32rpx;
}
.fllow-icon-n {
	height: 20rpx;
	width: 20rpx;
	margin-right: 5rpx;
}
</style>
