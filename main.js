import Vue from 'vue'
import store from './store'
import App from './App'
import Json from './Json' //测试用数据
import $http from 'js_sdk/zhouWei-request/requestConfig';
import httpApi from './common/httpApi'
import HttpCache from './common/cache'
import orangeUtil from 'js_sdk/orange-util/orange-util.js'; //orange-util.js 所在文件目录
Vue.use(orangeUtil);
import QSPopup from '@/components/QS-popup/QS-popup.vue'
Vue.component('QSPopup', QSPopup)


// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
Vue.prototype.$SysCache = HttpCache
Vue.prototype.$store = store



import wechat from './common/wechat/wechat'
if (wechat.isWechat()) {
	Vue.prototype.$wechat = wechat;
}


/**
 *  因工具函数属于公司资产, 所以直接在Vue实例挂载几个常用的函数
 *  所有测试用数据均存放于根目录json.js
 *  
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type => {
	//模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}


Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {
	msg,
	json,
	prePage
};
Vue.prototype.$http = $http;
Vue.prototype.$httpApi = httpApi
Vue.config.devtools = true

App.mpType = 'app'


import wxsdk from '@/common/wechat/sdk'
Vue.prototype.$wxsdk = wxsdk;


const app = new Vue({
	...App
})
app.$mount()
