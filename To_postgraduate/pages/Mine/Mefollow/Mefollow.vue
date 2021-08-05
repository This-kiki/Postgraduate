<template>
	<view>
		<view class="user-list" v-for="item in userList">
			<CardUser :value='item'></CardUser>
		</view>
	</view>
</template>

<script>
	import CardUser from '../../../components/cardUser/cardUser.vue'
	export default {
		components:{
			CardUser
		},
		data() {
			return {
				userList: []
			}
		},
		onLoad() {
			this.getMefollow()
		},
		methods: {
			getMefollow() {
				this.$api.Mefollow().then((res)=> {
					this.userList = res.data.data
				})
			}
		}
	}
</script>

<style>

</style>
