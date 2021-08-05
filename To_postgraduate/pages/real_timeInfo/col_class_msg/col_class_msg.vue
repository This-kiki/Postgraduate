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
				art_id: '',
				msg: ''
			}
		},
		onLoad(option) {
			this.art_id = option.id
			this.getReMsg()
		},
		methods: {
			getReMsg() {
				this.$api.getRecommendMsg({id: this.art_id}).then((res)=> {
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
