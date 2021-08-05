<template>
	<view class="body">
		<view class="me-falb" v-for="item in postList" @click="go(item.id)">
			<card-post :value='item'></card-post>
		</view>
	</view>
</template>

<script>
	import cardPost from '../../../components/cardPost/cardPost.vue'
	export default {
		components:{
			cardPost
		},
		data() {
			return {
				postList: []
			}
		},
		onLoad() {
			this.getPostList()
		},
		methods: {
			go(id) {
				uni.navigateTo({
					url: '../../../pages/Square/postDetails/postDetails?id='+id
				})
			},
			getPostList() {
				this.$api.Mefabulous().then((res)=>{
					this.postList = res.data.data
				})
			}
		}
	}
</script>

<style>
.body {
	min-height: 100vh;
	background-color: #F8F8F8;
}
.me-falb {
	padding: 0px 16rpx;
}
</style>
