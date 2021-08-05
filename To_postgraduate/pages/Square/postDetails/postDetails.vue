<template>
  <view style="font-family: YouYuan;">
    <view class="pd-title">
    	{{post.title}}
    </view>
	<view class="pd-writer">
		<image class="head-i" src="../../../static/head1.jpg" mode=""></image>
		<view class="pow-writer">
			<view class="po-nikename">
				{{post.nickname}}
			</view>
			<view class="pd-posytime">
				{{post.createTime}}
			</view>
		</view>
		<image class="pow-like" :src="islike?'../../../static/icon/like.png':'../../../static/icon/like_un.jpg'" mode="" @click="like"></image>
		<!-- <image class="pow-like" src="../../../static/icon/like.png" mode=""></image> -->
	</view>
	<view v-html="post.content" class="pd-concent"></view>
	<image v-if="post.img" class="po-img" :src="post.img" mode=""></image>
	<view class="po-review">
		<view v-for="(item,index) in reviewList" class="review-card">
			<view class="rw-head">
				<view class="rw-writer">
					<image class="rw-head-img" src="../../../static/icon/headImg.png" mode=""></image>
					{{item.commentName}}
				</view>
				<view class="rw-time">
					{{formatMsgTime(item.createTime)}}
				</view>
			</view>
			<view class="rw-concent">
				{{item.content}}
				<!-- 本以为是广告，抱着试一试的心态，结果效果真的很好 -->
			</view>
		</view>
	</view>
	<image @click="topost()" class="write" src="../../../static/icon/review.png" mode=""></image>
  </view>
</template>

<script>
// import review from '../review/review.vue'
export default {
 //  components:{
	// review
 //  },
  data() {
    return {
      postId: '',
      post: {},
	  islike: false,
	  reviewList: [],
    }
  },
  watch: {
    postId(val, oldval) {
      this.$api.getPostList({ 'postId': val }).then((res) => {
        this.post = res.data.data.posts[0]
		this.islike = res.data.data.posts[0].isLike
		this.post.createTime=this.post.createTime.slice(0,10)
        // console.log(this.post)
      })
	  this.$api.reviewPost(val).then((res)=> {
		// console.log(res.data)
		this.reviewList = res.data.data
	  })
    },
  },
  onLoad: function (option) {
    // console.log(option.id)
    this.postId = option.id
  },
  methods: {
	  topost() {
	  	uni.navigateTo({
	  		url: '../review/review?postId='+this.postId+'&commentOpenid='+this.post.wechatOpenid
	  	})
	  },
	  like() {
		  this.$api.likePost(this.postId).then((res)=>{
			  this.islike = !this.islike
		  })
	  },
	  // 处理时间-几分钟前
	  formatMsgTime(timespan) {
	  	var dateTime = new Date(timespan) // 将传进来的字符串或者毫秒转为标准时间
	  	var year = dateTime.getFullYear()
	  	var month = dateTime.getMonth() + 1
	  	var day = dateTime.getDate()
	  	// var hour = dateTime.getHours()
	  	// var minute = dateTime.getMinutes()
	  	// var second = dateTime.getSeconds()
	  	var millisecond = dateTime.getTime() // 将当前编辑的时间转换为毫秒
	  	var now = new Date() // 获取本机当前的时间
	  	var nowNew = now.getTime() // 将本机的时间转换为毫秒
	  	var milliseconds = 0
	  	var timeSpanStr
	  	milliseconds = nowNew - millisecond
	  	if (milliseconds <= 1000 * 60 * 1) {
	  	// 小于一分钟展示为刚刚
	  		timeSpanStr = '刚刚'
	  	} else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
	  	// 大于一分钟小于一小时展示为分钟
	  		timeSpanStr = Math.round(milliseconds / (1000 * 60)) + ' 分钟前'
	  	} else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
	  	// 大于一小时小于一天展示为小时
	  		timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + ' 小时前'
	  	} else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
	  	// 大于一天小于十五天展示位天
	  		timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + ' 天前'
	  	} else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
	  		timeSpanStr = month + '-' + day
	  	} else {
	  		timeSpanStr = year + '-' + month + '-' + day
	  	}
	  	return timeSpanStr
	  },
  },
}
</script>

<style>
.pd-title {
	padding: 20rpx 30rpx;
	font-size: 32rpx;
	font-weight: 600;
}
.pd-writer {
	padding: 10px 80rpx;
	height: 80rpx;
	border-bottom: 1rpx solid #d8d8d8;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.head-i {
	height: 60rpx; 
	width: 60rpx;
	border-radius: 20rpx;
}
.pow-writer {
	width: 60vw;
}
.po-nikename {
	font-size: 20rpx;
	color: #585858;
}
.pd-posytime {
	font-size: 18rpx;
	color: #acacac;
}
.pd-concent {
	padding: 50rpx 40rpx;
	line-height: 50rpx;
	border-bottom: 1rpx solid #d8d8d8;
}
.pow-like {
	width: 35rpx;
	height: 35rpx;
}
.po-review {
	padding: 10rpx 40rpx;
}
.rw-head {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0;
}
.rw-head-img {
	width: 10rpx;
	height: 10rpx;
	margin-right: 15rpx;
}
.review-card {
	display: flex;
	flex-direction: column;
	margin-bottom: 10rpx;
}
.rw-writer {
	font-size: 24rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.rw-time {
	font-size: 20rpx;
	color: #b1b1b1;
}
.rw-concent {
	padding-left: 25rpx;
	font-size: 22rpx;
	color: #505050;
	padding-bottom: 10rpx;
	border-bottom: 1rpx solid #f1f1f1;
}
.write {
  position: fixed;
  bottom: 300rpx;
  right: 80rpx;
  z-index: 1;
  width: 40rpx;
  height: 40rpx;
  border-radius: 100rpx;
  padding: 25rpx;
  background-color: #cacaca;
}
.po-img {
	margin: 2vw;
	width: 95vw;
}
</style>
