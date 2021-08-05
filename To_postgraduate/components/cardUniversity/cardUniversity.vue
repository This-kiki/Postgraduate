<template>
	<view class="un-card">
		<image class="un-logo" :src="value.img" mode="left"></image>
		<!-- <view class="un-msg">
			{{value.name}}
		</view> -->
		<image class="un-toimg" src="../../static/icon/notest.png" mode="left"></image>
	</view>
</template>

<script>
	export default {
		name:"cardUniversity",
		props:["value"],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.un-card {
	height: 200rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #e6e6e6;
	margin: 10rpx 0;
	border: 1rpx solid #c6c6c6;
}
.un-logo {
	height: 70px;
	/* width: 70px; */
	border-radius: 100rpx;
	/* background-color: #3F536E; */
	margin-left: 50rpx;
}
.un-msg {
	width: 50%;
	font-size: 40rpx;
	font-weight: 600;
	color: #535353;
}
.un-toimg {
	width: 40rpx;
	height: 50rpx;
	margin-right: 30rpx;
}
</style>
