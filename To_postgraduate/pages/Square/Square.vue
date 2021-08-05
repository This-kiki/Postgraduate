<template>
  <view>
    <load-refresh ref="loadRefresh" :isRefresh="true" refreshType="hollowDots" color="#04C4C4" heightReduce="100" backgroundCover="#F3F5F5" :currentPage="currentPage" :totalPages="totalPages" @loadMore="loadMore" @refresh="refresh">
      <view slot="content-list" class="page">
        <view v-for="(item,index) in postList" :key="index" @click="go(item.id)">
          <CardPost :value='item'></CardPost>
        </view>
      </view>
    </load-refresh>
	<image @click="post()" class="write" src="../../static/icon/post.png" mode=""></image>
  </view>
</template>

<script>
import CardPost from '@/components/cardPost/cardPost'
import loadRefresh from '@/components/load-refresh/load-refresh.vue'
export default {
  components: {
    CardPost,
    loadRefresh,
  },
  data() {
    return {
      currentPage: 1,
	  totalPages: 10,
      postList: [],
    }
  },
  created() {
    this.getPostList()
  },
  methods: {
	post() {
		uni.navigateTo({
			url: '../../pages/Square/Posts/Posts'
		})
	},
	go(id) {
		uni.navigateTo({
			url: '../../pages/Square/postDetails/postDetails?id='+id
		})
	},
    getPostList() {
      this.$api.getPostList({pageNum: this.currentPage}).then((res) => {
		  // this.totalPages = res.data.num
		this.totalPages = res.data.data.totalPage
		if(res.data.data.posts.length!=0){
			for(var i=0;i<res.data.data.posts.length;i++){
				this.postList.push(res.data.data.posts[i])
			}
			this.currentPage++;
		}else{
			console.log('没有啦')
		}
      })
    },
    refresh() {
      setTimeout(() => {
        console.log('refersh')
		this.currentPage = 1
		this.postList = []
		this.getPostList()
        this.$refs.loadRefresh.completed()
      }, 1000)
    },
    loadMore() {
      // setTimeout(() => {
        console.log('loadMore')
		this.getPostList()
        this.$refs.loadRefresh.completed()
      // }, 1000)
    },
  },
}
</script>

<style>
.page {
  padding: 0px 16rpx;
}
.write {
  position: fixed;
  bottom: 300rpx;
  right: 80rpx;
  z-index: 1;
  width: 80rpx;
  height: 80rpx;
  border-radius: 100rpx;
  padding: 10rpx;
  background-color: #cacaca;
}
</style>
