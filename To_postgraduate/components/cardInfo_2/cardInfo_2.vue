<template>
	<view>
		<view v-for="val in value" class="info-card" @click="go(val.cid)">
			<image class="info-arrow" :src="'../../static/arrows/'+getIcon()+'.png'" mode=""></image>
			<view class="info-content">
				{{val.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['value','getAPI'],
		name:"cardInfo_2",
		data() {
			return {
				
			};
		},
		methods: {
			go(cid) {
				console.log(this.getAPI)
				uni.navigateTo({
					url: '../../../pages/real_timeInfo/col_class_msg2/col_class_msg2?id='+this.getAPI.id+'&pageNum='+this.getAPI.pageNum+'&classify='+this.getAPI.classify+'&cid='+cid
				})
			},
			getIcon() {
				var t = this.getAPI.classify % 3
				if(t==0) {
					return 'arrow-blue'
				}else if(t==1) {
					return 'arrow-green'
				}else {
					return 'arrow-yellow'
				}
			}
		}
	}
</script>

<style>
.info-card {
	background-color: rgb(255,255,255);
	min-height: 60rpx;
	margin: 20rpx 0 0rpx 20rpx;
	padding-bottom: 20rpx;
	border-bottom: 1rpx solid rgb(223, 223, 223);
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.info-arrow {
	width: 30rpx;
	height: 30rpx;
	margin-right: 15rpx;
}
.info-content {
	width: 90%;
	overflow: hidden;
	display: -webkit-box;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	white-space: normal;
}
</style>
