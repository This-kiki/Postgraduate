<template>
  <view>
    <view class="card">
      <view class="po-head">
        <img class="headIcon" src="../../static/icon/headImg.png" alt="">
        <view class="headMsg">
          <!-- <view class="type">.</view> -->
        </view>
      </view>
      <view class="middle-c">
        <view class="meddleText">
          <view class="title">{{value.title}}</view>
          <view class="po-conent">{{value.content}}</view>
        </view>
        <!-- <view class="Fatherimg" v-if="value.covers.length != 0">
          <img class="middleImg" :src="value.covers[0]" alt="">
        </view> -->
      </view>
      <view class="tile">
        <view class="date">{{formatMsgTime(value.createTime)}}</view>
        <!-- <view class="date">{{formatMsgTime(value.createTime)}}</view> -->
        <view class="author">浏览 &nbsp; {{value.lookNum}}</view>
      </view>
    </view>
  </view>
</template>

<script>
	export default {
		props: ['value'],
		data() {
			return {
				
			}
		},
		methods: {
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
			}
		}
	}
</script>

<style>
.card {
  position: relative;
  width: 111%;
  left: -5.5%;
  background-color: white;
  border-radius: 15px;
  padding: 8px 0;
  margin: 0 0 -3px 0;
  transform: scale(0.9);
}
.po-head {
  margin: 0px 25px 5px 10px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.headIcon {
  margin-top: 4px;
  height: 18px;
  width: 6px;
}
.headMsg {
  margin-left: 9px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.type {
  font-size: 15.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.middle-c {
  margin: 5px 25px 5px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.meddleText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
}
.title {
  font-size: 14px;
  margin: 2px 0;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.po-conent {width: 90%;
  font-size: 13.5px;
  margin: 2px 0 10px 0;
  color: rgb(155, 155, 155);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.tile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  color: rgb(155, 155, 155);
  font-size: 13px;
  margin: 0px 25px 5px 25px;
}
.Fatherimg {
  width: 38vw;
  height: 20vw;
  margin-left: 5px;
}
.middleImg {
  width: 38vw;
  height: 20vw;
  object-fit: cover;
  border-radius: 8px;
}
</style>
