/**
 * 此文件为@dcloudio/webpack-uni-pages-loader的一个钩子入口，遵循CommonJs规范
 * 可以直接使用require引入其他依赖，但是不会有热重载的效果
 * hotRequire在被初始化之后，可以引入其他依赖，并且相关依赖具备热重载
 */

// 引入一个工具函数，用于对pages进行去重和设置首页
const {
	removeDuplicationAndSetIndexPage
} = require('./global/global-config/plug-in/pages-hot-modules/uniPagesUtilsCommon.js')

/**
 * 使用global是为了之后的模块不需要再去引入hotRequire
 * 更重要的是为了之后可以在客户端代码直接引入模块做准备
 */
global.hotRequire = require('./global/global-config/plug-in/pages-hot-modules/hotRequire.js')

/**
 * 输出最终的pages.json解析内容
 * @param pagesJson <Object> src/pages.json的文件解析内容（作为初始内容传入）
 * @param loader <Object> @dcloudio/webpack-uni-pages-loader会传入一个loader对象
 * @returns {Object} uni-app需要的pages.json配置内容
 */
function exportPagesConfig(pagesJson = {}, loader = {}) {
	// 初始化hotRequire（输入loader）
	hotRequire(loader)
	// pages的初始配置
	let basePages = []
	// subPackages的初始配置
	let baseSubPackages = []
	// 要输出的pages
	let pages = removeDuplicationAndSetIndexPage(
		[
			...basePages,
			...hotRequire('./global/pages/config.js')
		],
		// 设置首页路径
		'pages/welcome/welcome'
	)
  
	// 要输出的subPackages
	let subPackages = [
		...baseSubPackages,
		// 这里是分包加载的subPackages...

	]

	return {
		// 合并pages.json的初始内容
		...pagesJson,
		pages,
		subPackages
	}
}

module.exports = exportPagesConfig
