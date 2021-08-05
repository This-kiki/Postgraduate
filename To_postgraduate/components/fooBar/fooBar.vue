<template>
	<view
	:class="{'safe-bottom':bottomSafeArea > 30}"
	class="bottom">
		<view class="nav-box safe">
			<view class="nav-tab" :class="{'nav-tab-active':home===0}" @click="toIndex(0)">
				<view class="nav-icon">
					<image class="footbar-img" :src="home===0?'../../static/bar_icon/square.png':'../../static/bar_icon/square-n.png'" mode=""></image>
				</view>
				<view class="nav-text">
					广场
				</view>
			</view>
			<view class="nav-tab" :class="{'nav-tab-active':home==1}" @click="toIndex(1)">
				<view class="nav-icon" >
					<view class="circle">
						<image class="footbar-img" :src="home===1?'../../static/bar_icon/realInfo.png':'../../static/bar_icon/realInfo-n.png'" mode=""></image>
					</view>
				</view>
				<view class="nav-text">
					资讯
				</view>
			</view>
			<view class="nav-tab" :class="{'nav-tab-active':home==2}" @click="toIndex(2)">
				<view class="nav-icon" >
					<view class="circle">
						<image class="footbar-img" :src="home===2?'../../static/bar_icon/search.png':'../../static/bar_icon/search-n.png'" mode=""></image>
					</view>
				</view>
				<view class="nav-text">
					搜索
				</view>
			</view>
			<view class="nav-tab" :class="{'nav-tab-active':home==3}" @click="toIndex(3)">
				<view class="nav-icon" >
					<view class="circle">
						<image class="footbar-img" :src="home===3?'../../static/bar_icon/college.png':'../../static/bar_icon/college-n.png'" mode=""></image>
					</view>
				</view>
				<view class="nav-text">
					高校
				</view>
			</view>
			<view class="nav-tab" :class="{'nav-tab-active':home==4}" @click="toIndex(4)">
				<view class="nav-icon" >
					<view class="circle">
						<image class="footbar-img" :src="home===4?'../../static/bar_icon/mine.png':'../../static/bar_icon/mine-n.png'" mode=""></image>
					</view>
				</view>
				<view class="nav-text">
					我
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				home: 0,
				// 底部安全区，如底部操作栏
				bottomSafeArea:0,
			}
		},
		mounted() {
			// 底部操作提示条适配，
			// this.bottomSafeArea = this.$store.state.bottomSafeArea
			this.bottomSafeArea = 30
		},
		methods: {
			toPage(url) {
				uni.navigateTo({
					url
				})
			},
			toIndex(index) {
				this.$emit('toIndex', index)
				this.home = index
			}
		}
	}
</script>

<style scoped lang="scss">
	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: $navHeight*1.1;
		box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.06);
		background: rgba(255,255,255,0.94);
		z-index: 10;
	}
	.safe-bottom{
		height: $navHeight*1.4;
	}
	.nav-tab {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: all 0.2s;
		text-align: center;
		width: 100%;
		height: $navHeight*1.1;
		.red-dot{
			position: absolute;
			top:0.46rem;
			right: 1rem;
			background: red;
			border-radius: .46rem;
			width: .46rem;
			height: .46rem;
		}
	}
	.nav-icon {
		transition: all 0.2s;
		height: 22px;
		color: $mediumGrey;
		box-sizing:border-box;
		margin: 4px 0 2px;
	}
	
	.footbar-img{
		width: 22px;
		height: 22px;
	}
	.nav-icon .iconfont {
		font-size: 20px;
	}

	.nav-text {
		font-size: 11px;
		height: 18px;
		color: $mediumGrey;
		font-weight: 400;
	}

	.nav-tab-active .circle {
		// height: 32px;
		// width: 32px;
		// line-height: 32px;
		// position: relative;
		// top: -5px;
		// left: calc(50% - 16px);
		// border-radius: 50%;
		// background: #fff;
		// box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	}

	.nav-tab-active .iconfont {
		color: $dominantHue;
	}

	.nav-tab-active .nav-text{
		color: $dominantHue;
	}
	.nav-box{
		/* position: absolute; */
		display: flex;
		width: 100%;
		box-sizing:border-box;
	}

	/*苹果x适配 H5APP*/
	// @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
	// 	.bottom {
	// 		height: $navHeight + $navBoxHeight;
	// 	}
	// }

	// /*苹果xs适配 H5APP*/
	// @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
	// 	.bottom {
	// 		height: $navHeight + $navBoxHeight;
	// 	}
	// }

	// /*苹果xr适配 H5APP*/
	// @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
	// 	.bottom {
	// 		height: $navHeight + $navBoxHeight;
	// 	}
	// }
	
</style>