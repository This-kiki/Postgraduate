<template>
	<view>
		<web-view v-if="openid" :webview-styles="webviewStyles" :src="'https://gjwstudy.xyz/post/#/?openid='+openid+'&type=2'+'&postId='+postId+'&commentOpenid='+commentOpenid"></web-view>
	</view>
</template>

<script>
	export default {
		// props:["postId","commentOpenid"]
		data() {
			return {
				openid: '',
				postId: '',
				commentOpenid: ''
			}
		},
		methods: {
			
		},
		onLoad(option) {
			var _th = this
			uni.getStorage({
				key: 'openid',
				success: function (res) {
					_th.openid = res.data
				}
			})
			this.postId = option.postId
			this.commentOpenid = option.commentOpenid
		}
	}
</script>

<style>

</style>
