<template>
	<view class="lo-body">
		<image class="login-logo" src="../../static/logo.jpg" mode=""></image>
		<!-- <view class="">
			{{test}}
		</view> -->
	</view>
</template>

<script>
import store from '../../store/index.js'
export default {
	data() {
		return {
			test: 'aaa',
			token: "",
			SessionKey: "",
			OpenId: "",
			nickName: null,
			avatarUrl: null,
			isCanUse: uni.getStorageSync("isCanUse") || true,
		};
	},
	methods: {
		login() {
			let _this = this;
			uni.login({
				provider: "weixin",
				success: function (loginRes) {
					let code = loginRes.code;
					// console.log('code',code)
					// code='003AcmFa1rMp5B0FYCGa1fXs1a2AcmFt'
					// 跳转到首页
					_this.$api.post(code).then(res => {
						// console.log('then_res',res.data)
						uni.setStorage({
							key: 'openid',
							data: res.data.data.openid
						})
						store.commit('setOpenid',res.data.data.openid)
						uni.redirectTo({
							url: '../index/index'
						})
					}).catch(err => {
						console.log("错误信息",err)
					});
				},
			});
		},
	},
	onLoad() {
		this.login();
	},
};
</script>

<style>
.lo-body {
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.login-logo {
	height: 250rpx;
	width: 250rpx;
	border-radius: 20rpx;
	margin-bottom: 300rpx;
}
</style>
