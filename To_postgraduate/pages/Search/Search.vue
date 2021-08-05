<template>
	<view>
		<zy-search :is-focus="false" :theme="themeClass" :show-want="true" 
		:hot-list="hotList" @getSearchText="getSearchText"></zy-search>
	</view>
</template>

<script>
	import zySearch from '../../components/zy-search/zy-search.vue'
	export default {
		components: {
			zySearch
		},
		data() {
			return {
				themeClass: 'circle',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['考研','分数线','优秀院校','校园文化']	//初始化推荐列表
			}
		},
		methods: {
			getSearchText(e) {
				console.log('10')
				uni.navigateTo({
					url: '../Search/searchPage/searchPage?val='+e
				})
			}
		},
	}
</script>

<style>
</style>
