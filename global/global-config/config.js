import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vuex状态管理自动注册引入
let modules = {};
try {
	let requireVuexAll = require.context('@/global/vuex', true, /\.js$/) //内嵌所有模块
	requireVuexAll.keys().map(requireAllKey => {
		const requireAllName = requireAllKey.replace(/(.*\/)*([^.]+).*/ig, "$2")
		modules[requireAllName] = requireVuexAll(requireAllKey).default || requireVuexAll(requireAllKey)
	});
} catch (e) {
	//TODO handle the exception
}
//vuex模块
let store = new Vuex.Store({modules})
//引入js
try {
	let requireDnvueAll = require.context('./js', false, /\.js$/)
	requireDnvueAll.keys().map(requireAllKey => {
		const requireAllName = requireAllKey.replace(/(\.\/|\.js)/g, '')
		store[requireAllName] = requireDnvueAll(requireAllKey).default || requireDnvueAll(requireAllKey)
	});
} catch (e) {
	//TODO handle the exception
}
//引入common
try {
	let requireCommonAll = require.context('@/global/common', false, /\.js$/)
	requireCommonAll.keys().map(requireAllKey => {
		const requireAllName = requireAllKey.replace(/(\.\/|\.js)/g, '')
		if (Object.keys(store).indexOf(requireAllName) == -1) {
			store[requireAllName] = requireCommonAll(requireAllKey).default || requireCommonAll(requireAllKey);
		} else {
			store[requireAllName] = Object.assign(store[requireAllName], requireCommonAll(requireAllKey)
				.default || requireCommonAll(requireAllKey));
		}
	})
} catch (e) {
	//TODO handle the exception
}
//引入common api
try {
	let requireCommonAll = require.context('@/global/api', false, /\.js$/)
	requireCommonAll.keys().map(requireAllKey => {
		const requireAllName = requireAllKey.replace(/(\.\/|\.js)/g, '')
		if (Object.keys(store).indexOf(requireAllName) == -1) {
			store['api_'+requireAllName] = requireCommonAll(requireAllKey).default || requireCommonAll(requireAllKey);
		} else {
			store['api_'+requireAllName] = Object.assign(store['api_'+requireAllName], requireCommonAll(requireAllKey)
				.default || requireCommonAll(requireAllKey));
		}
	})
} catch (e) {
	//TODO handle the exception
}
console.log(store.api_example)
export default store;
