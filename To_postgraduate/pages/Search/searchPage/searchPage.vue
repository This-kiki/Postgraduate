<template>
	<view>
		<view class="sh-bar">
			<view class="search">
				<template>
					<input maxlength="20" focus type="text" value="" confirm-type="search" @confirm="searchMsg()" placeholder="请输入关键词搜索" v-model.trim="searchText"/>
				</template>
				<image src="../../../static/zy-search/search.svg" mode="aspectFit" @click="searchMsg()" class="search-icon"></image>
			</view>
		</view>
		<view class="sh-concent">
			<view class="sh-university" v-if="university.name" @click="go2(university)">
				<cardUniversity :value='university'></cardUniversity>
			</view>
			<view class="sh-article" v-for="item in posts" @click="go(item.id)">
				<cardPost :value='item'></cardPost>
			</view>
		</view>
	</view>
</template>

<script>
	import cardUniversity from '../../../components/cardUniversity/cardUniversity.vue'
	import cardPost from '../../../components/cardPost/cardPost.vue'
	export default {
		components:{
			cardUniversity
		},
		data() {
			return {
				searchText: '考研',
				university: {},
				posts: []
			}
		},
		onLoad(option) {
			this.searchText = option.val
			this.searchMsg()
		},
		methods: {
			go2(item) {
				uni.navigateTo({
					url: '../../real_timeInfo/collegesInfo/collegesInfo?id='+item.id+'&name='+item.name+'&img='+item.img
				})
			},
			go(id) {
				uni.navigateTo({
					url: '../../Square/postDetails/postDetails?id='+id
				})
			},
			searchMsg() {
				this.$api.searchMsg({key:this.searchText}).then((res)=> {
					this.university = res.data.data.university
					this.posts = res.data.data.posts
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.search{
	width: 640upx;
	margin: 30upx auto 0;
	position: relative;
	input{
		background-color: #F7F7F7;
		padding: 10upx 35upx;
		font-size: 28upx;
		border-radius: 50upx;
	}
	.voice-icon{
		width: 36upx;
		height: 36upx;
		padding: 16upx 20upx 16upx 0;
		position: absolute;
		left: 16upx;
		top: 4upx;
		z-index: 10;
	}
	.search-icon{
		width: 28upx;
		height: 28upx;
		padding: 16upx 20upx 16upx 0;
		position: absolute;
		right: 0;
		top: -2upx;
		z-index: 10;
	}
}
.sh-concent {
	min-height: 95vh;
	margin-top: 20rpx;
	background-color: #F8F8F8;
}
.sh-article {
	padding: 0px 16rpx;
}
</style>
