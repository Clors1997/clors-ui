import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vuex状态管理自动注册引入
const modulesFiles = require.context('@/global/vuex', true, /\.js$/) //内嵌所有模块
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	const moduleName = modulePath.replace(/(.*\/)*([^.]+).*/ig,"$2");
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {}) //模块注册

export default new Vuex.Store({
	modules
})