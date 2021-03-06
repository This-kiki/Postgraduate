import Vue from "vue" //引入vue
import Vuex from "vuex" // 引入vuex
Vue.use(Vuex) // 让vue使用vuex
// 通过vuex构造函数创建store对象
const store = new Vuex.Store({  
    state: {
		service: {},
		openid: ''
    },
    mutations: {
		setToken(state, token) {
			console.log('getToken')
			state.token = token
		},
		setOpenid(state, openid) {
			console.log('Openid:',openid)
			state.openid = openid
			state.service = {
				baseURL: 'https://news.wustlinghang.cn/newsapi/',
				timeout: 5000,
				headers: {
					openid: openid
				}
			}
		}
    },
	getters:{
		// 获得token
	}
}) 
export default store //导出store对象