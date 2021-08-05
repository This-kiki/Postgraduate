<template>
	<view>
		<view class="info-title" :style="'color:'+getColor()">
			{{value.title}}
		</view>
		<view v-for="val in value.content" class="info-card" @click="go(val.id)">
			<image class="info-arrow" :src="'../../static/arrows/'+getIcon()+'.png'" mode=""></image>
			<view class="info-content">
				{{val.content}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['value','index'],
		data() {
			return {
				
			}
		},
		methods: {
			go(id) {
				uni.navigateTo({
					url: '../../pages/real_timeInfo/col_class_msg/col_class_msg?id='+id
				})
			},
			getColor() {
				var t = this.index % 3
				if(t==0) {
					return 'rgb(1,206,217)'
				}else if(t==1) {
					return 'rgb(0,178,106)'
				}else {
					return 'rgb(255, 206, 26)'
				}
			},
			getIcon() {
				var t = this.index % 3
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
.info-title {
	font-size: 40rpx;
	font-weight: 600;
	margin: 50rpx 40rpx 30rpx;
	font-family: YouYuan;
}
</style>
