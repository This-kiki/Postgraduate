import {
	flyio,
	url
} from './config.js';
// var {platform} = require('../config/index')
//公共链接
//接口列表
export class Api {
	tempLogin = async () => {
		return await new Promise((resolve, reject) => {
			uni.login({
				success(res) {
					if (res.code) {
						resolve(res.code)
					}
				}
			})
		})
	}
	post = async (code) => {
		let res = await flyio.post("user/getOpenid", {'code':code})
		// console.log("data:",data)
		return res;
	}
	
	// 获取地区省份
	getAreaList = async () => {
		let res = await flyio.get("school/areaList")
		return res
	}
	
	// 获取帖子列表
	getPostList = async (data) => {
		let res = await flyio.get("post/list",data)
		return res
	}
	
	// 点赞帖子
	fabPost = async (data) => {
		let res = await flyio.get("post/like",data)
		return res
	}
	
	// 浏览帖子
	viewPost = async (data) => {
		let res = await flyio.get("post/look",data)
		return res
	}
	
	// 点赞帖子
	likePost = async (data) => {
		let res = await flyio.get("post/like/"+data)
		return res
	}
	
	// 获取帖子的评论列表
	reviewPost = async (data) => {
		let res = await flyio.get("comment/list/"+data)
		return res
	}
	
	// 获取推荐列表
	getRecommend = async () => {
		let res = await flyio.get("reco/list")
		return res
	}
	
	// 获取推荐详情
	getRecommendMsg = async (data) =>{ 
		let res = await flyio.get("reco/detail",data)
		return res
	}
	
	// 获取高校列表
	check_school = async (data) => {
		let res = await flyio.get("school/list",data)
		return res
	}
	
	// 获取某分类下面的文章
	getCatelog = async (data) => {
		let res = await flyio.get("school/catalog",data)
		return res
	}
	
	// 获取某分类下面的文章的详情
	getCatelogMsg = async (data) => {
		let res = await flyio.get("school/detail",data)
		return res
	}
	
	// 查询学校简介
	getCatelogintroduce = async (data) => {
		let res = await flyio.get("school/introduce/"+data)
		return res
	}
	
	// 搜索
	searchMsg = async (data) => {
		let res = await flyio.get("search",data)
		return res
	}
	
	// 获取某人关注情况
	Mefollow = async () => {
		let res = await flyio.get("user/getAtt")
		return res
	}
	
	// 获取某人点赞
	Mefabulous = async () => {
		let res = await flyio.get("user/like")
		return res
	}
	
	// 获取某人发布的帖子
	Mepost = async () => {
		let res = await flyio.get("user/pub")
		return res
	}
	
	// 获取用户信息
	userInfo = async () => {
		let res = await flyio.get("user/get")
		return res
	}
	
	// 获取用户信息
	userInfo = async () => {
		let res = await flyio.get("user/get")
		return res
	}
	
	// 更新用户信息
	postUserInfo = async (data) => {
		let res = await flyio.post("user/update",data)
		return res;
	}
	
	// 发布帖子
	postPost = async (data) => {
		let res = await flyio.post("post/save",data)
		return res;
	}
}



export default new Api();
