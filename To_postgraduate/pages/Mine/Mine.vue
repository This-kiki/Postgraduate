<template>
	<view class="body">
		<view class="head">
			<open-data class="head-img" type="userAvatarUrl"></open-data>
			<view class="head-msg">
				<open-data class="nick-name" type="userNickName" lang="zh_CN"></open-data>
				<!-- <view >
				</view> -->
				<!-- <view class="account-number">
					账号
				</view> -->
			</view>
		</view>
		<view class="middle">
			<view class="middle-up">
				<view @tap="go('Mefabulous/Mefabulous')" class="middle-msg">
					<image class="tab-img" src="../../static/my_icon/my_fabulous.png" mode=""></image>
					<view class="tab-text">
						我赞过的
						<image class="tab-icon" src="../../static/icon/notest.png" mode=""></image>
					</view>
				</view>
				<view @tap="go('Meposted/Meposted')" class="middle-msg">
					<image class="tab-img" src="../../static/my_icon/my_release.png" mode=""></image>
					<view class="tab-text">
						我发布的
						<image class="tab-icon" src="../../static/icon/notest.png" mode=""></image>
					</view>
				</view>
				<!-- <view @tap="go('Mefollow/Mefollow')" class="middle-msg">
					<image class="tab-img" src="../../static/my_icon/my_fllow.png" mode=""></image>
					<view class="tab-text-bot">
						关注的人
						<image class="tab-icon" src="../../static/icon/notest.png" mode=""></image>
					</view>
				</view> -->
				<!-- <view @tap="go('followMe/followMe')" class="middle-msg">
					<image class="tab-img" src="../../static/my_icon/my_fans.png" mode=""></image>
					<view class="tab-text-bot">
						我的粉丝
						<image class="tab-icon" src="../../static/icon/notest.png" mode=""></image>
					</view>
				</view> -->
			</view>
			<view class="middle-down">
				<view @tap="go('personalInfo/personalInfo')" class="middle-msg">
					<image class="tab-img" src="../../static/my_icon/my_message.png" mode=""></image>
					<view class="tab-text-bot">
						个人信息
						<image class="tab-icon" src="../../static/icon/notest.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			go(path) {
				uni.navigateTo({
					url: '../../pages/Mine/'+path
				})
			}
		}
	}
</script>

<style>
.body {
	height: 100vh;
	background-color: rgb(248,248,248);
	/* background-color: rgb(132, 248, 100); */
}
.head {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: auto;
	height: 400rpx;
	padding: 0 50rpx;
	background-color: rgb(1,206,217);
}
.head-img {
	height: 100rpx;
	width: 100rpx;
}
.head-msg {
	margin-left: 40rpx;
}
.nick-name {
	margin-bottom: 15rpx;
	font-size: 32rpx;
	font-weight: 600;
}
.account-number {
	margin-top: 15rpx;
	font-size: 20rpx;
	color: rgb(224,224,224);
}
.middle {
	/* margin: 0 15rpx; */
	/* padding: 10rpx 0 20rpx 0; */
	/* background-color: rgb(255,255,255); */
	/* border-radius: 25rpx; */
	position: relative;
	top: -60rpx;
}
.middle-up {
	background-color: rgb(255,255,255);
	border-radius: 25rpx;
	margin: 15rpx;
	padding: 10rpx 0;
}
.middle-down {
	background-color: rgb(255,255,255);
	border-radius: 25rpx;
	margin: 25rpx 15rpx;
	padding: 5rpx 0;
}
.middle-msg {
	width: 100%;
	/* background-color: rgb(255,255,255); */
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.tab-img {
	margin: 0 25rpx;
	width: 38rpx;
	height: 38rpx;
}
.tab-icon {
	width: 25rpx;
	height: 25rpx;
	margin-right: 30rpx;
}
.tab-text {
	width: 90%;
	padding: 30rpx 0rpx;
	border-bottom: solid;
	border-color: rgb(248,248,248);
	border-width: 3rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.tab-text-bot {
	width: 90%;
	padding: 25rpx 0rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
