<template>
	<view class="body">
		<web-view v-if="openid" :webview-styles="webviewStyles" :src="'https://gjwstudy.xyz/post/#/?openid='+openid+'&type=1'" bindmessage="handleGetMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openid: '',
			}
		},
		onLoad() {
			var _th = this
			uni.getStorage({
				key: 'openid',
				success: function (res) {
					_th.openid = res.data
				}
			})
		},
		methods: {
			handleGetMessage: function(e) {
				console.log('aaaaa')
			    console.log(e.target.data)
			},
			post() {
				this.$api.postPost(this.postAPI).then((res)=> {
					if(res.data.code==0){
						console.log('发布成功')
						uni.navigateBack({})
					}
				})
			}
		}
	}
</script>

<style>
/* .body {
	min-height: 100vh;
	background-color: rgb(244,245,246);
}
.ps-text {
	padding: 20rpx 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.ps-in-title {
	padding-left: 3vw;
	height: 80rpx;
	width: 97vw;
	background-color: rgb(255,255,255);
}
.ps-in-concent {
	padding: 3vw;
	height: 270rpx;
	width: 97vw;
	background-color: rgb(255,255,255);
}
.ps-btn {
	margin: 10rpx 20rpx;
} */
</style>
