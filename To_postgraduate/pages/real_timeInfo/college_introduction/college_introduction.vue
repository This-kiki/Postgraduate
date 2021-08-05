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
				id: '',
				msg: ''
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getcollegeIntroduction()
		},
		methods: {
			getcollegeIntroduction() {
				this.$api.getCatelogintroduce(this.id).then((res)=> {
					this.msg = res.data.data.introduce
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
