<template>
	<view>
		<view class="clsaa_msg" v-html="msg">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				getAPI:{},
				msg: ''
			}
		},
		onLoad(option) {
			this.getAPI.id = option.id
			this.getAPI.pageNum = option.pageNum
			this.getAPI.classify = option.classify
			this.getAPI.cid = option.cid
			this.getReMsg()
		},
		methods: {
			getReMsg() {
				this.$api.getCatelogMsg(this.getAPI).then((res)=> {
					this.msg = res.data.data
				})
			}
		}
	}
</script>

<style>
.clsaa_msg {
	padding: 30rpx 20rpx;
}
</style>
