<template>
	<view class="m-body">
		<view class="m-input">
			<view class="msg-key">
				姓名
			</view>
			<input v-model="userInfo.nickname" class="msg-value" type="text" placeholder="输入真实姓名" />
		</view>
		<view class="m-input">
			<view class="msg-key">
				高校名称
			</view>
			<input v-model="userInfo.university" class="msg-value" type="text" placeholder="输入您所在的高校" />
		</view>
		<view class="m-input">
			<view class="msg-key">
				专业
			</view>
			<input v-model="userInfo.major" class="msg-value" type="text" placeholder="输入您的专业" />
		</view>
		<view class="m-input">
			<view class="msg-key">
				邮箱
			</view>
			<input v-model="userInfo.email" class="msg-value" type="text" placeholder="输入您的邮箱" />
		</view>
		<view class="m-input">
			<view class="msg-key">
				手机
			</view>
			<input v-model="userInfo.phone" class="msg-value" type="text" placeholder="输入您的手机号码" />
		</view>
		<view class="m-input">
			<view class="msg-key">
				QQ
			</view>
			<input v-model="userInfo.qq" class="msg-value" type="text" placeholder="输入您的QQ号码" />
		</view>
		<view class="m-input">
			<view class="msg-key">
				个人介绍
			</view>
			<textarea v-model="userInfo.content" class="msg-value_t" placeholder="介绍一下你自己吧" />
		</view>
		<view class="post-btn">
			<button type="primary" @click="postUserInfo()">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					identity: '',
					nickname: '',
					university: '',
					major: '',
					email: '',
					phone: '',
					wechat: '',
					content: '',
					qq: ''
				}
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				this.$api.userInfo().then((res)=> {
					this.userInfo = res.data.data
					// console.log(res.data.data)
				})
			},
			postUserInfo() {
				this.$api.postUserInfo(this.userInfo).then((res)=> {
					if(res.data.code==0){
						console.log('提交成功')
						uni.navigateBack({})
					}
				})
			}
		}
	}
</script>

<style>
.m-body {
	min-height: 100vh;
	background-color: rgb(244,245,246);
}
.m-input {
	padding: 20rpx 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.msg-key {
	padding-left: 3vw;
	margin-bottom: 15rpx;
	font-size: 30rpx;
	font-weight: 600;
}
.msg-value {
	padding-left: 3vw;
	height: 80rpx;
	width: 97vw;
	background-color: rgb(255,255,255);
}
.msg-value_t {
	padding-left: 3vw;
	height: 200rpx;
	width: 97vw;
	background-color: rgb(255,255,255);
}
.post-btn {
	margin: 10rpx 20rpx;
}
</style>
